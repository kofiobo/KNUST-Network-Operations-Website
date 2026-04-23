import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'Quick Links': [
      'Network Status',
      'Services',
      'Coverage Map',
      'Documentation',
    ],
    'User Portals': [
      'Student Portal',
      'Staff Portal',
      'VPN Access',
      'Moodle LMS',
    ],
    'Support': [
      'Help Center',
      'Submit Ticket',
      'FAQs',
      'Contact Us',
    ],
    'Policies': [
      'Acceptable Use Policy',
      'Privacy Policy',
      'Security Guidelines',
      'Terms of Service',
    ],
  };

  return (
    <footer className="bg-[#0A1628] border-t border-[#1E3A5F]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F4B942] to-[#D4AF37] flex items-center justify-center">
                <span className="text-2xl font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-heading)' }}>K</span>
              </div>
              <div>
                <h3 className="text-white text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  KNUST
                </h3>
                <p className="text-[#9CA3AF] text-xs">Network Operations</p>
              </div>
            </div>
            <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6">
              Delivering secure, high-speed connectivity across the KNUST campus, supporting academic excellence and research innovation.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all duration-200 group"
              >
                <Facebook className="w-5 h-5 text-[#D1D5DB] group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all duration-200 group"
              >
                <Twitter className="w-5 h-5 text-[#D1D5DB] group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-[#D1D5DB] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#D1D5DB] hover:text-[#F4B942] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-[#1E3A5F]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F4B942] bg-opacity-20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#F4B942]" />
            </div>
            <div>
              <p className="text-xs text-[#9CA3AF]">Phone</p>
              <p className="text-sm text-white font-semibold">+233 (0)32 206 0001</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F4B942] bg-opacity-20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#F4B942]" />
            </div>
            <div>
              <p className="text-xs text-[#9CA3AF]">Email</p>
              <p className="text-sm text-white font-semibold">noc@knust.edu.gh</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F4B942] bg-opacity-20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#F4B942]" />
            </div>
            <div>
              <p className="text-xs text-[#9CA3AF]">Location</p>
              <p className="text-sm text-white font-semibold">KNUST Campus, Kumasi</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E3A5F] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#9CA3AF]">
            © 2026 KNUST Network Operations & Infrastructure. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[#D1D5DB] hover:text-[#F4B942] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-[#D1D5DB] hover:text-[#F4B942] transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-sm text-[#D1D5DB] hover:text-[#F4B942] transition-colors">
              ICT Policies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
