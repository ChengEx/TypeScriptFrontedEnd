import axios from 'axios'

const url = 'http://localhost:4000'

const APIRequest = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
})

//axios instance攔截器
APIRequest.interceptors.request.use((req: any)=>{  
  if (localStorage.getItem('profile')) {
    console.log(localStorage.getItem('profile'))
    req.headers.Authorization = `Bearer ${JSON.parse(<string>localStorage.getItem('profile')).token}`;
  }
  return req;
})

export const getAllCategory = () => {
    return APIRequest.get('/api/category/getAll');
}
export const login = (data: object) => {
    return APIRequest.post('/api/student/login', data);
}
export const signup = (data: object) => {
    return APIRequest.post('/api/student/register', data);
}