import { motion } from 'motion/react';
import { Wifi, GraduationCap, BookOpen, Shield, Server, Lock } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Wifi,
      title: 'Campus WiFi',
      description: 'High-speed wireless connectivity across all campus locations with seamless roaming',
      stats: '500+ Hotspots',
      color: '#3B82F6',
    },
    {
      icon: GraduationCap,
      title: 'Student Portal Access',
      description: 'Secure access to academic records, registration, and student management systems',
      stats: '99.9% Uptime',
      color: '#10B981',
    },
    {
      icon: BookOpen,
      title: 'E-Learning & LMS',
      description: 'Reliable network infrastructure supporting Moodle and digital learning platforms',
      stats: '24/7 Available',
      color: '#F59E0B',
    },
    {
      icon: Shield,
      title: 'Staff VPN',
      description: 'Secure remote access for faculty and administrative staff to internal resources',
      stats: 'AES-256 Encrypted',
      color: '#8B5CF6',
    },
    {
      icon: Server,
      title: 'Data Center Hosting',
      description: 'Enterprise-grade hosting for university applications and research projects',
      stats: 'Tier III Facility',
      color: '#EF4444',
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Advanced threat protection, firewall management, and security monitoring',
      stats: 'SOC Monitored',
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
            Core Services
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Enterprise-grade network services supporting academic excellence and research innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: `${service.color}20` }}
              ></div>
              <div className="relative p-8 bg-white border border-[#D1D5DB] rounded-2xl hover:border-transparent transition-all duration-300 h-full flex flex-col">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>

                <h3 className="text-2xl font-bold text-[#0A1628] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>

                <p className="text-[#6B7280] mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                  style={{
                    backgroundColor: `${service.color}10`,
                    color: service.color,
                  }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }}></span>
                  {service.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
