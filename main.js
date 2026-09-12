/* ============================================================
   全站脚本（跨页面通用）
   1. 手机端菜单展开/收起
   2. Show More / Show Less 折叠
   3. 页面载入淡入动画
   ============================================================ */

// ---- 1. 手机端菜单 ----
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('show'));
  navMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navMenu.classList.remove('show'))
  );
}

// ---- 2. Show More / Show Less ----
document.querySelectorAll('.btn-expand').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (!target) return;
    const shown = target.classList.toggle('show');
    btn.textContent = shown ? 'Show Less' : 'Show More';
  });
});

// ---- 3. 页面载入淡入 ----
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.page, .hero').forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity .4s ease';
    requestAnimationFrame(() => { el.style.opacity = '1'; });
  });
});
