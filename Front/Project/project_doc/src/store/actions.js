import { docAPI } from '../api/docAPI'
import Constant from '../constant'
export default {
  [Constant.FETCH_COMPANY]: store => {
    docAPI.fetchCompany().then(response => {
      store.commit(Constant.FETCH_COMPANY, { companyList: response.data })
    })
  },
  [Constant.FETCH_COMPANY_EXPERT]: store => {
    docAPI.fetchCompanyExpert().then(response => {
      store.commit(Constant.FETCH_COMPANY_EXPERT, { companyExpertList: response.data })
    })
  },
  [Constant.FETCH_EXPERT]: store => {
    docAPI.fetchExpert().then(response => {
      store.commit(Constant.FETCH_EXPERT, { expertList: response.data })
    })
  }
}