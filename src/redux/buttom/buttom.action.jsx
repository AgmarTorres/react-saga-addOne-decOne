import buttomTypes from './buttom.types'

export  function addOne(){
    return {
        type: buttomTypes.ADD,
        payload: 1
    }
}

export  function decOne(){
    return {
        type: buttomTypes.DEC,
        payload: 1
    }
}

