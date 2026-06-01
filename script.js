        const breadcrumb = document.querySelector('.breadcrumb');
        const navLinks = document.querySelectorAll('nav a');

        // Update breadcrumb when clicking menu
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const pageName = this.dataset.name;
                breadcrumb.textContent = `Home > ${pageName}`;
            });
        });

        // Update breadcrumb while scrolling
        const sections = document.querySelectorAll('section');

        window.addEventListener('scroll', () => {
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;

                if (window.scrollY >= sectionTop) {
                    currentSection = section.id;
                }
            });

            
        });