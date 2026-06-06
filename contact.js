/* ── Contact page flow ────────────────────────────────────── */

const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const stepSuccess = document.getElementById('step-success');
const progressBar = document.getElementById('cf-progress-bar');

let selectedService = null;

/* Step titles per service & lang */
const stepTitles = {
  en: {
    cto:      { title: 'CTO-as-a-Service enquiry', sub: 'A few quick questions to help me understand your situation.' },
    vpe:      { title: 'VP of Engineering enquiry', sub: 'Tell me about your organisation.' },
    advisory: { title: 'Technical Advisory enquiry', sub: 'Let me know what kind of support you\'re looking for.' },
    chat:     { title: 'Let\'s have a chat', sub: 'Just leave your details and a short note — no pressure.' },
  },
  ja: {
    cto:      { title: 'CTO-as-a-Service のご相談', sub: '状況を把握するためにいくつか質問させてください。' },
    vpe:      { title: 'VPoEコンサルティングのご相談', sub: '組織についてお聞かせください。' },
    advisory: { title: 'テクニカルアドバイザリーのご相談', sub: 'どのようなサポートをお探しかお知らせください。' },
    chat:     { title: 'まずはお話しましょう', sub: 'お名前とご連絡先だけで大丈夫です。' },
  },
  ko: {
    cto:      { title: 'CTO-as-a-Service 문의', sub: '상황을 파악하기 위해 몇 가지 질문드릴게요.' },
    vpe:      { title: 'VP of Engineering 컨설팅 문의', sub: '조직에 대해 알려주세요.' },
    advisory: { title: '기술 어드바이저리 문의', sub: '어떤 지원이 필요하신지 알려주세요.' },
    chat:     { title: '먼저 이야기해봐요', sub: '이름과 연락처만 남겨주시면 돼요.' },
  },
};

/* ── Step 1 → Step 2 ──────────────────────────────────────── */
document.querySelectorAll('.service-card-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedService = btn.dataset.service;
    document.getElementById('cf-service-hidden').value = selectedService;

    // Set step 2 title/sub
    const lang = window.currentLang || 'en';
    const copy = (stepTitles[lang] || stepTitles.en)[selectedService];
    document.getElementById('step2-title').textContent = copy.title;
    document.getElementById('step2-sub').textContent  = copy.sub;

    // Show relevant contextual block
    document.querySelectorAll('.cf-contextual').forEach(el => {
      el.style.display = 'none';
    });
    const ctx = document.getElementById('ctx-' + selectedService);
    if (ctx) ctx.style.display = 'flex';

    // Transition
    step1.style.display = 'none';
    step2.style.display = 'flex';
    progressBar.style.width = '60%';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* ── Back ─────────────────────────────────────────────────── */
document.getElementById('cf-back').addEventListener('click', () => {
  step2.style.display = 'none';
  step1.style.display = 'flex';
  progressBar.style.width = '0%';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Chip selection ───────────────────────────────────────── */
document.querySelectorAll('.chip-group').forEach(group => {
  const hiddenInput = document.getElementById('chip-' + group.dataset.name);
  group.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      if (hiddenInput) hiddenInput.value = chip.dataset.value;
    });
  });
});

/* ── Placeholder i18n ─────────────────────────────────────── */
function applyContactPlaceholders(lang) {
  const t = window.translations?.[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) el.placeholder = t[key];
  });
  // Update step2 title/sub if service already selected
  if (selectedService) {
    const copy = (stepTitles[lang] || stepTitles.en)[selectedService];
    if (copy) {
      document.getElementById('step2-title').textContent = copy.title;
      document.getElementById('step2-sub').textContent  = copy.sub;
    }
  }
}

// Hook into main.js lang switcher
const origApplyLang = window.applyLang;
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setTimeout(() => applyContactPlaceholders(btn.dataset.lang), 0);
  });
});
document.addEventListener('DOMContentLoaded', () => applyContactPlaceholders('en'));

/* ── Form submit ──────────────────────────────────────────── */
const form     = document.getElementById('cf-form');
const statusEl = document.getElementById('cf-status');
const submitBtn = document.getElementById('cf-submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const t   = window.translations?.[window.currentLang || 'en'] || {};
  const lang = window.currentLang || 'en';

  submitBtn.disabled = true;
  submitBtn.querySelector('span').textContent = '…';
  statusEl.className = 'cf-status';
  statusEl.textContent = '';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      step2.style.display = 'none';
      stepSuccess.style.display = 'flex';
      progressBar.style.width = '100%';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      throw new Error('non-ok');
    }
  } catch {
    statusEl.textContent = t['cf.error'] || 'Something went wrong. Please try again.';
    statusEl.className = 'cf-status error';
    submitBtn.disabled = false;
    submitBtn.querySelector('span').textContent = t['cf.submit'] || 'Send Enquiry';
  }
});
