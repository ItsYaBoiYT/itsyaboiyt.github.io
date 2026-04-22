/* shared.js — inject nav + footer on every page */

const NAV_HTML = `
<nav class="site-nav" id="siteNav">
  <a href="index.html" class="nav-logo">Young's&nbsp;<span class="accent">Roofing</span>&nbsp;&amp;&nbsp;Exteriors</a>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html" data-page="index">Home</a></li>
    <li><a href="services.html" data-page="services">Services</a></li>
    <li><a href="gallery.html" data-page="gallery">Our Work</a></li>
    <li><a href="contact.html" data-page="contact">Contact</a></li>
    <li><a href="contact.html" class="nav-cta">📞 Free Estimate</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">Young's&nbsp;<span class="accent">Roofing</span>&nbsp;&amp;&nbsp;Exteriors</a>
        <p class="footer-tagline">Born and raised in Metairie. Protecting Jefferson Parish homes since day one.</p>
        <a href="tel:+15041234567" class="footer-phone">📞 (504) 123-4567</a>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html#replacement">Roof Replacement</a></li>
          <li><a href="services.html#repair">Roof Repair</a></li>
          <li><a href="services.html#storm">Storm Damage</a></li>
          <li><a href="services.html#gutters">Gutters &amp; Siding</a></li>
          <li><a href="services.html#inspection">Free Inspections</a></li>
          <li><a href="services.html#commercial">Commercial</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="gallery.html">Our Work</a></li>
          <li><a href="index.html#reviews">Reviews</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Service Areas</h4>
        <ul>
          <li><a href="contact.html">Metairie, LA</a></li>
          <li><a href="contact.html">Kenner, LA</a></li>
          <li><a href="contact.html">River Ridge, LA</a></li>
          <li><a href="contact.html">Harahan, LA</a></li>
          <li><a href="contact.html">Jefferson, LA</a></li>
          <li><a href="contact.html">Greater New Orleans</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 Young's Roofing &amp; Exteriors Co. · All rights reserved.</p>
      <div class="footer-badges">
        <span class="footer-badge">Licensed</span>
        <span class="footer-badge">Insured</span>
        <span class="footer-badge">Jefferson Parish</span>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Highlight active nav link
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // Sticky shadow on scroll
  const nav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
});
