/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
let navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillscontent = document.getElementsByClassName('skills__content')
const skillHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillscontent.length; i++) {
        skillscontent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills)
})



/*==================== NOTICE SHOW/NOSHOW  ====================*/
const buttonNoticeListener = document.getElementById('button__notice')
const Notice = document.getElementById('container__notice')

function actionNotice() {
    Notice.remove()
}

buttonNoticeListener.addEventListener('click', actionNotice)


/*==================== QUALIFICATION TABS ====================*/
const qualification__button = document.querySelectorAll('.qualification__button')
// const work_button = document.getElementsByClassName('qualification__button work button button--flex')
// const edu_button = document.getElementsByClassName('qualification__button edu button button--flex')



function qualificationAction() {
    const className = this.className
    console.log("Qd: ", className)

    if (className === 'qualification__button edu button button--flex') {
        document.getElementById('education').classList.add('qualification__active')
        document.getElementById('work').classList.remove('qualification__active')
        // work_button.classList.remove('active')
        // edu_button.classList.add('active')
    }
    if (className === 'qualification__button work button button--flex') {
        document.getElementById('work').classList.add('qualification__active')
        document.getElementById('education').classList.remove('qualification__active')
        // edu_button.classList.remove('active')
        // work_button.classList.add('active')

    }
}


qualification__button.forEach(e => { e.addEventListener('click', qualificationAction) })


/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/



/*==================== Play with Colors ====================*/
// document.getElementById("slideHue").onchange = function() {changeHueColor()};

function changeHueColor() {
    
    var value_range = document.getElementById('slideHue').value
    var r = document.querySelector(':root');
    r.style.setProperty('--hue-color', value_range )
    document.getElementById("valueofhue").innerText = value_range 

}
 
function changeBgColor() {

    var value_range = document.getElementById('bgHue').value
    // console.log('BG hue : ',value_range)
    var r = document.querySelector(':root');
    r.style.setProperty('--hue-body-color', value_range )
    document.getElementById("valueofbghue").innerText = value_range 

}
 
function changeMenuColor() {

    var value_range = document.getElementById('menuHue').value
    // console.log('BG hue : ',value_range)
    var r = document.querySelector(':root');
    r.style.setProperty('--hue-menu-color', value_range )
    document.getElementById("valueofmenuhue").innerText = value_range 

}


function togglecolorbars(){
    let color_button = document.getElementById('color-tab-alt_button')
    let color_play_tab = document.getElementById('color-play-tab')
    // console.log('color tabs : ',color_play_tab)
    color_button.classList.remove('color-tab-alt_button-show')
    color_button.classList.add('color-tab-alt_button-no-show')
    color_play_tab.classList.remove('tab-no-show')
    color_play_tab.classList.add('tab-show')
}

function hidecolobars(){
    let color_button = document.getElementById('color-tab-alt_button')
    let color_play_tab = document.getElementById('color-play-tab')
    // console.log('color tabs : ',color_play_tab)
    color_button.classList.add('color-tab-alt_button-show')
    color_button.classList.remove('color-tab-alt_button-no-show')
    color_play_tab.classList.add('tab-no-show')
    color_play_tab.classList.remove('tab-show')
}