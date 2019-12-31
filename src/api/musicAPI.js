import request from '@/utils/request.js'

//推荐歌单
export function recommendSongs(params){
    return request({
        url:'/musicApi/personalized?limit='+params,
        method:'get'
    })
}