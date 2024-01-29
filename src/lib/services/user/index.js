import { api } from "@/lib/middleware/apiInceptor"
import { GET_USERS } from ".."

export const getUsers = async() =>{
  let res = await api.get(GET_USERS)
  if(res){
    return res.data.payload
 }
 else{
    res.error ='error'
 }
}