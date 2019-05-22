// if( typeof jQuery == 'undefined'){
// 	//jQuery n'est pas chargé
// }else{
// 	//jQuery est chargé
// }

window.addEventListener('load',function(){
	if(window.jQuery){
		alert("Le script est chargé");
	}else{
		alert("Problème avec le script");

	}
});