<template>
  <div>
   <toolbar/>
   <carousel class="carousel"/>
   <tabs/>
   <footers/>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Tabs from './Tabs.vue';
import { mapState } from 'vuex';
import Constant from '../constant';
import Toolbar from './Toolbar.vue';
import Footers from './Footers.vue';
export default {
  name: 'home',
  components: {Carousel, Tabs, Toolbar, Footers},
  data () {
    return {
    }
  },
  beforeCreate () {
    this.$store.dispatch(Constant.FETCH_COMPANY);
    this.$store.dispatch(Constant.FETCH_COMPANY_EXPERT);
  },
  computed : (
    mapState(['companyList'])
  )
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel{
  margin-top: 30px;
}
</style>
