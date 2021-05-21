<template>
  <div>
    <GmapMap
      :center= 'center'
      :zoom='18'
      style='width:100%;  height: 400px;'
    />    
  </div>
</template>

<script>
import { mapState } from 'vuex';
import _ from "lodash";
export default {
  name: 'GoogleMap',
  data() {
    return {
    }
  },
   computed: _.extend(
      {
        center() { 
          var latVal = parseFloat(this.companyList.data.lat);
          var lngVal = parseFloat(this.companyList.data.lon);
          return { lat: latVal, lng: lngVal };
        }
      },
      mapState(['companyList'])
    )
};
</script>