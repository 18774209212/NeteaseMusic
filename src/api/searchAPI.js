import request from '@/utils/request.js'

//搜索
export function search(params){
    console.log(params)
    return request({
        url:'/musicApi/search?keywords='+params,
        method:'get'
    })
}
//默认搜索关键字
export function searchKeywords(){
    return request({
        url:'/musicApi/search/default',
        method:'get'
    })
}
//搜索多重匹配
export function multimatch(params){
    return request({
        url:'/musicApi/search/multimatch?keywords='+params,
        method:'get'
    })
}
//获取搜索建议
export function suggest(params){
    return request({
        url:'/musicApi/search/suggest?keywords='+params+'&type=mobile',
        method:'get'
    })
}
//获取热搜列表(简略)
export function searchHot(){
    return request({
        url:'/musicApi/search/hot',
        method:'get'
    })
}
//获取热搜列表(详细)
export function searchHotDetail(){
    return request({
        url:'/musicApi/search/hot/detail',
        method:'get'
    })
}
//获取默认搜索关键词
export function defaultKeyWords(){
    return request({
        url:'/musicApi/search/default',
        method:'get'
    })
}