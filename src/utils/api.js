import http from './http'

/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/api/request/"

// get请求
export function getListAPI(params){
    return http.get(`${resquest}/logistics/goodsType/list`,params)
}
// post请求
export function getList(params){
    return http.post(`${resquest}/logistics/orderPC/getOrderList`,params)
}
// put 请求
export function putSomeAPI(params){
    return http.put(`${resquest}/putSome.json`,params)
}
// delete 请求
export function deleteListAPI(params){
    return http.delete(`${resquest}/deleteList.json`,params)
}