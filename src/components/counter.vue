<template>
<div class="counter">    
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-9">
				<div class="card">
					<div class="content">
						<span>Count : {{Count}}</span>
						<br>
						<span>Double Count : {{doubleCount}}</span>
						<hr>
						<input type="button" value="+" @click.prevent="plus" >
						<input type="button" value="-" @click.prevent="minus">
						<input type="button" value="one" @click.prevent="one">
						<input type="button" value="two" @click.prevent="two">
						<hr>
						<a v-bind:href="url">href with v-bind</a>
						
						<input type="button" v-bind:value="msg" @click.prevent="changemsg">
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>

</template>

<script>
//import store from '../_store';
//  this.$store.commit('increment')
//console.log(this.$store.getters.getCount);
import { mapGetters } from 'vuex';

export default {
	name: 'Count',
	data() {
		return {
			msg: 'Click',
			url: './post',
		};
	},
	computed: {
		// 將getter映射過來
		...mapGetters(['Count', 'doubleCount']),
	},
	methods: {
		changemsg() {
			this.msg == 'Clicked' ? this.msg = 'Click':this.msg = 'Clicked';
		},
		plus() {
			//this.$store.dispatch('increment');

			//  this.$store.dispatch('actionB').then(() => {
			// 	 // ...
			//  });
			// this.$axios
			// 	.get('https://junxiang.webgene.com.tw/api/Student/GetData')
			// 	.then(function(response) {
			// 		console.log(response);
			// 	});
			// this.getData();

			//actions
			this.$store.dispatch('actionA').then(() => {
				// ...
			});
		},
		minus() {
			// this.$store.commit('decrement');
			this.$store.dispatch('decrement');
		},
		one() {
			this.$store.dispatch('one');
		},
		two() {
			this.$store.dispatch('two');
		},
	},
};
</script>

<style lang="scss">

</style>
