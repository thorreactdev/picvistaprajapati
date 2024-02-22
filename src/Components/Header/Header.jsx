import React from 'react'

const Header = () => {
  return (
    <div
    className="flex gap-12 items-center text-white px-8 py-4 text-sm font-medium cursor-pointer"
    style={{ backgroundColor: "#121212", color: "#ccc" }}
    >
    <span>Tools</span>
    <span>Photos</span>
    <span>Video</span>
    <span>AI Images</span>
    <span>Vectors</span>
  </div>
  )
}

export default Header