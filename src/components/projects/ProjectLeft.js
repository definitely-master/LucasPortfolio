import ButtonLight from '../UI/ButtonLight';
import H3Header from '../UI/H3Header';
import H4Header from '../UI/H4Header';
import TechStack from '../UI/TechStack';

const ProjectLeft = props => {
    return (
        <div className="mt-32 flex flex-wrap gap-6 max-w-5xl mx-auto px-2 text-white">
            <div className="w-full md:w-9/12 md:mx-auto lg:max-w-xl">
                <H3Header>
                    {props.projectTitle}
                </H3Header>
                {props.children}
                <H4Header>
                    Tech stack used in this project
                </H4Header>
                <p data-theme="mytheme" className="text-secondary mb-5">In this project, I employed the following technologies:</p>
                <div className="grid grid-cols-5 gap-4">
                    <TechStack usedTech={props.techStack} />
                </div>
            </div>
            <div data-theme="mytheme" className="max-w-sm justify-self-end mx-auto">
                <div className="w-6/12 mx-auto lg:mx-0 lg:mr-auto lg:w-8/12 pt-14">
    
                    <ButtonLight goTo={props.buttonGitHub} target='_blank' rel="noreferrer">GitHub</ButtonLight>
                    <div className={`${props.bgImage} bg-contain bg-no-repeat opacity-20 w-56 h-56 z-0 hidden lg:block`}></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectLeft;
