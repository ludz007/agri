import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  FileCheck,
  Users,
  BookOpen,
  FileText,
  HeadphonesIcon,
  GraduationCap,
  Leaf,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import logoUrl from "@assets/logo_1761907435635.png";
import farmerImage from "@assets/stock_images/professional_farmer__922a467e.jpg";

const services = [
  {
    icon: FileCheck,
    title: "Audit Preparation",
    description:
      "Comprehensive audit readiness services to ensure your operations meet all compliance standards before inspection.",
  },
  {
    icon: CheckCircle2,
    title: "Internal Audit",
    description:
      "Thorough internal auditing processes to identify gaps and strengthen your compliance framework proactively.",
  },
  {
    icon: BookOpen,
    title: "Induction Training Pack",
    description:
      "Develop and provide a comprehensive induction training pack designed for all farm employees, ensuring they gain the required compliance knowledge for SIZA and GLOBALG.A.P. standards.",
  },
  {
    icon: FileText,
    title: "Paperless System",
    description:
      "A paperless system is a cost and time-saving system.",
  },
  {
    icon: HeadphonesIcon,
    title: "Continued Post Audit Support",
    description:
      "Ongoing guidance and availability after audits to maintain compliance and address any emerging issues.",
  },
  {
    icon: GraduationCap,
    title: "One-on-One Training",
    description:
      "Personalized GLOBALG.A.P. and SIZA training sessions tailored to your specific operational needs.",
  },
];

const certifications = [
  { name: "GLOBALG.A.P.", description: "International farm assurance" },
  { name: "SIZA SOCIAL", description: "Social compliance" },
  { name: "SIZA ENVIRONMENTAL", description: "Environmental standards" },
  { name: "GRASP", description: "Risk assessment" },
  { name: "TESCO NURTURE", description: "UK retailer standard" },
  { name: "ALBERT HEIJN", description: "Dutch quality protocol" },
  { name: "SPRING", description: "Sustainable practices" },
  { name: "LEAF", description: "Linking environment & farming" },
];

const whatsappNumber = "27817251048";
const whatsappMessage = encodeURIComponent(
  "Hi, I'd like to book a consultation with Audit Compliance Consulting & Agri Training"
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Audit Compliance Consulting & Agri Training"
                className="h-10 w-auto"
                data-testid="img-logo"
              />
              <span className="font-semibold text-sm hidden sm:inline-block">
                Audit Compliance Consulting
              </span>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium hover-elevate px-3 py-2 rounded-md"
                data-testid="button-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-sm font-medium hover-elevate px-3 py-2 rounded-md hidden sm:inline-block"
                data-testid="button-nav-certifications"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover-elevate px-3 py-2 rounded-md hidden md:inline-block"
                data-testid="button-nav-contact"
              >
                Contact
              </button>
              <Button
                asChild
                className="bg-orange text-orange-foreground border-orange-border"
                data-testid="button-nav-whatsapp"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Book Now</span>
                  <span className="sm:hidden">Book</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-orange/5"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <img
              src={logoUrl}
              alt="Audit Compliance Consulting & Agri Training"
              className="h-32 sm:h-40 w-auto mx-auto"
              data-testid="img-hero-logo"
            />
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Audit Compliance Consulting
                <br />
                <span className="text-primary">& Agri Training</span>
              </h1>
              <p className="text-xl sm:text-2xl font-serif italic text-muted-foreground">
                Powerful insight. Proven Success.
              </p>
            </div>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              Expert agricultural audit compliance consulting and training
              services. We ensure your farm operations meet international
              standards with comprehensive support and personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-orange text-orange-foreground border-orange-border"
                data-testid="button-hero-whatsapp"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Book Consultation
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="backdrop-blur-sm"
                onClick={() => scrollToSection("services")}
                data-testid="button-hero-learn-more"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive audit compliance solutions tailored to your
              agricultural operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate" data-testid={`card-service-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-primary/10 p-3 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-certifications-title">
              Certification Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide expert guidance for all major agricultural compliance
              and certification standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover-elevate h-full" data-testid={`card-certification-${index}`}>
                  <div className="flex items-center justify-center mb-3">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {cert.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-why-choose-title">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Guidance</h3>
                    <p className="text-muted-foreground">
                      Years of experience in agricultural compliance and audit
                      preparation across multiple international standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Service</h3>
                    <p className="text-muted-foreground">
                      One-on-one training and support tailored to your specific
                      operational needs and challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Ongoing Support</h3>
                    <p className="text-muted-foreground">
                      Continued availability after audits to ensure sustained
                      compliance and address emerging requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Modern Solutions</h3>
                    <p className="text-muted-foreground">
                      Paperless systems and digital tools to streamline your
                      compliance processes efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={farmerImage}
                  alt="Professional agricultural consultant inspecting crops"
                  className="w-full h-auto rounded-lg"
                  data-testid="img-farmer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <Card className="absolute bottom-0 left-0 right-0 m-6 p-6 bg-background/95 backdrop-blur-sm">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold">
                      Ready to Get Started?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Book a consultation with our expert consultant and ensure
                      your farm meets all compliance standards.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange text-orange-foreground border-orange-border"
                      data-testid="button-cta-whatsapp"
                    >
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Book Your Consultation
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-contact-title">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Contact us today to discuss your compliance needs
            </p>

            <Card className="p-8 sm:p-12">
              <div className="space-y-8">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <img
                    src={logoUrl}
                    alt="Logo"
                    className="h-16 w-auto"
                  />
                  <div className="text-left">
                    <h3 className="font-bold text-xl">
                      Audit Compliance Consulting
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      & Agri Training
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-3 flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold mb-1">Consultant</p>
                      <p className="text-muted-foreground" data-testid="text-consultant-name">Estelle Kotze</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-3 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold mb-1">Phone</p>
                      <a
                        href={`tel:+${whatsappNumber}`}
                        className="text-muted-foreground hover:text-primary"
                        data-testid="link-phone"
                      >
                        +27 81 725 1048
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-primary/10 p-3 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:auditcc.at@gmail.com"
                        className="text-muted-foreground hover:text-primary break-all"
                        data-testid="link-email"
                      >
                        auditcc.at@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-orange/10 p-3 flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-orange" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold mb-1">WhatsApp</p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                        data-testid="link-whatsapp"
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-orange text-orange-foreground border-orange-border"
                    data-testid="button-contact-whatsapp"
                  >
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Book Consultation on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={logoUrl}
                  alt="Logo"
                  className="h-10 w-auto"
                />
                <span className="font-semibold">ACC & Agri Training</span>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Powerful insight. Proven Success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary hover-elevate px-2 py-1 rounded"
                    data-testid="button-footer-services"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("certifications")}
                    className="hover:text-primary hover-elevate px-2 py-1 rounded"
                    data-testid="button-footer-certifications"
                  >
                    Certifications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-primary hover-elevate px-2 py-1 rounded"
                    data-testid="button-footer-contact"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Audit Compliance Consulting & Agri
              Training. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
