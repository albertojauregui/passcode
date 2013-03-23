$(function(){
    $("#inp-domain").focus();
    $("#inp-submit").on('click',function(){
	$("#msg").html("").hide();
	var domain = $("#inp-domain").val();
	var passwd = $("#inp-passwd").val();
	var msg = "";
	var errors = 0;
	if(!domain){msg += "+ The domain is required<br />";errors++;}
	if(!passwd){msg += "+ The password is required<br />";errors++;}
	if(errors){$("#msg").html(msg).show();$("#inp-passcode").val("");}else{$.get("generate.pl",{domain:domain, passwd:passwd},function(data){$("#inp-passcode").val(data);});}
      });
  });
