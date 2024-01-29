import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import Loader from '@/components/Loader/Loader'
// import { Analytics } from '@vercel/analytics/react';
// import Error from './error'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PGPL~Bhaurasa',
  description: 'Developed by PGPL Pvt. Ltd., Bhaurasa',
}

export default function RootLayout(props) {
console.log(props)
//  const loadingWrapper = async(fun)=>{
//   try {
//     let result = await fun.apply(null, arguments)
//     return result
//   } finally{
//   }
//  }

  return (                                 
    <html lang="en">                 
      <body className={inter.className}>   
      <Navbar/>        
      {/* <ErrorBoundary fallback={<Error/>}> */}
      {/* {isLoading && <h1>Loading....</h1>} */}
      <Suspense fallback={<Loader/>}>                                   
      <div className='mt-8'> 
      {props.children}
      {/* <Analytics /> */}
      </div>         
      </Suspense>  
      {/* </ErrorBoundary>                                            */}
      <Footer/>
      </body>
    </html>
  )
}
