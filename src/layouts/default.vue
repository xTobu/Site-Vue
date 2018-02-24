<template>
<div class="app-wrapper" >
     <h1>Layout</h1>
    <h1>app-wrapper</h1>
    <hr>
	<!-- <sidebar class="sidebar-container"></sidebar> -->
	<div class="main-container">
        <h2>main-container</h2>
		<!-- <navbar></navbar>
		<tags-view></tags-view> -->
        <hr>
		<AppMain></AppMain>
	</div>
</div>


</template>

<script>
import { AppMain } from './components'
export default {
  name: 'layout',
  components: {
    AppMain
  },
  computed: {
    // sidebar() {
    //   return this.$store.state.app.sidebar
    // }
  }
}
</script>


<style lang="scss">

</style>
