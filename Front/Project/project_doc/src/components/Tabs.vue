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
            <div class="sector">
              <p class="headline mb-2 text--primary">알림 키워드</p>
              <p class="text" v-for="(keyword) in this.companyList.data.alarmKeywordList" :key="keyword"> #{{keyword}}</p>
            </div>
            <div class="sector">
              <p class="headline mb-2 text--primary">병원 홈페이지 </p>
              <a class="text2" style="color:green" href="http://www.docfriends.com">{{companyList.data.homepageUrl}}</a>
            </div>
            <div class="sector">
              <p class="headline mb-2 text--primary">병원 전화번호 </p>
              <p class="text2">{{tel}}</p>
            </div>
            <div class="sector">
              <p class="headline mb-2 text--primary">주소 </p>
              <p class="text2">{{companyList.data.addrRoad}} ({{companyList.data.addrEtc}})</p>
              <google-map/>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item fluid
        :key="2"
      >
        <v-card
        class="mx-auto"
        max-width="1000"
        flat
        style="padding:20px"
        >
          <v-row>
            <v-col
              v-for="(expert,index) in this.companyExpertList.data.expertList"
              :key="expert.expertPublicId"
              cols="12"
              md="4"
            >
              <v-card 
                elevation= "5"
                max-width="400"
                style="padding:20px;"
                @click= "navigate(index)"
              >
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
                  <p>
                    {{ companyList.data.name }}
                  </p>
                  <v-icon class="mr-1" color="red">
                  mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">{{expert.likeCnt}}</span>
                </v-flex>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import Constant from '../constant';
import { mapState } from 'vuex';
import GoogleMap from './GoogleMap.vue';
export default {
  name: "Tabs",
  components: {
    GoogleMap
  },
   data(){
    return{
      tel: ''
    }
  },
  computed : (
        mapState(['companyList','companyExpertList'])
  ),
  beforeUpdate() {
    this.tel = this.$store.state.companyList.data.tel.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
  },
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
    },
    navigate(index){
      this.$store.commit("setExpertIdx", index);
      this.$router.push("/expertDetail/");
    },
    getTel(){
      this.$store.state.companyList.data.tel;
    }
  }
}
</script>
<style scoped>
.sector{
  margin-top:20px; 
  margin-bottom:25px;
}
.center{
  text-align: center;
  justify-content: center;
}
.text{
  display:inline;
  font-size: 17px;
  margin-left: 5px;
  color: green;
}
.text2{
  font-size: 17px;
  margin-left: 5px;
  color: rgb(90, 90, 90);
}
</style>