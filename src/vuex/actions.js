const actions={
    setCurrentSong({commit},data){
        commit('SET_CURRENTSONG',data);
    },
    setPlaying({commit},data){
        commit('SET_PLAYING',data);
    },
    setMusicList({commit},data){
        commit('SET_MUSICLIST',data);
    },
    setCurrentIndex({commit},data){
        commit('set_CURRENTINDEX',data);
    },
    setMode({commit},data){
        commit('SET_MODE',data);
    }
}
export default actions