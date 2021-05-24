<template>
  <div>
    <v-flex class="center">
        <v-avatar 
        style="margin-top:20px;"
        size="80">
        <v-img 
        :src= "getImgUrl(expert.profileImgPath)" />
        </v-avatar>
        <v-badge
        :color= "getStateColor(expert.alarmActivationState)"
        bottom 
        bordered
        overlap
        offset-x="10"
        offset-y="10"
        style="margin-left:-10px; margin-bottom:-30px"/>
        <v-card-text class="headline font-weight-bold">
        {{ expert.name }} {{ expert.expertTypeName }}님
        </v-card-text>
        <v-icon class="mr-1" color="red">
        mdi-heart
        </v-icon>
        <span class="subheading mr-2">{{expert.likeCnt}}</span>
        </v-flex>  
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Constant from '../constant';
export default {
  name: 'expertDetail',
  data () {
    return {
        expert: {}
    }
  },
  created () {
      this.expert = this.$store.state.companyExpertList.data.expertList[this.$store.state.expertIdx];
  },
  computed : (
    mapState(['companyExpertList','expertIdx'])
  ),
  methods: {
    getStateColor(alarmActivationState){
      return alarmActivationState==="Y" ? 'green' : 'grey';
    },
    getImgUrl(filename){
      if (filename.length>0) {
        return filename;
      }else{
        return require('@/assets/default.png');
      }
    }
  }
}
</script>

<style scoped>
.center{
  text-align: center;
  justify-content: center;
}
</style>
