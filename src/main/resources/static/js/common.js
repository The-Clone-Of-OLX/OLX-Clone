function ajaxindicatorstart(text,url) { 
    if ($('body').find('#resultLoading').attr('id') != 'resultLoading') {
        $('body').append('<div id="resultLoading" style="display:none"><div><img src="'+url+'app-assets/images/anmation.gif" style="height:100px;width:100px;"><div id="divtext">' + text + '</div></div><div class="bg"></div></div>');
    }
    else {
        $("#divtext").html(text)
    }

    $('#resultLoading').css({
        'width': '100%',
        'height': '100%',
        'position': 'fixed',
        'z-index': '10000000',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'margin': 'auto'
    });
	
    $('#resultLoading .bg').css({
        'background': '#000000',
        'opacity': '0.7',
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'top': '0'
    });
	
    $('#resultLoading>div:first').css({
        'width': '100%',
        'height': '75px',
        'text-align': 'center',
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'margin': 'auto',
        'font-size': '16px',
        'z-index': '10',
        'color': '#ffffff'

    });
	
    $('#resultLoading .bg').height('100%');
    $('#resultLoading').fadeIn(1000);
    $('body').css('cursor', 'wait');
}

function ajaxindicatorstop() {
    $('#resultLoading .bg').height('100%');
    $('#resultLoading').fadeOut(500);
    $('body').css('cursor', 'default');
}

//function to append msgs to the DOM
function appendLogin(form,msg,errorClass){
  $('.error').remove();
  if(typeof(msg) == 'object'){
    $.each(msg,function(m,k){
		if (m.indexOf('[]') > -1)
		{
			$(form+' input[name="'+m+'"]').parent().parent().parent('div').append('<span id="'+m+'-error" class="error">'+k+'</span>');
		}
		else
		{
			$(form+' input[name="'+m+'"]').parent('label').append('<div id="'+m+'-error" class="error" text-align="left">'+k+'</div>');
            $(form+' select[name="'+m+'"]').parent('label').append('<div id="'+m+'-error" class="error">'+k+'</div>');
            $(form+' textarea[name="'+m+'"]').parent('label').append('<div id="'+m+'-error" class="error">'+k+'</div>');
		}
    });
    }
    else{
      if(errorClass != ''){
      $(form+' '+errorClass).html(msg);
      }
    }
}


function appendMsgs(form,msg,errorClass){
  $('.error').remove();
  if(typeof(msg) == 'object'){
    console.log(msg);
    $.each(msg,function(m,k){
        if (m.indexOf('[]') > -1)
        {
            $(form+' input[name="'+m+'"]').parent().parent().parent('div').append('<span id="'+m+'-error" class="error">'+k+'</span>');
        }
        else
        {
            $(form+' input[name="'+m+'"]').parent('div').append('<span id="'+m+'-error" class="error">'+k+'</span>');
        }
        $(form+' select[name="'+m+'"]').parent('div').append('<span id="'+m+'-error" class="error">'+k+'</span>');
        $(form+' textarea[name="'+m+'"]').parent('div').append('<span id="'+m+'-error" class="error">'+k+'</span>');
    });
    }
    else{
      if(errorClass != ''){
      $(form+' '+errorClass).html(msg);
      }
    }
}
