import './App.css';
import Footer from './components/UI/Footer';
import BlogSection from './components/blog_posts/BlogSection';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/about_me/AboutSection';
import Testimonies from './components/about_me/Testimonies';
import ContactSection from './components/contact/ContactSection';
import Header from './components/UI/Header';

// Easter egg
console.log('    __  __     ____                               __    ____',
  '\n   / / / /__  / / /___       _      ______  _____/ /___/ / /',
  '\n  / /_/ / _ \\/ / / __ \\     | | /| / / __ \\/ ___/ / __  / / ',
  '\n / __  /  __/ / / /_/ /     | |/ |/ / /_/ / /  / / /_/ /_/  ',
  '\n/_/ /_/\\___/_/_/\\____( )    |__/|__/\\____/_/  /_/\\__,_(_)   ',
  '\n                     |/                                     ',
  '\n\nThanks for visiting my portfolio site! Please, feel free to contact me using any of these options:',
  '\nðŸ“§ Email: work@Damiandemasi.com',
  '\nðŸ¤ Twitter: https://twitter.com/DamianDemasi',
  '\nðŸ‘¨â€ðŸ’¼ LinkedIn: https://www.linkedin.com/in/Damian-demasi/');

function App() {

  return (
    <>
      {/* Header */}
      <Header />
      {/* Projects */}
      <div className='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mb-1'></div>
      <ProjectsSection />
      <div className='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>
      {/* Blog Posts */}
      <BlogSection />;
      {/* About me */}
      <div className='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-10 -mb-1'></div>
      <AboutSection />
      <div className='bg-wave-bottom w-full h-96 bg-no-repeat bg-cover -mt-5'></div>
      <Testimonies />
      {/* Contact */}
      <div className='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-32 -mb-1'></div>
      <ContactSection />
      <div className='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
