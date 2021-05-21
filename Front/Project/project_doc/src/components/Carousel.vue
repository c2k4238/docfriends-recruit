<template>
  <v-card
  elevation="24"
  max-width="1000"
  class="mx-auto">
    <v-carousel
    max-width="1500px"
    class="mx-auto">
      <v-carousel-item
      v-for="(src,i) in this.companyList.data.imagePathList"
      :key="i"
      :src="src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      eager
      ></v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'carousel',
  data () {
    return {
    }
  },
     computed : (
        mapState(['companyList'])
    )
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.v-carousel__controls{
  background: 0
}
</style>