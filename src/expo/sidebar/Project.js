

export const PrivateRoot = {
  dashboard: '/dashboard',
}

export const baseUrl = '/app/project'

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
    name: 'Issues',
    icon: 'icon-chemistry',
    path: '#',
    translate: 'sidebar.nav.element.ELEMENTS',
    submenu: [
      {
        name: 'My open issues',
        path: '/my-open-issues',
        translate: 'sidebar.nav.element.BUTTON',
      },
      {
        name: 'All issues',
        path: '/all-issues',
        translate: 'sidebar.nav.element.NOTIFICATION',
      },
      {
        name: 'Done issues',
        path: '/done-issues',
      },
    ],
  },
]
