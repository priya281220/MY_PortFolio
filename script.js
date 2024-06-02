// Script File

// Home Section Starts
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);
//function for skills and nav hover
function hover(element) {
    element.style.backgroundColor = "#f0f0f0";
  }

  function unhover(element) {
    element.style.backgroundColor = "#ffffff";
  }
function showText(id) {
	document.getElementById(id + '-text').style.display = 'inline-block';
  }
  
  function hideText(id) {
	document.getElementById(id + '-text').style.display = 'none';
  }

function navigateToSection(sectionId) {
    window.location.href = "#" + sectionId; // Navigate to the section
}
///////////////////////////////////////


function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends 

// Portfolio Section Starts
var $galleryContainer = $('.gallery').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
	$('.button-group .button').removeClass('active');
	$(this).addClass('active');

	var value = $(this).attr('data-filter');
	$galleryContainer.isotope({
		filter: value
	})
})

// magnific popup
$('.gallery').magnificPopup({
	delegate: '.overlay a',
	type: 'image',
	gallery:{
		enabled: true
	}
})
// Portfolio Section Ends

// Testimonials Section Starts
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})



    function openInNewTab(url) {
        // Show loading indicator
        var loadingDiv = document.createElement('div');
        loadingDiv.innerHTML = 'Loading...';
        loadingDiv.style.position = 'fixed';
        loadingDiv.style.top = '50%';
        loadingDiv.style.left = '50%';
        loadingDiv.style.transform = 'translate(-50%, -50%)';
        loadingDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        loadingDiv.style.padding = '20px';
        loadingDiv.style.borderRadius = '10px';
        document.body.appendChild(loadingDiv);

        // Open the URL in a new tab after a delay
        setTimeout(function() {
            window.open(url, '_blank');
            // After opening the new tab, remove the loading indicator
            loadingDiv.remove();
        }, 1000); // Adjust the delay time as needed
    }

