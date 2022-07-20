import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from 'components/atoms/Button';
import MenuItem from './MenuItem';

export default function Navbar() {
  const [slide, setSlide] = useState(false);

  const ToggleSlide = () => {
    slide ? setSlide(false) : setSlide(true);
  };

  return (
    <div className="navbar">
      <div className="navbar-wrapper wrapper">

        <ul className={slide ? 'menu slide' : 'menu'}>
          <MenuItem destination="char" link="/char" />
          <MenuItem destination="squir" link="/squir" />
          <MenuItem destination="bulba" link="/bulba" />
          <div className="menu-item">
            <Button text="@vanessrw" destination="https://www.instagram.com/" />
          </div>
        </ul>

        <Link href="/" passHref>
          <Image
            className="logo"
            src="/icon/home.png"
            alt="impact logo"
            width={60}
            height={60}
          ></Image>
        </Link>

        <div className="menu-toggle">
          <input type="checkbox" onClick={ToggleSlide} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
