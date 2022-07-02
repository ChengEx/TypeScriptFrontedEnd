import axios from 'axios'

const url = 'http://localhost:4000'

const APIRequest = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
})

//axios instance攔截器
APIRequest.interceptors.request.use((req: any)=>{  
  //if (localStorage.getItem('profile')) {
  if (sessionStorage.getItem('profile')) {
    // console.log(localStorage.getItem('profile'))
    // req.headers.Authorization = `Bearer ${JSON.parse(<string>localStorage.getItem('profile')).token}`;
    req.headers.Authorization = `Bearer ${JSON.parse(<string>sessionStorage.getItem('profile')).token}`;
  }
  return req;
})

export const getAllCategory = () => {
  return APIRequest.get('/api/category/getAll');
}
export const login = (loginData: object) => {
  return APIRequest.post('/api/student/login', loginData);
}
export const signup = (signUpData: object) => {
  return APIRequest.post('/api/student/register', signUpData);
}
export const getPersonalInformation = (_id: object) => {
  return APIRequest.post('/api/student/getPersonalInformation', _id);
}
export const updateInformation = (updateData: object) => {
  return APIRequest.post('/api/student/updateInformation', updateData);
}
export const changePasswrod = (passwordData: object) => {
  return APIRequest.post('/api/student/changePassword', passwordData);
}