import React, {useState, useEffect} from 'react';
import LOGO from '../assets/images/j•p.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {useHistory, useLocation, Link} from 'react-router-dom'
// import {Link as ScrollLink} from 'react-scroll'

const Navbar = () => {
    const history = useHistory();
    const location = useLocation();
    const {pathname} = location;
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log(location.pathname)
    }, [])
    return(
        //! Main navbar wrapper ~~~START
        <div className='flex flex-col justify-between py-3 mx-auto bg-black lg:flex-row lg:p-0 navbar-container'>
            <div className="flex items-center justify-between lg:mx-21">
                <div className="flex cursor-pointer lg:animate-float">
                    <Link to='/'><img src={LOGO} alt="" className='w-24 h-24 lg:h-32 lg:w-32'/></Link>
                </div>
                {location.pathname !== "/" ? (
                    <div className={`${toggle ? 'flex' : 'hidden'} flex-col justify-center lg:items-center pb-4 lg:pb-0 lg:flex`}>
                    <nav>
                        <ul className="flex flex-col gap-5 px-8 text-white lg:flex-row">
                            {/* <li><ScrollLink to='projects' smooth={true}><a href="" className='nav-item'>Projects</a></ScrollLink></li> */}
                            <li><a href="" className='text-2xl nav-item'>Dashboard</a></li>
                            <li><a href="" className='text-2xl nav-item'>Projects</a></li>
                        </ul>
                    </nav>
                    </div>
                ) : null}
                <div className="flex mr-4 lg:hidden">
                    {toggle ? <AiOutlineClose size='3em' className='font-bold text-red-600 cursor-pointer'onClick={() => setToggle(!toggle)}/> : <GiHamburgerMenu size='3em' className='font-extrabold text-white cursor-pointer' onClick={() => setToggle(!toggle)}/> }
                </div>
            </div>

            {location.pathname !== "/" ? (<div className={`${toggle ? 'flex' : 'hidden'} flex-col justify-center lg:items-center pb-4 lg:pb-0 lg:flex`}>
                <nav>
                    <ul className="flex flex-col px-8 text-white lg:flex-row">
                        {/* <li><ScrollLink to='projects' smooth={true}><a href="" className='nav-item'>Projects</a></ScrollLink></li> */}
                        <li><a href="" className='nav-item'>Skills</a></li>
                        <li><a href="" className='nav-item'>Contact</a></li>
                    </ul>
                </nav>
            </div>) : null}
        </div> //! Main navbar wrapper ~~~END
    )
}

export default Navbar