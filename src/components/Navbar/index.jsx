import React, {useState} from 'react';
import './index.css';
import Notification from '../Notification';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [openPopup, setOpenPopup] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)
  return (
    <div className="bg-white py-2.5 dark:bg-gray-900">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex-item-center">
            <h3>Early <span>Warning</span> System</h3>
        </div>
        <div class="hidden w-full md:block md:w-auto">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium">
                <li className="md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white font-bold">
                <a href="#"><Link to="home" smooth={true} duration={500}>Home</Link></a>
                </li>
                <li className="md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white font-bold">
                <a href="#"><Link to="weather" smooth={true} offset={-50} duration={500}>Information</Link></a>
                </li>
                <li className="md:hover:text-red-500 md:hover:bg-transparent md:p-0 dark:text-gray-400 font-bold">
                  <button  onClick={() => setOpenPopup(true)}>Notification</button>
                  <Notification open={openPopup} onClose={() => setOpenPopup(false)}/>
                </li>
                <li className="md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white font-bold">
                <a href="#"><Link to="contact" smooth={true} offset={-100} duration={500}>Contact</Link></a>
                </li>
                <li className="md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white font-bold">
                <a href="#"><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></a>
                </li>
            </ul>
            <div className='md:hidden mr-4' onClick={handleClick}>
              {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
            </div>
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="weather" smooth={true} offset={-50} duration={500}>Information</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="contact" smooth={true} offset={-100} duration={500}>Contact</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="notification" smooth={true} offset={-50} duration={500}>Notification</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;