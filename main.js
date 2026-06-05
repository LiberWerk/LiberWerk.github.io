/* ── i18n ─────────────────────────────────────────────────── */
const translations = {
  en: {
    'nav.cta': 'Get in Touch',
    'hero.label': 'LiberWork Advisory',
    'hero.line1': 'Engineering Leadership,',
    'hero.line2': 'Redefined.',
    'hero.sub': 'I help startups and technology companies build world-class engineering organisations — as an advisor, fractional CTO, or VP of Engineering.',
    'hero.cta1': 'Work with Me',
    'hero.cta2': 'See Services',
    'stats.engineers': 'Engineers Led',
    'stats.dau': 'Daily Active Users',
    'stats.years': 'Years in Leadership',
    'stats.languages': 'Languages',
    'services.tag': 'What I Offer',
    'services.title': 'Advisory Services',
    'services.sub': 'Tailored engagements for companies at every stage of engineering growth.',
    'svc.cto.title': 'CTO-as-a-Service',
    'svc.cto.desc': 'Fractional CTO engagement for early-stage startups that need executive technical leadership without a full-time hire. Strategy, architecture, and team building.',
    'svc.vpe.title': 'VP of Engineering Consulting',
    'svc.vpe.desc': 'Scaling engineering organisations from 5 to 50+. Hiring frameworks, performance management, org design, and cross-functional alignment.',
    'svc.advisory.title': 'Technical Advisory',
    'svc.advisory.desc': 'Long-term advisory for founders and engineering leaders. Architecture review, technology strategy, and hands-on mentorship.',
    'svc.devops.title': 'Engineering Process & CI/CD',
    'svc.devops.desc': 'Microservices architecture, DevOps transformation, and CI/CD optimisation. Built on experience from Mercari and CircleCI.',
    'exp.tag': 'Background',
    'exp.title': 'Experience',
    'badge.current': 'Current',
    'exp.mantra': 'Providing strategic technical advisory directly to the CTO, supporting architecture decisions and engineering leadership.',
    'exp.liberwork': 'Engineering leadership advisory and independent research through my own practice. CTO-as-a-Service, VP of Engineering consulting, and startup technical advisory.',
    'exp.thecoo.cto': 'Led the organisation as CTO following progression through Engineering Manager → Senior EM → Head of Engineering. Oversaw ~40 employees across Product Engineering, Product Management, SRE, Corporate Engineering, QA, and New Product divisions.',
    'exp.circleci': 'Led CI/CD design and process improvement with enterprise companies across APAC. Drove technical pre-sales and customer integrations.',
    'exp.mercari': 'Designed and built microservices for an 8M+ DAU platform. Migrated PHP monolith to Go/gRPC. Presented at GopherCon and gRPC Conf. Led internal engineering training programmes.',
    'about.tag': 'About',
    'about.title': 'Who I Am',
    'about.p1': 'I am a trilingual engineering leader based in Japan with over a decade of experience across software engineering, people management, and executive leadership — from hands-on backend development at Mercari to running a 40-person engineering organisation as CTO at THECOO.',
    'about.p2': 'Through LiberWork, I now channel that experience into advisory engagements, helping founders and engineering leaders navigate the challenges of scaling teams, technology, and culture.',
    'edu.master': 'Master of Engineering',
    'edu.bachelor': 'Bachelor of Science, Computer Science',
    'contact.tag': 'Let\'s Talk',
    'contact.title': 'Start an Engagement',
    'contact.sub': 'Whether you need a fractional CTO, a technical advisor, or a sounding board for engineering strategy — I\'d be glad to hear from you.',
    'contact.github': 'GitHub',
    'contact.site': 'tangoenskai.github.io',
    'footer.note': 'Engineering Leadership Advisory',
  },
  ja: {
    'nav.cta': 'お問い合わせ',
    'hero.label': 'LiberWork アドバイザリー',
    'hero.line1': 'エンジニアリングリーダーシップを、',
    'hero.line2': '再定義する。',
    'hero.sub': 'スタートアップ・テック企業のエンジニアリング組織づくりをサポートします。アドバイザー、フラクショナルCTO、VPoEとして。',
    'hero.cta1': '相談する',
    'hero.cta2': 'サービスを見る',
    'stats.engineers': 'エンジニア統括数',
    'stats.dau': '日次アクティブユーザー',
    'stats.years': 'リーダーシップ経験年数',
    'stats.languages': '対応言語',
    'services.tag': 'サービス内容',
    'services.title': 'アドバイザリーサービス',
    'services.sub': '各成長フェーズに応じたエンゲージメントを提供します。',
    'svc.cto.title': 'CTO-as-a-Service',
    'svc.cto.desc': 'フルタイム採用なしに、技術的な経営判断が必要なアーリーステージスタートアップ向けのフラクショナルCTOサービス。戦略、アーキテクチャ、チームビルディングを担います。',
    'svc.vpe.title': 'VPoEコンサルティング',
    'svc.vpe.desc': 'エンジニアリング組織を5人から50人以上へスケール。採用設計、評価制度、組織設計、クロスファンクショナルな連携を支援します。',
    'svc.advisory.title': 'テクニカルアドバイザリー',
    'svc.advisory.desc': '創業者やエンジニアリングリーダー向けの長期アドバイザリー。アーキテクチャレビュー、技術戦略の策定、ハンズオンメンタリング。',
    'svc.devops.title': 'エンジニアリングプロセス & CI/CD',
    'svc.devops.desc': 'マイクロサービスアーキテクチャ、DevOps変革、CI/CD最適化。MercariおよびCircleCIでの実務経験をもとに支援します。',
    'exp.tag': '経歴',
    'exp.title': '職務経歴',
    'badge.current': '現在',
    'exp.mantra': 'CTOへの戦略的技術アドバイスを提供し、アーキテクチャ判断とエンジニアリングリーダーシップをサポート。',
    'exp.liberwork': '個人事業「LiberWork」を通じてエンジニアリングリーダーシップのアドバイザリーと独立リサーチを実施。CTO-as-a-Service、VPoEコンサルティング、スタートアップ技術顧問として活動。',
    'exp.thecoo.cto': 'EM → シニアEM → エンジニアリング本部長を経てCTOに就任。プロダクトエンジニアリング・PM・SRE・コーポレートエンジニアリング・QA・新規事業部門を含む約40名を統括。',
    'exp.circleci': 'APAC企業のCI/CD設計・プロセス改善をリード。技術的なプリセールスと顧客インテグレーションを推進。',
    'exp.mercari': '8M+ DAUプラットフォームのマイクロサービスを設計・開発。PHPモノリスをGo/gRPCにマイグレーション。GopherCon・gRPC Confに登壇。エンジニアリングトレーニングプログラムを主導。',
    'about.tag': 'プロフィール',
    'about.title': 'About Me',
    'about.p1': '日本を拠点に活動するトリリンガルのエンジニアリングリーダー。ソフトウェアエンジニアリング、ピープルマネジメント、エグゼクティブリーダーシップにわたる10年以上の経験を持ちます。Mercariでのバックエンド開発からTHECOOでのCTOとして40名の組織運営まで幅広く経験。',
    'about.p2': 'LiberWorkを通じて、その経験をアドバイザリーエンゲージメントに活かし、チーム・技術・カルチャーのスケーリング課題に取り組む創業者やエンジニアリングリーダーを支援しています。',
    'edu.master': '工学修士',
    'edu.bachelor': '理学士（コンピュータサイエンス）',
    'contact.tag': 'お問い合わせ',
    'contact.title': 'まずは話しましょう',
    'contact.sub': 'フラクショナルCTO、技術顧問、エンジニアリング戦略のサウンディングボードが必要な方は、お気軽にご連絡ください。',
    'contact.github': 'GitHub',
    'contact.site': 'tangoenskai.github.io',
    'footer.note': 'エンジニアリングリーダーシップ アドバイザリー',
  },
  ko: {
    'nav.cta': '문의하기',
    'hero.label': 'LiberWork 어드바이저리',
    'hero.line1': '엔지니어링 리더십을,',
    'hero.line2': '새롭게 정의하다.',
    'hero.sub': '스타트업과 테크 기업이 세계 수준의 엔지니어링 조직을 만들 수 있도록 돕습니다. 어드바이저, 프랙셔널 CTO, VPoE로서.',
    'hero.cta1': '함께 일하기',
    'hero.cta2': '서비스 보기',
    'stats.engineers': '리드한 엔지니어',
    'stats.dau': '일간 활성 사용자',
    'stats.years': '리더십 경험',
    'stats.languages': '구사 언어',
    'services.tag': '서비스',
    'services.title': '어드바이저리 서비스',
    'services.sub': '엔지니어링 성장의 모든 단계에 맞춤화된 서비스를 제공합니다.',
    'svc.cto.title': 'CTO-as-a-Service',
    'svc.cto.desc': '풀타임 채용 없이 기술 경영 판단이 필요한 초기 스타트업을 위한 프랙셔널 CTO 서비스. 전략, 아키텍처, 팀 빌딩을 담당합니다.',
    'svc.vpe.title': 'VP of Engineering 컨설팅',
    'svc.vpe.desc': '5명에서 50명 이상으로 엔지니어링 조직 스케일링. 채용 프레임워크, 성과 관리, 조직 설계, 크로스 펑셔널 협업을 지원합니다.',
    'svc.advisory.title': '기술 어드바이저리',
    'svc.advisory.desc': '창업자와 엔지니어링 리더를 위한 장기 어드바이저리. 아키텍처 리뷰, 기술 전략 수립, 핸즈온 멘토링.',
    'svc.devops.title': '엔지니어링 프로세스 & CI/CD',
    'svc.devops.desc': '마이크로서비스 아키텍처, DevOps 전환, CI/CD 최적화. Mercari와 CircleCI의 실무 경험을 바탕으로.',
    'exp.tag': '배경',
    'exp.title': '경력',
    'badge.current': '현재',
    'exp.mantra': 'CTO에게 전략적 기술 어드바이스를 제공하며 아키텍처 결정과 엔지니어링 리더십을 지원.',
    'exp.liberwork': '개인사업체 LiberWork를 통한 엔지니어링 리더십 어드바이저리 및 독립 리서치. CTO-as-a-Service, VPoE 컨설팅, 스타트업 기술 고문으로 활동.',
    'exp.thecoo.cto': 'EM → 시니어 EM → 엔지니어링 본부장을 거쳐 CTO로 취임. 프로덕트 엔지니어링·PM·SRE·코퍼레이트 엔지니어링·QA·신규사업 부문을 포함한 약 40명 조직 총괄.',
    'exp.circleci': 'APAC 기업들의 CI/CD 설계 및 프로세스 개선 주도. 기술 프리세일즈 및 고객 인테그레이션 추진.',
    'exp.mercari': '8M+ DAU 플랫폼 마이크로서비스 설계·개발. PHP 모놀리스를 Go/gRPC로 마이그레이션. GopherCon, gRPC Conf 발표. 사내 엔지니어링 트레이닝 프로그램 주도.',
    'about.tag': '소개',
    'about.title': '자기소개',
    'about.p1': '일본 기반의 3개국어 구사 엔지니어링 리더. 소프트웨어 엔지니어링, 피플 매니지먼트, 임원 리더십에 걸친 10년 이상의 경험을 보유. Mercari에서의 백엔드 개발부터 THECOO에서 CTO로서 40명 조직을 운영하기까지 다양한 경험.',
    'about.p2': 'LiberWork를 통해 그 경험을 어드바이저리 서비스로 전환, 팀·기술·문화의 스케일링 과제를 안고 있는 창업자와 엔지니어링 리더를 지원하고 있습니다.',
    'edu.master': '공학 석사',
    'edu.bachelor': '이학사 (컴퓨터공학)',
    'contact.tag': '연락하기',
    'contact.title': '함께 시작해요',
    'contact.sub': '프랙셔널 CTO, 기술 고문, 또는 엔지니어링 전략에 대한 사운딩 보드가 필요하시다면 편하게 연락 주세요.',
    'contact.github': 'GitHub',
    'contact.site': 'tangoenskai.github.io',
    'footer.note': '엔지니어링 리더십 어드바이저리',
  },
};

let currentLang = 'en';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.documentElement.lang = lang === 'ko' ? 'ko' : lang === 'ja' ? 'ja' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── Scroll fade-in ───────────────────────────────────────── */
function initObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  initObserver();
});
