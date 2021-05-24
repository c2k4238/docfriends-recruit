<template>
  <div class="header">
    <v-img 
    width="200"
    height="50"
    :src= src />    
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      src: require('@/assets/doctalk.png') 
    }
  }
}
</script>
<style scoped>
.header{
  background-color: rgb(42, 187, 182)
}
</style>