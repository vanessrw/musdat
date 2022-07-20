import React from 'react'

interface HeaderProps {
    title: string;
}

export default function Header(props: HeaderProps) {
    const {title} = props;
    
  return (
    <div className="event-header-container">
      <div className="event-header-wrapper wrapper">
        <div className="judul-atas">
          <span className='h1'>{title}</span>
        </div>
      </div>
    </div>
  )
}
