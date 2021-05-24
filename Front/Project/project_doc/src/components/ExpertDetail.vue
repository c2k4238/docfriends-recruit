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

      <v-card
      class="mx-auto my-12"
      max-width="1000"
      outlined>
      <v-card-text v-if="jsonData">
      <div class="sector">
      <p class="headline mb-1 text--primary">학력 및 자격면허</p>
      <v-card-text class="font-weight-bold" v-for="ability in abilities" :key="ability">
         {{ ability }}
      </v-card-text>
      </div>
      <div class="sector">
      <p class="headline mb-1 text--primary">경력 </p>
      <v-card-text class="font-weight-bold" v-for="career in careers" :key="career"> 
         {{ career }}
      </v-card-text>
      </div>
      <div class="sector">
      <p class="headline mb-1 text--primary">진료과 </p>
      <v-card-text class="font-weight-bold">
         {{ expertList.data.subject }}
      </v-card-text>
      </div>
      <div class="sector">
      <p class="headline mb-1 text--primary">알림 키워드</p>
      <v-card-text style="color:green">
      <p style="display:inline;" v-for="(keyword) in this.expertList.data.alarmKeywordList" :key="keyword"> #{{keyword}}</p>
      </v-card-text>
      </div>
      <div class="sector">
      <p class="headline mb-1 text--primary">소속 정보 </p>
      <v-card-text class="font-weight-bold">
        {{ expertList.data.companyName }} <br/>
        {{ expertList.data.companyAddr }} {{ expertList.data.companyAddrEtc }}
      </v-card-text>
      </div>
      <div class="center">
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="link(companyList.data.homepageUrl)"
      >
        닥프렌즈 병원 바로가기 >
      </v-btn>
      </div>
      </v-card-text>

      <v-card-text v-else>
        <div class="sector">
        <p class="center headline mb-1 text--primary">정보가 존재하지 않습니다.</p>
        </div>
      </v-card-text>
    </v-card>   
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Constant from '../constant';
export default {
  name: 'expertDetail',
  data () {
    return {
        expert: {},
        jsonData: false,
        abilities: [],
        careers: []
    }
  },
  created () {
      this.expert = this.$store.state.companyExpertList.data.expertList[this.$store.state.expertIdx];
      if(this.expert.expertPublicId === '24oiQH0C-endN-5iFm-bMbL-xZmEjRujQdwf'){ //DB에서 같은 publicId를 찾아오는 것으로 가정
        this.$store.dispatch(Constant.FETCH_EXPERT); 
        this.jsonData = true;
      }
  },
  beforeUpdate (){
    this.abilities = this.$store.state.expertList.data.ability.split("\n\n");
    this.careers = this.$store.state.expertList.data.career.split("\n\n");
  },
  computed: _.extend(
      {
      },
      mapState(['companyList','companyExpertList', 'expertList'])
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
    },
    link(homepageUrl){
      window.open(homepageUrl);
    }
  }
}
</script>

<style scoped>
.sector{
  margin-top:20px; 
  margin-bottom:30px;
}
.center{
  text-align: center;
  justify-content: center;
}
</style>
