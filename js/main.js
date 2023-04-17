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
