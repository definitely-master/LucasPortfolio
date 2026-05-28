const NavbarFooter = props => {
    return (
        <nav>
            <ul className='flex flex-col'>
                <li><a href='#section-projects' className='btn btn-ghost mb-2'>Projects</a> </li>
                {/* <li><a href='#section-code-library' className='btn btn-ghost mb-2'>Code Library</a> </li> */}
                <li><a href='#section-blog-posts' className='btn btn-ghost mb-2'>Blog Posts</a> </li>
                <li><a href='#section-about' className='btn btn-ghost mb-2'>About</a> </li>
                <li><a href='#section-contact' className='btn btn-ghost'>Contact</a> </li>
            </ul>
        </nav>
    );
};

export default NavbarFooter;
