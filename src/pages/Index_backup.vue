<template>
<div>
    <h1>{{ msg }} {{studentData}} {{studentComputed}} {{getCount}}</h1>
    <button  @click.prevent="clickChange">Change</button>
	 <el-button :loading="true">默认按钮</el-button>
	  <el-button
	  plain
	  @click="open">
	  可自动关闭
	  </el-button>
</div>
</template>

<script>
// import { Select, Button } from 'element-ui';
export default {
	data() {
		return {
			msg: 'index',
			studentData: this.$store.state.student,
		};
	},

	computed: {
		studentComputed() {
			return this.$store.state.student;
		},
		getCount() {
			return this.$store.getters.getterStudent;
		},
	},
	methods: {
		clickChange() {
			this.$store.dispatch('clickChange');
		},
		open() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },
	},
};
</script>

<style lang="scss">

</style>
