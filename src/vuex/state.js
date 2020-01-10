import db from "../utils/localStorage"

const state ={
    //获取歌单列表
    musicList:db.get("SONGlIST")
}
export default state