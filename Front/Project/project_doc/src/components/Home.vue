<template>
  <div class="home">
   <carousel/>
   <tabs/>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Tabs from './Tabs.vue';
import { mapState } from 'vuex';
import Constant from '../constant';
export default {
  name: 'home',
  components: {Carousel,Tabs},
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch(Constant.FETCH_COMPANY);
    this.$store.dispatch(Constant.FETCH_COMPANY_EXPERT);
    },
     computed : (
        mapState(['companyList'])
    ),
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
