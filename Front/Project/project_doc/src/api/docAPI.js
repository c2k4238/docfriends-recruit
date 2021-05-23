import axios from 'axios'
import Constant from '../constant.js'

const docAPI = {
  fetchCompany: function () {
        return axios.get(Constant.FETCH_COMPANY)
   },
  fetchCompanyExpert: function () {
    return axios.get(Constant.FETCH_COMPANY_EXPERT)
  },
  fetchExpert: function () {
    return axios.get(Constant.FETCH_EXPERT)
  },
}
export { docAPI }