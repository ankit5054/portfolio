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
    console.log("Qd: ",className)

    if (className === 'qualification__button edu button button--flex') {
        document.getElementById('education').classList.add('qualification__active')
        document.getElementById('work').classList.remove('qualification__active')
        // work_button.classList.remove('active')
        // edu_button.classList.add('active')
    }
    if(className === 'qualification__button work button button--flex') {
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
