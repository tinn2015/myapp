
/** 菜单列表 */
const MENULIST = [
  { id: 'option1', name: 'option1', icon: 'pie-chart', url: '/user/list' },
  { id: 'option2', name: 'option2', icon: 'desktop', url: '/user/detail' },
  {
    id: 'user', name: 'user', icon: 'user',
    children: [
      { id: 'user1', name: 'user1', url: '/user/list' },
      { id: 'user2', name: 'user2', url: '/user/list' },
    ]
  },
  {
    id: 'customer', name: 'customer', icon: 'team',
    children: [
      { id: 'customer1', name: 'customer1', url: '/user/list' },
      { id: 'customer2', name: 'customer2', url: '/user/list' },
    ]
  },
]


export default MENULIST