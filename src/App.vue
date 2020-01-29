<template>
	<div id="app">
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
    import MainTabBar from "@/components/MainTabBar";

    export default {
        name: 'App',
        components: {
            MainTabBar,
        }
    }
</script>

<style>
	/*body {*/
	/*	padding: 0px;*/
	/*	margin: 0px;*/
	/*}*/
	
	/*@import "src/assets/css/base.css";*/
	
	/*#app {*/
	/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
	/*  -webkit-font-smoothing: antialiased;*/
	/*  -moz-osx-font-smoothing: grayscale;*/
	/*  text-align: center;*/
	/*  color: #2c3e50;*/
	/*}*/
	
	
	/*#nav {*/
	/*  padding: 30px;*/
	/*}*/
	
	/*#nav a {*/
	/*  font-weight: bold;*/
	/*  color: #2c3e50;*/
	/*}*/
	
	/*#nav a.router-link-exact-active {*/
	/*  color: #42b983;*/
	/*}*/
</style>
