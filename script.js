/* ========================================================
   UNIVERSITÉ GASTON BERGER - SCRIPTS INTERACTIFS
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Close on link click
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

    // 2. Search Drawer Toggle
    const searchToggle = document.getElementById('searchToggle');
    const searchDrawer = document.getElementById('searchDrawer');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchToggle && searchDrawer && closeSearchBtn) {
        searchToggle.addEventListener('click', () => {
            searchDrawer.classList.toggle('active');
            if (searchDrawer.classList.contains('active')) {
                searchInput.focus();
            }
        });

        closeSearchBtn.addEventListener('click', () => {
            searchDrawer.classList.remove('active');
        });
    }

    // 3. Admission Modal
    const openModalBtn = document.getElementById('openAdmissionModal');
    const admissionModal = document.getElementById('admissionModal');
    const closeModalBtn = document.getElementById('closeModal');
    const admissionForm = document.getElementById('admissionForm');
    const modalSuccess = document.getElementById('modalSuccess');

    if (openModalBtn && admissionModal && closeModalBtn) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            admissionModal.classList.add('active');
        });

        closeModalBtn.addEventListener('click', () => {
            admissionModal.classList.remove('active');
        });

        admissionModal.addEventListener('click', (e) => {
            if (e.target === admissionModal) {
                admissionModal.classList.remove('active');
            }
        });

        if (admissionForm) {
            admissionForm.addEventListener('submit', (e) => {
                e.preventDefault();
                modalSuccess.style.display = 'block';
                setTimeout(() => {
                    admissionModal.classList.remove('active');
                    modalSuccess.style.display = 'none';
                    admissionForm.reset();
                }, 2500);
            });
        }
    }

    // 4. Smooth Navbar Background on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(20, 15, 12, 0.98)';
            header.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.backgroundColor = 'rgba(26, 19, 15, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // 5. Testimonial Dots Switcher
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    console.log('UGB Site loaded with excellence!');
});
