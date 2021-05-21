import CONF from '../Config.js'
import axios from 'axios'
import Constant from '../constant.js'

const docAPI = {
    fetchCompany: function () {
        return axios.get(Constant.FETCH_COMPANY)
      },
}
export { docAPI }