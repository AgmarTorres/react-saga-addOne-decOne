import React from 'react';
import { connect } from 'react-redux';
import {addOne, decOne} from './../../redux/buttom/buttom.action'

const Buttom = ({valor, addOne, decOne}) =>(

    <div>
        {valor} <br/><br/>
            <button onClick={ () => addOne()}> Add 1</button>
            <br/><br/><button  onClick={ () => decOne()}> Dec 1</button>
 
    </div>

)

function mapStateToProps(state) {
    console.log(state)
    return {
        
        valor: state.result.valor
    };
}

const mapDispatchToProps = dispatch =>({
    addOne: () => dispatch(addOne()),
    decOne: () => dispatch(decOne())
})



export default connect(
    mapStateToProps, mapDispatchToProps
)(Buttom);