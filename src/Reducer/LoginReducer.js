const initialState={
    username:"hruday@gmail.com",
    password :'hruday123'
}

function LoginReducer(state=initialState,action){
    switch(action.type){
        case 'LOGIN':
            return{
                ...state
            }
            default:
                return state
    }
}
export default LoginReducer;