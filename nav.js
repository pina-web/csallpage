/* ============================================================
   아르떼조명 CS 상담자료 — 공용 상단 바
   https://pina-web.github.io/csallpage/nav.js

   ▸ 모든 페이지가 이 파일 하나를 불러다 씁니다.
     각 페이지 <head> 또는 </body> 앞에 아래 한 줄만 넣으면 됩니다.
     <script src="https://pina-web.github.io/csallpage/nav.js" defer></script>

   ▸ 메뉴를 바꾸려면 이 파일의 ITEMS 목록만 고치세요.
     url 을 비워두면( "" ) 자동으로 "준비중" 회색 칸이 됩니다.
   ============================================================ */
(function () {
  "use strict";
  if (window.__ARTE_NAV__) return;
  window.__ARTE_NAV__ = true;

  var BASE = "https://pina-web.github.io/";

  /* ── 메뉴 목록 ───────────────────────────────────────────
     line1 / line2 : 칸에 두 줄로 들어가는 글자
     url           : 주소 (비우면 준비중)
     match         : 현재 페이지 판정용 경로 (생략 가능)
  ───────────────────────────────────────────────────────── */
  var G = ["상담용 멘트 및 텍스트자료", "상담용 툴 모음", "이미지 / 영상자료 모음", "필수 매뉴얼, PPT 자료"];

  var ITEMS = [
    { line1: "고객 상담용",  line2: "멘트 자료",      url: BASE + "happytalk/#faq",        match: "/happytalk/", g: 0 },
    { line1: "내부상담용",   line2: "텍스트자료",     url: BASE + "happytalk/#card",       match: "/happytalk/", g: 0 },
    { line1: "이슈체커",     line2: "",               url: BASE + "issueboard/",           match: "/issueboard/", g: 0 },
    { line1: "상담용 이미지", line2: "생성기",         url: BASE + "artemaking/",           match: "/artemaking/", g: 1 },
    { line1: "도면 이미지",  line2: "생성기",          url: BASE + "artemaking/#blueprint", match: "/artemaking/", g: 1 },
    { line1: "카드뉴스",     line2: "생성기",          url: BASE + "artedesign/",           match: "/artedesign/", g: 1 },
    { line1: "이미지",       line2: "파일 모음",       url: BASE + "arteimagetank/",        match: "/arteimagetank/", g: 2 },
    { line1: "영상 파일",    line2: "모음",            url: BASE + "-artevideo/",           match: "/-artevideo/", g: 2 },
    { line1: "조명",         line2: "색변환 체험",     url: BASE + "artelighting/",         match: "/artelighting/", g: 2 },
    { line1: "시공자재",     line2: "리스트",          url: BASE + "artelist/",             match: "/artelist/", g: 2 },
    { line1: "영업용(박람회)", line2: "자료",          url: "", g: 2 },
    { line1: "happytalk",   line2: "",               url: "", brand: "happytalk", g: 3 },
    { line1: "견적서",       line2: "작성법 매뉴얼",   url: BASE + "artewrighting/",        match: "/artewrighting/", g: 3 },
    { line1: "A/S",         line2: "취소·환불 매뉴얼", url: BASE + "arteas/",               match: "/arteas/", g: 3 },
    { line1: "신신페이",     line2: "사용법",          url: BASE + "artepay/",              match: "/artepay/", g: 3 },
    { line1: "PPT 매뉴얼",   line2: "(업로드예정)",    url: "", g: 3 }
  ];

  var HOME = BASE + "csallpage/";

  /* 목차 페이지에서 쓸 수 있도록 공개 */
  window.ARTE_MENU = { items: ITEMS, groups: G, home: HOME };
  var H = 64; /* 바 높이(px) */

  /* ── 스타일 ───────────────────────────────────────────── */
  var css = [
    ":root{--anav-h:" + H + "px}",
    ".anav{position:sticky;top:0;z-index:2147483000;display:flex;align-items:center;gap:5px;",
    "  height:var(--anav-h);box-sizing:border-box;padding:0 12px;margin:0;width:100%;",
    "  background:#fff;border-bottom:1px solid #EAE8E3;overflow-x:auto;overflow-y:hidden;",
    "  -webkit-overflow-scrolling:touch;scrollbar-width:thin;",
    "  font-family:'Pretendard','Apple SD Gothic Neo','Malgun Gothic',system-ui,-apple-system,sans-serif;",
    "  -webkit-text-size-adjust:100%}",
    ".anav::-webkit-scrollbar{height:4px}",
    ".anav::-webkit-scrollbar-thumb{background:#DCD9D3;border-radius:4px}",
    ".anav *{box-sizing:border-box}",
    ".anav-home{flex:0 0 auto;display:flex;align-items:center;justify-content:center;",
    "  width:46px;height:44px;margin-right:4px;border-radius:10px;color:#8C857A;",
    "  text-decoration:none;transition:background-color .15s,color .15s;-webkit-tap-highlight-color:transparent}",
    ".anav-home:hover{background:#F4F2EE;color:#1C1C1C}",
    ".anav-home svg{width:26px;height:26px;display:block}",
    ".anav-i{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;",
    "  min-width:66px;height:44px;padding:0 8px;border-radius:7px;background:#F2F1EE;",
    "  color:#4A453E;text-decoration:none;text-align:center;line-height:1.28;",
    "  font-size:10.5px;font-weight:600;letter-spacing:-.035em;white-space:nowrap;",
    "  border:1px solid transparent;transition:background-color .15s,border-color .15s}",
    ".anav-i:hover{background:#E9E6E0}",
    ".anav-i.on{background:#2C2823;color:#fff;border-color:#2C2823}",
    ".anav-i.soon{color:#AFA99F;background:#F7F6F4;cursor:default}",
    ".anav-i.soon:hover{background:#F7F6F4}",
    ".anav-i:focus-visible,.anav-home:focus-visible{outline:2px solid #1C1C1C;outline-offset:2px}",
    ".anav-ht{display:flex;align-items:center;gap:5px;font-size:12px;font-weight:700;letter-spacing:-.02em}",
    ".anav-ht i{width:15px;height:15px;border-radius:50%;background:#2BBBD8;display:inline-block;position:relative}",
    ".anav-ht i::after{content:'';position:absolute;left:3.5px;top:4.5px;width:8px;height:5px;",
    "  border-radius:50%;background:#fff}",
    "@media(max-width:640px){:root{--anav-h:58px}.anav{padding:0 8px;gap:5px}",
    "  .anav-home{width:42px;height:40px;margin-right:4px}.anav-home svg{width:22px;height:22px}",
    "  .anav-i{min-width:68px;height:40px;padding:0 8px;font-size:10.5px}}",
    "@media print{.anav{display:none}}",
    "@media(prefers-reduced-motion:reduce){.anav-i,.anav-home{transition:none}}"
  ].join("\n");

  /* ── 페이지별 레이아웃 보정 ─────────────────────────────
     기존 페이지의 고정 헤더가 상단 바와 겹치지 않도록 내려줍니다. */
  var FIX = {
    "/happytalk/":     "#shell{top:var(--anav-h)!important}",
    "/arteimagetank/": ".app{min-height:calc(100vh - var(--anav-h))!important}" +
                       ".topbar{top:var(--anav-h)!important}" +
                       "aside{top:calc(88px + var(--anav-h))!important;max-height:calc(100vh - 108px - var(--anav-h))!important}",
    "/artemaking/":    ".app{min-height:calc(100vh - 16px - var(--anav-h))!important}" +
                       "@media(min-width:901px){.panel.center{top:calc(8px + var(--anav-h))!important;" +
                       "min-height:calc(100vh - 120px - var(--anav-h))!important;max-height:calc(100vh - 40px - var(--anav-h))!important}}" +
                       "#blueprintView{height:calc(100vh - var(--anav-h))!important}",
    "/artedesign/":    "#app{height:calc(100% - var(--anav-h))!important}",
    "/artelighting/":  ".tabs{top:calc(12px + var(--anav-h))!important}" +
                       ".switchpanel{top:calc(66px + var(--anav-h))!important}",
    "/issueboard/":    ".topbar{top:var(--anav-h)!important}",
    "/artelist/":      "aside{top:calc(25px + var(--anav-h))!important;max-height:calc(100vh - 50px - var(--anav-h))!important}"
  };

  var path = location.pathname;
  function here(p) { return path.indexOf(p) === 0 || path === p.slice(0, -1); }

  var style = document.createElement("style");
  style.id = "arte-nav-style";
  var extra = "";
  for (var k in FIX) { if (here(k)) extra += FIX[k]; }
  style.textContent = css + "\n" + extra;

  /* ── 바 만들기 ────────────────────────────────────────── */
  function build() {
    if (document.querySelector(".anav")) return;
    (document.head || document.documentElement).appendChild(style);

    var nav = document.createElement("nav");
    nav.className = "anav";
    nav.setAttribute("aria-label", "CS 상담자료 전체 메뉴");

    var home = document.createElement("a");
    home.className = "anav-home";
    home.href = HOME;
    home.title = "CS 상담자료 목차";
    home.setAttribute("aria-label", "CS 상담자료 목차로 이동");
    home.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M3.2 10.4 12 3.5l8.8 6.9"/><path d="M5.4 12.1V20h13.2v-7.9"/></svg>';
    if (here("/csallpage/") || path === "/" ) home.style.color = "#1C1C1C";
    nav.appendChild(home);

    var active = null;
    ITEMS.forEach(function (it) {
      var el = document.createElement(it.url ? "a" : "span");
      el.className = "anav-i" + (it.url ? "" : " soon");
      if (it.url) el.href = it.url;
      var label = (it.line1 + " " + it.line2).trim();
      el.title = it.url ? label : label + " · 준비중";

      if (it.brand === "happytalk") {
        el.innerHTML = '<span class="anav-ht"><i></i>happytalk</span>';
      } else {
        el.innerHTML = '<span>' + it.line1 + '</span>' + (it.line2 ? '<span>' + it.line2 + '</span>' : '');
      }
      if (!it.url) el.setAttribute("aria-disabled", "true");

      if (it.match && here(it.match)) {
        var hash = (location.hash || "").toLowerCase();
        var want = (it.url.split("#")[1] || "").toLowerCase();
        var hasHashTwin = ITEMS.filter(function (x) { return x.match === it.match; }).length > 1;
        if (!hasHashTwin || hash.replace("#", "") === want || (!hash && !want)) {
          el.classList.add("on");
          if (!active) active = el;
        }
      }
      nav.appendChild(el);
    });

    document.body.insertBefore(nav, document.body.firstChild);

    /* 현재 칸이 화면 밖이면 보이도록 */
    if (active) {
      var x = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
      nav.scrollLeft = Math.max(0, x);
    }

    /* 같은 페이지 안에서 해시가 바뀌면 표시 갱신 */
    window.addEventListener("hashchange", function () {
      nav.remove(); build();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
