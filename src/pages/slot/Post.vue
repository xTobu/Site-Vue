<template>
<LayoutsDefault>
    <div class="post">
    <h1>{{ msg }}</h1>
    {{ $route.params.id }}
    </div>
</LayoutsDefault>

</template>

<script>
import LayoutsDefault from '../../layouts/slot'
export default {
	data() {
		return {
			msg: 'post',
		};
    },
    components: {
       LayoutsDefault
    }
};
</script>

<style lang="scss">

</style>
