<template>
	<div class="page">
		<AppHeaders/>
		<RouterView/>
		<AppFooter/>
	</div>

</template>

<script setup>
	import AppHeaders from '@/vue_components/Headers/AppHeaders'
	import AppFooter from '@/vue_components/Footer/AppFooter'
	import '@/js/js.js'


</script>
