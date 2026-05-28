import ContactForm from "./ContactForm";
import ButtonLight from "../UI/ButtonLight";
import H3Header from "../UI/H3Header";
import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import EmailOptions from "../UI/EmailOptions";

const ContactSection = props => {
    return (<div className='bg-black pb-32'>
        <section id='section-contact'>
            <SectionHeader text={'Contact'} headerGradientStyle={'header-contact'} />
            <div className="flex flex-col gap-10 max-w-2xl mx-auto px-2">
                {/* <H3Header className='text-white mt-32'>
                    Let's get in touch!
                </H3Header> */}
            
                <div data-theme="mytheme" className='flex flex-wrap-reverse justify-around'>
                    {/* <ButtonLight className='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>work@Damiandemasi.com</ButtonLight> */}
                    <div className="dropdown dropdown-hover">
                        
                        <EmailOptions />
                    </div>
                    
                </div>
                <ParagraphLight>You can shoot me an email, send me a message on LinkedIn, or, if you prefer, use the contact form below.</ParagraphLight>
                <ContactForm />
            </div>
        </section>
    </div>);
};

export default ContactSection;
