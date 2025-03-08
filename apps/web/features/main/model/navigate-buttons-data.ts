export const NAVIGATE_BUTTONS_DATA = [
  {
    title: '대여가능 물품 목록',
    icon: '/main/search-icon.png',
    navigateTo: '/item-list',
    key: 'search',
  },
  {
    title: '물품 대여 장부 작성',
    icon: '/main/write-icon.png',
    navigateTo: '/apply-form',
    key: 'write',
  },
  {
    title: '나의 물품 대여 확인',
    icon: '/main/rent-icon.png',
    navigateTo: '/my-item',
    key: 'my-rent',
  },
  {
    title: '관리자 페이지',
    icon: '/main/setting-icon.png',
    navigateTo: '/admin',
    key: 'admin',
  },
] as const;
