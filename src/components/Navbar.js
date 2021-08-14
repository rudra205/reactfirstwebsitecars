import React,{useState,useEffect} from 'react'
import  { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);


    useEffect(() => {
        
        if(window.innerWidth>900){
            setClick(false);
        }
    });
    




    const closeMobilemenu = () => setClick(false);

    const[button,setButton] = useState(true);

    const showButton = () =>{
        if (window.innerWidth<=900){
            setButton(false);
        }
        else{
            setButton(true)
        }
    };

   
        

    window.addEventListener('resize',showButton);


    return (
        <div>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='Navbarlogo'>TRVL<i className='fab fa-typo3'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? 'navbar-active' : 'nav-menu'}>
                       <li className="nav-item" >
                           <Link to='/' className='nav-links' onClick={closeMobilemenu}>Home
                           </Link>
                       </li>

                       <li className="nav-item">
                           <Link to='/services' className='nav-links' onClick={closeMobilemenu}>Services
                           <i class="fas fa-caret-down"></i>
                           </Link>
                       </li>

                       <li className="nav-item">
                           <Link to='/products' className='nav-links' onClick={closeMobilemenu}>Products
                           </Link>
                       </li>

                       <li className="nav-item">
                           <Link to='/signup' className='nav-links-mobile' 
                            onClick={closeMobilemenu} > Sign up
                           </Link>
                       </li>
                    </ul>
                    {button & <Button buttonStyle='btn--outline'>SignUP</Button>}
                </div>
            </nav>
        </div>
    );
};

export default Navbar
