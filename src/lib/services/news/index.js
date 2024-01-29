import { api } from "@/lib/middleware/apiInceptor"
import { ADD_NEWS } from ".."

export const addNews =async(payload) =>{
    const res = await api.post(ADD_NEWS, payload)
    if(res){
      return res
    }
}

export const getAllNews = async ()=>{
    const res = await api.get(ADD_NEWS)
    if(res){
        return res.data.payload.data
    }else{
        return {}
    }
}