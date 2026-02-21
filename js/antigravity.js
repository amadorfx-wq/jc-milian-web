document.addEventListener('DOMContentLoaded', () => {

    /* --- Navigation Scroll Effect --- */
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    /* --- Antigravity Scroll Reveal Logic --- */
    const revealElements = document.querySelectorAll('.ag-reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    /* --- Before/After Slider Logic --- */
    const sliderContainer = document.querySelector('.slider-container');
    const sliderHandle = document.querySelector('.slider-handle');
    const sliderClip = document.querySelector('.slider-clip');

    if (sliderContainer && sliderHandle && sliderClip) {
        let isDragging = false;

        const setSliderPosition = (xPos) => {
            const rect = sliderContainer.getBoundingClientRect();
            // Calculate percentage
            let percent = ((xPos - rect.left) / rect.width) * 100;

            // Constrain
            if (percent < 0) percent = 0;
            if (percent > 100) percent = 100;

            sliderHandle.style.left = `${percent}%`;
            sliderClip.style.width = `${percent}%`;
        };

        const onDragStart = (e) => {
            isDragging = true;
        };

        const onDragEnd = () => {
            isDragging = false;
        };

        const onDrag = (e) => {
            if (!isDragging) return;
            // Handle both touch and mouse
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            setSliderPosition(clientX);
        };

        sliderHandle.addEventListener('mousedown', onDragStart);
        sliderHandle.addEventListener('touchstart', onDragStart, { passive: true });

        window.addEventListener('mouseup', onDragEnd);
        window.addEventListener('touchend', onDragEnd);

        window.addEventListener('mousemove', onDrag);
        window.addEventListener('touchmove', onDrag, { passive: true });
    }

    /* --- Form Validation Aesthetics (Micro-interactions) --- */
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(input => {
        // Prevent label overlap if browser auto-fills on load
        if (input.value !== '') {
            input.classList.add('has-val');
        }
        input.addEventListener('blur', () => {
            if (input.value !== '') {
                input.classList.add('has-val');
            } else {
                input.classList.remove('has-val');
            }
        });
    });

    /* --- Interactive Process Logic --- */
    const processSteps = document.querySelectorAll('.step-item');
    processSteps.forEach(step => {
        step.addEventListener('click', () => {
            // Remove active from all
            processSteps.forEach(s => s.classList.remove('active'));
            // Add to clicked
            step.classList.add('active');
        });
    });

    /* --- Portfolio Gallery Selector Logic --- */
    const portData = {
        kitchen: {
            title: "Buckhead Kitchen Remodel",
            after: "images/kitchen-after.jpg",
            before: "images/kitchen-before.jpg",
            location: "Buckhead, Atlanta",
            duration: "12 Weeks",
            materials: "Calacatta Marble · White Oak",
            budget: "$65,000 – $80,000"
        },
        bathroom: {
            title: "Roswell Master Bath",
            after: "images/bathroom-after.jpg",
            before: "images/bathroom-before.jpg",
            location: "Roswell, Georgia",
            duration: "8 Weeks",
            materials: "Carrara Marble · Matte Black",
            budget: "$35,000 – $45,000"
        },
        basement: {
            title: "Alpharetta Entertainment Room",
            after: "images/basement-after.jpg",
            before: "images/basement-before.jpg",
            location: "Alpharetta, Georgia",
            duration: "14 Weeks",
            materials: "Luxury Vinyl Plank · Wet Bar",
            budget: "$40,000 – $55,000"
        }
    };

    const portBtns = document.querySelectorAll('.port-btn');
    const portTitle = document.getElementById('portfolio-title');
    const portImgAfter = document.getElementById('port-img-after');
    const portImgBefore = document.getElementById('port-img-before');
    const portLocation = document.getElementById('port-location');
    const portDuration = document.getElementById('port-duration');
    const portMaterials = document.getElementById('port-materials');
    const portBudget = document.getElementById('port-budget');


    // We need to reset slider position when changing
    const resetSliderPosition = () => {
        if (sliderHandle && sliderClip) {
            sliderHandle.style.left = `50%`;
            sliderClip.style.width = `50%`;
        }
    };

    portBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            portBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Update content based on data-target
            const target = e.target.getAttribute('data-target');
            const data = portData[target];

            if (data) {
                // Subtle fade transition for text
                portTitle.style.opacity = 0;
                setTimeout(() => {
                    portTitle.textContent = data.title;
                    portTitle.style.opacity = 1;
                }, 300);

                portImgAfter.src = data.after;
                portImgBefore.src = data.before;

                portLocation.textContent = data.location;
                portDuration.textContent = data.duration;
                if (portMaterials) portMaterials.textContent = data.materials;
                if (portBudget) portBudget.textContent = data.budget;

                resetSliderPosition();
            }
        });
    });

    /* --- Reviews Interactive Carousel --- */
    const reviewDots = document.querySelectorAll('.review-controls .dot');
    const reviewSlides = document.querySelectorAll('.review-slide');

    reviewDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideId = e.target.getAttribute('data-slide');

            // Update active dot
            reviewDots.forEach(d => d.classList.remove('active'));
            e.target.classList.add('active');

            // Show corresponding slide
            reviewSlides.forEach(slide => {
                slide.style.display = 'none';
                slide.classList.remove('active');
            });
            const targetSlide = document.getElementById(`review-${slideId}`);
            if (targetSlide) {
                targetSlide.style.display = 'block';
                targetSlide.classList.add('active');
            }
        });
    });

});
