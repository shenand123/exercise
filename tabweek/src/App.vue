<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Home/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Home from './components/home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
 height: 100%;
 width:100%;
}
</style>
