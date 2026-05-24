// ============================================================
// TEJEKATWO – Main JavaScript
// ============================================================

// ── Loading Screen ──
window.addEventListener('load', () => {
  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    if (ls) ls.classList.add('hidden');
  }, 1600);
});

// ── Theme ──
const THEME_KEY = 'tejekatwo-theme';
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon(next);
}
function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}
initTheme();

// ── Scroll Progress ──
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (scrollTop / docHeight) * 100;
  const bar = document.getElementById('scroll-progress');
  if (bar) bar.style.width = pct + '%';
}

// ── Navbar ──
function updateNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

// ── Back to Top ──
function updateBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  if (window.scrollY > 400) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
}

// ── Scroll Reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ── Animated Counters ──
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

function initCounters() {
  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
}

// ── Mobile Menu ──
function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-nav');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.querySelector('i').className = 'fas fa-bars';
    });
  });
}

// ── Active Nav ──
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Student Modal ──
let modalOverlay, modalEl;
function openStudentModal(siswa) {
  if (!modalOverlay) return;
  const imgEl = modalOverlay.querySelector('.modal-img');
  const nameEl = modalOverlay.querySelector('.modal-name');
  const roleEl = modalOverlay.querySelector('.modal-role');
  const actionsEl = modalOverlay.querySelector('.modal-actions');

  // Image
  if (siswa.foto) {
    imgEl.innerHTML = `<img src="assets/images/siswa/${siswa.foto}" alt="${siswa.nama}" style="width:100%;height:100%;object-fit:cover;">`;
  } else {
    imgEl.innerHTML = '<i class="fas fa-user"></i>';
  }
  nameEl.textContent = siswa.nama;
  roleEl.textContent = siswa.jabatan;

  actionsEl.innerHTML = `
    <a href="https://instagram.com/${siswa.instagram}" target="_blank" rel="noopener" class="modal-btn modal-btn-ig">
      <i class="fab fa-instagram"></i> @${siswa.instagram}
    </a>
    ${siswa.portfolio ? `<a href="${siswa.portfolio}" target="_blank" rel="noopener" class="modal-btn modal-btn-portfolio"><i class="fas fa-globe"></i> Portfolio</a>` : ''}
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  modalOverlay = document.getElementById('student-modal');
  if (!modalOverlay) return;
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
  const closeBtn = modalOverlay.querySelector('.modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
}

// ── Students Page ──
let currentFilter = 'all';
let currentSearch = '';

function renderStudents() {
  const grid = document.getElementById('students-grid');
  if (!grid || typeof SISWA_DATA === 'undefined') return;

  const filtered = SISWA_DATA.filter(s => {
    const matchSearch = s.nama.toLowerCase().includes(currentSearch.toLowerCase()) ||
                        s.jabatan.toLowerCase().includes(currentSearch.toLowerCase());
    return matchSearch;
  });

  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px">Tidak ada siswa ditemukan.</p>';
    return;
  }

  filtered.forEach((siswa, i) => {
    const card = document.createElement('div');
    card.className = `student-card reveal delay-${(i % 4) + 1}`;
    card.innerHTML = `
     ${siswa.foto
  ? `<img 
       src="assets/images/siswa/${siswa.foto}" 
       alt="${siswa.nama}" 
       class="student-card-img" 
       loading="lazy"
       onerror="this.outerHTML='<div class=&quot;student-card-img&quot;><i class=&quot;fas fa-user&quot;></i></div>'"
     >`
  : `<div class="student-card-img"><i class="fas fa-user"></i></div>`
}
      <div class="student-card-body">
        <div class="student-card-name">${siswa.nama}</div>
        <div class="student-card-role">${siswa.jabatan}</div>
        <a href="https://instagram.com/${siswa.instagram}" target="_blank" rel="noopener" class="student-card-ig" onclick="event.stopPropagation()">
          <i class="fab fa-instagram"></i> @${siswa.instagram}
        </a>
      </div>
    `;
    card.addEventListener('click', () => openStudentModal(siswa));
    grid.appendChild(card);
    setTimeout(() => revealObserver.observe(card), 10);
  });
}

function initStudentsPage() {
  const grid = document.getElementById('students-grid');
  if (!grid) return;

  renderStudents();

  const searchInput = document.getElementById('student-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value;
      renderStudents();
    });
  }
}

// ── Gallery Lightbox ──
function initGallery() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.gallery-caption h4');
      if (!img) return;
      lb.querySelector('img').src = img.src;
      lb.querySelector('#lightbox-caption').textContent = caption ? caption.textContent : '';
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeBtn = document.getElementById('lightbox-close');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ── Gallery Filter ──
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter .filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      document.querySelectorAll('.gallery-item').forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (cat === 'all' || itemCat === cat) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ── News Search ──
function initNewsSearch() {
  const input = document.getElementById('news-search');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    document.querySelectorAll('.news-card').forEach(card => {
      const title = card.querySelector('.news-card-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.news-card-desc')?.textContent.toLowerCase() || '';
      card.style.display = (title.includes(q) || desc.includes(q)) ? '' : 'none';
    });
  });
}

// ── Smooth scroll for anchor links ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Init All ──
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReveal();
  initCounters();
  initMobileMenu();
  setActiveNav();
  initModal();
  initStudentsPage();
  initGallery();
  initGalleryFilter();
  initNewsSearch();
  initSmoothScroll();

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('back-to-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});

window.addEventListener('scroll', () => {
  updateScrollProgress();
  updateNavbar();
  updateBackToTop();
}, { passive: true });
