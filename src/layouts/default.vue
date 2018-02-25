<template>
<div class="app-wrapper" >    
    <SideBar></SideBar>
	
	<div class="main-container">
        <NavBar></NavBar>
		<AppMain></AppMain>
        <!-- <RightArea></RightArea> -->
	</div>
</div>


</template>

<script>
import { AppMain, SideBar,NavBar,RightArea } from './components'
export default {
  name: 'layout',
  components: {
    AppMain,
    SideBar,
    NavBar,
    RightArea
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
