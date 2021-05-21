<template>
  <div class="home">
   <carousel/>
   <tabs/>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Tabs from './Tabs.vue';
export default {
  name: 'home',
  components: {Carousel,Tabs},
  data () {
    return {
      images: [
         {
            src: require('@/assets/company.png')
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.v-carousel__controls{
  background: 0
}
.v-window__container>.v-window__next{
  margin: 500px 500px 500px 500px;
}
</style>
