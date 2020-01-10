let db={
    save(key,value){
        //JSON.stringify(value)将 JavaScript 值转换为 JSON 字符串。
        localStorage.setItem(key,JSON.stringify(value));
    },
    get(key,defaultValue={}){
        //JSON.parse()将Json字符串转换为JSON格式
        return JSON.parse(localStorage.getItem(key))||defaultValue;
    },
    remove(key){
        localStorage.removeItem(key);
    },
    clear(){
        //将localStorage中存储的数据全部清除
        localStorage.clear();
    }
}
export default db;