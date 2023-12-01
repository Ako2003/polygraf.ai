"use client"

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem , Link, Button} from "@nextui-org/react";
import {useState} from "react";
import Image from "next/image";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {"name": "Home", "url": "/home"},
    {"name": "Tool", "url": "/tool"},
    {"name": "About", "url": "/about"},
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="./logo.svg" alt="logo" width={20} height={20} />
          <p 
            className={`font-bold text-inherit pl-2`}>FACE | <strong className="text-[#3cb043]">DETECTION</strong></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index)=> (
                <NavbarItem key={`${item}-${index}`}>
                <Link 
                  color={
                    pathname === item.url ? "success" : "foreground"
                  } 
                  href={item.url}
                  >
                    {item.name} 
                </Link>
                </NavbarItem>
            )
        )}
      </NavbarContent>

      <NavbarContent justify="end">
        <SignedIn>
          <UserButton 
            afterSignOutUrl="/home"
            showName
          />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button auto size="small" className="bg-[#3cb043] text-white">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button auto size="small" className="bg-[#59c65f] text-white">Sign Up</Button>
          </SignUpButton>
        </SignedOut>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                pathname === item.url ? "success" : "foreground"
              } 
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}