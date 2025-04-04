import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <>
    <nav className='mainnav   sticky left-0 my-24 '>
      <Link href={'/'}>
      <ul>
    <li className='lia'>
      <div  className="home-icon">
        
        <div  className="roof">
          <div className="roof-edge"></div>
        </div>
        <div className="front"></div>
        
      </div>
    </li>
    </ul>
      </Link>
      <Link href={'/about'}>
      <ul>
      <li className='lib'>
      <div className="about-icon">
       <div  className="head">
          <div className="eyes"></div>
          <div className="beard"></div>
        </div>
      </div>
    </li>
      </ul>
      </Link>
    
    
      {/* <Link href={'/work'}>
      <ul>
      <li className='lic'>
     <div className="work-icon">
        
       <div className="paper"></div>
       <div className="lines"></div>
        <div className="lines"></div>
       <div className="lines"></div>
     </div>
    </li>
     </ul>
    </Link>  */}
    <a href={'mailto:nirouladiwas7@gmail.com'}>
    <ul>
    <li className='lid'>
      <div className="mail-icon">
        <div className="mail-base">
          <div className="mail-top"></div>
        </div>
      </div>
    </li>
  </ul>
    </a>
</nav>


</>
  )
}

export default Navbar
