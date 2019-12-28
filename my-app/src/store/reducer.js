const defaultState = {
    name:localStorage.getItem("name"),
    pass:localStorage.getItem("pass"),
    phone:"",
    surepass:""
}
export default (state = defaultState,action)=>{
    // 根绝action.type 判断更改何值
    if(action.type === 'name'){
        // why copy old state -> newState ? reducer 可以接收state 不能修改state！！！
        const newState = JSON.parse(JSON.stringify(state)); // 深度拷贝
        newState.name = action.value;
        return newState;
    }else if(action.type === 'pass'){
        const newState = JSON.parse(JSON.stringify(state)); // 深度拷贝
        newState.pass = action.value;
        return newState;
    }
    console.log(state)
    return state;
}