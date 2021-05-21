<template>
  <v-carousel>
    <v-carousel-item
      v-for="(image,i) in images"
      :key="i"
      :src="image.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      eager
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      images: [
         {
            src: require('@/assets/company.png')
         },
         {
            src: require('@/assets/home.png')
         },
         {
            src: require('@/assets/logo.png')
         }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>