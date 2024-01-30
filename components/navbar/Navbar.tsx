import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink"


const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing ' },
  { path: '/contact', text: 'Contact ' },
]

const temporalAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)

    }, 9000)
  })
}

const Navbar = async () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-3 m-5 rounded'>

      <Link href={'/'} className="flex items-center gap-1">
        <HomeIcon className="" />
        <span className=''>Home</span>
      </Link>

      <div className='flex flex-1'></div>

      {
        navItems.map(navItem => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </nav>
  )
}

export default Navbar