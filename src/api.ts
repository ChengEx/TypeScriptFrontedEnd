import axios from 'axios'

//const url = 'http://localhost:8080'
const url = 'http://localhost:4000'

const APIRequest = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
})

//axios instance攔截器
APIRequest.interceptors.request.use((req: any)=>{  
  if (sessionStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(<string>sessionStorage.getItem('profile')).token}`;
  }
  return req;
})

export const getAllCategory = () => {
  return APIRequest.get('/api/category/getAllCategory');
}
export const getCategoryByPath = (path: object) => {
  return APIRequest.post('/api/category/getCategoryByPath', path);
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
export const addProduct = (addProductData: object) => {
  return APIRequest.post('/api/product/addProduct', addProductData);
}
export const getProductListByCategory = (category: object) => {
  return APIRequest.post('/api/product/getProductListByCategory', category);
}
export const getProductListBySubCategory = (subcategory: object) => {
  return APIRequest.post('/api/product/getProductListBySubCategory', subcategory);
}
export const getProductById = (productId: object) => {
  return APIRequest.post('/api/product/getProductById', productId);
}
export const getProductListByUserId = (userId: object) => {
  return APIRequest.post('/api/product/getProductListByUserId', userId);
}
export const updateProductById = (updateProductData: object) => {
  return APIRequest.post('/api/product/updateProductById', updateProductData);
}
export const deleteProductById = (productId: object) => {
  return APIRequest.post('/api/product/deleteProductById', productId);
}
export const addCollection = (collection: object) => {
  return APIRequest.post('/api/collection/addCollection', collection);
}