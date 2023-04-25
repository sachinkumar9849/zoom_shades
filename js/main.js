


$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  //jquery for expand and collapse the sidebar
  $(".menu-btn").click(function () {
    $(".side-bar").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
  });

  $(".close-btn").click(function () {
    $(".side-bar").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
  });
});
// menu mobile end
$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function(e) {
  if ($('.search-toggle').hasClass('closed')) {
    $('.search-toggle').removeClass('closed').addClass('opened');
    $('.search-toggle, .search-container').addClass('opened');
    $('#search-terms').focus();
  } else {
    $('.search-toggle').removeClass('opened').addClass('closed');
    $('.search-toggle, .search-container').removeClass('opened');
  }
});

// search mobile end 
(function() {

  var parent = document.querySelector(".range-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);
			
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();

// product list price range end 

let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});
on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})

// price short end 

const buttons = document.querySelectorAll("button");
const minValue = 1;
const maxValue = 10;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // 1. Get the clicked element
    const element = event.currentTarget;
    // 2. Get the parent
    const parent = element.parentNode;
    // 3. Get the number (within the parent)
    const numberContainer = parent.querySelector(".number");
    const number = parseFloat(numberContainer.textContent);
    // 4. Get the minus and plus buttons
    const increment = parent.querySelector(".plus");
    const decrement = parent.querySelector(".minus");
    // 5. Change the number based on click (either plus or minus)
    const newNumber = element.classList.contains("plus")
      ? number + 1
      : number - 1;
    numberContainer.textContent = newNumber;
    console.log(newNumber);
    // 6. Disable and enable buttons based on number value (and undim number)
    if (newNumber === minValue) {
      decrement.disabled = true;
      numberContainer.classList.add("dim");
      // Make sure the button won't get stuck in active state (Safari)
      element.blur();
    } else if (newNumber > minValue && newNumber < maxValue) {
      decrement.disabled = false;
      increment.disabled = false;
      numberContainer.classList.remove("dim");
    } else if (newNumber === maxValue) {
      increment.disabled = true;
      numberContainer.textContent = `${newNumber}+`;
      element.blur();
    }
  });
});

// input increase end 

$(document).ready(function() {

  $('.slideshow-thumbnails').hover(function() { changeSlide($(this)); });

  $(document).mousemove(function(e) {
    var x = e.clientX; var y = e.clientY;
    
    var x = e.clientX; var y = e.clientY;

    var imgx1 = $('.slideshow-items.active').offset().left;
    var imgx2 = $('.slideshow-items.active').outerWidth() + imgx1;
    var imgy1 = $('.slideshow-items.active').offset().top;
    var imgy2 = $('.slideshow-items.active').outerHeight() + imgy1;

    if ( x > imgx1 && x < imgx2 && y > imgy1 && y < imgy2 ) {
      $('#lens').show(); $('#result').show();
      imageZoom( $('.slideshow-items.active'), $('#result'), $('#lens') );
    } else {
      $('#lens').hide(); $('#result').hide();
    }

  });
  
});

function imageZoom( img, result, lens ) {

  result.width( img.innerWidth() ); result.height( img.innerHeight() );
  lens.width( img.innerWidth() / 2 ); lens.height( img.innerHeight() / 2 );

  result.offset({ top: img.offset().top, left: img.offset().left + img.outerWidth() + 10 });

  var cx = img.innerWidth() / lens.innerWidth(); var cy = img.innerHeight() / lens.innerHeight();

  result.css('backgroundImage', 'url(' + img.attr('src') + ')');
  result.css('backgroundSize', img.width() * cx + 'px ' + img.height() * cy + 'px');

  lens.mousemove(function(e) { moveLens(e); });
  img.mousemove(function(e) { moveLens(e); });
  lens.on('touchmove', function() { moveLens(); })
  img.on('touchmove', function() { moveLens(); })

  function moveLens(e) {
    var x = e.clientX - lens.outerWidth() / 2;
    var y = e.clientY - lens.outerHeight() / 2;
    if ( x > img.outerWidth() + img.offset().left - lens.outerWidth() ) { x = img.outerWidth() + img.offset().left - lens.outerWidth(); }
    if ( x < img.offset().left ) { x = img.offset().left; }
    if ( y > img.outerHeight() + img.offset().top - lens.outerHeight() ) { y = img.outerHeight() + img.offset().top - lens.outerHeight(); }
    if ( y < img.offset().top ) { y = img.offset().top; }
    lens.offset({ top: y, left: x });
    result.css('backgroundPosition', '-' + ( x - img.offset().left ) * cx  + 'px -' + ( y - img.offset().top ) * cy + 'px');
  }
}


function changeSlide(elm) {
  $('.slideshow-items').removeClass('active');
  $('.slideshow-items').eq( elm.index() ).addClass('active');
  $('.slideshow-thumbnails').removeClass('active');
  $('.slideshow-thumbnails').eq( elm.index() ).addClass('active');
}

// product detail end 
// product detail end 

