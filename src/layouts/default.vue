<template>
<div class="app-wrapper" >    
    <SideBar></SideBar>
	
	<div class="main-container">
        <NavBar></NavBar>
		<AppMain></AppMain>
	</div>
</div>


</template>

<script>
import { AppMain, SideBar,NavBar } from './components'
export default {
  name: 'layout',
  components: {
    AppMain,
    SideBar,
    NavBar
  },
  computed: {
    // sidebar() {
    //   return this.$store.state.app.sidebar
    // }
  }
}
</script>


<style lang="scss">
@import "../assets/scss/style.scss";
</style>
