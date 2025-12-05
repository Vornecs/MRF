/* ============================================
   DEFENSE COUNSEL - MAIN JAVASCRIPT
   Handles theme switching, navigation, forms, and interactivity
   ============================================ */

// ============================================
// SAMPLE COUNSELOR DATA
// ============================================

const counselorData = [
    {
        id: 1,
        name: "Sarah Mitchell",
        title: "Senior Mediator",
        specialization: "Commercial Disputes",
        bio: "Sarah brings over 15 years of experience in mediating high-stakes commercial disputes. Her strategic approach and calm demeanor have resolved over 200 complex cases.",
        experience: "15+ years",
        education: "J.D. from Columbia Law School, B.A. in Economics from Yale University",
        achievements: [
            "Successfully mediated $50M+ technology sector dispute",
            "Certified Professional Mediator (CPM)",
            "Frequent speaker at ADR conferences",
            "Published author on negotiation strategies"
        ]
    },
    {
        id: 2,
        name: "James Chen",
        title: "Arbitration Specialist",
        specialization: "Intellectual Property",
        bio: "James is an expert arbitrator with specialization in intellectual property disputes. He has served as arbitrator in over 150 cases involving patents, trademarks, and copyrights.",
        experience: "18+ years",
        education: "J.D. from Harvard Law School, M.S. in Computer Science from MIT",
        achievements: [
            "Arbitrator for WIPO (World Intellectual Property Organization)",
            "Expert witness in 40+ IP litigation cases",
            "Board member of International Arbitration Association",
            "Recognized leader in tech sector dispute resolution"
        ]
    },
    {
        id: 3,
        name: "Dr. Elizabeth Rodriguez",
        title: "Principal Counsel",
        specialization: "Settlement Negotiation",
        bio: "Elizabeth combines legal expertise with psychology training to achieve breakthrough settlements. Her innovative approach to understanding stakeholder interests leads to creative solutions.",
        experience: "20+ years",
        education: "J.D. from Stanford Law School, Ph.D. in Behavioral Psychology",
        achievements: [
            "Negotiated settlements exceeding $200M in aggregate",
            "Developed proprietary negotiation framework",
            "Advisory board member of National Mediation Association",
            "Recipient of Distinguished Service Award"
        ]
    },
    {
        id: 4,
        name: "Michael Foster",
        title: "Employment Law Mediator",
        specialization: "Labor & Employment",
        bio: "Michael specializes in resolving complex employment disputes and labor relations issues. His empathetic approach helps both employers and employees reach mutually satisfactory outcomes.",
        experience: "12+ years",
        education: "J.D. from Northwestern Law School, B.A. in Labor Studies",
        achievements: [
            "Mediator for 500+ employment disputes",
            "Expert in EEOC mediation",
            "Published researcher on workplace conflict resolution",
            "Member of American Arbitration Association"
        ]
    },
    {
        id: 5,
        name: "Jennifer Walsh",
        title: "Real Estate Disputes Counsel",
        specialization: "Real Estate",
        bio: "Jennifer's deep knowledge of real estate law and market dynamics makes her invaluable in property disputes. She has resolved disputes ranging from residential to large commercial projects.",
        experience: "14+ years",
        education: "J.D. from University of Michigan Law School, M.B.A. from Wharton",
        achievements: [
            "Resolved 300+ real estate disputes",
            "Expert on construction project disputes",
            "Speaker at real estate industry conferences",
            "Certified Real Estate Negotiator"
        ]
    },
    {
        id: 6,
        name: "David Park",
        title: "International Arbitrator",
        specialization: "Cross-Border Disputes",
        bio: "David specializes in complex international arbitrations involving multiple jurisdictions. His multilingual background and global experience make him ideal for cross-border disputes.",
        experience: "16+ years",
        education: "J.D. from Yale Law School, LL.M. from London School of Economics",
        achievements: [
            "Arbitrator in 25+ international cases",
            "Fluent in English, Mandarin, and Spanish",
            "Fellow of Chartered Institute of Arbitrators",
            "Author of books on international ADR"
        ]
    }
];

// ============================================
// THEME MANAGEMENT
// ============================================

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.htmlElement = document.documentElement;
        this.storageKey = 'defense-counsel-theme';
        this.init();
    }

    init() {
        this.loadTheme();
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                this.setTheme(e.matches ? 'dark' : 'light', false);
            });
        }
    }

    loadTheme() {
        const savedTheme = localStorage.getItem(this.storageKey);
        
        if (savedTheme) {
            this.setTheme(savedTheme, false);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setTheme('dark', false);
        } else {
            this.setTheme('light', false);
        }
    }

    toggleTheme() {
        const currentTheme = this.htmlElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme, true);
    }

    setTheme(theme, save = true) {
        this.htmlElement.setAttribute('data-theme', theme);
        
        if (save) {
            localStorage.setItem(this.storageKey, theme);
        }
    }
}

// ============================================
// NAVIGATION MANAGEMENT
// ============================================

