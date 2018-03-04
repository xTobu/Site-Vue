
<template>
<div class="sidebar">
    <div class="sidebar-wrapper">
        <div class="logo">  
			<img src="../../assets/img/gopher.png" alt="">
        </div>
		<!-- <i class="fa fa-camera-retro"></i> -->
        <!-- <ul>
            <li><router-link :to="'/Index'">Home</router-link></li>
            <li><router-link :to="'/About'">About</router-link></li>
        </ul> -->
		
		<ul>
			<router-link v-for="(link,index) in sidebarLinks" :to="link.path" tag="li" :ref="link.name" :key="link.name + index">
				<a>
					<i :class="link.icon"></i>
					<p>
						{{link.name}}
					</p>
				</a>
			</router-link>
        </ul>
        <MovingArrow :move-y="arrowMovePx"></MovingArrow>
    </div>
</div>
</template>

<script>
import MovingArrow from './MovingArrow.vue';
export default {
	name: 'SideBar',
	components: {
		MovingArrow,
	},
	props: {
		sidebarLinks: {
			type: Array,
			default: () => [],
		},
	},
	computed: {
		arrowMovePx() {
			return this.linkHeight * this.activeLinkIndex;
		},
	},
	data() {
		return {
			linkHeight: 70,
			activeLinkIndex: 0,
		};
	},
	methods: {
		findActiveLink() {
			//console.log('findActiveLink',this.sidebarLinks,this.$route.path)
			this.sidebarLinks.find((element, index) => {
				let found = element.path === this.$route.path;
				if (found) {
					this.activeLinkIndex = index;
				}
				return found;
			});
		},
	},
	mounted() {
		this.findActiveLink();
		//console.log(this.moveY);
	},
	watch: {
		$route: function(newRoute, oldRoute) {
			this.findActiveLink();
		},
	},
};
</script>

