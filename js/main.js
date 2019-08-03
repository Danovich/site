/*loader*/
window.onload = function() {
  this.console.log('All Systems Go!');
  let loader=document.getElementById('loader');
  loader.style.opacity = '0';
  loader.style.visibility = 'hidden';
};

/*test*/
// Object.assign(yourelement.style,{fontsize:"12px",left:"200px",top:"100px"});
// const setStylesOnElement = function(styles, element){
//   Object.assign(element.style, styles);
// }


var scene = document.getElementById('text-box');
var parallaxInstance = new Parallax(scene);

var rellax = new Rellax('.rellax');

window.sr = ScrollReveal();
sr.reveal('.feature-box');



// Find all menu links
var navLinks = document.querySelectorAll('.navigation-link');
// For each menu link
var index = 0, length = navLinks.length;
for ( ; index < length; index++) {
    // Attach click event, on click call close function
    navLinks[index].addEventListener('click',
        function () {
            //slideLeft.close();
            document.getElementById("nav-toggle").checked = false;
        }
    );
}



/*form*/
let form=document.getElementById('cform');
form.onsubmit = function(e){
  e.preventDefault();
  let captcha=document.getElementById('captcha');
  let inputName=document.getElementById('input-name');
  let alert=document.querySelector('.alert-success');
  let msg=document.querySelector('.form-msg');
    if (captcha.value!=2) {
      captcha.value='';
      captcha.focus();

    }else{
      //captcha.classList.remove('wrong');
      form.style.opacity = '0';
      form.style.visibility = 'hidden'
      alert.style.display = 'block';
      msg.innerHTML=`Thank You ${inputName.value}! Your message has been sent.`


    //formFooter.classList.remove("form-submit");

      //form.submit();
    }
};

function getElem(id){
  return document.getElementById(id);
}
getElem('cform').onsubmit = function(e){
  e.preventDefault();
  getElem('btnSubmit').disabled=true;
  getElem('btnSubmit').innerHTML='Sending...';

  let formData=new FormData();
  formData.append('name',getElem('input-name').value);
  formData.append('email',getElem('input-email').value);
  formData.append('msg',getElem('input-message').value);

  let ajax=new XMLHttpRequest();
  ajax.open('POST', 'contact.php');
  ajax.onreadystatechange=function(){
    if (ajax.readyState==4 && ajax.status==200) {
        if (ajax.responseText=='success') {
          getElem('cform').style.opacity = '0';
          getElem('cform').style.visibility = 'hidden';
          let name=getElem('input-name').value;
          getElem('form-msg').innerHTML=`Thank You ${name}! Your message has been sent.`;
        }else{
          getElem('btnSubmit').innerHTML=ajax.responseText;
          getElem('btnSubmit').disabled=false;
        }
    }
  }
  ajax.send(formData);
}




/*
$.ajax({
  url: 'mailer/feedback.php',
  type: 'post',
  dataType: 'json',
  data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&subject='+ $("#cform").find('input[name="subject"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
  beforeSend: function() {

  },
  complete: function() {

  },
  success: function(data) {
    $('#cform').fadeOut();
    $('.alert-success').delay(1000).fadeIn();
  }
});
*/

/*type*/
/*
typer('.heading-primary-sub')
  .line('And I build websites.')
  .pause(3000)
  .back(15)
  .continue('design websites.')
  .pause(3000)
  .back(17)
  .continue('\'m a frontend dev.')
  .end();
*/

/*typeV2*/
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [" build websites.", " design websites.", "'m a frontend dev."];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".heading-primary-sub").innerHTML = 'And I'+text.substring(0, i+1) +'<span aria-hidden="true" class="blink"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 3000);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});


/*particles*/
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "../img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);