class NavigationManager {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.pages = document.querySelectorAll('.page');
        this.init();
    }

    init() {
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }

    handleNavClick(e) {
        const link = e.currentTarget;
        const pageId = link.getAttribute('data-page');
        
        if (pageId) {
            this.showPage(pageId);
            this.closeMenu();
        }
    }

    showPage(pageId) {
        // Hide all pages
        this.pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show selected page
        const selectedPage = document.getElementById(
            pageId === 'home' ? 'home' :
            pageId === 'counsel' ? 'counsel' :
            pageId === 'services' ? 'services' :
            pageId === 'about' ? 'about' :
            pageId === 'contact' ? 'contact' :
            pageId === 'representation' ? 'representation-request' :
            pageId === 'internship' ? 'internship' : 'home'
        );

        if (selectedPage) {
            selectedPage.classList.add('active');
            window.scrollTo(0, 0);
        }

        // Update active nav link
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
    }
}

// ============================================
// COUNSELOR CARD MANAGEMENT
// ============================================

class CounselorManager {
    constructor() {
        this.container = document.getElementById('counselorsGrid');
        this.init();
    }

    init() {
        this.renderCounselors();
    }

    renderCounselors() {
        this.container.innerHTML = '';
        
        counselorData.forEach(counselor => {
            const card = this.createCounselorCard(counselor);
            this.container.appendChild(card);
        });
    }

    createCounselorCard(counselor) {
        const card = document.createElement('div');
        card.className = 'counselor-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-expanded', 'false');
        
        const achievementsList = counselor.achievements
            .map(achievement => `<li>${achievement}</li>`)
            .join('');
        
