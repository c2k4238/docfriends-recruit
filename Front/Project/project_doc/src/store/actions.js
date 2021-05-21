import { docAPI } from '../api/docAPI'
import Constant from '../constant'
export default {
  [Constant.FETCH_COMPANY]: store => {
    docAPI.fetchCompany().then(response => {
      store.commit(Constant.FETCH_COMPANY, { companyList: response.data })
    })
  }
}