import {takeLasted, take, put, takeEvery, delay} from 'redux-saga/effects'

export function* incrementSaga(){
		const incrementPayload = yield take('ADD');
	/*take
	//	yield take('ADD');
	//  console.log('I am incremented')
	*/
			
	/* takeEvery: toda vez que clicar vai chamar a função onIncrement
	
		yield takeEvery('ADD', onIncrement);
	*/
	}
	
	
	export function* onIncrement(){
				
	/* takeEvery:
		yield  console.log('i am incremented')
    */
   yield  console.log('i am incremented')
	
	/*put: aqui ele vai respeitar o delay porque ele é assincrono
		// delay(3000)
		// yield put({type: 'ADD'})
	*/
	
	/* takeLatest: aqui ele vai executar somente o ultimo debtri de um intervalor como no delay. ou seja enquanto nao passar 3 segundos e eu apertar o botao de novo ele vai reiniciar
		// delay(3000)
		// yield put({type: 'ADD'})
	*/
	}