$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky-bar", window.scrollY > 50);
  });
});
// sticky end
$(document).ready(function(){
	$('.category_list').hover(function(){ 
    	$('.category_list-item').show();
	}, function(){
        $('.category_list-item').hide();
    });
});

$(document).ready(function() {
  BindControls();
});
// category show hide end 

                          
function BindControls() {
  var Countries = ['ARGENTINA', 
      'Man Sunglassess', 
      'Man Sunglassess', 
      'Man SunglassessMan SunglassessMan Sunglassess', 
      'Man Sunglassess',
      'Man Sunglassess', 
      'Man Sunglassess', 
      'Man Sunglassess', 
      'Man Sunglassess', 
      'Man Sunglassess',
      'Man Sunglassess'];

  $('#tbCountries').autocomplete({
      source: Countries,
      minLength: 0,
      scroll: true
  }).focus(function() {
      $(this).autocomplete("search", "");
  });
}



var h;
var m;
var s;
function init(){
 h='15';
 m='15';
 s='60';
  clock();
}
function clock(){
  s--;
  if(s==0)
    {
      s=59;
      m--;
      if (m==0)
        {
          m=59;
          h--;
          if(h==0) 
            {
              h=24;
            }

        }
    }
   change('seconds',s);
  change('minutes',m);
  change('hours',h);
  setTimeout(clock,1000);
}
function change(id,val){
   if(val<10){
     val='0'+val;
   }
    document.getElementById(id).innerHTML=val;
}
window.onload=init();
///////////////////////////// flash end 

$('.slider_right').slick({
  dots: false,
  autoplay: true,
  arrows: false,

  infinite: true,
  speed: 300,
  slidesToShow: 3,
  vertical: true,
    verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    
  ]
});
// home slider right 
$('.flash_slider').slick({
  dots: false,
  autoplay: true,
  arrows: true,

  infinite: true,
  speed: 300,
  slidesToShow: 5,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    
  ]
});
// home slider right 
$('.best_selling-slider').slick({
  dots: false,
  autoplay: true,
  arrows: true,

  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    
  ]
});
// home slider right 

// slider end 

// let $ = document
// let liContainer = $.querySelector(".autocom-box")
// let inputElem = $.querySelector("input")
// let searchInput = $.querySelector(".search-input")

// let suggestions = [
//     "Channel",
//     "CodingLab",
//     "CodingNepal",
//     "YouTube",
//     "YouTuber",
//     "YouTube Channel",
//     "Blogger",
//     "Bollywood",
//     "Vlogger",
//     "Vechiles",
//     "Facebook",
//     "Freelancer",
//     "Facebook Page",
//     "Designer",
//     "Developer",
//     "Web Designer",
//     "Web Developer",
//     "Login Form in HTML & CSS",
//     "How to learn HTML & CSS",
//     "How to learn JavaScript",
//     "How to become Freelancer",
//     "How to become Web Designer",
//     "How to start Gaming Channel",
//     "How to start YouTube Channel",
//     "What does HTML stands for?",
//     "What does CSS stands for?",
// ];

// inputElem.addEventListener("keyup", function(){
// 	let inputValue = inputElem.value
// 	if(inputValue){
// 		searchInput.classList.add("active")
// 		let filteredWord = suggestions.filter(function(word){
// 			return word.toLowerCase().includes(inputValue.toLowerCase())
// 			// return word.toLowerCase().startsWith(inputValue.toLowerCase())
// 		})
		
// 		suggestionWordsGenerator(filteredWord)
		
// 	} else{
// 		searchInput.classList.remove("active")
// 	}
	
// })

// let customListItem

// function suggestionWordsGenerator(wordArray){
// 	let suggestionWord = wordArray.map(function(word){
// 		return "<li>" + word + "</li>"
// 	}).join("")
	
// 	if(suggestionWord){
// 		liContainer.innerHTML = suggestionWord
// 	}else{
// 		liContainer.innerHTML = "<li>" + inputElem.value + "</li>"
// 	}
// 	Select()
// }

// function Select (){
// 	let allListItems = liContainer.querySelectorAll("li")
// 	allListItems.forEach(function(wordItem){
// 		wordItem.addEventListener("click",function(e){
// 			inputElem.value = e.target.textContent
// 			searchInput.classList.remove("active")
// 		})
// 	})
// }

// const users = [
// 	{id: 1, name: 'ali', age: 22},
// 	{id: 2, name: 'akbar', age: 25},
// 	{id: 3, name: 'amir', age: 24},
// 	{id: 4, name: 'amin', age: 23},
// ]

// let usersCount = users.length
// function isLogin(userID) {
// 	let isUserInUsers = users.some(user => user.id === userID)
// 	return isUserInUsers
// }

// function userRegister(name,age) {
// 	let userObj = {
// 		id: Math.floor(Math.random() * 100),
// 		name: name,
// 		age: age
// 	}
// 	users.push(userObj)
// 	return users
// }

// export {suggestions,isLogin,userRegister,usersCount}
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// slide up end