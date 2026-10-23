/**
 * NEURON GEN 9 - CAST THE LIGHT: HOÀ ĐIỆU BẢN SẮC
 * Main Application Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initHeaderScroll();
  initMobileNav();
  initFaqAccordion();
  initModals();
  initApplicationForm();
  initAudioPlayer();
  initStageParticles();
});

/* ===================================================================
   1. COUNTDOWN TIMER
   =================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(APP_CONFIG.countdownDeadline).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      const label = document.querySelector('.countdown-label span');
      if (label) label.textContent = 'ĐÃ KẾT THÚC VÒNG 1 (THE CASTING)';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ===================================================================
   2. HEADER SCROLL & MOBILE NAV
   =================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  });
}

/* ===================================================================
   3. FAQ ACCORDION
   =================================================================== */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const header = card.querySelector('.faq-header');
    const body = card.querySelector('.faq-body');

    if (!header || !body) return;

    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      // Close all other cards for clean accordion feel
      faqCards.forEach(c => {
        c.classList.remove('open');
        const b = c.querySelector('.faq-body');
        if (b) b.style.maxHeight = null;
      });

      if (!isOpen) {
        card.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* ===================================================================
   4. MODALS & POPUPS SYSTEM (MÔ HÌNH MODAL CHI TIẾT TƯƠNG TỰ FTU)
   =================================================================== */
function initModals() {
  // Close buttons
  const closeBtns = document.querySelectorAll('.modal-close-btn, [data-modal-close]');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllModals();
    });
  });

  // Click outside backdrop to close
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // ESC key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Register all CTA buttons to open register modal
  const registerBtns = document.querySelectorAll('[data-action="open-register"]');
  registerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (APP_CONFIG.links.googleForm && APP_CONFIG.links.googleForm.trim() !== "") {
        // Nếu là thẻ <a> đã có link thì trình duyệt mở trực tiếp mượt mà
        if (btn.tagName === 'A' && btn.getAttribute('href') && btn.getAttribute('href') !== '#') {
          return;
        }
        e.preventDefault();
        window.open(APP_CONFIG.links.googleForm, '_blank');
      } else {
        e.preventDefault();
        openRegisterModal();
      }
    });
  });
}

