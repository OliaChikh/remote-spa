getByIdService('submitClientDataButton').onclick = function(){
	let inputs = document.getElementsByClassName('dataInputClient');
	for(let i=0; i< inputs.length; i++){
		inputs[i].value = '';
	}
	getByIdService('comment').value = '';
}