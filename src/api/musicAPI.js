import request from '@/utils/request.js'

//推荐歌单
export function recommendSongs(params){
    return request({
        url:'/musicApi/personalized?limit='+params,
        method:'get'
    })
}
//通过歌单id获取歌单详情
export function getRecommendListDetail(id){
    return request({
        url:'/musicApi/playlist/detail?id='+id,
        method:'get'
    })
}
//
//推荐新音乐
export function recommendNewSongs(params){
    return request({
        url:'/musicApi/personalized/newsong?limit='+params,
        method:'get'
    })
}
//通过歌曲id获取歌曲详情
export function getSongDetail(id){
    return request({
        url:'/musicApi/song/detail?ids='+id,
        method:'get'
    })
}
//通过歌曲id获取歌词
export function getLyrc(id){
    return request({
        url:'/musicApi/lyric?id='+id,
        method:'get'
    })
}
//通过歌曲id获取歌曲url(id可多个，用逗号隔开)
export function getSongUrl(ids){
    return request({
        url:'/musicApi/song/url?id='+ids,
        method:'get'
    })
}
