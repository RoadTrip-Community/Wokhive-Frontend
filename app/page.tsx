import Footer from '@/components/Footer';
import CTA from '@/components/LandingPage/CTA';
import Communities from '@/components/LandingPage/Communities';
import GetStarted from '@/components/LandingPage/GetStarted';
import HeroPage from '@/components/LandingPage/HeroPage';
import JoinProgram from '@/components/LandingPage/JoinProgram';
import Testimonials from '@/components/LandingPage/Testimonials';
import WhyWokhive from '@/components/LandingPage/WhyWokhive';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <GetStarted />
      <WhyWokhive />
      <CTA />
      <Communities />
      <Testimonials />
      <JoinProgram />
      <Footer />
    </main>
  );
}
