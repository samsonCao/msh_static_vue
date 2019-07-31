import axios from 'axios';
import Router from 'vue-router'
import md5 from 'blueimp-md5';
// import { Toast, Modal } from 'antd-mobile';
import { getAccessToken } from './utils';
import { secretKey } from './config';
import _ from 'lodash'

// axios.defaults.baseURL = 'https://api.douban.com/v2/movie'

/**
 * 按照字典序排序
 * @param {object} object
 */
function sortByKey(object) {
  var sortedObj = {},
    keys = _.keys(object);

  keys = _.sortBy(keys, function(key) {
    return key;
  });

  _.each(keys, function(key) {
    // 过滤掉undefined值
    if (object[key] !== undefined) {
      if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
        sortedObj[key] = sortByKey(object[key]);
      } else {
        sortedObj[key] = object[key];
      }
    }
  });

  return sortedObj;
}

/**
 * 计算sign签名
 * @param params
 */
const calcSign = params => {
  params = params ? _.omit(params, ['sign']) : {};
  const signs = [];
  const sortedParams = sortByKey(params);
  for (const key in sortedParams) {
    signs.push(`${key}=${JSON.stringify(sortedParams[key])}`);
  }
  return md5(secretKey + signs.join('&'));
};

/**
 * 基于 fetch 封装的异步请求, 自动提示错误
 * @param {object} options 请求参数
 * @returns {Promise}
 */
function request(options) {
  options = _.cloneDeep(options);
  const { url, silence = false, withToken = true, ...rest } = options;
  let headers = options.headers || {};
  let data = options.data || {};
  let method = options.method ? options.method.toUpperCase() : 'GET';
  let params = options.params || {};

  // 默认使用 json
  const defaultContentType = 'application/json;charset=UTF-8';
  headers['Content-Type'] = headers['Content-Type'] || defaultContentType;

  // 动态决定是否携带token
  if (withToken) {
    const accessToken = getAccessToken();
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }
  }

  const _options = {
    url,
    method,
    headers,
    ...rest,
  };

  // 添加sign签名
  if (method === 'POST' || method === 'PUT') {
    if (!(data instanceof FormData)) {
      data.sign = calcSign(data);
    }
    _options.data = data;
  }
  if (method === 'GET' || method === 'DELETE') {
    const urlWithoutParams = url.split('?')[0];
    params.sign = md5(secretKey + urlWithoutParams);
    _options.params = params;
  }

  const defaultErrorMsg = '未知错误, 请重试';

  return new Promise((resolve, reject) => {
    axios(_options)
      .then(res => res.data)
      .then(res => {
        res = res || {};

        // 不作处理, 直接返回res
        if (silence) {
          resolve(res);
          return;
        }

        // 正常请求
        if (res.code === 200) {
          resolve(res);
          return;
        }

        // 正常请求, 但是没数据
        if (res.code === 406) {
          // Toast.warning(res.message || defaultErrorMsg);
          reject(res);
          return;
        }

        // 请求异常, 统一报错
        // Modal.destroyAll();
        // Modal.error({
        //   title: res.message || defaultErrorMsg,
        // });
        reject(res);
      })
      .catch(err => {
        const { status } = err.response;

        // 网络请求超时
        if (status === 504) {
          Router.push('/ErrorPage/504');
          return;
          // window.location.href = '/#/ErrorPage/504';
          // return;
        }

        // 未登录
        if (status === 401) {
          // Modal.destroyAll();
          // Modal.error({
          //   title: '登录状态失效, 请重新登录',
          //   onOk: () => {
          //     window.location.href = '/#/login';
          //   },
          // });
          return;
        }

        // 跳转到报错页面
        window.location.href = '/#/ErrorPage/500';
        reject(err);
      });
  });
}

export default request;

