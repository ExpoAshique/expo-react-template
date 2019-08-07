

export const PrivateRoot = {
  dashboard: '/dashboard',
  table: '/table',
}

export const baseUrl = '/'

export const Sidebar = [
  {
    heading: 'My Issues',
    translate: 'sidebar.heading.COMPONENTS',
  },
  {
    name: 'Issues',
    icon: 'icon-chemistry',
    path: '#',
    translate: 'sidebar.nav.element.ELEMENTS',

  },
  {
    name: 'Components',
    icon: 'icon-chemistry',
    path: '/',
    translate: 'sidebar.nav.element.ELEMENTS',
    submenu: [
      {
        name: 'Table',
        path: 'table',
        translate: 'sidebar.nav.element.BUTTON',
      },
      {
        name: 'All issues',
        path: 'all-issues',
        translate: 'sidebar.nav.element.NOTIFICATION',
      },
      {
        name: 'Done issues',
        path: 'done-issues',
      },
    ],
  },
]
