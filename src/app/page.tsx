"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, CheckCircle, Clock, Shield, ShieldCheck, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Treatments", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="DentalClinics"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "gradient-bars" }}
      title="Your Smile Deserves Expert Care"
      description="Providing comprehensive dental care from routine cleanings to advanced implant surgery in a professional, comfortable environment."
      kpis={[
        { value: "10k+", label: "Smiles Restored" },
        { value: "15+", label: "Years Experience" },
        { value: "5.0", label: "Patient Rating" },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/beauty-salon-treatment-room_181624-30807.jpg"
      imageAlt="Modern dental clinic environment"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/smiling-medical-team-standing-together-hospital-corridor_107420-84830.jpg", alt: "Medical staff smiling" },
        { src: "http://img.b2bpic.net/free-photo/smiling-nurse-hospital_23-2151997622.jpg", alt: "Nurse smiling" },
        { src: "http://img.b2bpic.net/free-photo/portrait-smiling-male-doctor_171337-1485.jpg", alt: "Doctor smiling" },
        { src: "http://img.b2bpic.net/free-photo/male-dentist-looking-camera_23-2147862094.jpg", alt: "Dentist portrait" },
        { src: "http://img.b2bpic.net/free-photo/goodlooking-male-dentist-standing-dental-office_651396-3120.jpg", alt: "Dentist in office" },
      ]}
      marqueeItems={[
        { type: "text", text: "Trusted by Thousands" },
        { type: "text", text: "State-of-the-Art Technology" },
        { type: "text", text: "Comprehensive Care" },
        { type: "text", text: "Family Friendly" },
        { type: "text", text: "Emergency Services" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Excellence in Dental Care"
      metrics={[
        { icon: Award, label: "Certified Specialists", value: "20+" },
        { icon: ShieldCheck, label: "Safety Guarantee", value: "100%" },
        { icon: Clock, label: "Patient Satisfaction", value: "99%" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "General Dentistry",          description: "Preventive care, cleanings, and checkups to maintain your oral health.",          bentoComponent: { icon: CheckCircle },
          imageSrc: "http://img.b2bpic.net/free-vector/dental-design-concept_1284-4395.jpg",          imageAlt: "glowing tooth icon dental"},
        {
          title: "Implants & Prosthetics",          description: "Comfortable, high-quality tooth replacements designed to feel natural.",          bentoComponent: { icon: Sparkles },
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-salon-treatment-room_181624-30807.jpg",          imageAlt: "glowing tooth icon dental"},
        {
          title: "Endodontics",          description: "Expert treatment for deep infections and root canal care.",          bentoComponent: { icon: Shield },
          imageSrc: "http://img.b2bpic.net/free-vector/dental-health-caries-teeth-healthcare-instruments-dent-protection-flat-icons-set-isolated-vector-illustration_1284-2950.jpg",          imageAlt: "glowing tooth icon dental"},
      ]}
      title="Comprehensive Dental Services"
      description="We specialize in modern dental treatments tailored to your unique needs, ensuring comfort and long-term oral health."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        { id: "m1", name: "Dr. Sarah Miller", role: "Chief Dentist", imageSrc: "http://img.b2bpic.net/free-photo/smiling-healthcare-professional-hospital-corridor_23-2151997633.jpg" },
        { id: "m2", name: "Dr. James Wilson", role: "Dental Surgeon", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-dentist-dentist-s-clinic_329181-20753.jpg" },
        { id: "m3", name: "Elena Torres", role: "Hygienist", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-face-mask-standing-office-holding-clipboard-with-documents_93675-134804.jpg" },
      ]}
      title="Meet Our Professional Team"
      description="Our team of highly qualified dental experts is dedicated to your health and well-being."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", name: "Sarah Johnson", date: "2023", title: "Excellent service", quote: "Fantastic service. Had a restoration done and couldn't be happier.", tag: "Restoration", avatarSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-doctor-wearing-white-coat_23-2149844582.jpg", imageSrc: "http://img.b2bpic.net/free-photo/close-up-dentist-using-instruments_23-2151053276.jpg" },
        { id: "t2", name: "Robson Martins", date: "2023", title: "Professional and efficient", quote: "Great service from the moment I arrived. Highly efficient professionals.", tag: "Implants", avatarSrc: "http://img.b2bpic.net/free-photo/happy-doctor-holding-medical-paperwork-while-communicating-with-patient-medical-appointment-hospital_637285-1422.jpg", imageSrc: "http://img.b2bpic.net/free-photo/dentist-treats-childs-tooth-using-rubber-dam-installing-filling-tooth_169016-67007.jpg" },
        { id: "t3", name: "Emily Rodriguez", date: "2024", title: "Highly recommended", quote: "Exceptional care and very welcoming environment.", tag: "General Care", avatarSrc: "http://img.b2bpic.net/free-photo/expressive-young-girl-posing-studio_176474-65923.jpg", imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-outdoor_624325-782.jpg" },
        { id: "t4", name: "David Kim", date: "2024", title: "Excellent result", quote: "Everything was perfect, highly professional clinic.", tag: "Treatment", avatarSrc: "http://img.b2bpic.net/free-photo/handsome-man-looking-camera-leaning-fist_23-2148179008.jpg", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-sitting-dentist-s-office_1157-20957.jpg" },
        { id: "t5", name: "Anna Smith", date: "2024", title: "Best experience", quote: "The team made me feel completely at ease throughout my entire procedure.", tag: "General", avatarSrc: "http://img.b2bpic.net/free-photo/confident-young-woman-doctor-with-toothy-smile-generated-by-ai_188544-29156.jpg", imageSrc: "http://img.b2bpic.net/free-photo/happy-young-female-dentist_23-2148396137.jpg" },
      ]}
      title="What Our Patients Say"
      description="Experience excellence through the words of those who trust us with their smiles."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "What insurance do you accept?", content: "We work with all major providers and offer flexible payment plans." },
        { id: "f2", title: "How long does an implant take?", content: "The process varies based on your needs, typically involving a few appointments." },
        { id: "f3", title: "Do you offer emergency care?", content: "Yes, we prioritize emergency cases and offer same-day appointments." },
      ]}
      sideTitle="Commonly Asked Questions"
      sideDescription="Everything you need to know about our dental services and patient care."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Book Your Appointment"
      description="Ready to improve your smile? Contact us today to schedule your consultation."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true },
      ]}
      textarea={{ name: "message", placeholder: "How can we help?", rows: 4 }}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-spacious-office-dentist_8353-9976.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Treatments", href: "#features" }, { label: "About Us", href: "#" }, { label: "Blog", href: "#" }] },
        { items: [{ label: "Contact", href: "#contact" }, { label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
      logoText="DentalClinics"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
