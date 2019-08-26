export const mainReducer = (state,action)=>{
    console.log(state)
    let total = 0;
    let newState = undefined;
    switch(action.type){
        case 'ADD_EXPENCE':
            total = state.total - action.payload.amount
            newState = {...state,total,expense:[...state.expense,action.payload]}
            return newState;
        case 'ADD_CREDIT':
            total = state.total + action.payload.amount
            newState = {...state,total,credit:[...state.credit,action.payload]};
            return newState;
        default:
            return state;
    }

}

export const initial_state = {
    expense:[],
    credit:[],
    total:0
}