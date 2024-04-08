import React from 'react'
import {BsFacebook, BsTiktok} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/amal.20300' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 

             <a target='_blank' href='mailto:amalalzein59@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons