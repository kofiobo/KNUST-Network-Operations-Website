import { ChevronRight, Network, Wifi } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
      {/* Network Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #F4B942 1px, transparent 1px),
            linear-gradient(to bottom, #F4B942 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Animated Network Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#F4B942] rounded-full"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + (i * 0.3),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="15%" y1="30%" x2="27%" y2="50%" stroke="#F4B942" strokeWidth="1" />
          <line x1="27%" y1="50%" x2="39%" y2="70%" stroke="#F4B942" strokeWidth="1" />
          <line x1="39%" y1="70%" x2="51%" y2="30%" stroke="#F4B942" strokeWidth="1" />
          <line x1="51%" y1="30%" x2="63%" y2="50%" stroke="#F4B942" strokeWidth="1" />
          <line x1="63%" y1="50%" x2="75%" y2="70%" stroke="#F4B942" strokeWidth="1" />
          <line x1="75%" y1="70%" x2="87%" y2="30%" stroke="#F4B942" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-[#F4B942] bg-opacity-10 border border-[#F4B942] border-opacity-30 rounded-full"
        >
          <Network className="w-4 h-4 text-[#F4B942]" />
          <span className="text-sm text-[#F4B942]">Mission-Critical Infrastructure</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          KNUST Network<br />
          <span className="text-[#F4B942]">Operations & Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#D1D5DB] max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Delivering secure, high-speed connectivity across campus. Supporting 60,000+ students,
          staff, and researchers with enterprise-grade network infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group px-8 py-4 bg-[#F4B942] hover:bg-[#FCD34D] text-[#0A1628] rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
            Check Network Status
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#0A1628] text-white rounded-xl font-semibold flex items-center gap-2 transition-all duration-200">
            <Wifi className="w-5 h-5" />
            Connect to Campus WiFi
          </button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '60K+', label: 'Connected Users' },
            { value: '500+', label: 'WiFi Hotspots' },
            { value: '24/7', label: 'NOC Monitoring' },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-[#F4B942] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {stat.value}
              </div>
              <div className="text-sm text-[#9CA3AF]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F9FB] to-transparent"></div>
    </section>
  );
}
