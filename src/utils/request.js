import axios from 'axios'
import {MessageBox} from 'mint-ui'
//创建axios实例
const service=axios.create({
    // responseType:'json',
    timeout:15000
})

//request拦截器
service.interceptors.request.use(
    config=>{
        return config;
    },
    error=>{
        console.log(error)
        Promise.reject(error)   //返回一个带有拒绝原因的Promise对象。
    }
)

//response拦截器
service.interceptors.response.use(
    response => {
        const res=response.data;
        if(res.code!=200){
            MessageBox('提示', res.message);
            return Promise.reject(res)
        }else{
            return res;
        }
        
    },
    error=>{
        console.log(error)
        MessageBox('提示', error.message);
        return Promise.reject(error)
    }
)
export default service