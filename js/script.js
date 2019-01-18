// function verifform1(){
// 	var form1= document.getElementById("form1");
// 	var result= document.getElementById("result");
// 	var myRegex=/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

// 	result.innerHTML = "";

// 	if(form1.nom.value.length==0){
// 		result.innerHTML="le nom est obligatoire!";
// 		return false;
// 	}
// 	if(!isNaN(form1.nom.value)){
// 		result.innerHTML="le nom ne peut pas être numérique";
// 		return false;
// 	}
// 	if(form1.email.value.length==0){
// 		result.innerHTML="l'email est obligatoire!";		
// 		return false;
// 	}
// 	if(form1.message.value.length==0){
// 		result.innerHTML="Vous ne pouvez pas adresser un message vide!";		
// 		return false;
// 	}	
// 	if(myRegex.test(form1.email.value)){
// 		result.innerHTML="";		
// 	} else {
// 		result.innerHTML="Votre email n'est pas valide!";		
// 		return false;
// 	}
// 	if(form1.confidentialite.checked!=true){
// 		result.innerHTML="Vous devez accepter la politique de confidentialité!";
// 		return false;
// 	}
// }

