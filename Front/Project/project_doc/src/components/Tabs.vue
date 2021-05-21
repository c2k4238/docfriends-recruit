<template>
  <v-card>
    <v-tabs
      color="green"
      centered
    >
      <v-tab>소속 정보</v-tab>
      <v-tab>소속 전문가</v-tab>
      <v-tab-item
        :key="1"
      >
      <v-card
      class="mx-auto"
      max-width="1000"
      outlined>
      <v-card-text>
      <p class="headline text--primary">
        알림 키워드
      </p>
      <p style="display:inline;" v-for="(keyword, index) in this.companyList.data.alarmKeywordList" :key="keyword + index"> #{{keyword}}</p>
      <p class="headline text--primary">병원 홈페이지 </p>
      <a href="http://www.docfriends.com">{{companyList.data.homepageUrl}}</a>
      <p class="headline text--primary">병원 전화번호 </p>
      <p>{{companyList.data.tel}}</p>
      <p class="headline text--primary">주소 </p>
      <p>{{companyList.data.addrRoad}} ({{companyList.data.addrEtc}})</p>
      <google-map/>
      </v-card-text>
      </v-card>
      </v-tab-item>

      <v-tab-item
        :key="2"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="4"
            >
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

    </v-tabs>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
import GoogleMap from './GoogleMap.vue';
export default {
  name: "Tabs",
  components: {
    GoogleMap
  },
   data(){
    return{
      items:null
    }
  },
     computed : _.extend(
      {
        // keyword() { 
        //   var list = this.companyList.data.alarmKeywordList;


        //   return { lat: latVal, lng: lngVal };
        // }
      },
      mapState(['companyList'])
    )
}
</script>
