export const Sidebar = [
  {
    heading: 'My Dashboard',
    translate: 'sidebar.heading.COMPONENTS',
  },
  {
    name: 'Dashboard',
    icon: 'icon-chemistry',
    path: 'dashboard',
    translate: 'sidebar.nav.element.ELEMENTS',
  },
  {
    heading: 'My Issues',
    translate: 'sidebar.heading.COMPONENTS',
  },
  {
    name: 'Issues',
    icon: 'icon-chemistry',
    path: 'issues',
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
