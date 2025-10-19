'use client';

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import * as React from 'react'

const Navbar: React.FC = () => {
    return (
        <>
            <nav className='flex items-center justify-between py-5 px-8'>
                <div className=''>
                    <h1>Tenent App</h1>
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <OrganizationSwitcher 
                        afterSelectPersonalUrl={'/'}
                        afterSelectOrganizationUrl={'/organization/:slug'} 
                    />
                    <UserButton />
                </div>
            </nav>
        </>
    )
}

export default Navbar;