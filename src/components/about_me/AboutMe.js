import hero1 from '../../assets/img/portfolio_circle.webp';
import iconLinkedIn from '../../assets/img/icon-linkedin.webp';
import iconTwitter from '../../assets/img/icon-twitter.webp';
import iconGitHub from '../../assets/img/icon-github.webp';
import ButtonLight from '../UI/ButtonLight';
import H3Header from '../UI/H3Header';
import IconWhite from '../UI/IconWhite';
import TechStack from '../UI/TechStack';
import resume from '../../assets/pdf/rucas.pdf';

const AboutMe = props => {
    return (
        <div className="mt-32 flex gap-6 max-w-5xl mx-auto text-white px-2 flex-wrap md:flex-nowrap">
            <div data-theme="mytheme" className="mx-auto">
                <div>
                    <img src={hero1} alt='Tony with a hat in a park on a sunny day.' className='max-w-xs' />
                </div>
                <div className="w-3/5 mx-auto mt-14">
                    <ButtonLight goTo={resume} target='_blank' rel="noreferrer">Get my Resume</ButtonLight>
                </div>
                <div className="w-4/5 mx-auto mt-14 flex justify-around">
                    <IconWhite icon={iconLinkedIn}>LinkedIn</IconWhite>
                    <IconWhite icon={iconTwitter} >Twitter</IconWhite>
                    <IconWhite icon={iconGitHub} goTo='https://github.com/jirokobadev' ariaLabel='GitHub'>GitHub</IconWhite>
                </div>
            </div>
            <div className="">
                <H3Header>
                    {props.projectTitle}
                </H3Header>
                {props.children}
                <h4 className="text-xl font-bold mt-5 mb-3">My tech stack</h4>
                <p data-theme="mytheme" className="text-secondary mb-5">I'm proficient with the following relevant technologies:</p>
                <div className="grid grid-cols-5 gap-4">
                    <TechStack usedTech={props.techStack} />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;