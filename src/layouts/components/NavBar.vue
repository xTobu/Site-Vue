<template>
  <div class="navbar">
      <div class="navbar-left">
        <a>{{ $route.name }}</a>
      </div>
      <div class="navbar-right">
          Right Place
      </div>
  </div>
</template>
<script>
export default {
	name: 'NavBar',
};
</script>
<style>
.navbar-left {
	float: left;
	padding: 25px;
	min-width: 75%;
}

.navbar-right {
	float: left;
	padding: 25px;
}
.navbar a {
	font-weight: 600;
	font-size: 20px;
	color: #777;
}
</style>

