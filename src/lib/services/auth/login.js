import { api, setAuthToken } from "@/lib/middleware/apiInceptor"
import { LOGIN_URL } from ".."

export const login =async (payload)=>{
 let res = await api.post(LOGIN_URL,payload)
 if(res){
  if(res.data){
    setAuthToken(res.data.payload.token)
    return res.data.payload
  }
 }
}