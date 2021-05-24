import Constant from '../constant'

// 상태를 변경하는 기능만을 뽑아서...
export default {

  [Constant.FETCH_COMPANY]: (state, payload) => {
    state.companyList = payload.companyList
  },
  [Constant.FETCH_COMPANY_EXPERT]: (state, payload) => {
    state.companyExpertList = payload.companyExpertList
  },
  [Constant.FETCH_EXPERT]: (state, payload) => {
    state.expertList = payload.expertList
  },
  setExpertIdx: (state, idx) => { state.expertIdx = idx },
}
