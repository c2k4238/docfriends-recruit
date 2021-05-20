<template>
  <div id="app">
    <v-carousel
    hide-controls
    height="200"
    interval="3000"
    >
    <v-carousel-item
    v-for="(image,i) in images"
    :key="i"
    :src="image.src"
    ></v-carousel-item>
  </v-carousel>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   data(){
    return{
      images: [
          {
             src: require('@/assets/company.png')
            // src: 'https://education.airforce.mil.kr/anq10/_nuxt/img/image1.jpg',
          },
          {
            //  src: 'https://education.airforce.mil.kr/anq10/_nuxt/img/image5.jpg',
             src: require('@/assets/logo.png')
          }
        ]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-carousel__controls{
  background: 0
}
</style>