
function CheckEmail(email) {
		   
    var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');

    return (reg.test(email));
}



$(document).ready(function(e) {
    


function dbCheckUserName()
{
	if ($('#reg-name').val() == '')  {
	     	$("#reg-name").parent().addClass('error');
		    return false;  
	}

	ret = false;
	
	$.ajax({
		
		url: $("#RegisterForm").attr('action'),
		data: 'action=check_username&username=' + $("#reg-name").val(), 
		dataType: 'json', 
		type : 'POST', 
		beforeSend: function() {
			$('#reg-name').addClass('ajax-loading');
		},
		success: function (r) {
		      if (r.ok == true) { 
			    $("#reg-name").parent().removeClass('error');
               ret = true;

			  }
			   else 
			  {
				$("#reg-name").parent().addClass('error');  
			   ret = false;
			  }
			  
		}, 
		complete: function() {
			$('#reg-name').removeClass('ajax-loading');
		}
		
		});	 
		
	return ret;			  
}

function dbCheckEmail()
{
  	if ($('#reg-email').val() == '' || ! CheckEmail($('#reg-email').val())) {
	       $("#reg-email").parent().addClass('error'); 
		    return false; 
	} 
			
	var ret = false; 
	$('#reg-email').addClass('ajax-loading');
	$.ajax({
		
		url: $("#RegisterForm").attr('action'),
		data: 'action=check_email&email=' + $("#reg-email").val(), 
		dataType: 'json', 
		type : 'POST', 
		beforeSend: function() {
			$('#reg-email').addClass('ajax-loading');
		},
		success: function (r) {
		      if (r.ok == true) { 
			    $("#reg-email").parent().removeClass('error');
               ret = true;

			  }
			   else 
			  {
				$("#reg-email").parent().addClass('error');  
			   ret = false;
			  }
			  
		}, 
		complete: function() {
			$('#reg-email').removeClass('ajax-loading'); 
		}
		
		});	 
		
	return ret;	
	
}

function CheckPassword()
{
	var ret= false;
  if ( $('#reg-password').val()	== '' ) {
          $('#reg-password').parent().addClass('error');
          ret= false;
	} else {
	  	 $('#reg-password').parent().removeClass('error');
		ret = true;
	}
    return ret;
}

$('#reg-name').change(function(e) {
    return dbCheckUserName();
});

$('#reg-email').blur(function(e) {
    return dbCheckEmail();
});

$('#reg-password').focusout(function(e) {
    return CheckPassword();
});

$("#RegisterForm").submit(function() {
 /*  if(dbCheckUserName() && dbCheckEmail() && CheckPassword()) 
       {  return true; }
	  else 
	  {
		 $("body").scrollTo( 0, 800, {queue:true});
            return false; 
	  }
	*/
});


function checkSignInUsername()
{
	var username = $('#name'); 
  if (username.val() == '' ) 
     {
		username.parent().addClass('error'); 
		 return false;  
	 }
	 else 
	 {
		username.parent().removeClass('error'); 
		return true;  
	 }
}

function checkSignInPass() 
{
  var password = $('#password'); 
  
  if (password.val() == '')
     {
		 password.parent().addClass('error'); 
		 return false;  
	 }
	 else 
	 {
		 password.parent().removeClass('error');
		 return true; 
	 }
}

$('#name').blur(function(e) {
    return checkSignInUsername();
});

$('#password').blur(function(e) {
    return checkSignInPass();
});

$("#SignInForm").submit(function(e) {
  
  //return checkSignInUsername() &&  checkSignInUsername();
	
});
});