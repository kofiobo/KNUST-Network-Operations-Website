import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Ticket } from 'lucide-react';

export function Support() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+233 (0)32 206 0001',
      availability: 'Available 24/7',
      color: '#3B82F6',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+233 50 123 4567',
      availability: 'Mon-Fri: 8AM-6PM',
      color: '#10B981',
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'noc@knust.edu.gh',
      availability: 'Response within 4 hours',
      color: '#F59E0B',
    },
    {
      icon: Ticket,
      title: 'Ticket System',
      details: 'Submit Support Ticket',
      availability: 'Track your requests',
      color: '#8B5CF6',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Network Support
          </h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            Our NOC team is here to help with any network issues or questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-xl hover:bg-opacity-10 transition-all duration-300 cursor-pointer group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${method.color}20`, borderColor: method.color, borderWidth: '2px' }}
                >
                  <method.icon className="w-7 h-7" style={{ color: method.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {method.title}
                </h3>
                <p className="text-[#F4B942] font-semibold mb-1">{method.details}</p>
                <p className="text-sm text-[#9CA3AF]">{method.availability}</p>
              </motion.div>
            ))}
          </div>

          {/* Office Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Visit Our Office
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F4B942] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#F4B942]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Network Operations Center</h4>
                  <p className="text-[#D1D5DB] text-sm leading-relaxed">
                    Central Administration Block<br />
                    KNUST Campus, Kumasi<br />
                    Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F4B942] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#F4B942]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Office Hours</h4>
                  <p className="text-[#D1D5DB] text-sm leading-relaxed">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed (Emergency support available)
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full px-6 py-4 bg-[#F4B942] hover:bg-[#FCD34D] text-[#0A1628] rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105">
              Get Directions
            </button>
          </motion.div>
        </div>

        {/* FAQ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-8 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            Common Issues
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Can\'t connect to WiFi',
              'Slow internet speed',
              'VPN connection issues',
              'Reset network password',
              'Register new device',
              'Network outage report',
            ].map((issue, index) => (
              <a
                key={index}
                href="#"
                className="px-4 py-3 bg-white bg-opacity-5 hover:bg-opacity-10 border border-white border-opacity-10 hover:border-opacity-30 rounded-lg text-[#D1D5DB] hover:text-white text-sm transition-all duration-200 text-center"
              >
                {issue}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
