<template>
  <v-card>
    <v-tabs
      color="green"
      centered
    >
      <v-tab>소속 정보</v-tab>
      <v-tab>소속 전문가</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import docAPI from '../api/docAPI'
import { mapState } from 'vuex';
import Constant from '../constant';
export default {
  name: "Tabs",
   data(){
    return{
      items:null
    }
  },
  created () {
    this.$store.dispatch(Constant.FETCH_COMPANY);
    // anqAPI.getDetail(userSn, token).then(res => {
    //        this.$store.state.myInfo.myDetail=res;
    //     });
    //   this.$store.dispatch(Constant.FETCH_TEXTLIST, 1);
    // },
    },
     computed : (
        mapState([ 'companyList'])
    ),
}
</script>
<style>
.v-carousel__controls{
  background: 0
}
</style>