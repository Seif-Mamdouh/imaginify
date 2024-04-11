"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants';
import {SignedIn} from '@clerk/nextjs';

const Sidebar = () => {
  return (
      <aside className="sidebar">
          <div className="flex size-full flex-col gap-4">
              <Link href="/" className="sidebar-logo">
                  <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
              </Link>
              <nav className="sidebar-nav">
                  <SignedIn>
                      <ul className="sidebar-nav_elements">
                          {navLinks.map(link) => {
                              return (
                              <li key={link.route}>
                                  <Link className="sidebar-link" href={link.route}>
                                      <a className="sidebar-nav_element">
                                          <Image src={link.icon} alt={link.label} width={24} height={24} />
                                          <span>{link.label}</span>
                                      </a>
                                  </Link>
                              </li>
                          )}}
                      </ul>
                  </SignedIn>
              </nav>
          </div>
    </aside>
  )
}

export default Sidebar
