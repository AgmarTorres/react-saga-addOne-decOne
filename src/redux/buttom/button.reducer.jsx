import buttomTypes from './buttom.types'

const INITIAL_STATE = {
    valor: 0
}

function buttomReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case buttomTypes.ADD: 
            return {
                ...state, valor: state.valor + 1
            }
        case buttomTypes.DEC: 
            return{
                ...state, valor: state.valor - 1
        }
        default: 
            return state
    }
}

export default buttomReducer