import { Instagram, Twitter, Facebook, Youtube, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Collections', href: '/#collections' },
    { name: 'New Arrivals', href: '#' },
    { name: 'Boutiques', href: '#' },
    { name: 'Service Center', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Care Guide', href: '#' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Heritage', href: '#' },
    { name: 'Craftsmanship', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/#contact' },
    { name: 'FAQs', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Track Order', href: '#' },
    { name: 'Size Guide', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative w-full bg-[#FAF8F5] overflow-hidden">
      {/* Gold Accent Line */}
      <div className="gold-line w-full" />

      {/* Main Footer Content */}
      <div className="w-full px-6 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div>
              <h3 className="text-3xl font-bold text-[#2D2D2D] tracking-[0.2em]">
                DSIGNER'S
              </h3>
              <p className="text-[#003926] text-xs tracking-[0.5em] uppercase mt-1">
                Premium Timepieces
              </p>
            </div>

            {/* Description */}
            <p className="text-[#2D2D2D]/50 text-sm leading-relaxed max-w-sm">
              Crafting exceptional timepieces since 1999. Each DSIGNER'S watch 
              represents the pinnacle of Indian craftsmanship meeting Swiss precision, 
              designed to be cherished for generations.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-[#2D2D2D]/50 text-sm">
                <MapPin className="w-4 h-4 text-[#003926]" />
                <span>42, Lavelle Road, Bangalore - 560001, India</span>
              </div>
              <div className="flex items-center gap-3 text-[#2D2D2D]/50 text-sm">
                <Mail className="w-4 h-4 text-[#003926]" />
                <span>hello@dsigners.in</span>
              </div>
              <div className="flex items-center gap-3 text-[#2D2D2D]/50 text-sm">
                <Phone className="w-4 h-4 text-[#003926]" />
                <span>+91 98765 43210</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-[#E8E0D4] flex items-center justify-center text-[#2D2D2D]/50 hover:border-[#003926] hover:text-[#003926] hover:shadow-lg hover:shadow-[#003926]/10 transition-all duration-300 interactive"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[#2D2D2D] font-semibold mb-6 text-sm uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#2D2D2D]/50 text-sm hover:text-[#003926] transition-colors duration-300 interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#2D2D2D] font-semibold mb-6 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#2D2D2D]/50 text-sm hover:text-[#003926] transition-colors duration-300 interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#2D2D2D] font-semibold mb-6 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#2D2D2D]/50 text-sm hover:text-[#003926] transition-colors duration-300 interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-[#2D2D2D] font-semibold mb-6 text-sm uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-[#2D2D2D]/50 text-sm mb-4">
              Subscribe for exclusive releases and horological insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-white border border-[#E8E0D4] rounded-sm text-[#2D2D2D] text-sm placeholder:text-[#2D2D2D]/30 focus:outline-none focus:border-[#003926] transition-colors interactive"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#003926] text-white font-semibold text-sm rounded-sm hover:bg-[#B8935F] transition-colors interactive"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 lg:px-16 xl:px-24 py-6 border-t border-[#E8E0D4]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-[#2D2D2D]/30 text-xs">
            © 2024 DSIGNER'S Watches. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            <a href="#" className="text-[#2D2D2D]/30 text-xs hover:text-[#003926] transition-colors interactive">
              Privacy Policy
            </a>
            <a href="#" className="text-[#2D2D2D]/30 text-xs hover:text-[#003926] transition-colors interactive">
              Terms of Service
            </a>
            <a href="#" className="text-[#2D2D2D]/30 text-xs hover:text-[#003926] transition-colors interactive">
              Cookie Settings
            </a>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-[#2D2D2D]/30 text-xs">We accept:</span>
            <div className="flex gap-2">
              {['UPI', 'VISA', 'MC', 'AMEX', 'PayPal'].map((method, index) => (
                <div
                  key={index}
                  className="px-2 py-1 bg-white border border-[#E8E0D4] rounded text-[#2D2D2D]/50 text-[10px] font-medium"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="gold-line w-full" />
    </footer>
  );
};

export default Footer;
