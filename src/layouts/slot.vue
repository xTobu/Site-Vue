<template>
<div id="slot">
    <h1>{{msg}}</h1>
	 <img src="../assets/logo.png">
   <!-- 轉跳後所載入的 component 最後會顯示在此 -->
   <ul>
	   <li><router-link :to="{path: '/slot/'}">Index</router-link></li>
	    <li><router-link :to="{path: '/slot/post'}">Post</router-link></li>
	   <li><router-link :to="{path: '/slot/about'}">About</router-link></li>
	   <li><router-link :to="{path: '/slot/count'}">Count</router-link></li>
   </ul>  
    
    <hr>
   
   <slot/>
</div>


</template>

<script>
export default {
	name: 'LayoutDefault',
	data() {
		return {
			msg: 'Slot with layouts',
		};
	},
};
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
ul {
	list-style: none;
	width: 25%;
	margin: 0 auto;
	padding: 0;
}
li {
	width: 20%;
	display: inline-block;
}
img.logo {
	width: 100px;
}
</style>
