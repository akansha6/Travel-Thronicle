import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';


const Footer = () => {
    return (
        <div className='p-10 md:p-20 bg-gray-100 mt-10'>
            
            {/* ---------the upper section containing support and about section---------- */}
            <div className='flex flex-col md:flex-row md:justify-around font-Nunito mb-8'>
                <div className='flex flex-col mt-2 mb-2 space-y-3'>
                    <h1 className='w-fit text-sm md:text-lg font-bold cursor-pointer'>Support</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>Help Centre</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>Safety information</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>Cancellation options</h1>
                </div>

                <hr className='md:hidden border-gray-400 mt-2 mb-2'/>

                <div className='flex flex-col  mt-2 mb-2 space-y-3'>
                    <h1 className='w-fit text-sm md:text-lg font-bold object-contain cursor-pointer'>About</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>Newsroom</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>Careers</h1>
                    <h1 className='w-fit text-xs md:text-sm cursor-pointer'>Travel Luxe</h1>
                </div>
            </div>
            
            <hr className='border-gray-400 '/>

            {/* ----------the lower section containing copyright----------------- */}
            <div className='flex justify-between md:justify-around mt-2'>
                <div className='flex'>
                    <IconButton href='https://www.facebook.com/' ><FacebookIcon/></IconButton>
                    <IconButton href='https://github.com/' ><GitHub/></IconButton>
                    <IconButton href='https://www.instagram.com/'><InstagramIcon/></IconButton>
                </div>   
            </div>

        </div>
    )
}

export default Footer
