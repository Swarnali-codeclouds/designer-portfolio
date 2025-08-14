import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner';
import MarqueBanner from './Components/MarqueBanner';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SectionPadding from './SectionPadding';
import AboutSec from './Components/AboutSec';
import ServiceSection from './Components/ServiceSection';
import Portfolio from './Portfolio';
import Experience from './Components/Experience';
import Testimonial from './Components/Testimonial';
import Footer from './Footer';


function App() {
  return (
   <>
   <Banner></Banner>
   <MarqueBanner items={[
    "Creative UI/UX Designer",
    "Responsive Web Developer",
    "Branding Specialist",
    "Interactive Prototyping",
    "Figma Expert"
   ]}/>
   <SectionPadding />
   <AboutSec />
   <ServiceSection />
   <SectionPadding />
   <Portfolio />
   <SectionPadding />
   <Experience />
   <SectionPadding />
   <Testimonial />
   <Footer />
   </>
  )
}

export default App;
