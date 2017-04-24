<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
	<router-link to="/">PG 1</router-link>
	<router-link to="/pg2">PG 2</router-link>
	<br>
	<button @click="changeAccess('any')">With any</button>
	<button @click="changeAccess('admin')">With admin</button>
	<br>
	<p>{{$store.state.acl_current}}</p>
	<router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style></style>
