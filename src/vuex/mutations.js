import db from "../utils/localStorage"

const mutations={
    ['SET_CURRENTSONG'](state,data){
        state.currentSong=data;
        localStorage.setItem('currentSong',JSON.stringify(data))
    },
    ['SET_PLAYING'](state,data){
        state.playing=data;
        // db.save('playing',data);
    },
    ['SET_MUSICLIST'](state,data){
        state.musicList=data;
        localStorage.setItem('musicList',data)
    },
    ['set_CURRENTINDEX'](state,data){
        state.currentIndex=data;
        localStorage.setItem('currentIndex',JSON.stringify(data))
    },
    ['SET_MODE'](state,data){
        state.mode=data;
    }
};
export default mutations