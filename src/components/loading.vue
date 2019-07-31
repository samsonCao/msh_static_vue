<template>
  <div class="loading">
    <img
      src="../assets/loading.gif"
      alt=""
    ><span>{{ loadingWord }}</span>
  </div>
</template>

<script>
export default {
    name: 'Loading',
    props:{
    	loadingWord:{
    		type:String
    	}
    } ,
    data () {
        return {

    	};
  	}
};
</script>

<style lang="css" scoped>
 	@import '../assets/css/reset.css';
	.loading{
		text-align: center;
		z-index: 100;
		width: 100%;
		height:1rem;
		line-height: 1rem;
	}
  img{
    margin: 0 auto;
    width: 0.65rem;
    height: 0.65rem;
    vertical-align: middle;
  }
  span{
    vertical-align: middle;
    margin-left: 0.14rem;
  @include font-size: 14px
  }
</style>
