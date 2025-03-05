//Navbar
const burgerIcon = document.querySelector('.burger-icon');
const navbarMenu = document.querySelector('.navbar-menu');
const menuItems = navbarMenu.querySelectorAll('a');

function toggleMenu() {
    burgerIcon.toggleAttribute('aria-expanded');

    burgerIcon.classList.toggle('toggle');

    if (navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
        setTimeout(() => {
            navbarMenu.style.display = 'none';
        }, 500);
    } else {
        navbarMenu.style.display = 'flex';
        requestAnimationFrame(() => {
            navbarMenu.classList.add('active');
        });
    }
}

burgerIcon.addEventListener('click', toggleMenu);

burgerIcon.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMenu();
    }
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            burgerIcon.classList.remove('toggle');
            burgerIcon.setAttribute('aria-expanded', 'false');

            setTimeout(() => {
                navbarMenu.style.display = 'none';
            }, 500);
        }
    });
});


//Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    const enFlag = document.getElementById('enFlag');
    const ruFlag = document.getElementById('ruFlag');
    
    const currentLanguage = window.location.pathname.includes('/ru') ? 'ru' : 'en';
    
    if (currentLanguage === 'en') {
        ruFlag.style.display = 'block';
        enFlag.style.display = 'none';
    } else {
        enFlag.style.display = 'block';
        ruFlag.style.display = 'none';
    }

    enFlag.addEventListener('click', function() {
        window.location.href = window.location.pathname.replace(/^\/ru/, '/en');
    });

    ruFlag.addEventListener('click', function() {
        window.location.href = window.location.pathname.replace(/^\/en/, '/ru');
    });
});

//Footer
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const contactsContainer = document.querySelector("#contactActions");
    const toTopButton = document.querySelector("#toTopButton");
    if (window.scrollY > 150) {
        contactsContainer.style.display = "block";
        toTopButton.style.display = "block";
    } else {
        contactsContainer.style.display = "none";
        toTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

