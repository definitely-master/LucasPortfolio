import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';

const HamburgerMenu = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState('z-n1');

    const clickHandler = () => {
        setIsOpen(!isOpen);

        // Move the drawer to the background so the content of the page can be clicked on
        setHide('');
        setTimeout(() => {
            setHide('z-n1');
        }, 300);
    };

    const moveToBack = !isOpen ? `${hide}` : '';
    const myClass = `rounded-lg drawer drawer-end fixed h-screen w-full z-20 ${moveToBack}`;
    const triggerMenu = isOpen ? <input id="my-drawer" type="checkbox" className="drawer-toggle" checked readOnly /> : <input id="my-drawer" type="checkbox" className="drawer-toggle" readOnly />;

    return (
        <>
            <div className='fixed z-30 top-4 right-4 bg-gray-200 rounded-lg md:hidden shadow-md'>
                <Hamburger toggled={isOpen} toggle={clickHandler} duration={0.5} color="#3D4451" rounded label="Show menu" />
            </div>
            <label for="my-drawer"></label>
            <div className={myClass} >
                {/* <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly /> */}
                {triggerMenu}
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay" onClick={clickHandler} ></label>
                    <ul className='p-6 pt-20 overflow-y-auto w-80 bg-base-100 flex-col '>
                        <li><a href='#section-projects' className='btn w-full mb-5' onClick={clickHandler}>Projects</a> </li>
                        {/* <li><a href='#section-code-library' className='btn w-full mb-5'>Code<span className='hidden sm:inline sm:ml-2' onClick={clickHandler}>Library</span></a> </li> */}
                        <li><a href='#section-blog-posts' className='btn w-full mb-5' onClick={clickHandler}>Blog<span className='hidden sm:inline sm:ml-2'>Posts</span></a> </li>
                        <li><a href='#section-about' className='btn w-full mb-5' onClick={clickHandler}>About</a> </li>
                        <li><a href='#section-contact' className='btn w-full mb-5' onClick={clickHandler}>Contact</a> </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;
