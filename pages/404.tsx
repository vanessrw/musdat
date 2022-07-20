import Image from 'next/image';

import Button from "components/atoms/Button";

export default function Custom404() {
  return (
      <div className='missing-container'>
        <div className="missing-content">
            <h1>ERROR 404</h1>
            <h2>Oops!<br /> Page not found :(</h2>
            <Button text="Home" destination="/"/>
        </div>
        <div className="missing-illustration">
            <svg width="1200" height="1200" viewBox="0 0 502 361" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="500" cy="500" r="500" fill="rgb(162, 173, 288)"/>
                <defs>
                <linearGradient id="paint0_linear_8_398" x1="382" y1="0" x2="0" y2="382" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F97571"/>
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        <div className="missing-illustration">
            <svg width="900" height="900" viewBox="0 0 502 361" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="480" cy="480" r="480" fill="rgb(246, 209, 208)"/>
                <defs>
                <linearGradient id="paint0_linear_8_398" x1="382" y1="0" x2="0" y2="382" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F97571"/>
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
      </div>

  )
}
