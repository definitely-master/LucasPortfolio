import { useEffect, useState } from 'react';
import locationPin from '../../assets/img/locationPin.png';
import hero1 from '../../assets/img/portfolio_circle.webp';
import resume from '../../assets/pdf/rucas.pdf';
import EmailOptions from './EmailOptions';

const Hero = props => {
    const [isAnimated1, setIsAnimated1] = useState(true);
    const [isAnimated2, setIsAnimated2] = useState(false);
    const [isAnimated3, setIsAnimated3] = useState(false);

    useEffect(() => {

        // const timer = setTimeout(() => {
        //     if (isAnimated1) {
        //         setIsAnimated2(!isAnimated2); // Set        
        //         setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //         setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //     }
        //     if (isAnimated2) {
        //         setIsAnimated3(!isAnimated3); // Set        
        //         setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000); // Remove (2000   + 2000 = 4 sec animation)
        //         setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //     }
        //     if (isAnimated3) {
        //         setIsAnimated1(!isAnimated1); // Set        
        //         setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //         setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //     }
        // }, 2000);
        // console.log(new Date().getSeconds());

        const timer = setTimeout(() => {
            setIsAnimated2(!isAnimated2); // Set
            setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
            setTimeout(() => {
                setIsAnimated3(!isAnimated3); // Set
                setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000); // Remove
                setTimeout(() => {
                    setIsAnimated1(!isAnimated1); // Set
                    setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000); // Remove
                }, 1000);
            }, 2000);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [isAnimated1, isAnimated2, isAnimated3]);

    const commonClasses = 'inline-block subpixel-antialiased';
    const commonBigTextClasses = 'text-6xl md:text-8xl lg:text-9xl';
    const tailwindClassName = `text-3xl md:text-4xl lg:text-5xl ${commonClasses} ${isAnimated1 && 'name-gradient'}`;
    const tailwindClassWeb = `${commonBigTextClasses} ${commonClasses} ${isAnimated2 && 'first-word-gradient'}`;
    const tailwindClassDeveloper = `pb-4 ${commonBigTextClasses} ${commonClasses} ${isAnimated3 && 'second-word-gradient'}`;

    return (
        <div className='hero min-h-85vh'>
            <div className='text-left hero-content items-start'>
                <div>
                    <img src={hero1} alt='Damian Demasi with a hat in a park on a sunny day.' className='mt-10 hidden lg:block lg:max-w-xs xl:max-w-md' />
                </div>
                <div className='max-w-2xl'>
                    <p className='mb-5'><span><img src={locationPin} className='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Argentina</p>
                    <h1 className='mb-5 font-bold font-poppins'>
                        <span className={tailwindClassName}>Lucas Romero,</span><br /><span className={tailwindClassWeb}>web</span><br /><span className={tailwindClassDeveloper}>developer</span>
                    </h1>
                    <p className='my-8 md:my-16 text-neutral xl:leading-loose'>
                        I'm a Web Developer based in Argentina. Even though I have a Telecommunications Engineering degree and an MBA, coding is my passion and my new professional career focus. Developing applications for the web has become my drive.
                    </p>
                    <a href={resume} target='_blank' rel="noreferrer" className='btn mr-10 btn-md text-xs mb-5 sm:mb-0'>Get my Resume</a>
                    <div className="dropdown dropdown-hover">
                       
                        <EmailOptions />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;
