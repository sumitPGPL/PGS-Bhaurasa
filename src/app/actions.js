'use server'

import { api } from '@/lib/middleware/apiInceptor';
import { cookies } from 'next/headers'

async function injectToken(data) { // call this function at top when you call any service in serverside
  let token = cookies().getAll().filter((cookie) => cookie.name === 'jwtToken')[0].value
  api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // console.error('Request interceptor error:', error);
      return Promise.reject(error);
    }
  );
}
export default injectToken