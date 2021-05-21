import Constant from '../constant'

// 상태를 변경하는 기능만을 뽑아서...
export default {

  [Constant.FETCH_TEXTLIST]: (state, payload) => {
    state.companyList = payload.companyList
  }

}