        card.innerHTML = `
            <div class="counselor-header">
                <div class="counselor-avatar">${this.getInitials(counselor.name)}</div>
                <div class="counselor-name">${counselor.name}</div>
                <div class="counselor-title">${counselor.title}</div>
            </div>
            <div class="counselor-preview">
                <div class="counselor-specialization">${counselor.specialization}</div>
                <div class="expand-icon">▼</div>
            </div>
            <div class="counselor-details">
                <div class="counselor-details-content">
                    <div class="detail-section">
                        <div class="detail-label">Bio</div>
                        <div class="detail-content">${counselor.bio}</div>
                    </div>
                    <div class="detail-section">
                        <div class="detail-label">Experience</div>
                        <div class="detail-content">${counselor.experience}</div>
                    </div>
                    <div class="detail-section">
                        <div class="detail-label">Education</div>
                        <div class="detail-content">${counselor.education}</div>
                    </div>
                    <div class="detail-section">
                        <div class="detail-label">Notable Achievements</div>
                        <ul style="margin-left: 1rem; margin-top: 0.5rem;">
                            ${achievementsList}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => this.toggleCard(card));
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleCard(card);
            }
        });

        return card;
    }

    toggleCard(card) {
        // Close other cards
        document.querySelectorAll('.counselor-card').forEach(c => {
            if (c !== card) {
                c.classList.remove('expanded');
                c.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current card
        card.classList.toggle('expanded');
        card.setAttribute('aria-expanded', card.classList.contains('expanded'));
    }

    getInitials(name) {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
    }
}

// ============================================
// FORM MANAGEMENT
// ============================================

class FormManager {
    constructor() {
        this.representationForm = document.getElementById('representationForm');
        this.internshipForm = document.getElementById('internshipForm');
        
        if (this.representationForm) {
            this.representationForm.addEventListener('submit', (e) => this.handleRepresentationSubmit(e));
        }
        
        if (this.internshipForm) {
            this.internshipForm.addEventListener('submit', (e) => this.handleInternshipSubmit(e));
        }
    }

    handleRepresentationSubmit(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('repName').value,
            email: document.getElementById('repEmail').value,
            phone: document.getElementById('repPhone').value,
            caseType: document.getElementById('caseType').value,
            caseDescription: document.getElementById('caseDescription').value,
            contactMethod: document.getElementById('contactMethod').value,
            urgency: document.getElementById('urgency').value
        };

        if (this.validateRepresentationForm(formData)) {
            this.submitForm(formData, 'representation', 'formMessage');
        }
    }

    handleInternshipSubmit(e) {
        e.preventDefault();
        
        const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
            .map(input => input.value)
            .join(', ');

        const formData = {
            name: document.getElementById('intName').value,
            email: document.getElementById('intEmail').value,
            phone: document.getElementById('intPhone').value,
            educationLevel: document.getElementById('educationLevel').value,
            school: document.getElementById('school').value,
            yearOfStudy: document.getElementById('yearOfStudy').value,
            resume: document.getElementById('resumeFile').value,
            coverLetter: document.getElementById('coverLetter').value,
            interests: interests,
            availability: document.getElementById('availability').value
        };

        if (this.validateInternshipForm(formData)) {
            this.submitForm(formData, 'internship', 'internshipFormMessage');
        }
    }

    validateRepresentationForm(data) {
        let isValid = true;
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        if (!data.name.trim()) {
            this.showError('nameError', 'Name is required');
            isValid = false;
        } else if (data.name.trim().length < 2) {
            this.showError('nameError', 'Name must be at least 2 characters');
            isValid = false;
        }

        if (!data.email.trim()) {
            this.showError('emailError', 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(data.email)) {
            this.showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        if (!data.phone.trim()) {
            this.showError('phoneError', 'Phone number is required');
            isValid = false;
        } else if (!this.isValidPhone(data.phone)) {
            this.showError('phoneError', 'Please enter a valid phone number');
            isValid = false;
        }

        if (!data.caseType) {
            this.showError('caseTypeError', 'Please select a case type');
            isValid = false;
        }

        if (!data.caseDescription.trim()) {
            this.showError('caseDescriptionError', 'Case description is required');
            isValid = false;
        } else if (data.caseDescription.trim().length < 20) {
            this.showError('caseDescriptionError', 'Please provide a detailed case description (at least 20 characters)');
            isValid = false;
        }

        if (!data.contactMethod) {
            this.showError('contactMethodError', 'Please select a contact method');
            isValid = false;
        }

        if (!data.urgency) {
            this.showError('urgencyError', 'Please select an urgency level');
            isValid = false;
        }

        return isValid;
    }

    validateInternshipForm(data) {
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        if (!data.name.trim()) {
            this.showError('intNameError', 'Name is required');
            isValid = false;
        }

        if (!data.email.trim()) {
            this.showError('intEmailError', 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(data.email)) {
            this.showError('intEmailError', 'Please enter a valid email address');
            isValid = false;
        }

        if (!data.phone.trim()) {
            this.showError('intPhoneError', 'Phone number is required');
            isValid = false;
        }

        if (!data.educationLevel) {
            this.showError('educationLevelError', 'Please select education level');
            isValid = false;
        }

        if (!data.school.trim()) {
            this.showError('schoolError', 'School/University is required');
            isValid = false;
        }

        if (!data.yearOfStudy) {
            this.showError('yearOfStudyError', 'Please select year of study');
            isValid = false;
        }

        if (!data.resume) {
            this.showError('resumeFileError', 'Please upload your resume');
            isValid = false;
        }

        if (!data.coverLetter.trim()) {
            this.showError('coverLetterError', 'Cover letter is required');
            isValid = false;
        }

        if (!data.interests) {
            this.showError('interestsError', 'Please select at least one area of interest');
            isValid = false;
        }

        if (!data.availability.trim()) {
            this.showError('availabilityError', 'Availability is required');
            isValid = false;
        }

        return isValid;
    }

    showError(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }

    submitForm(data, formType, messageElementId) {
        const messageEl = document.getElementById(messageElementId);
        
        // Show success message
        messageEl.textContent = 'Thank you! Your submission has been received. We will contact you shortly.';
        messageEl.classList.add('success');
        messageEl.classList.remove('error');

        // Reset form
        if (formType === 'representation') {
            this.representationForm.reset();
        } else if (formType === 'internship') {
            this.internshipForm.reset();
        }

        // Clear message after 5 seconds
        setTimeout(() => {
            messageEl.textContent = '';
            messageEl.classList.remove('success', 'error');
        }, 5000);

        // Log submission (in production, this would send to a server)
        console.log(`${formType.toUpperCase()} FORM SUBMITTED:`, data);
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ============================================
// NAVIGATION HELPER
// ============================================

function navigateTo(page) {
    const pageMap = {
        'home': 'home',
        'counsel': 'counsel',
        'services': 'services',
        'about': 'about',
        'contact': 'contact',
        'representation': 'representation',
        'internship': 'internship'
    };

    const pageId = pageMap[page];
    if (pageId && navigationManager) {
        navigationManager.showPage(pageId);
    }
}

// ============================================
// INITIALIZATION
// ============================================

let themeManager;
let navigationManager;
let counselorManager;
let formManager;

document.addEventListener('DOMContentLoaded', () => {
    themeManager = new ThemeManager();
    navigationManager = new NavigationManager();
    counselorManager = new CounselorManager();
    formManager = new FormManager();

    // Set initial page to home
    navigationManager.showPage('home');

    // Add animation to elements on scroll
    observeElements();
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

function observeElements() {
    if (!('IntersectionObserver' in window)) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe service cards and other elements
    document.querySelectorAll('.service-item, .overview-card, .service-preview-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (navbar && !navbar.contains(e.target) && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Prevent form submission if using traditional submit (this is for fallback)
document.addEventListener('submit', (e) => {
    if (e.target.id === 'representationForm' || e.target.id === 'internshipForm') {
        // Form is already handled by FormManager
    }
});

// Log page load
console.log('Defense Counsel Website Loaded Successfully');
console.log('Theme support:', 'Enabled (Local Storage)');
console.log('Total Counselors:', counselorData.length);
