$(function(){

  

  $(window).scroll(function(){
  		if($(document).scrollTop()>500){  			
  			$("#nav_normale").addClass("scroll");
  		} else{
  			$("#nav_normale").removeClass("scroll");
  		}
  	});

  
  $(".plus").click(function(){
  		if ($(this).next().is(":visible")){
  			$(this).next().fadeOut(500);
  			$(this).html("En savoir plus");
  		} else{
  			$(this).next().fadeIn(500);
  			$(this).html("OK merci!");
  		}
  });

  $("#popup_conf").click(function(){
      $("#popup_conf_content").css("display", "block");
      $("#opacite").css("display", "block");
      $(".close").click(function(){
        $("#popup_conf_content").css("display", "none");
        $("#opacite").css("display", "none");
        })
  });

  $("#ml").click(function(){
      $("#mentionslegales").css("display", "block");
      $("#opacite").css("display", "block");
      $(".close").click(function(){
        $("#mentionslegales").css("display", "none");
        $("#opacite").css("display", "none");
        })
  });

  $("#envoyer").click(function(e){
    e.preventDefault();
    var name = $("#nom").val();
    var mail = $("#email").val();
    var comment = $("#message").val();
    var rgpd = $("#confidentialite").is(':checked');
    var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;    

    if (!isNaN(name) || name.length == 0)
    {
    $("#result").html("le nom ne peut être numérique et est obligatoire "); 
    }
    else
    {
      if (!myRegex.test(mail))
      {
      $("#result").html("le mail n'est pas correct"); 
      }
      else
      { if (comment.length == 0)
        {
        $("#result").html("le commentaire est obligatoire "); 
        }
        else
        {
          if (!$("#confidentialite").is(':checked'))
          {
          $("#result").html("vous devez valider notre politique de confidentialité des données ");  
          }
          else
          {         
            $.ajax({
            url : "../function/envoi.php",
            type : 'POST',
            data : { "name" : name, "mail" : mail, "comment" : comment, "rgpd" : $("#confidentialite").is(':checked') },
            dataType : 'json',
            success : function(donnees, statut){ // success est toujours en place, bien sûr !
            $("#result").html(donnees);
            },
            error : function(resultat, statut, erreur){
            $("#result").html("erreur : "+erreur+" status : "+status);  
            }
            });
          }
        }
      }
    }

});

emergence.init();

});




