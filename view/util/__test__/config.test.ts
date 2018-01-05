import MENULIST from '../config';

/** 菜单格式 */
describe('menu format', () => {
  test('menu list should be an array', () => {
    expect(MENULIST instanceof Array).toBe(true);
  });
  test('menu should has right format', () => {
    const testMenu = (menu) => {
      expect(menu.hasOwnProperty('id')).toBe(true);
      expect(menu.hasOwnProperty('name')).toBe(true);
      if (menu.children) {
        menu.children.map((child) => testMenu(child))
      } else {
        expect(menu.hasOwnProperty('url')).toBe(true);
      }
    }
    MENULIST.map(menu => testMenu(menu))
  });
})