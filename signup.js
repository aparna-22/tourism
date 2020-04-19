function validate() {  
	var result = "";	
	result += validateName(); 	
	result += validateEmail();
	result += validatePhone();
	result += validatePassword();
	result += validateTerms();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}

function validateName() {
	var name = document.getElementsByName("name")[0].value;
	if (name.length <= 1)
		return "Name cannot be empty.\n";	
		
	return "";
}
function validatePassword() {
	var password = valueOf("password");
	var retype = valueOf("retype_password");

	if ((password.length <= 8) || (password.search[0-9]))

   return "password not in the required format.\n";
	if (password != retype) 
		return "Passwords do not match.\n";	
	
}
function validatePhone(){
	var phone= valueOf("phone");
if(phone.search([0-9]))
if(phone.length!=12)
return "Invalid phone number.\n"
 }
function validateEmail() {
	var email = valueOf("email");
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	return "";	
}

function validateTerms() {
	var terms = document.getElementsByName("terms")[0];
	if (!terms.checked)
		return "Please accept the Terms of Service and Privacy Policy";	
	return "";
}
function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}
