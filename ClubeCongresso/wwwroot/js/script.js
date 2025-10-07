// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const nav = document.getElementById("nav")

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active")
    nav.classList.toggle("active")
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active")
        nav.classList.remove("active")
    })
})

// ===================================
// Header Scroll Effect
// ===================================
const header = document.getElementById("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }

    lastScroll = currentScroll
})

// ===================================
// Swiper Initialization
// ===================================
const testimonialsSwiper = new Swiper(".testimonials-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
})

// ===================================
// Fancybox Initialization
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar o carregamento completo do Fancybox
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind('[data-fancybox="gallery"]', {
            // Configurações da galeria
            groupAll: true,
            groupAttr: 'data-fancybox',
            
            // Toolbar personalizada
            Toolbar: {
                display: {
                    left: ["infobar"],
                    middle: [
                        "zoomIn",
                        "zoomOut",
                        "toggle1to1",
                        "rotateCCW",
                        "rotateCW",
                        "flipX",
                        "flipY",
                    ],
                    right: ["slideshow", "thumbs", "close"],
                },
            },
            
            // Miniaturas
            Thumbs: {
                autoStart: true,
                minScreenHeight: 500,
            },
            
            // Configurações de imagem
            Images: {
                zoom: true,
                Panzoom: {
                    maxScale: 3,
                },
            },
            
            // Animações
            showClass: "fancybox-zoomInUp",
            hideClass: "fancybox-zoomOutDown",
            
            // Interface
            animated: true,
            hideScrollbar: true,
            
            // Navegação por teclado
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowRight: "next",
                ArrowLeft: "prev",
            },
        });
    } else {
        console.error('Fancybox não foi carregado corretamente');
    }
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Here you would typically send the data to a server
    console.log("Form submitted:", data)

    // Show success message (you can customize this)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")

    // Reset form
    contactForm.reset()
})

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))

        if (target) {
            const headerHeight = header.offsetHeight
            const targetPosition = target.offsetTop - headerHeight

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            })
        }
    })
})

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, observerOptions)

// Observe elements for fade-in animation
document.querySelectorAll(".benefit-card, .testimonial-card, .contact-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
})
