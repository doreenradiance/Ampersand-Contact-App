const initialStaten= {
login: false,
user: null
}

export default reducer = (state, action) => {
    switch(action.type){
        case "LOGGED_IN":
        return {login:true, user:action.payload}
        case "LOGGED_OUT":
            return {login:false, user:null}
    default:
        return state;
    }
}