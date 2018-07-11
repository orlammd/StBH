/*** 
*************************************
JavaScript functions ikea web site
Created by Lars Henrik Rotnes
Last modified: 2002-10-10
*************************************
**/

/*
CVS Version : $Id: jsUtility.js,v 1.1 2004/12/08 17:30:00 knbu Exp $

*/

//This file contains general functions that is used throughout the site
//Variables for error messages is located in a separate file, errMsg.js

//*************************************************************************************//
//General validating functions
//*************************************************************************************//
//
//function checkQuantity(rNum)                    -> validating quantity fields.
//function checkFirstName(sName, optName)         -> validating first name fields
//function checkLastName(sName, optName){		  -> validating last name fields
//function checkCity(sName, optName)							-> validating city fields 
//function checkZip(sName, optName, argLocale){							-> validating zip fields
//function checkState(sName, optName,  argLocale)							-> validating state fields
//function checkEmail(sEmail, optName)						-> validating email fields
//function checkPhoneNo(sName, optName, argLocale)						-> validating telephone fields
//function checkAddressForm(argForm)							-> validating a standard address form
//function checkStateDropDown(dropDown, optName)		-> validating that something is seleced
//function checkOrganisationNo(sNo, optName, argLocale)	-> validating org number
//function checkCompanyName(tmp.value, optName)			-> validating company name
//function checkFamilyNo(sNo, optName, argLocale)		-> validating family numbers
//function checkBusinessCardNo(sNo, optName, argLocale)		-> validating family numbers
//function checkAddress(sName, optName)					-> validating address field
//
//*************************************************************************************//
//Helper functions
//*************************************************************************************//
//
//function isEmpty(sString, ignoreWhiteSpace)			->general functionc checking if a string is empty
//function checkHTML(sField,ignoreColon, optName) ->for checking strings for html tags/characters.
//function isLegal(string, ignoreWhiteSpace, optName)	->check that a string contains only valid letters: Valid letters are a-z,A-Z, country specific chars, ' and -
//function checkNum(rNum,rDec,rPos,rZero, optMin, optMax, optName) ->check number, see function declaration for more documentation

