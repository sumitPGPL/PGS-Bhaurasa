import moment from "moment"

export const BASE_URL =
//  "http://localhost:8081/api/v2"
'https://pgpl-school-backend.onrender.com/api/v1'
export const CREDINITAIL = {
  email: '',
  password: ''
}
export const ERR_MSG_PREFIX ='The following fields are blank:'
export const ALERT_TIMEOUT = 3000;
export const NEWSINITAIL = {
  title: "",
  content: "",
  thumbNail: "",
  publishedDate: moment().format('YYYY-MM-DD HH:mm:ss'),
  reDirectedLink: ""

}
export const CONTACT_INITIAL ={
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: ''
}