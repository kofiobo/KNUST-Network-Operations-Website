import { motion } from 'motion/react';
import { GraduationCap, Briefcase, FlaskConical, ChevronRight } from 'lucide-react';

export function UserSegments() {
  const segments = [
    {
      icon: GraduationCap,
      title: 'Students',
      description: 'Access your student portal, e-learning platforms, and campus WiFi',
      features: [
        'Register and connect devices',
        'Access Moodle LMS',
        'Student email and portal',
        'WiFi troubleshooting guides',
      ],
      cta: 'Student Resources',
      color: '#3B82F6',
      bgImage: 'https://images.unsplash.com/photo-1655543274920-06de452d0d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      icon: Briefcase,
      title: 'Staff',
      description: 'Secure VPN access, administrative systems, and faculty resources',
      features: [
        'VPN setup and configuration',
        'Admin portal access',
        'Staff email services',
        'Remote work support',
      ],
      cta: 'Staff Portal',
      color: '#10B981',
      bgImage: 'https://images.unsplash.com/photo-1603857365671-93cd96dc1df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      icon: FlaskConical,
      title: 'Researchers',
      description: 'High-performance computing, data storage, and research collaboration tools',
      features: [
        'Research data storage',
        'HPC cluster access',
        'Collaboration platforms',
        'Dedicated bandwidth',
      ],
      cta: 'Research Services',
      color: '#8B5CF6',
      bgImage: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Network Access by User Type
          </h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            Tailored network services and support for each member of the KNUST community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[#1E3A5F] border border-[#2C5282] hover:border-[#F4B942] transition-all duration-300"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <img
                  src={segment.bgImage}
                  alt={segment.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${segment.color}20`, borderColor: segment.color, borderWidth: '2px' }}
                >
                  <segment.icon className="w-8 h-8" style={{ color: segment.color }} />
                </div>

                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {segment.title}
                </h3>

                <p className="text-[#D1D5DB] mb-6 leading-relaxed">
                  {segment.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {segment.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: segment.color }}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="group/btn w-full px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                  style={{
                    backgroundColor: `${segment.color}15`,
                    color: segment.color,
                    borderColor: segment.color,
                    borderWidth: '2px',
                  }}
                >
                  {segment.cta}
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
