import request from '@/utils/request.js'

//推荐歌单
export function recommendSongs(params){
    return request({
        url:'/musicApi/personalized?limit='+params,
        method:'get'
    })
}
//推荐新音乐
export function recommendNewSongs(params){
    return request({
        url:'/musicApi/personalized/newsong?limit='+params,
        method:'get'
    })
}
//通过id获取歌曲详情
export function getSongDetail(id){
    return request({
        url:'/musicApi/song/detail?ids='+id,
        method:'get'
    })
}
//通过id获取歌词
export function getLyrc(id){
    return request({
        url:'/musicApi/lyric?id='+id,
        method:'get'
    })
}
