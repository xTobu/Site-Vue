<template>
<LayoutsDefault>
    <div class="count">
    <h1>{{ msg }}</h1>
    <counter></counter>
    </div>
</LayoutsDefault>

</template>

<script>
import LayoutsDefault from '../../layouts/slot'
import counter from '../../components/counter'
export default {
	data() {
		return {
			msg: 'count',
		};
    },
    components: {
       LayoutsDefault,
       counter
    }
};
</script>

<style lang="scss">

</style>
