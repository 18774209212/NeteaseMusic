import db from "../utils/localStorage"

const mutations={
    //歌单列表
    ['SET_SONGLIST'](state,data){
        state.songList=data;
        db.save('SET_SONGLIST',data);
    }
};
export default mutations