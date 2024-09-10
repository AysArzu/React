import React from 'react';
import './header.css';
import { MobileMenu } from './mobile-menu';
import { Avatar } from './avatar';
import { SocialLinks } from './social-links';
import { MainNav } from './main-nav';
import { CopyRight } from './copy-right';


export const Header = () => {
  return (
    <header className="header pull-left">
        <MobileMenu />
        <Avatar />
        <SocialLinks />
        <MainNav />
        <CopyRight />
    </header>
  )
}
