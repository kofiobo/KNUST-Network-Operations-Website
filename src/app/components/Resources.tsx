import { motion } from 'motion/react';
import { FileText, Download, Book, AlertTriangle, Shield, Settings } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      icon: Settings,
      title: 'WiFi Setup Guide',
      description: 'Step-by-step instructions for connecting to KNUST WiFi on all devices',
      type: 'Guide',
      color: '#3B82F6',
    },
    {
      icon: Shield,
      title: 'VPN Configuration',
      description: 'Configure secure VPN access for remote connectivity',
      type: 'Tutorial',
      color: '#10B981',
    },
    {
      icon: Book,
      title: 'Acceptable Use Policy',
      description: 'University network usage guidelines and policies',
      type: 'Policy',
      color: '#F59E0B',
    },
    {
      icon: AlertTriangle,
      title: 'Troubleshooting',
      description: 'Common network issues and how to resolve them',
      type: 'Help',
      color: '#EF4444',
    },
    {
      icon: FileText,
      title: 'Network Documentation',
      description: 'Technical documentation and network architecture',
      type: 'Docs',
      color: '#8B5CF6',
    },
    {
      icon: Download,
      title: 'Software & Tools',
      description: 'Download network utilities and configuration tools',
      type: 'Downloads',
      color: '#F4B942',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Documentation & Resources
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Guides, policies, and tools to help you connect and stay connected
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 bg-white border border-[#D1D5DB] rounded-xl hover:shadow-xl transition-all duration-300 hover:border-transparent hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${resource.color}15` }}
                >
                  <resource.icon className="w-6 h-6" style={{ color: resource.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-2 py-1 rounded text-xs font-semibold"
                      style={{
                        backgroundColor: `${resource.color}10`,
                        color: resource.color,
                      }}
                    >
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#F4B942] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {resource.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-8 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            Quick Access
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Student Portal',
              'Moodle LMS',
              'VPN Portal',
              'Email Access',
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                className="px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-20 hover:border-opacity-40 rounded-xl text-white text-center transition-all duration-200 font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
