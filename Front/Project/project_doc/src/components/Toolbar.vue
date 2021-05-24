<template>
  <div class="header" @click="link()">
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
  },
  methods: {
    link(){
      this.$router.push("/");
    }    
  }
}
</script>
<style scoped>
.header{
  cursor: pointer;
  background-color: rgb(42, 187, 182)
}
</style>