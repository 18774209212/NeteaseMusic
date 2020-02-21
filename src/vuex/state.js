import db from "@/utils/localStorage"
import {playMode} from "@/utils/config"
const state ={
    currentSong:db.get('currentSong')? db.get('currentSong'): {},
    playing:false,
    musicList:[],
    currentIndex:-1,
    mode:playMode.sequence
};
export default state