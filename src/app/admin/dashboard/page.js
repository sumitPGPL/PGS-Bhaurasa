import injectToken from '@/app/actions'
import Dashboard from '@/components/Dashboard/AdminDashboard'
import { getAllAdmissions } from '@/lib/services/admission'
import { getUsers } from '@/lib/services/user'
import { getAllNews } from '@/lib/services/news'

async function AdminDashboard(props){
   await injectToken()
   let users = await getUsers()
   let admissions = await getAllAdmissions()
   let news = await getAllNews()
  return (
    <>
     <Dashboard users={users} admissions={admissions} news={news}/>
    </>
  )
}

export default AdminDashboard