function openModal(modalId) {
  closeAllModals();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllModals() {
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(o => o.classList.remove('open'));
  document.body.style.overflow = '';
}

// Open Register Selection Modal (hoặc mở trực tiếp Google Form nếu đã cấu hình)
function openRegisterModal() {
  if (APP_CONFIG.links.googleForm && APP_CONFIG.links.googleForm.trim() !== "") {
    window.open(APP_CONFIG.links.googleForm, '_blank');
  } else {
    openModal('modal-register-selection');
  }
}

// Trigger Google Form or Alert if pending
function handleGoogleFormClick() {
  if (APP_CONFIG.links.googleForm && APP_CONFIG.links.googleForm.trim() !== "") {
    window.open(APP_CONFIG.links.googleForm, '_blank');
  } else {
    // If not ready yet, open booklet/rules
    openRulesModal();
  }
}

// Trigger Booklet or Alert
function handleBookletClick() {
  if (APP_CONFIG.links.booklet && APP_CONFIG.links.booklet.trim() !== "") {
    window.open(APP_CONFIG.links.booklet, '_blank');
  } else {
    // Open full in-page rules modal!
    openRulesModal();
  }
}

// Open Department Modal dynamically
function openDeptModal(deptKey) {
  const dept = APP_CONFIG.departments[deptKey];
  if (!dept) return;

  const titleEl = document.getElementById('dept-modal-title');
  const subEl = document.getElementById('dept-modal-sub');
  const badgeEl = document.getElementById('dept-modal-badge');
  const descEl = document.getElementById('dept-modal-desc');
  const respListEl = document.getElementById('dept-modal-resp');
  const suitListEl = document.getElementById('dept-modal-suit');
  const applyBtn = document.getElementById('dept-modal-apply-btn');

  if (titleEl) titleEl.textContent = dept.name;
  if (subEl) subEl.textContent = dept.fullName;
  if (badgeEl) badgeEl.textContent = dept.badge;
  if (descEl) descEl.textContent = dept.description;

  if (respListEl) {
    respListEl.innerHTML = dept.responsibilities.map(r => `<li>${r}</li>`).join('');
  }

  if (suitListEl) {
    suitListEl.innerHTML = dept.suitableFor.map(s => `<li>${s}</li>`).join('');
  }

  if (applyBtn) {
    applyBtn.onclick = () => {
      if (APP_CONFIG.links.googleForm && APP_CONFIG.links.googleForm.trim() !== "") {
        window.open(APP_CONFIG.links.googleForm, '_blank');
      } else {
        openRulesModal();
      }
    };
  }

  openModal('modal-dept-detail');
}

// Open Project Modal dynamically
function openProjectModal(projectKey) {
  const proj = APP_CONFIG.projects[projectKey];
  if (!proj) return;

  const titleEl = document.getElementById('proj-modal-title');
  const sloganEl = document.getElementById('proj-modal-slogan');
  const badgeEl = document.getElementById('proj-modal-badge');
  const descEl = document.getElementById('proj-modal-desc');
  const highlightsEl = document.getElementById('proj-modal-highlights');
  const linkBtn = document.getElementById('proj-modal-link-btn');

  if (titleEl) titleEl.textContent = proj.name;
  if (sloganEl) sloganEl.textContent = `"${proj.slogan}"`;
  if (badgeEl) badgeEl.textContent = proj.badge;
  if (descEl) descEl.textContent = proj.desc;

  if (highlightsEl) {
    highlightsEl.innerHTML = proj.highlights.map(h => `<li>${h}</li>`).join('');
  }

  if (linkBtn) {
    linkBtn.href = proj.fanpage || APP_CONFIG.links.fanpage;
  }

  openModal('modal-project-detail');
}

// Open Event Modal dynamically
function openEventModal(eventId) {
  const evt = APP_CONFIG.events.find(e => e.id === eventId);
  if (!evt) return;

  const titleEl = document.getElementById('event-modal-title');
  const tagEl = document.getElementById('event-modal-tag');
  const descEl = document.getElementById('event-modal-desc');

  if (titleEl) titleEl.textContent = evt.title;
  if (tagEl) tagEl.textContent = evt.tag;
  if (descEl) descEl.textContent = evt.desc;

  openModal('modal-event-detail');
}

// Open Rules / Thể lệ Modal
function openRulesModal() {
  openModal('modal-rules');
}

/* ===================================================================
   5. ON-PAGE APPLICATION FORM (FORM ĐIỀN TRỰC TIẾP CHỐNG MẤT BÀI)
   =================================================================== */
function initApplicationForm() {
  const form = document.getElementById('direct-application-form');
  if (!form) return;

  const steps = [
    document.getElementById('form-step-1'),
    document.getElementById('form-step-2'),
    document.getElementById('form-step-3')
  ];

  const stepIndicators = [
    document.getElementById('step-indicator-1'),
    document.getElementById('step-indicator-2'),
    document.getElementById('step-indicator-3')
  ];

  let currentStep = 0;

  // Restore draft from LocalStorage if available
  const draftKey = 'neuron_gen9_application_draft';
  try {
    const saved = localStorage.getItem(draftKey);
    if (saved) {
      const data = JSON.parse(saved);
      for (const key in data) {
        const input = form.elements[key];
        if (input) input.value = data[key];
      }
    }
  } catch (e) {
    console.warn('LocalStorage error', e);
  }

  // Auto save draft on change
  form.addEventListener('input', () => {
    try {
      const formData = new FormData(form);
      const obj = {};
      formData.forEach((val, key) => { obj[key] = val; });
      localStorage.setItem(draftKey, JSON.stringify(obj));
    } catch (e) {}
  });

  function showStep(index) {
    steps.forEach((step, i) => {
      if (step) step.style.display = i === index ? 'block' : 'none';
    });

    stepIndicators.forEach((ind, i) => {
      if (!ind) return;
      ind.classList.remove('active', 'completed');
      if (i === index) ind.classList.add('active');
      else if (i < index) ind.classList.add('completed');
    });

    currentStep = index;
  }

  // Step navigation buttons
  const btnNext1 = document.getElementById('btn-step1-next');
  const btnPrev2 = document.getElementById('btn-step2-prev');
  const btnNext2 = document.getElementById('btn-step2-next');
  const btnPrev3 = document.getElementById('btn-step3-prev');

  if (btnNext1) {
    btnNext1.addEventListener('click', () => {
      const name = form.elements['fullName']?.value.trim();
      const phone = form.elements['phone']?.value.trim();
      const email = form.elements['email']?.value.trim();

      if (!name || !phone || !email) {
        alert('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Email liên hệ nhé!');
        return;
      }
      showStep(1);
    });
  }

  if (btnPrev2) {
    btnPrev2.addEventListener('click', () => showStep(0));
  }

  if (btnNext2) {
    btnNext2.addEventListener('click', () => {
      const pref1 = form.elements['pref1']?.value;
      if (!pref1) {
        alert('Vui lòng chọn Nguyện vọng 1 (Ban chính) của bạn nhé!');
        return;
      }
      showStep(2);
    });
  }

  if (btnPrev3) {
    btnPrev3.addEventListener('click', () => showStep(1));
  }

  // Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'ĐANG GỬI HỒ SƠ...';
    }

    setTimeout(() => {
      // Generate registration code
      const rand = Math.floor(1000 + Math.random() * 9000);
      const code = `NEURON-G9-${rand}`;

      // Clear draft
      localStorage.removeItem(draftKey);

      // Hide form steps and show success card
      const formContainer = document.getElementById('application-form-inner');
      const successCard = document.getElementById('application-success-card');
      const codeEl = document.getElementById('user-app-code');

      if (formContainer) formContainer.style.display = 'none';
      if (codeEl) codeEl.textContent = code;
      if (successCard) successCard.style.display = 'block';

      // Launch Confetti fireworks!
      launchConfetti();
    }, 800);
  });

  showStep(0);
}

