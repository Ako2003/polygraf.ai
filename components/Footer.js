import { Divider, Link } from '@nextui-org/react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    const menuItems = [
        {"name": "Home", "url": "/#home"},
        {"name": "About", "url": "/#about"},
        {"name": "How to use", "url": "/#usage"},
        {"name": "Tool", "url": "/#tool"},
      ];
    
  return (
    <div className='mt-10'>
        <Divider />
        <div className='sm:mx-5 lg:mx-44 m-10'>
            <section className='flex max-sm:gap-10 gap-20'>
                <div className='flex h-[50px]'>
                    <Image
                        src='/logo.svg'
                        width={30}
                        height={30}
                        alt='logo'
                        className='t-0'
                    />
                    <p className={`font-bold text-inherit pl-2`}>FACE | <br /><strong className="text-[#3cb043]">DETECTION</strong></p>
                </div>
                <div>
                    <p className='text-xl text-[#59c65f]'>Quick Links</p>
                    {menuItems.map((item, index)=> (
                        <div key={`${item}-${index}`}>
                            <Link href={item.url} className='text-sm text-gray-500 underline'>{item.name}</Link>
                        </div>
                    ))}
                </div>
            </section>
            <div>
                <p className='text-xl'><strong>Follow Us</strong></p>
                <div className='flex gap-2'>
                    <Link href='https://www.instagram.com/akif.mursalov' target='_blank'>
                        <InstagramIcon className='text-[#e761f1]' />
                    </Link>
                    <Link href='https://www.linkedin.com/in/akif-mursalov' target='_blank'>
                        <LinkedInIcon className='text-[#0a66c2]' />
                    </Link>
                    <Link href='https://github.com/Ako2003/' target='_blank'>
                        <GitHubIcon className='text-[#010409]' />
                    </Link>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <p className='text-sm text-gray-500'>© 2023 Akif Mursalov. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}
