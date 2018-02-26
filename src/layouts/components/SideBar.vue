
<template>
<div class="sidebar">
    <div class="sidebar-wrapper">
        <div class="logo">  
            <img src="../../assets/img/gopher.png" alt="">
        </div>
        <ul>
            <li><router-link :to="'/Index'">Home</router-link></li>
            <li><router-link :to="'/About'">About</router-link></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
	name: 'SideBar',
};
</script>

