import React, { useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import menuItems from './menu'


const SideBar = React.memo(({ isOpen }) => {
  const [activeItem, setActiveItem] = useState('')
  const router = useRouter()

  const renderMenuItems = useCallback((items, level = 0) => {
    return items.map((item, index) => {
      const hasDropdown = item.dropdown && item.dropdown.length > 0
      const isActive = activeItem === item.href

      return (
        <div key={index} className={`new-menu-design-item ${level > 0 ? 'new-menu-design-subitem' : ''}`}>
          <Link
            href={item.href}
            className={`new-menu-design-link ${hasDropdown ? 'new-menu-design-link-bold' : 'new-menu-design-link-light'} ${isActive ? 'new-menu-design-active' : ''} ${level > 0 ? 'new-menu-design-submenu-item' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveItem(item.href)
              router.push(item.href)
            }}
            style={{ paddingLeft: `${level * 16}px`}}
          >
            {item.text}
          </Link>
          {hasDropdown && renderMenuItems(item.dropdown, level + 1)}
        </div>
      )
    })
  }, [activeItem, setActiveItem, router])

  const memoizedMenuItems = useMemo(() => renderMenuItems(menuItems), [renderMenuItems])

  return (
    <div className={`new-menu-design-wrapper ${isOpen ? 'open' : ''}`}>
      <div className={`new-menu-design ${isOpen ? 'open' : ''}`}>
        <nav className="new-menu-design-nav">
          {memoizedMenuItems}
        </nav>
      </div>
    </div>
  )
})

SideBar.displayName = 'SideBar'

export default SideBar
