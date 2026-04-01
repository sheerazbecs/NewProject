/* ============================================
   SHEERAZ AHMED — PORTFOLIO JAVASCRIPT
   File: script.js
   Link this at the bottom of index.html via:
   <script src="script.js"></script>
============================================ */

/* ── 1. MOBILE NAV TOGGLE ── */
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

/* Close nav when any link is clicked */
document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
  });
});


/* ── 2. SCROLL REVEAL ANIMATION ── */
/* Elements with class="reveal" fade up when they enter the viewport */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, index) {
    if (entry.isIntersecting) {
      // Stagger each card with a small delay
      setTimeout(function() {
        entry.target.classList.add('visible');
      }, index * 80);
      revealObserver.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(function(el) {
  revealObserver.observe(el);
});


/* ── 3. SKILL BARS ANIMATION ── */
/* Progress bars fill up when the skills section scrolls into view */
const skillsGrid = document.getElementById('skillsGrid');
let barsAnimated  = false;

const skillObserver = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting && !barsAnimated) {
    barsAnimated = true;
    document.querySelectorAll('.skill-fill').forEach(function(bar) {
      bar.style.width = bar.dataset.pct + '%';
    });
  }
}, { threshold: 0.25 });

if (skillsGrid) {
  skillObserver.observe(skillsGrid);
}


/* ── 4. ACTIVE NAV LINK ON SCROLL ── */
/* Highlights the correct nav link based on which section is visible */
const allSections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  let current = '';

  allSections.forEach(function(section) {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  document.querySelectorAll('.nav-links a').forEach(function(link) {
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    } else {
      link.style.color = '';
    }
  });
});


/* ── 5. CONTACT FORM VALIDATION & SUBMISSION ── */
function submitForm() {
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const type  = document.getElementById('ftype').value;
  const msg   = document.getElementById('fmsg').value.trim();

  // Basic validation
  if (!name) {
    alert('Please enter your name.');
    return;
  }
  if (!email) {
    alert('Please enter your email address.');
    return;
  }
  if (!msg) {
    alert('Please describe your project.');
    return;
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Hide form, show success message
  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').style.display  = 'block';

  // Log to console (in a real project, you'd send this to a backend or EmailJS)
  console.log('Form submitted:', { name, email, type, msg });
}