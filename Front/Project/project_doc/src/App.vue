<template>
  <div id="app">
    <v-app id="inspire">
      <router-view/>
    </v-app>  
  </div>
</template>

<script>
export default {
  name: 'App',
   data(){
    return{
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>