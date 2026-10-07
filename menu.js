/* ============================================================
 아르떼조명 CS 상담자료 — 메뉴 정의 파일 (메인 목차 + 모든 페이지 상단 바 공통)
 이 파일 하나만 바꾸면 메인 목차와 모든 페이지의 상단 바 버튼이 함께 바뀝니다.
   t: 버튼 글씨   u: 주소(https://… 또는 happytalk/ 처럼 사이트 기준 경로, 비우면 준비중)
   soon:1 준비중   w:1 별도 창으로 열기   new:1 NEW 표시   nb:1 (그룹에) 상단 바에는 숨김
 메인 목차 오른쪽 아래 '메뉴 편집'에서 버튼을 눌러 편집한 뒤 menu.js를 내려받아 교체해도 됩니다.
============================================================ */
window.ARTE_MENU = {
 "title": "아르떼조명",
 "sub": "CS 상담자료",
 "home": "https://pina-web.github.io/csallpage/",
 "groups": [
  {
   "name": "상담용 멘트 및 텍스트자료",
   "items": [
    {
     "t": "고객질문 정리",
     "u": "https://pina-web.github.io/happytalk/#faq"
    },
    {
     "t": "상담사용 매뉴얼",
     "u": "https://pina-web.github.io/happytalk/#card"
    },
    {
     "t": "이슈체커",
     "u": "https://pina-web.github.io/issueboard/"
    }
   ]
  },
  {
   "name": "상담용 툴 모음",
   "items": [
    {
     "t": "상담용 이미지 생성기",
     "u": "https://pina-web.github.io/artemaking/"
    },
    {
     "t": "도면 이미지 생성기",
     "u": "https://pina-web.github.io/artemaking/#blueprint"
    },
    {
     "t": "카드뉴스 생성기",
     "u": "https://pina-web.github.io/artedesign/"
    }
   ]
  },
  {
   "name": "이미지 / 영상자료 모음",
   "items": [
    {
     "t": "이미지 파일 모음",
     "u": "https://pina-web.github.io/arteimagetank/"
    },
    {
     "t": "영상 파일 모음",
     "u": "https://pina-web.github.io/-artevideo/"
    },
    {
     "t": "조명 색변환 체험",
     "u": "https://pina-web.github.io/artelighting/"
    },
    {
     "t": "시공자재 리스트",
     "u": "https://pina-web.github.io/artelist/"
    },
    {
     "t": "영업용(박람회) 자료",
     "u": "",
     "soon": 1
    }
   ]
  },
  {
   "name": "필수 매뉴얼 · PPT 자료",
   "items": [
    {
     "t": "해피톡 매뉴얼",
     "u": "https://pina-web.github.io/artehappytalkinfo/"
    },
    {
     "t": "견적서 작성법 매뉴얼",
     "u": "https://pina-web.github.io/artewrighting/"
    },
    {
     "t": "A/S 취소 환불매뉴얼",
     "u": "https://pina-web.github.io/arteas/"
    },
    {
     "t": "신신페이 사용법",
     "u": "https://pina-web.github.io/artepay/"
    },
    {
     "t": "BZM 발송방법",
     "u": "https://pina-web.github.io/bzm/",
     "new": 1
    },
    {
     "t": "PPT 매뉴얼 (업로드예정)",
     "u": "",
     "soon": 1
    }
   ]
  },
  {
   "name": "바로가기",
   "items": [
    {
     "t": "아르떼 홈페이지",
     "u": "https://www.iotics.co.kr/home",
     "w": 1
    },
    {
     "t": "구경집 바로가기",
     "u": "https://gigantic-meteoroid-0f7.notion.site/df4188ba3fe94bff96f06edc77803940",
     "w": 1
    }
   ]
  }
 ],
 "base": "https://pina-web.github.io/"
};
