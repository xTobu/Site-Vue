<template>
<LayoutsDefault>    
    <div class="index">
    <h1>{{ msg }}</h1>
    </div>
</LayoutsDefault>

</template>

<script>
import LayoutsDefault from '../../layouts/slot'
export default {
	data() {
		return {
			msg: 'index',
		};
    },
    components: {
       LayoutsDefault
    }
};
</script>

<style lang="scss">

</style>