/* ===================================================================
   6. AUDIO / SOUNDTRACK CONTROLLER
   =================================================================== */
function initAudioPlayer() {
  const toggleBtn = document.getElementById('music-toggle-btn');
  if (!toggleBtn) return;

  let isPlaying = false;
  let audio = null;

  toggleBtn.addEventListener('click', () => {
    // Check if music URL configured
    if (APP_CONFIG.links.musicUrl && APP_CONFIG.links.musicUrl.trim() !== "") {
      if (!audio) {
        audio = new Audio(APP_CONFIG.links.musicUrl);
        audio.loop = true;
      }

      const icon = toggleBtn.querySelector('.music-icon');
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        toggleBtn.classList.remove('playing');
        if (icon) icon.textContent = '🎵';
      } else {
        audio.play().then(() => {
          isPlaying = true;
          toggleBtn.classList.add('playing');
          if (icon) icon.textContent = '🔊';
        }).catch(() => {
          alert('Không thể tự động phát nhạc. Vui lòng kiểm tra lại đường link âm thanh.');
        });
      }
    } else {
      // Play a lovely gentle Broadway chime / cue tone using Web Audio API
      playGentleChime();
      toggleBtn.classList.add('playing');
      setTimeout(() => toggleBtn.classList.remove('playing'), 1800);
    }
  });
}

function playGentleChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 Broadway chord

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);

      gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.1 + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.8);
    });
  } catch (e) {}
}

/* ===================================================================
   7. CANVAS CONFETTI (HOÀN TOÀN TỰ ĐỘNG, 0 DEPENDENCY, CHẠY OFFLINE)
   =================================================================== */
function launchConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = '999999';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiCount = 180;
  const confettis = [];
  const colors = ['#E6C457', '#FFF0A8', '#8C1515', '#B82323', '#FAF2D9', '#E62C2C'];

  for (let i = 0; i < confettiCount; i++) {
    confettis.push({
      x: canvas.width / 2,
      y: canvas.height * 0.6,
      vx: (Math.random() - 0.5) * 18,
      vy: -(Math.random() * 16 + 8),
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.35,
      drag: 0.985,
      opacity: 1
    });
  }

  let startTime = Date.now();

  function animate() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettis.forEach(c => {
      c.x += c.vx;
      c.y += c.vy;
      c.vy += c.gravity;
      c.vx *= c.drag;
      c.vy *= c.drag;
      c.rotation += c.rSpeed;

      if (elapsed > 2000) {
        c.opacity -= 0.015;
      }

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate((c.rotation * Math.PI) / 180);
      ctx.fillStyle = c.color;
      ctx.globalAlpha = Math.max(0, c.opacity);
      ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.7);
      ctx.restore();
    });

    if (elapsed < 3500) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }

  animate();
}

/* ===================================================================
   9. INTERACTIVE FLOATING STAGE PARTICLES & DUST CANVAS (BAY BỔNG)
   =================================================================== */
