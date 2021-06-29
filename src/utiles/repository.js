import {api} from './baseUrl';

 

  const price =async ()=>{
   return await api.get('/price') 
}
  const getBalance =async (key)=>{
   return await api.get('/wallet/'+key+'/balance') 
}

  const getAddress =async (data)=>{
   return await api.post('/getAddress',data) 
}
  const sendTransaction =async (data)=>{
   return await api.post('/sendTransaction',data) 
}
  const getTransaction =async (data,nextCursor)=>{
    return await api.get('/wallet/'+data+'/txs?cursor='+nextCursor) 
  }

export const repository= {
   
    price,
    getAddress,
    getBalance,
    getTransaction,
    sendTransaction
}