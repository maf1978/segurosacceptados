// Smooth scroll to referral form
function scrollToReferralForm() {
    const insuranceSection = document.querySelector('.insurance-section');
    insuranceSection.scrollIntoView({ behavior: 'smooth' });
}

// Sticky header behavior
let lastScroll = 0;
const header = document.querySelector('.sticky-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.classList.remove('scroll-down');
    }
    lastScroll = currentScroll;
});
