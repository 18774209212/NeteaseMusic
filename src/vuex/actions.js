const actions={
    setSongList({commit},data){
        commit('SET_SONGLIST',data);
    },
    setCurrentSong({commit},data){
        commit('SET_CURRENTSONG',data);
    }
}
export default actions