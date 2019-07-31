import Cookies from 'js-cookie';
/**
 * 设置 access_token
 * @param token
 * @param remember
 */
/**
 * 存储在 Cookie 中的用户 token 名称
 */
const TOKEN_NAME = 'access_token';

export const setAccessToken = (token, remember) => {
  window.sessionStorage.removeItem(TOKEN_NAME);
  Cookies.remove(TOKEN_NAME);
  // 保存 access_token
  if (remember) {
    Cookies.set(TOKEN_NAME, token, { expires: 7 });
  } else {
    window.sessionStorage.setItem(TOKEN_NAME, token);
  }
};

/**
 * 获取用户的token
 * @returns {string}
 */
export const getAccessToken = () => {
  let sessionToken = '';
  let cookieToken = '';
  try {
    sessionToken = window.sessionStorage.getItem(TOKEN_NAME);
    cookieToken = Cookies.get(TOKEN_NAME);
  } catch (e) {
    // pass
  }
  return sessionToken || cookieToken;
};

/**
 * 遍历 list 数组, 获取指定 value 对应的 label
 *
 * @param list, {array}, 常见于枚举值
 * @param value, {any}, value 值
 * @param label, {string}, 指定键的名称
 * @returns {string}, label 值
 */
export const getLabelByValue = (list, value, label = 'label') => {
  list = list || [];
  const mapList = list.map(item => [item.value, item[label]]);
  const map = new Map(mapList);
  return map.get(value);
};
