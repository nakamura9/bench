var activeLink ='hero-link'
var currentLocation

window.onload = function(){
    //sets the active nav element
    var features = document.getElementById('features').offsetTop
    var modules  = document.getElementById('modules').offsetTop
    var packages = document.getElementById('packages').offsetTop
    var testimonials = document.getElementById('testimonials').offsetTop
    var contact = document.getElementById('contact').offsetTop
    
   

    this.document.addEventListener('scroll', function(){
        currentLocation = window.pageYOffset
        if(currentLocation >= features && currentLocation < modules && activeLink != 'features-link'){
            document.getElementById('features-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'features-link'
        }else if(currentLocation >= modules && currentLocation < packages && activeLink != 'modules-link'){
            document.getElementById('modules-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'modules-link'
        }else if(currentLocation >= packages && currentLocation < testimonials && activeLink != 'packages-link'){
            document.getElementById('packages-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'packages-link'
        }else if(currentLocation >= testimonials && currentLocation < contact && activeLink != 'testimonials-link'){
            document.getElementById('testimonials-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'testimonials-link'
        }else if(currentLocation >= contact && activeLink != 'contact-link'){
            document.getElementById('contact-link').classList.add('active')
            document.getElementById(activeLink).classList.remove('active')
            activeLink = 'contact-link'
        }
    })


}


function setActiveModule(evt){
    const name =  $(evt.currentTarget).data('name')
    if(window.screen.width < 575) {
        $('.mobile-dropdown').removeClass('active')
    }else {
        $('.module-link-li').removeClass('active')
    }
    $(evt.currentTarget).addClass('active')
    
    
    //update views
    $('.module-view').removeClass('active')
    $('#' + name).addClass('active')

    
}

$('.module-link-li, .mobile-dropdown').on('click', setActiveModule)

// function mobileView()


// function expandContract(){
//     var sales_mobile = document.getElementById(sales)
//     sales_mobile.classList.add('active')

// }

// function expandContract(){
//     const el = document.getElementById("expand-contract")
//     el.classList.toggle('expand')
//     el.classList.toggle('collapsed')
// }

// var mobile_test = document.getElementById('sales-mobile')
// var i

// for (i=0; i<mobile_test.length; i++){
//     mobile_test[i].addEventListener("click", function() {
//         this.classList.toggle("active")
//     })
// }

// function mobile_view(){
//     var x = document.getElementById("mbsales")
//     if (x.style.display === "none"){
//         x.style.display = "block"
//     }else {
//         x.style.display = "none"
//     }
// }

function showNav(){
    var target = document.getElementById('nav');
    target.classList.toggle('nav-visible')
}

// function mobileView(){
//     var target = document.getElementById('sales-mobile')
//     target.classList.toggle('active')
// }
