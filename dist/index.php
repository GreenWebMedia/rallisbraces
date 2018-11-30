<!DOCTYPE html>
<html <?php language_attributes(); ?> role='main'>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <?php wp_head(); ?>
</head>
<body>
  <div id='app' role='application'></div>
  <?php wp_footer(); ?>
  <script type="text/javascript">
    WebFontConfig = {
      google: { families: [ 'Open+Sans:400,600' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
  
  <script>
    var timeOut;
function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
        window.scrollBy(0,-50);
        timeOut=setTimeout('scrollToTop()',10);
    }
    else clearTimeout(timeOut);
}
</script>

 <script type="text/javascript">
          function validateFormAppoint() { 
            var flname = document.getElementById("flname").value;
            var emailID = document.getElementById("emailID").value;
            var yphone = document.getElementById("yphone").value;
            var commentID = document.getElementById("commentID").value;
            var atpos = emailID.indexOf("@");
            var dotpos = emailID.lastIndexOf(".");
            if (flname == "") {
                alert("Please Enter Your Name");
                return false;
            } else if (emailID == "") {
                alert("Please enter an email address.");
                return false;
            } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailID.length) {
                alert("Please enter a valid email address.");
                return false;
            } else if (yphone == "") {
                alert("Please Enter Your Phone Number");
                return false;
            }
        }
      </script>

 <script type="text/javascript">
          function validateFriend() { 
            var flname1 = document.getElementById("flname1").value;
            var emailID1 = document.getElementById("emailID1").value;
            var referfriend = document.getElementById("referfriend").value;
            var ptientphone = document.getElementById("ptientphone").value;
            var patientemail = document.getElementById("patientemail").value;
            var relationship = doncument.getElementById("relationship").value;
            var atpos = emailID.indexOf("@");
            var dotpos = emailID.lastIndexOf(".");
            var atpos = patientemail.indexOf("@");
            var dotpos = patientemail.lastIndexOf(".");
            if (flname1 == "") {
                alert("Please Enter Your Name");
                return false;
            } else if (emailID1 == "") {
                alert("Please enter an email address.");
                return false;
            } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailID.length) {
                alert("Please enter a valid email address.");
                return false;            
            }
            else if (referfriend == "") {
                alert("Patient's Phone Number");
                return false;
            } else if (ptientphone == "") {
                alert("Please Enter Your Phone Number");
                return false;
            } else if (patientemail == "") {
                alert("Please Enter an Patient's Email Address.");
                return false;
            } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=patientemail.length) {
                alert("Please Enter a valid Patient's Email Address.");
                return false;            
            }
            else if (relationship == "") {
                alert("Please Enter Relationship to New Patient");
                return false;
            }
        }
      </script>

 <script type="text/javascript">
          function validatePost() { 
            var describeyourexperience = document.getElementById("describeyourexperience").value;
            var describewithdoctor = document.getElementById("describewithdoctor").value;
            var favoritething = document.getElementById("favoritething").value;
            var improvearea = document.getElementById("improvearea").value;
            var overallexperience = document.getElementById("overallexperience").value;
            var commentsuggestion = document.getElementById("commentsuggestion").value;
            var furtherdiscuss = document.getElementById("furtherdiscuss").value;
            var yourname = document.getElementById("yourname").value;
            var emailID = document.getElementById("emailID").value;            
            var atpos = youremailaddress.indexOf("@");
            var dotpos = youremailaddress.lastIndexOf(".");
            if (yourname == "") {
                alert("Please Enter Your Name");
                return false;
            } else if (emailID == "") {
                alert("Please enter an email address.");
                return false;
            } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailID.length) {
                alert("Please enter a valid email address.");
                return false;
            }            
        }
      </script>
      
<script type="text/javascript">
  // sidebar toggle

function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//call btn

function openCall() {
    document.getElementById("mySidecall").style.width = "280px";
}

function closeCall() {
    document.getElementById("mySidecall").style.width = "0";
}

function about() {
   var x = document.getElementById("about");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  document.getElementById("cosmetic").style.display = "none";
    document.getElementById("missing").style.display = "none";
    document.getElementById("other").style.display = "none";
    document.getElementById("suresmilerallis").style.display = "none";
    document.getElementById("contactrallis").style.display = "none";
}
function cosmetic() {
   var x = document.getElementById("cosmetic");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  document.getElementById("about").style.display = "none";
    document.getElementById("missing").style.display = "none";
    document.getElementById("other").style.display = "none";
      document.getElementById("suresmilerallis").style.display = "none";
    document.getElementById("contactrallis").style.display = "none";
}
function missing() {
   var x = document.getElementById("missing");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  document.getElementById("about").style.display = "none";
    document.getElementById("cosmetic").style.display = "none";
    document.getElementById("other").style.display = "none";
      document.getElementById("suresmilerallis").style.display = "none";
    document.getElementById("contactrallis").style.display = "none";
}
function other() {
   var x = document.getElementById("other");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  document.getElementById("about").style.display = "none";
    document.getElementById("missing").style.display = "none";
    document.getElementById("cosmetic").style.display = "none";
    document.getElementById("suresmilerallis").style.display = "none";
    document.getElementById("contactrallis").style.display = "none";
}
function suresmilerallis() {
   var x = document.getElementById("suresmilerallis");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  document.getElementById("about").style.display = "none";
    document.getElementById("missing").style.display = "none";
    document.getElementById("cosmetic").style.display = "none";
    document.getElementById("other").style.display = "none";
    document.getElementById("contactrallis").style.display = "none";
}

function contactrallis() {
   var x = document.getElementById("contactrallis");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  document.getElementById("about").style.display = "none";
    document.getElementById("missing").style.display = "none";
    document.getElementById("cosmetic").style.display = "none";
     document.getElementById("other").style.display = "none";
    document.getElementById("suresmilerallis").style.display = "none";
}


//sidebar nav

$(document).ready(function(){
    $(".has-submenu").click(function(){
        $(this).toggleClass("has-submenu-clicked");
    $(this).siblings().removeClass("has-submenu-clicked");
    });
});


$(document).ready(function(){
    $(".mobile-nav-btn").click(function(){
        $("#mySidecall").css("width", "0px");
    });
  $(".mobile-call").click(function(){
        $("#mySidenav").css("width", "0px");
    });
});
</script>

<script type="text/javascript">
function getDropDown(sel){
  hideAll();
  document.getElementById(sel.options[1].value).style.display 
  = 'block';
}

function hideAll(){
  document.getElementById("pro-name-emial").style.display = 'none';  
}
</script>
</body>
</html>
