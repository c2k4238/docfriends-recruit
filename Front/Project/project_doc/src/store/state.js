export default {
  companyList: {
    responseCode: '',
    data: {
      publicId:'',
      name: '',
      imagePathList: [],
      alarmKeywordList: [],
      homepageUrl: '',
      tel: '',
      addrRoad: '',
      addrJibun: '',
      addrEtc: '',
      lat: '',
      lon: ''
    }
  },
  companyExpertList: {
    responseCode: '',
    data: {
      companyPublicId: '',
      expertList: [
        {
          profileImgPath: '',
          alarmActivationState: '',
          name: '',
          expertTypeName: '',
          likeCnt: 0,
          expertPublicId: '',
          stateColor: ''
        }
      ]
    }
  },
  expertList: {}
}
