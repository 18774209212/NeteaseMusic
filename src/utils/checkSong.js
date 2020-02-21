let checkSong={
    check(list,item){
        for(var i=0;i<list.length;i++){
            if(list[i].id==item.id) return true;
            else return false;
        }
    }
}

export default checkSong