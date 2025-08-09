 (function () {
      const btn = document.getElementById('menu-toggle');
      const nav = document.getElementById('nav-links');

      btn.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('open'); // toggles show/hide
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Optional: close menu when a link is clicked (mobile)
      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && nav.classList.contains('open')) {
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    })();