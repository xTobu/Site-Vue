<template>
<LayoutsDefault>    
    <div class="about">
    <h1>{{ msg }}</h1>
	<router-view></router-view>
    </div>
</LayoutsDefault>

</template>

<script>
import LayoutsDefault from '../../layouts/slot'
export default {
	data() {
		return {
			msg: 'about',
		};
    },
    components: {
       LayoutsDefault
    }
};
</script>

<style lang="scss">

</style>
