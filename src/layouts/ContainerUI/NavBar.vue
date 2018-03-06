<template>
  <div class="navbar">
      <div class="navbar-left">
        <a>{{ $route.name }}</a>
      </div>
      <div class="navbar-right">
           <el-button type="danger" plain @click="logout()">Logout</el-button>
      </div>
  </div>
</template>
<script>
export default {
	name: 'NavBar',
	methods: {
		logout() {
      this.$store.state.auth.token = false;
      this.$router.push({ path: "Login"})
			//console.log(this.$store.state.auth.token);
		},
	},
};
</script>


