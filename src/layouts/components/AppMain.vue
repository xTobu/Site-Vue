<template>
    <section class="app-main">
        <transition name="fade" mode="out-in">           
            <keep-alive >                          
                <router-view></router-view>
            </keep-alive>
        </transition>
    </section>
</template>

<script>
export default {
	name: 'AppMain',
	computed: {
		// cachedViews() {
		//   return this.$store.state.tagsView.cachedViews
		// }
		// key() {
		//   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
		// }
	},
};
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .125s
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active in <2.1.8 */

  {
    opacity: 0
  }
</style>