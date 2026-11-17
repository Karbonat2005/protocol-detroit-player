/* PD: compact mobile header (T770) + compact search (T838). Desktop unchanged. */
(function(){
  if (window.__pdMhead) return; window.__pdMhead = 1;
  var MQ = '(max-width:640px)';
  var CSS = [
    '@media (max-width:640px){',
    'html.pd-mhead-lock{overflow:hidden!important;overscroll-behavior:none}',
    '.r[data-record-type="770"]{position:sticky;top:0;z-index:11000;background:#fff}',
    '.t770{position:relative}',
    '.t770__topwrapper{height:56px!important;min-height:56px!important;display:flex!important;align-items:center!important;justify-content:space-between!important;padding:0 8px 0 14px!important;box-sizing:border-box!important}',
    '.t770__logowrapper,.t770__logowrapper2{display:flex!important;align-items:center!important;width:auto!important;height:auto!important;padding:0!important;margin:0!important;float:none!important}',
    '.t770__logowrapper a{display:flex!important;align-items:center;line-height:0}',
    '.t770__imglogo{min-width:0!important;width:auto!important;max-width:148px!important;height:38px!important;max-height:38px!important;padding:0!important;margin:0!important;object-fit:contain!important;object-position:left center!important}',
    '.t770__desktoplist,.t770__middlelinewrapper{display:none!important}',
    '.pd-mhead-btn{flex:0 0 44px;width:44px;height:44px;margin:0;padding:0;border:0;background:transparent;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;z-index:2;-webkit-appearance:none;appearance:none}',
    '.pd-mhead-btn:focus-visible{outline:2px solid #111;outline-offset:2px}',
    '.pd-mhead-btn i,.pd-mhead-btn i:before,.pd-mhead-btn i:after{display:block;width:20px;height:2px;background:#111;border-radius:1px;position:relative;transition:transform .2s,opacity .2s}',
    '.pd-mhead-btn i:before,.pd-mhead-btn i:after{content:"";position:absolute;left:0}',
    '.pd-mhead-btn i:before{top:-6px}',
    '.pd-mhead-btn i:after{top:6px}',
    '.t770.pd-mhead-open .pd-mhead-btn i{background:transparent}',
    '.t770.pd-mhead-open .pd-mhead-btn i:before{top:0;transform:rotate(45deg)}',
    '.t770.pd-mhead-open .pd-mhead-btn i:after{top:0;transform:rotate(-45deg)}',
    '.pd-mhead-panel{display:none;position:fixed;left:0;top:56px;width:100vw;max-width:100vw;box-sizing:border-box;z-index:11001;background:#fff;max-height:calc(100vh - 56px);overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;box-shadow:0 18px 40px rgba(0,0,0,.14);border-top:1px solid #eee}',
    '.t770.pd-mhead-open .pd-mhead-panel{display:block}',
    '.pd-mhead-panel .t770__mobilelist{display:block!important;position:static!important;height:auto!important;width:100%!important;padding:8px 0 4px!important;margin:0!important}',
    '.pd-mhead-panel .t770__list{display:block!important;width:100%!important;height:auto!important;text-align:left!important;margin:0!important;padding:0!important}',
    '.pd-mhead-panel .t770__list_item{display:block!important;width:100%!important;height:auto!important;padding:0!important;margin:0!important;float:none!important}',
    '.pd-mhead-panel .t-menu__link-item{display:block!important;padding:13px 22px!important;font-size:13px!important;letter-spacing:.14em!important;line-height:1.3!important;text-align:left!important}',
    '.pd-mhead-panel .t-menusub__target-link{position:relative!important;padding-right:44px!important;overflow:visible!important}',
    '.pd-mhead-panel .t-menusub__target-link:after{content:"\u25BE";position:absolute;right:20px;top:50%;transform:translateY(-50%);font-size:14px;line-height:1;color:#111;pointer-events:none;width:auto;height:auto;border:0}',
    '.pd-mhead-panel .t770__list_item.pd-mhead-subopen>.t-menusub__target-link:after{content:"\u25B4"}',
    '.pd-mhead-panel .t-menusub{display:none!important;position:static!important;left:auto!important;top:auto!important;transform:none!important;opacity:1!important;visibility:visible!important;width:100%!important;height:auto!important;box-shadow:none!important;background:transparent!important;pointer-events:auto!important}',
    '.pd-mhead-panel .t770__list_item.pd-mhead-subopen>.t-menusub{display:block!important}',
    '.pd-mhead-panel .t-menusub__menu,.pd-mhead-panel .t-menusub__content,.pd-mhead-panel .t-menusub__list{display:block!important;position:static!important;width:100%!important;height:auto!important;min-width:0!important;box-shadow:none!important;background:transparent!important;padding:0!important;margin:0!important;transform:none!important;opacity:1!important;visibility:visible!important}',
    '.pd-mhead-panel .t-menusub__list-item{display:block!important;padding:0!important;margin:0!important;text-align:left!important;width:100%!important}',
    '.pd-mhead-panel .t-menusub__link-item{display:block!important;padding:9px 22px 9px 34px!important;font-size:13px!important;letter-spacing:.02em!important;text-transform:none!important;color:#444!important;line-height:1.4!important;text-align:left!important;white-space:normal!important;overflow-wrap:anywhere!important;width:auto!important}',
    '.pd-mhead-panel .t770__alladditional{display:block!important;position:static!important;height:auto!important;width:100%!important;padding:8px 22px 22px!important;margin:0!important;border-top:1px solid #eee;box-sizing:border-box}',
    '.pd-mhead-panel .t770__leftwrapper,.pd-mhead-panel .t770__rightwrapper,.pd-mhead-panel .t770__additionalwrapper{display:block!important;width:100%!important;height:auto!important;padding:0!important;margin:0!important;text-align:left!important}',
    '.pd-mhead-panel .t770__descr{display:block!important;width:auto!important;height:auto!important;padding:0!important;margin:10px 0 0!important;text-align:left!important;color:#6a6a6a!important;font-size:13px!important;line-height:1.5!important}',
    '.pd-mhead-bg{display:none;position:fixed;inset:0;top:56px;background:rgba(0,0,0,.38);z-index:10990}',
    'html.pd-mhead-open .pd-mhead-bg{display:block}',
    '.r[data-record-type="838"]{padding:12px 0!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;overflow:hidden}',
    '.t838{width:100%!important;max-width:100%!important;box-sizing:border-box!important}',
    '.t838 .t-container{width:100%!important;max-width:100%!important;margin:0!important;padding:0 20px!important;box-sizing:border-box!important}',
    '.t838 .t-col,.t838 .t-col_8,.t838 .t-prefix_2{width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;left:auto!important;float:none!important;box-sizing:border-box!important}',
    '.t838__wrapper{display:flex!important;align-items:stretch!important;gap:8px;width:100%!important;max-width:100%!important;min-width:0!important;height:auto!important;box-sizing:border-box!important}',
    '.t838__blockinput{flex:1 1 auto;min-width:0!important;width:auto!important;max-width:100%!important;height:44px!important;margin:0!important;box-sizing:border-box!important}',
    '.t838__input{height:44px!important;width:100%!important;max-width:100%!important;min-width:0!important;padding:0 40px 0 44px!important;box-sizing:border-box!important;font-size:16px!important;line-height:44px!important}',
    '.t838__search-icon{width:16px!important;height:16px!important;left:14px!important;top:50%!important;margin-top:-8px!important}',
    '.t838 .t-site-search-close,.t838 .t-site-search-loader{top:50%!important;margin-top:-8px!important;right:12px!important}',
    '.t838__blockbutton{flex:0 0 88px;width:88px!important;min-width:88px!important;max-width:88px!important;height:44px!important;margin:0!important;box-sizing:border-box!important}',
    '.t838 .t-submit,.t838 .t-btnflex{height:44px!important;min-height:44px!important;width:100%!important;min-width:0!important;max-width:100%!important;padding:0 8px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;box-sizing:border-box!important}',
    '.t838 .t-btnflex__text{font-size:12px!important;letter-spacing:.12em!important}',
    '.r[data-record-type="838"]+.r[data-record-type="951"]{padding-top:12px!important}',
    '}',
    '@media (min-width:641px){',
    '.pd-mhead-btn,.pd-mhead-bg{display:none!important}',
    '.pd-mhead-panel{display:contents}',
    '}'
  ].join('');

  function injectStyle(){
    if (document.getElementById('pd-mhead-css')) return;
    var st = document.createElement('style');
    st.id = 'pd-mhead-css';
    st.textContent = CSS;
    (document.head || document.documentElement).appendChild(st);
  }

  function mobile(){ return window.matchMedia(MQ).matches; }

  function closeAll(){
    var nodes = document.querySelectorAll('.t770.pd-mhead-open');
    for (var i=0;i<nodes.length;i++) closeOne(nodes[i]);
  }

  function closeOne(t770){
    t770.classList.remove('pd-mhead-open');
    var btn = t770.querySelector('.pd-mhead-btn');
    if (btn){ btn.setAttribute('aria-expanded','false'); }
    var subs = t770.querySelectorAll('.pd-mhead-subopen');
    for (var i=0;i<subs.length;i++) subs[i].classList.remove('pd-mhead-subopen');
    if (!document.querySelector('.t770.pd-mhead-open')){
      document.documentElement.classList.remove('pd-mhead-open','pd-mhead-lock');
    }
  }

  function openOne(t770){
    var all = document.querySelectorAll('.t770.pd-mhead-open');
    for (var i=0;i<all.length;i++){ if (all[i]!==t770) closeOne(all[i]); }
    t770.classList.add('pd-mhead-open');
    var btn = t770.querySelector('.pd-mhead-btn');
    if (btn){ btn.setAttribute('aria-expanded','true'); }
    document.documentElement.classList.add('pd-mhead-open','pd-mhead-lock');
  }

  function toggle(t770){
    if (t770.classList.contains('pd-mhead-open')) closeOne(t770); else openOne(t770);
  }

  function ensureBg(){
    var bg = document.getElementById('pd-mhead-bg');
    if (bg) return bg;
    bg = document.createElement('div');
    bg.id = 'pd-mhead-bg';
    bg.className = 'pd-mhead-bg';
    bg.addEventListener('click', closeAll);
    (document.body || document.documentElement).appendChild(bg);
    return bg;
  }

  function enhance(t770){
    if (!t770 || t770.getAttribute('data-pd-mhead')==='1') return;
    var wrap = t770.querySelector('.t770__topwrapper') || t770;
    var mobileList = t770.querySelector('.t770__mobilelist');
    var extra = t770.querySelector('.t770__alladditional');
    if (!mobileList) return;
    t770.setAttribute('data-pd-mhead','1');

    var barBtn = document.createElement('button');
    barBtn.type = 'button';
    barBtn.className = 'pd-mhead-btn';
    barBtn.setAttribute('aria-label','Меню');
    barBtn.setAttribute('aria-expanded','false');
    barBtn.innerHTML = '<i></i>';
    wrap.appendChild(barBtn);

    var panel = document.createElement('div');
    panel.className = 'pd-mhead-panel';
    if (mobileList.parentNode) mobileList.parentNode.insertBefore(panel, mobileList);
    panel.appendChild(mobileList);
    if (extra) panel.appendChild(extra);

    barBtn.addEventListener('click', function(e){
      e.preventDefault(); e.stopPropagation();
      if (!mobile()) return;
      toggle(t770);
    });

    panel.addEventListener('click', function(e){
      var subBtn = e.target.closest && e.target.closest('.t-menusub__target-link');
      if (subBtn && panel.contains(subBtn)){
        var item = subBtn.closest('.t770__list_item');
        var href = (subBtn.getAttribute('href')||'').trim();
        if (item && item.querySelector(':scope > .t-menusub, .t-menusub')){
          if (!href || href==='#') e.preventDefault();
          item.classList.toggle('pd-mhead-subopen');
          return;
        }
      }
      var a = e.target.closest && e.target.closest('a');
      if (a && panel.contains(a)){
        var h = (a.getAttribute('href')||'').trim();
        if (h) closeOne(t770);
      }
    });
  }

  function scan(){
    injectStyle();
    if (document.body) ensureBg();
    var list = document.querySelectorAll('.t770');
    for (var i=0;i<list.length;i++) enhance(list[i]);
    if (!mobile()) closeAll();
  }

  var tmr = null;
  function schedule(){ if (tmr) return; tmr = setTimeout(function(){ tmr = null; scan(); }, 150); }

  document.addEventListener('keydown', function(e){
    if (e.key==='Escape' || e.keyCode===27) closeAll();
  });
  window.addEventListener('resize', function(){ if (!mobile()) closeAll(); });
  window.addEventListener('orientationchange', function(){ if (!mobile()) closeAll(); });
  window.addEventListener('hashchange', closeAll);

  function start(){
    scan();
    if (document.documentElement) {
      new MutationObserver(schedule).observe(document.documentElement, {childList:true, subtree:true});
    }
  }
  injectStyle();
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