/**
*General function for validating a address form
*
*argForm  	form	= the form that should be validated
*optName	string 	= description of field, e.g. Quantity
*argLocale string 	=  info about locale, to distinguish between different countries(some country validation requires sepcial logic)
*
*Return boolean-> true when the form is ok, false if any of the fields on the form
*									are incorrect
**/
function checkAddressForm(argForm, optName, argLocale){

	var email = argForm.email.value;
	var email_retyped = argForm.email_retyped.value;
	if(email != email_retyped){
		alert(optName + js_fn_INVALID_EMAIL_MATCH);
		return false;	
	}
	var country = argForm.country.value;

	for(var i = 0; i < argForm.elements.length; i++ ){
		var tmp = argForm.elements[i];
		if( tmp.id == 'firstname' ){
			//alert('firstname');
			if( !checkFirstName(tmp.value, optName) ){
				tmp.select();
				tmp.focus();
				return false;
			}
		} else if( tmp.id == 'lastname' ){
			//alert('lastname');
			if( !checkLastName(tmp.value, optName) ){
				tmp.select();
				tmp.focus();
				return false;
			}
		} else if( tmp.id == 'name' ){
				//alert('need to be validated for name rules' );
				//alert(checkFirstName(tmp.value, " "));
				if(!checkFirstName(tmp.value, optName)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		}else if(tmp.id == 'address1'){
				if(!checkAddress(tmp.value, optName)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		}else if(tmp.id == 'address2'){
				if(!checkHTML(tmp.value, true, optName) ){
					tmp.select();
					tmp.focus();
					return false;	
				}
		}
		else if(tmp.id == 'city'){
				if(!checkCity(tmp.value, optName)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		/*}else if(tmp.id == 'state'){
				if(!checkState(tmp.value, optName, argLocale)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		*/
		}else if(tmp.id == 'state'){
				if(!checkDropDown(tmp, optName)){
					tmp.focus();
					return false;
				}
		/*}else if(tmp.id == 'countryDropDown'){
				if(!checkDropDown(tmp, optName)){
					tmp.focus();
					return false;
				}
		*/
		}else if(tmp.id == 'zip'){
				if(!checkZip(tmp.value, optName, argLocale, country)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		}else if(tmp.id == 'zipCodeExt'){
				if(!checkZipExt(tmp.value, optName, argLocale)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		}else if(tmp.id == 'email'){
				if(!checkEmail(tmp.value, optName)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		}else if(tmp.id == 'phoneNo'){
				if(!checkPhoneNo(tmp.value, optName, argLocale)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		}else if(tmp.id == 'ext'){
			if(!isEmpty(tmp.value, false)){
				if(!checkExtNo(tmp.value, optName, argLocale)){
					tmp.select();
					tmp.focus();
					return false;	
				}
			}
		}else if(tmp.id == 'faxNo1'){
			if(!isEmpty(tmp.value, false)){
				if(!checkFaxNo(tmp.value, optName, argLocale)){
					tmp.select();
					tmp.focus();
					return false;	
				}
			}
		}else if(tmp.id == 'message') {
				if(isEmpty(tmp.value,false)){
					if(optName){
						alert(optName + js_fn_NO_LET);	
					}
					tmp.select();
					tmp.focus();
					return false;	
				}
				
				if(!checkHTML(tmp.value,true, optName)){
					tmp.select();
					tmp.focus();
					return false;	
				}
				
				return true;
		/*}
		 Not in use at the moment
		else if(tmp.id == 'listname'){
				if(isEmpty(tmp.value,true )){
					if(optName){
						alert(optName + js_fn_NO_LET);	
					}
					tmp.select();
					tmp.focus();
					return false;	
				}
		*/}else if(tmp.id == 'organisationNo'){
				if(!checkOrganisationNo(tmp.value, optName, argLocale) ){
					tmp.select();
					tmp.focus();
					return false;	
				}
		}else if(tmp.id == 'company'){
				if(!checkCompanyName(tmp.value, optName)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		/* -not in use
		}else if(tmp.id == 'businessCardNo'){
				if(!checkBusinessCardNo(tmp.value, optName, argLocale)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		}else if(tmp.id == 'familyNo'){
				if(!checkFamilyNo(tmp.value, optName, argLocale)){
					tmp.select();
					tmp.focus();
					return false;	
				}
		*/
		}
		//Introduced to check that logon id has a valid email format
		else if(tmp.id == 'logonId'){
				if(!checkUsernameEmail(tmp.value, optName)){
					tmp.select();
					tmp.focus();
					return false;	
				}

		}

		
	}//end for loop 

	//if we get here everything is ok
	return true;
}


/**
*general function for validating company name fields
*the field must contain at least one character, the name can not
*contain any html chars, i.e < >
*
*sName, string = the name to be checked
*optName	string = Optional, description of field, e.g. Quantity (optional)
*			      Not provided -> No alertbox
**/
function checkCompanyName(sName, optName){
  if(sName.length > 1 && isEmpty(sName, false) == false){
  	return checkHTML(sName, true, optName);
  }
  if(optName){
    alert(optName+js_fn_NO_LET);
  }
  return false;
}



/**
*General function for validating organisation number fields.
*The function check the organisation field according to country specific rules.
*
*sName, string 		= the value to be checked
*optName	string = description of field, e.g. Quantity
*argLocale string 	=  info about locale, to distinguish between different countries(some country validation requires sepcial logic)
**/
function checkOrganisationNo(sNo, optName, argLocale){

  //validation rule for sweden
  if(argLocale == 'en_SE' || argLocale == 'sv_SE'){
	if( sNo.length == 10 && !isEmpty(sNo, false) && !isNaN(sNo) ){
	   return true;
	}
	if(optName){
	   alert(optName+js_fn_INVALID_ORGANISATION_NO);
	}
	return false;
  }else{
  	//other locale rules to be implemented if necessary
  }
  return true;
}



/**
*General function for validating phone fields.
*The method check the phone field according to country specific rules
*
*sNo, string 		= the value to be checked
*optName	string = description of field, e.g. Quantity
*argLocale string 	=  info about locale, to distinguish between different countries(some country validation requires sepcial logic)
**/
function checkPhoneNo(sNo, optName, argLocale){
	
	sNo = sNo.replace(/[ ]/g, "");
	
	if(argLocale == 'en_SE' || argLocale == 'sv_SE'){
//start swedish and master site rules(<13 digits)-----------------------------------------------
 		if( sNo.length < 13 && !isEmpty(sNo, false) && !isNaN(sNo) ){
 			return true;
 		}
 	}else if(argLocale == 'no_NO'){
//end-swedish rule-----------------------------------------------------------------------------
//start-norwegian rule-------------------------------------------------------------------------
 		if( (sNo.length == 8 || sNo.length == 5 ) && !isEmpty(sNo, false) && !isNaN(sNo) ){
 			return true;	
 		} 
//end-norwegian rule----------------------------------------------------------------------------	
//start france rule----------------------------------------------------------------------------- 	
	}else if(argLocale == 'fr_FR'){
		if(sNo.length > 1 && isEmpty(sNo, false) == false){
    		return true;
  		}
//start france rule----------------------------------------------------------------------------- 	
//start-switzerland rule------------------------------------------------------------------------
	}else if(argLocale.substr(3,2) == 'CH' ){
		if(sNo.length > 1 && isEmpty(sNo, false) == false && !isNaN(sNo)){
    		return true;
  		}
//end-switzerland rule----------------------------------------------------------------------------
//start-switzerland rule------------------------------------------------------------------------
	}else if(argLocale == 'de_AT' ){
		if(sNo.length > 1 && isEmpty(sNo, false) == false && !isNaN(sNo)){
    		return true;
  		}
//end-switzerland rule----------------------------------------------------------------------------
//start-germany rule------------------------------------------------------------------------
	}else if(argLocale == 'de_DE' ){
		if(sNo.length > 1 && isEmpty(sNo, false) == false && !isNaN(sNo)){
    		return true;
  		}
//end-germany rule----------------------------------------------------------------------------
//start-us rule------------------------------------------------------------------------
	}else if(argLocale == 'en_US' ){
		if(sNo.length > 1 && sNo.length <= 20 && isEmpty(sNo, false) == false && ! /[^xX0-9\(\)\+\-\s]/.test(sNo)  ){
    		return true;
  		}
//end-us rule----------------------------------------------------------------------------
//start-canada rule------------------------------------------------------------------------
	}else if(argLocale == 'en_CA' ){
		if(sNo.length >1 && sNo.length <= 20 && isEmpty(sNo, false) == false && ! /[^xX0-9\(\)\+\-\s]/.test(sNo)  ){
    			return true;
  		}
  	}else if(argLocale == 'fr_CA' ){
		if(sNo.length >1 && sNo.length <= 20 && isEmpty(sNo, false) == false && ! /[^xX0-9\(\)\+\-\s]/.test(sNo)  ){
    			return true;
  		}
//end-canada rule----------------------------------------------------------------------------
//start-danish rule-------------------------------------------------------------------------
	}else if(argLocale == 'da_DK' ){
 		if( (sNo.length == 8 || sNo.length == 5 ) && !isEmpty(sNo, false) && !isNaN(sNo) ){
 			return true;	
 		} 
//end-danish rule----------------------------------------------------------------------------
//all other countries
 	}else{ 
		if(sNo.length > 1 && isEmpty(sNo, false) == false){
    		return true;
  		}
  	}
  
  if(optName){
    alert(optName+js_fn_INVALID_PHONE);
  }
  return false;
}




/**
* General function for validating fax fields.
* The method check the fax field according to country specific rules
*
* sNo, string 		= the value to be checked
* optName	string 	= description of field, e.g. Quantity
* argLocale string 	=  info about locale, to distinguish between different countries(some country validation requires sepcial logic)
**/
function checkFaxNo(sNo, optName, argLocale){
	
	sNo = sNo.replace(/[ ]/g, "");
	
	if(argLocale == 'en_SE' || argLocale == 'sv_SE'){
//start swedish and master site rules(<13 digits)-----------------------------------------------
 		if( sNo.length < 13 && !isEmpty(sNo, false) && !isNaN(sNo) ){
 			return true;
 		}
//end- swedish and master site rules -----------------------------------------------------------
//start-us rule---------------------------------------------------------------------------------
	}else if(argLocale == 'en_US' ){
		if(sNo.length > 1 && sNo.length <= 20 && isEmpty(sNo, false) == false && ! /[^xX0-9\(\)\+\-\s]/.test(sNo)  ){
    		return true;
  		}
//end-us rule----------------------------------------------------------------------------
//start-canada rule------------------------------------------------------------------------
	}else if(argLocale == 'en_CA' ){
		if(sNo.length >1 && sNo.length <= 20 && isEmpty(sNo, false) == false && ! /[^xX0-9\(\)\+\-\s]/.test(sNo)  ){
    			return true;
  		}
  	}else if(argLocale == 'fr_CA' ){
		if(sNo.length >1 && sNo.length <= 20 && isEmpty(sNo, false) == false && ! /[^xX0-9\(\)\+\-\s]/.test(sNo)  ){
    			return true;
  		}
//end-canada rule----------------------------------------------------------------------------
//all other countries
 	}else{ 
		if(sNo.length > 1 && isEmpty(sNo, false) == false){
    		return true;
  		}
  	}
  
  if(optName){
    alert(optName+js_fn_INVALID_FAX);
  }
  return false;
}


/**
* General function for validating fax fields.
* The method check the fax field according to country specific rules
*
* sNo, string 		= the value to be checked
* optName	string 	= description of field, e.g. Quantity
* argLocale string 	=  info about locale, to distinguish between different countries(some country validation requires sepcial logic)
**/
function checkExtNo(sNo, optName, argLocale){
	
	sNo = sNo.replace(/[ ]/g, "");
	
	if(argLocale == 'en_SE' || argLocale == 'sv_SE'){
	//start swedish and master site rules(<13 digits)-----------------------------------------------
 		if( sNo.length < 13 && !isEmpty(sNo, false) && !isNaN(sNo) ){
 			return true;
 		}
//end- swedish and master site rules -----------------------------------------------------------
//start-us rule---------------------------------------------------------------------------------
	}else if(argLocale == 'en_US' ){
 		if( sNo.length < 11 && !isEmpty(sNo, false) && !isNaN(sNo) ){
    		return true;
  		}
//end-us rule----------------------------------------------------------------------------
//start-canada rule------------------------------------------------------------------------
	}else if(argLocale == 'en_CA' ){
 		if( sNo.length < 11 && !isEmpty(sNo, false) && !isNaN(sNo) ){
    			return true;
  		}
  	}else if(argLocale == 'fr_CA' ){
 		if( sNo.length < 11 && !isEmpty(sNo, false) && !isNaN(sNo) ){
    			return true;
  		}
//end-canada rule----------------------------------------------------------------------------
//all other countries
 	}else{ 
		if(sNo.length > 1 && isEmpty(sNo, false) == false){
    		return true;
  		}
  	}
  
  if(optName){
    alert(optName+js_fn_INVALID_EXT);
  }
  return false;
}





/**
*general function for checking an email address.
*
*sEmail, string = the email to be checked
*optName	string = Optional, description of field, e.g. Quantity (optional)
*			      Not provided -> No alertbox
**/
function checkEmail(sEmail, optName){
  //first check for html characters
  if( checkHTML(sEmail, false ) == false ){
    if(optName){
      alert(optName+js_fn_INVALID_EMAIL);
    }
    return false;
  }

  var c = new RegExp();
  c = /^(([-a-z0-9])|(\.)|(\_))+@([-a-z0-9]+\.)+(\D{2,6})$/i;

  if( (sEmail.length < 3) || c.test(sEmail) == false ){
    if(optName){
      alert(optName+js_fn_INVALID_EMAIL);
    } 
    return false;
  }

  //the email address was ok
  return true;  
}


/**
*general function for checking an Username email address.
*
*sEmail, string = the email to be checked
*optName	string = Optional, description of field, e.g. Quantity (optional)
*			      Not provided -> No alertbox
**/
function checkUsernameEmail(sEmail, optName){
  //first check for html characters
  if( checkHTML(sEmail, false ) == false ){
    if(optName){
      alert(optName+js_fn_INVALID_USERNAME_EMAIL);
    }
    return false;
  }

  var c = new RegExp();
  c = /^(([-a-z0-9])|(\.)|(\_))+@([-a-z0-9]+\.)+(\D{2,6})$/i;

  if( (sEmail.length < 3) || c.test(sEmail) == false ){
    if(optName){
      alert(optName+js_fn_INVALID_USERNAME_EMAIL);
    } 
    return false;
  }

  //the email address was ok
  return true;  
}


/**
*general function for validating quantity fields.
*Check that the number is a digit with no decimals, and that is not 0.
*The function also check for a upper limit
*
*rNum = Numeric value to be checked(string)
*optName	string = Optional, description of field, e.g. Quantity (optional)
*			      Not provided -> No alertbox
**/
function checkQuantity(rNum, optName){
	//first check if the field is empty
	if( isEmpty(rNum, false) ){
		if(optName){
				alert(optName + js_fn_NO_DIGIT);
		}
		return false;
	}
  return checkNum(rNum, 0, 1, 1, 0, 999, optName);
}


/**
*General function for validating first name fields.
*The field must contain only legal chars
*
*sName, string = the name to be checked
*optName string= Optional, description of field to be displayd with the error message, e.g. Namefield (optional)
*			      Not provided -> No alertbox
**/
function checkFirstName(sName, optName){
  if(sName.length > 1 && !isEmpty(sName, false)){
  	 return isLegal(sName, true, optName);
  }
  if(optName){
    alert(optName+js_fn_MISSINGFIRSTNAME);
  }
  
  return false;
}

/**
*General function for validating last name fields.
*The field must contain only legal chars
*
*sName, string = the name to be checked
*optName string= Optional, description of field to be displayd with the error message, e.g. Namefield (optional)
*			      Not provided -> No alertbox
**/
function checkLastName(sName, optName){
    if(sName.length > 1 && !isEmpty(sName, false)){
  	 return isLegal(sName, true, optName);
  }
  if(optName){
    alert(optName+js_fn_MISSINGLASTNAME);
  }
  
  return false;
}


/**
*General function for validating city name fields.
*The field must contain only legal chars and at least one character
*
*sName, string = the name to be checked
*optName	string = Optional, description of field, e.g. Quantity (optional)
*			      Not provided -> No alertbox
**/
function checkCity(sName, optName){
  if(sName.length >= 1){
    return isLegal(sName, true, optName);
  }else if(optName){
      alert(optName+js_fn_NO_LET);
  }
  return false;
}


function checkZipExt(sNo, optName, argLocale){
	if( sNo.length == 0  || !isNaN(sNo) ){
    		return true;
  	}else{
  		if(optName){
    		alert(optName+js_fn_INVALID);
  		}
  	}
}


/**
*General function for validating zip fields.
*The method check the zipcode according to country specific rules
*
*sName, string 		= the value to be checked
*optName	string = description of field, e.g. Quantity
*argLocale string 	=  info about locale, to distinguish between different countries(some country validation requires sepcial logic)
**/
function checkZip(sNo, optName, argLocale, country){
	
//outer if statement check for country spec
	if(argLocale == 'en_SE' || argLocale == 'sv_SE'){
//start swedish and master site rules(5 digits)-------------------
		if( isEmpty(sNo, false) ){
		  	if(optName){
    			alert(optName+js_fn_NO_DIGIT);
  			}
  			return false;
		}
 		if( sNo.length == 5  && !isNaN(sNo) ){
    		return true;
  		}
//end-swedish rule----------------------------------------------
//start-norwegian rule-------------------------------------------
 	}else if(argLocale == 'no_NO'){
		if( isEmpty(sNo, false) ){
  			if(optName){
    			alert(optName+js_fn_NO_DIGIT);
  			}
  			return false;
		}
 		if( sNo.length == 4  && !isNaN(sNo) ){
 			return true;	
 		} 	
//end-norwegian rule-------------------------------------------
//start-canadian rule-------------------------------------------
    }else if(argLocale == 'en_CA' || argLocale == 'fr_CA'){
        var regEx = new RegExp("^[a-zA-Z]\\d[a-zA-Z]\\s?\\d[a-zA-Z]\\d$");
    if (regEx.test(sNo)) {
        return true;
    }
//end-canadian rule-------------------------------------------
//start-us rule-------------------------------------------
    }else if(argLocale == 'en_US'){
        var regEx = new RegExp("^\\d{5}$");
    if (regEx.test(sNo)) {
             return true;
         }
//end-us rule-------------------------------------------
//start-fr rule-------------------------------------------
	}else if(argLocale == 'fr_FR'){
		if( sNo.length == 5  && checkHTML(sNo, true) ){
 			return true;	
 		} 	
//end-fr rule-------------------------------------------
//start-switzerland rule-------------------------------------------
	}else if(argLocale.substr(3,2) == 'CH' ){
		if( isEmpty(sNo, false) ){
		  	if(optName){
    			alert(optName+js_fn_NO_DIGIT);
  			}
  			return false;
		}
 		if( (sNo.length == 4 || sNo.length == 5)  && !isNaN(sNo) ){
    		return true;
  		}
//end-switzerland rule-------------------------------------------
//start-Austria rule-------------------------------------------
 	}else if(argLocale == 'de_AT'){
		if( isEmpty(sNo, false) ){
  			if(optName){
    			alert(optName+js_fn_NO_DIGIT);
  			}
  			return false;
		}
		if (country == 'DE' || country == 'IT') {
			if( sNo.length == 5  && !isNaN(sNo) ){
 				return true;	
 			}
		} else { 
	 		if( sNo.length == 4  && !isNaN(sNo) ){
 				return true;	
 			} 	
 		}
//end-Austria rule-------------------------------------------
//start-germany rule-------------------------------------------
	}else if(argLocale == 'de_DE' ){
		if( isEmpty(sNo, false) ){
		  	if(optName){
    			alert(optName+js_fn_NO_DIGIT);
  			}
  			return false;
		}
 		if( sNo.length == 5  && !isNaN(sNo) ){
    		return true;
  		}
//end-germany rule-------------------------------------------
//start-danish rule-------------------------------------------
	}else if(argLocale == 'da_DK' ){
		if( isEmpty(sNo, false) ){
		  	if(optName){
    			alert(optName+js_fn_NO_DIGIT);
  			}
  			return false;
		}
 		if( sNo.length == 4  && !isNaN(sNo) ){
    		return true;
  		}
//end-danishrule-------------------------------------------
//start-finish rule-------------------------------------------
	}else if(argLocale == 'fi_FI' ){
		if( isEmpty(sNo, false) ){
		  	if(optName){
    			alert(optName+js_fn_NO_DIGIT);
  			}
  			return false;
		}
 		if( sNo.length == 5  && !isNaN(sNo) ){
    		return true;
  		}
//end-finish rule-------------------------------------------
//all other countries
 	}else{ 
		if(sNo.length > 1 && isEmpty(sNo, false) == false){
    return true;
  }
  	}
  
  if(optName){
    	alert(optName+js_fn_INVALID_ZIPCODE);
  }
  return false;
}


/**
*General function for validating drop down fields.
*The function returns true if anything except the first 
*option in the drop down is selected.
*
*dropDown, 	object = drop down object to be checked
*optName	string = Optional, description of field, e.g. Quantity (optional)
*			      Not provided -> No alertbox
**/
function checkDropDown(dropDown, optName){
  if(dropDown.selectedIndex == 0){
	  if(optName){
	    alert(optName+js_fn_NO_SELECTED);
	  }
  	return false;
	}
	return true;
}



/**
*General function for validating state fields.
*The field must not be empty or contain any html chars.
*
*sName, 	string = the value to be checked
*optName	string = description of field, e.g. Quantity
*argLocale string 	=  info about locale, to distinguish between different countries(some country validation requires sepcial logic)
**/
function checkState(sName, optName, argLocale){
  if(sName.length > 1 && isEmpty(sName, false) == false){
     return checkHTML(sName, true, optName);
  }
  if(optName){
    alert(optName+js_fn_NO_LET);
  }
  return false;
}


/**
*general function for validating family number
*the field must contain at least one character
*
*sName, string = the name to be checked
*optName	string = description of field, e.g. Quantity
*argLocale string 	=  info about locale, to distinguish between different countries(some country validation requires sepcial logic)
**/
function checkFamilyNo(sNo, optName, argLocale){
  //if anything is filled in
  if(sNo.length > 1 && isEmpty(sNo, false) == false){
  	if( isNaN(sNo) ){
  		if(optName){
    		alert(optName+js_fn_INVALID);
  		}
  		return false;
  	}
    return true;
  }

}


/**
*general function for validating customer card number
*
*sName, string = the name to be checked
*optName	string = description of field, e.g. Quantity
*argLocale string 	=  info about locale, to distinguish between different countries(some country validation requires sepcial logic)
**/
function checkBusinessCardNo(sNo, optName, argLocale){
 //if anything is filled in
  if(sNo.length > 1 && isEmpty(sNo, false) == false){
  	if( isNaN(sNo) ){
  		if(optName){
    		alert(optName+js_fn_INVALID);
  		}
  		return false;
  	}
    return true;
  }
}
//end checkBusinessCardNo(....)



/**
*function for validating german IKEA family card
*
*sNO string  = the card number to be validated
**/
function check_fc_germany(card, length){
	var c = true;
	var lastnum=card.charAt((length-1));
	total=0;
	multifactor=1;
	for (var i = (length-2); i >= 0; i--){			
		if (multifactor == 1)
			multifactor=2;
		else
			multifactor=1;
		
		multitot=parseInt(card.charAt(i)) * multifactor;
		
		if (multitot > 9){
			st_multitot=multitot.toString();
			multitot=parseInt(st_multitot.charAt(0)) +  parseInt(st_multitot.charAt(1));
		}
		total+=multitot;
		
	} // for

	var st_total = total.toString();
	lasttot=10 - parseInt(st_total.charAt((st_total.length-1)));
	if (lasttot != lastnum){
		c=false;
	}
	return c;

}



/**
*general function for validating first address fields
*The field must contain at least one character and not contain any html chars, i.e < >
*
*sName, string = the name to be checked
*optName	string = Optional, description of field, e.g. Quantity (optional)
*			      Not provided -> No alertbox
**/
function checkAddress(sName, optName){
  if(sName.length > 1 && isEmpty(sName, false) == false){
  	return checkHTML(sName, true, optName);
  }
  if(optName){
    alert(optName+js_fn_NO_LET);
  }
  return false;
}


/**
*general function for checking strings for html tags/characters. 
*the function return true if the string contains no html charcters
*
*sField, string = the field to be checked
*ignoreColon boolean = value that indicate if the field to be checed for ':' character
*optName	string = Optional, description of field, e.g. Quantity (optional)
*			      Not provided -> No alertbox
**/
function checkHTML(sField,ignoreColon, optName){
  if (sField.search) {
		if( (ignoreColon && sField.search(/[\<\>]/) != -1)  || (!ignoreColon && sField.search(/[\<\>\:]/) != -1 )   ){ 
        if(optName){
          alert(optName+js_fn_INVALID_CHAR);
        }
        return false;
    }
	}
	return true;
}


/**
*general function for checking if an field is empty,  
*the function returns true if the field is empty and false otherwise
*
*sString, string = 					the field to be checked
*ignoreWhiteSpace boolean = value that indicate if blanks are allowed or not, 
*														i.e false meanse that the function returns true if the field contains only blank
*/
function isEmpty(sString, ignoreWhiteSpace) {
	if(sString.length < 1 )
		return true;
	if(!ignoreWhiteSpace){
	  var regex = new RegExp("[^\\s]");
	  var validField = regex.test(sString);
	  
	  if(!validField)
				return true;
	}
	return false;
}

 
//
// THIS IS THE OLD VERSION THAT CAN'T HANDLE UTF-8 CHARACTERS. IT IS
// NOT USED ANYMORE. I JUST LEFT IT HERE AS BACKUP... [BJOF]
//
//Check that a string contains only valid letters
//Valid letters are a-z,A-Z, country specific chars.' and -
//
//string string = the string to validate
//ignoreWhiteSpace boolean = value that indicate if blanks are allowed or not
//optName	= description of field(string) to be displayed with alert message, e.g. Quantity 
//			  Not provided -> No alertbox
function isLegal_ASCII(string, ignoreWhiteSpace, optName) {
	if (string.search) {
		if ((ignoreWhiteSpace && string.search(/[^a-zA-Z'.\x2d\xc0-\xd6\xd8-\xf6\xf8-\xff\xe4-\xe6\s]/) != -1) 
                || (!ignoreWhiteSpace && string.search(/[^a-zA-Z'\xe4-\xe6]/) != -1)){ 
                
                if(optName){
                  alert(optName+js_fn_INVALID_CHAR);
                }
                return false;
    }
	}
	return true;
}

//Check that a string contains only valid letters. If blanks are allowed,
// any character is legal. Otherwise, any character except space or tab
// is allowed!
//
//string string = the string to validate
//ignoreWhiteSpace boolean = value that indicate if blanks are allowed or not
//optName	= description of field(string) to be displayed with alert message, e.g. Quantity 
//			  Not provided -> No alertbox
function isLegal(string, ignoreWhiteSpace, optName) {
	if (string.search) {
		if (!ignoreWhiteSpace && String.search(/\s/) != -1){ 
                
                if(optName){
                  alert(optName+js_fn_INVALID_CHAR);
                }
                return false;
    }
	}
	return true;
}

function checkNum(rNum,rDec,rPos,rZero, optMin, optMax, optName){
//rNum		= Numeric value to be checked (string)
//rDec		= Number of decimals [>=0]
//rPos		= Positive numbers only [1,0] - true,false
//rZero		= 0 is a valid nummer [1,0] - true, false
//optMin	= The minumum value (optional)
//optMax	= The maximum value (optional)	
//optName	= Optional, description of field(string), e.g. Quantity (optional)
//			  Not provided -> No alertbox
	//Position of comma is at first position/Not a valid number/Number is empty
	if (isNaN(rNum) || rNum=="" || rNum.indexOf(".")==0 || rNum.indexOf(",")==0){	
		if (optName){
			alert(optName+js_fn_INVALID);
		}
		return false;
	}
	
	var floatVal=parseFloat(rNum);
	
	//If no decimals and a comma or dot is available in text
	if (rDec==0 && (rNum.indexOf(".")!=-1 || rNum.indexOf(",")!=-1)){
		if (optName){
			alert(optName+js_fn_NO_DEC);
		}
		return false;
	}
	
	//If valid no of decimals are larger than 0
	if (rDec>0){
		if (rNum.indexOf(".")!=-1){
			var dotPos=rNum.indexOf(".");
		}
		if (rNum.indexOf(",")!=-1){
			var dotPos=rNum.indexOf(",");
		}
		if (dotPos && rNum.length-dotPos-1>rDec){
			if (optName){
				alert(optName+js_fn_MAX_DEC+" ("+rDec+")!");
			}
			return false;
		}
	}
	
	//If only pos no are allowed and value is negative
	if (rPos==1 && floatVal<0){
		if (optName){
			alert(optName+js_fn_NEG_NBR);
		}
		return false;
	}
	
	//If zero is not possible and value = 0
	if (rZero==0 && floatVal==0){
		if (optName){
			alert(optName+js_fn_NOT_Z);
		}
		return false;
	}
	
	//if optMax
	if (optMax){
		if (optMax<floatVal){
			if (optName){
				alert(optName+js_fn_MAX+" ("+optMax+")!");
			}
			return false;
		}
	}
	
	//if optMin
	if (optMin){
		if (optMin>floatVal){
			if (optName){
				alert(optName+js_fn_MIN+" ("+optMin+")!");
			}
			return false;
		}
	}
	
	return true;
}



function checkCardNumber(rNum,rDec,rPos,rZero, optMin, optMax, optName){
//rNum		= Numeric value to be checked (string)
//rDec		= Number of decimals [>=0]
//rPos		= Positive numbers only [1,0] - true,false
//rZero		= 0 is a valid nummer [1,0] - true, false
//optMin	= The minumum value (optional)
//optMax	= The maximum value (optional)	
//optName	= Optional, description of field(string), e.g. Quantity (optional)
//			  Not provided -> No alertbox
	//Position of comma is at first position/Not a valid number/Number is empty
	if (isNaN(rNum) || rNum=="" || rNum.indexOf(".")==0 || rNum.indexOf(",")==0){	
		if (optName){
			alert(optName+js_fn_INVALID);
		}
		return false;
	}
	
	var floatVal=parseFloat(rNum);
	
	//If zero is not possible and value = 0
	if (rZero==0 && floatVal==0){
		if (optName){
			alert(optName+js_fn_NOT_Z);
		}
		return false;
	}
	
	//if optMax
	if (optMax){
		if (optMax<floatVal){
			if (optName){
				alert(optName+js_pay_CARD_TO_LONG);
			}
			return false;
		}
	}
	
	//if optMin
	if (optMin){
		if (optMin>floatVal){
			if (optName){
				alert(optName+js_fn_MIN+" ("+optMin+")!");
			}
			return false;
		}
	}
	
	return true;
}

/**
* Gets an object in a browser independent way.
*/
function getObject(theObjectName) {
    var myobject;
    //netscape 6 && ie 5>
    if (document.getElementById){
        myobject = document.getElementById(theObjectName);
    }
    else if (document.all){ //Explorer 4
        myobject = document.all[theObjectName];
    }
    else {
        alert (js_fn_NOT_VALID_BROWSER);
    return false;
    }

    return myobject;
}