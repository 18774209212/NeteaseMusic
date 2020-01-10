import db from "../utils/localStorage"

const mutations={
    //歌单列表
    ['SET_SONGLIST'](state,data){
        state.songList=data;
        db.save('SET_SONGLIST',data);
    },
    //当前播放的歌曲
    ['SET_CURRENTSONG'](state,data){
        state.currentSong=data;
        db.save('SET_CURRENTSONG',data);
    }
};
export default mutations