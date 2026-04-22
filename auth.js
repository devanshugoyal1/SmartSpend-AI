// ============================================================
// SmartSpend AI — Shared Auth + UI Script
// Add this to EVERY page (except login.html, signup.html, index.html):
// <script src="auth.js"></script>
// ============================================================

(function () {

  // ---- AUTH GUARD ----
  // Redirect to login if not authenticated
  const publicPages = ['index.html', 'login.html', 'signup.html', ''];
  const currentPage = window.location.pathname.split('/').pop();
  if (!publicPages.includes(currentPage)) {
    if (localStorage.getItem('smartspend_auth') !== 'true') {
      window.location.href = 'login.html';
      return;
    }
  }

  // ---- LOAD USER ----
  const user = JSON.parse(localStorage.getItem('smartspend_user') || '{}');
  const name  = user.name  || 'User';
  const email = user.email || 'user@example.com';
  const firstName = name.split(' ')[0];

  // ---- UPDATE SIDEBAR USER INFO ----
  document.addEventListener('DOMContentLoaded', () => {

    // Update all name/email elements
    document.querySelectorAll('[data-user-name]').forEach(el => el.textContent = name);
    document.querySelectorAll('[data-user-email]').forEach(el => el.textContent = email);
    document.querySelectorAll('[data-user-firstname]').forEach(el => el.textContent = firstName);

    // Update avatar from settings
    const settings = JSON.parse(localStorage.getItem('smartspend_settings') || '{}');
    if (settings.avatar) {
      document.querySelectorAll('[data-user-avatar]').forEach(el => el.src = settings.avatar);
    }

    // Update greeting on dashboard
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
      const hour = new Date().getHours();
      const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
      greetingEl.textContent = `${greet}, ${firstName} 👋`;
    }

    // ---- RESPONSIVE SIDEBAR ----
    setupResponsiveSidebar();
  });

  // ---- LOGOUT ----
  window.logout = function () {
    localStorage.removeItem('smartspend_auth');
    localStorage.removeItem('smartspend_user');
    window.location.href = 'login.html';
  };

  // ---- RESPONSIVE SIDEBAR SETUP ----
  function setupResponsiveSidebar() {
    const sidebar = document.querySelector('aside');
    const mainContent = document.querySelector('main');
    if (!sidebar) return;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'sidebarOverlay';
    overlay.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden hidden';
    overlay.onclick = closeSidebar;
    document.body.appendChild(overlay);

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.id = 'hamburgerBtn';
    hamburger.innerHTML = `
      <span class="material-symbols-outlined" style="font-size:24px;width:24px;height:24px;color:#f8fafc;">menu</span>
    `;
    hamburger.className = 'fixed top-4 left-4 z-[60] lg:hidden w-10 h-10 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg';
    hamburger.onclick = toggleSidebar;
    document.body.appendChild(hamburger);

    // Create close button inside sidebar
    const closeBtn = document.createElement('button');
    closeBtn.id = 'sidebarCloseBtn';
    closeBtn.innerHTML = `
      <span class="material-symbols-outlined" style="font-size:20px;width:20px;height:20px;color:#94a3b8;">close</span>
    `;
    closeBtn.className = 'absolute top-4 right-4 lg:hidden w-8 h-8 flex items-center justify-center hover:text-white transition-colors';
    closeBtn.onclick = closeSidebar;
    sidebar.style.position = 'fixed';
    sidebar.appendChild(closeBtn);

    // Adjust sidebar for mobile
    function adjustLayout() {
      if (window.innerWidth < 1024) {
        // Mobile
        sidebar.style.transform = 'translateX(-100%)';
        sidebar.style.transition = 'transform 0.3s ease';
        sidebar.style.zIndex = '50';
        if (mainContent) {
          mainContent.style.marginLeft = '0';
          mainContent.style.width = '100%';
        }
        hamburger.style.display = 'flex';
      } else {
        // Desktop
        sidebar.style.transform = 'translateX(0)';
        if (mainContent) {
          mainContent.style.marginLeft = '256px';
        }
        hamburger.style.display = 'none';
        overlay.classList.add('hidden');
      }
    }

    window.toggleSidebar = function () {
      const isOpen = sidebar.style.transform === 'translateX(0px)';
      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    };

    window.openSidebar = function () {
      sidebar.style.transform = 'translateX(0)';
      overlay.classList.remove('hidden');
      hamburger.innerHTML = `<span class="material-symbols-outlined" style="font-size:24px;width:24px;height:24px;color:#f8fafc;">close</span>`;
    };

    window.closeSidebar = function () {
      sidebar.style.transform = 'translateX(-100%)';
      overlay.classList.add('hidden');
      hamburger.innerHTML = `<span class="material-symbols-outlined" style="font-size:24px;width:24px;height:24px;color:#f8fafc;">menu</span>`;
    };

    // Close sidebar on nav link click (mobile)
    sidebar.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) closeSidebar();
      });
    });

    adjustLayout();
    window.addEventListener('resize', adjustLayout);
  }

})();