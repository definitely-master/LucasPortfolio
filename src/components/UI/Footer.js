import iconLinkedIn from '../../assets/img/icon-linkedin.webp';
import iconTwitter from '../../assets/img/icon-twitter.webp';
import iconGitHub from '../../assets/img/icon-github.webp';
import iconReact from '../../assets/img/icon-react.svg';
import iconTailwind from '../../assets/img/icon-tailwind.svg';
import locationPin from '../../assets/img/locationPin.webp';
import IconBlack from "./IconBlack";
import NavbarFooter from "./NavbarFooter";
import resume from '../../assets/pdf/rucas.pdf';
import EmailOptions from './EmailOptions';


const Footer = props => {
    return (
        <footer className='flex flex-wrap justify-evenly gap-5 lg:gap-10 max-w-5xl m-auto mt-32'>
            <NavbarFooter />
            <div className='text-left hero-content items-start'>
                <div className='max-w-2xl'>
                    <p className='mb-5'><span><img src={locationPin} className='h-4 inline mb-1 mr-1' alt='Location pin icon' />Argentina</span></p>
                    <h1 className='mb-5  font-bold font-poppins'>
                        <span className='block text-md lg:text-xl'>Lucas Romero,</span><span className='text-3xl lg:text-5xl subpixel-antialiased'>web<br />developer</span>
                    </h1>
                    <a href={resume} target='_blank' rel="noreferrer" className='btn mr-10 btn-md mb-5 sm:mb-0'>Get my Resume</a>
                    <div className="dropdown dropdown-hover">
                       
                        <EmailOptions />
                    </div>
                    <div className="mt-14 flex justify-between">
                        <IconBlack icon={iconLinkedIn} goTo='https://www.linkedin.com/in/Damian-demasi/' ariaLabel='LinkedIn'>LinkedIn</IconBlack>
                        <IconBlack icon={iconTwitter} goTo='https://twitter.com/DamianDemasi' ariaLabel='Twitter'>Twitter</IconBlack>
                        <IconBlack icon={iconGitHub} goTo='https://github.com/jirokobadev' ariaLabel='GitHub'>GitHub</IconBlack>
                    </div>
                    <div className='mt-10 text-xs'>
                        <p>Portfolio site made by Lucas Romero, using<img src={iconReact} alt="" className='w-7 inline -mx-1' />ReactJS, <img src={iconTailwind} alt="" className='w-4 inline mx-1' />TailwindCSS and DaisyUI.</p>
                        <p>Icons from <a href='https://www.flaticon.com/' target='_blank' rel='noreferrer' className='link ' >Flaticon.</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
