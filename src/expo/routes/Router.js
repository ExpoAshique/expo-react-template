import { Login, Register, ActivateAccount } from '../components'
import { ProjectDashboard, TableComponent, DropdownComponent } from '../apps'

// example: Login or Sign Up, Reset password, recovery password Routes
export const Auth = [
  { path: '/', exact: true, component: Login },
  { path: '/register', exact: true, component: Register },
  { path: '/active-account', exact: true, component: ActivateAccount },
]

// Public Routes
export const Public = [
  // { path: '/', exact: true, component: HomePage }
]

export const Private = [
  {
    path: '/dashboard',
    component: ProjectDashboard,
    exact: true,
  },
  {
    path: '/table',
    component: TableComponent,
    exact: true,
  },
  {
    path: '/all-issues',
    component: DropdownComponent,
    exact: true,
  },
  {
    path: '/done-issues',
    component: DropdownComponent,
    exact: true,
  },
]
