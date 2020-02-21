export default class  Song{
    constructor({id, mid, singer, name, album, duration, image, url, aliaName}){
        this.id=id;
        this.mid=mid;
        this.singer=singer;
        this.name=name;
        this.album=album;
        this.duration=duration;
        this.image=image;
        this.url=url;
        this.aliaName=aliaName;
    }
}
function createRecommendListSong(music){
    return new Song({
        id:music.id,
        name:music.name,
        
    })
} 