function initStageParticles() {
  const canvas = document.getElementById('stage-particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: -1000, y: -1000, radius: 130 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Palette from user reference image & Broadway theme:
  // Gold, Amber, Velvet Red, Purple/Violet, Cyan/Teal, White
  const palette = [
    { r: 230, g: 196, b: 87 },   // Broadway Gold #E6C457
    { r: 255, g: 240, b: 168 },  // Bright Amber #FFF0A8
    { r: 225, g: 29,  b: 72 },   // Velvet Rose #E11D48
    { r: 168, g: 85,  b: 247 },  // Glowing Purple #A855F7 (matching reference image)
    { r: 192, g: 132, b: 252 },  // Lavender Sparkle #C084FC
    { r: 45,  g: 212, b: 191 },  // Cyan/Teal Glow #2DD4BF (matching reference image)
    { r: 250, g: 242, b: 217 }   // Starlight White #FAF2D9
  ];

  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 18 : 36; // Giảm mật độ hạt theo yêu cầu để nhìn thoáng, dễ đọc chữ
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const color = palette[Math.floor(Math.random() * palette.length)];
    const isStar = Math.random() < 0.25; // 25% là sao kim cương 4 cánh
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      baseRadius: isStar ? (Math.random() * 1.5 + 1.1) : (Math.random() * 1.6 + 0.8),
      color: color,
      vy: -(Math.random() * 0.35 + 0.15), // bay lên êm dịu, không rối mắt
      swayAngle: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.018 + 0.006,
      swayAmp: Math.random() * 0.8 + 0.3,
      alpha: Math.random() * 0.45 + 0.15, // độ trong suốt dịu nhẹ
      alphaSpeed: (Math.random() * 0.012 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
      isStar: isStar,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.2
    });
  }

  // Shooting Stars (Hiệu ứng sao băng thỉnh thoảng lướt qua tinh tế)
  const shootingStars = [];
  function spawnShootingStar() {
    shootingStars.push({
      x: Math.random() * (width * 0.8) + width * 0.1,
      y: Math.random() * (height * 0.3),
      length: Math.random() * 70 + 40,
      speed: Math.random() * 5 + 6,
      angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2,
      opacity: 0.8,
      color: Math.random() < 0.5 ? '#FFF0A8' : '#E6C457'
    });
    // Lịch xuất hiện sao băng tiếp theo (khoảng 6-10s)
    setTimeout(spawnShootingStar, Math.random() * 5000 + 6000);
  }
  setTimeout(spawnShootingStar, 3500);

  function draw4PointStar(ctx, cx, cy, r, rot) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((rot * Math.PI) / 180);
    ctx.beginPath();
    const rLong = r * 2.4;
    const rShort = r * 0.65;
    for (let i = 0; i < 8; i++) {
      const radius = i % 2 === 0 ? rLong : rShort;
      const a = (i * Math.PI) / 4;
      const sx = Math.cos(a) * radius;
      const sy = Math.sin(a) * radius;
      if (i === 0) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Update & draw regular particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.swayAngle += p.swaySpeed;
      p.y += p.vy;
      p.x += Math.sin(p.swayAngle) * p.swayAmp;

      // Wrap around bounds
      if (p.y < -30) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      if (p.x < -30) p.x = width + 20;
      if (p.x > width + 30) p.x = -20;

      // Mouse gentle buoyancy repulsion
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius && dist > 0) {
        const force = (mouse.radius - dist) / mouse.radius;
        p.x += (dx / dist) * force * 2.8;
        p.y += (dy / dist) * force * 2.8;
      }

      // Twinkle alpha
      p.alpha += p.alphaSpeed;
      if (p.alpha > 0.9) {
        p.alpha = 0.9;
        p.alphaSpeed = -Math.abs(p.alphaSpeed);
      } else if (p.alpha < 0.15) {
        p.alpha = 0.15;
        p.alphaSpeed = Math.abs(p.alphaSpeed);
      }

      // Draw particle
      ctx.save();
      ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
      ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.85})`;
      ctx.shadowBlur = p.baseRadius * 4;

      if (p.isStar) {
        draw4PointStar(ctx, p.x, p.y, p.baseRadius, p.rotation);
        p.rotation += p.rotSpeed;
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // Update & draw shooting stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      s.x -= Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.opacity -= 0.022;

      if (s.opacity <= 0 || s.x < 0 || s.y > height) {
        shootingStars.splice(i, 1);
        continue;
      }

      ctx.save();
      const tailX = s.x + Math.cos(s.angle) * s.length;
      const tailY = s.y - Math.sin(s.angle) * s.length;

      const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
      grad.addColorStop(0, 'rgba(255, 240, 168, 0)');
      grad.addColorStop(1, s.color);

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.8;
      ctx.globalAlpha = Math.max(0, s.opacity);
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 8;

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(s.x, s.y);
      ctx.stroke();

      // Bright head dot
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, 1.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  render();
}

// Global functions exposed for HTML inline onclicks
window.openModal = openModal;
window.closeAllModals = closeAllModals;
window.openRegisterModal = openRegisterModal;
window.handleGoogleFormClick = handleGoogleFormClick;
window.handleBookletClick = handleBookletClick;
window.openDeptModal = openDeptModal;
window.openProjectModal = openProjectModal;
window.openEventModal = openEventModal;
window.openRulesModal = openRulesModal;
