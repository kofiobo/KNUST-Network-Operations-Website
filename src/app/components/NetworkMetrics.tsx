import { Users, Building2, Wifi, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function NetworkMetrics() {
  const metrics = [
    {
      icon: Users,
      value: '62,847',
      label: 'Students Connected',
      trend: '+2.3%',
      color: '#3B82F6',
    },
    {
      icon: Building2,
      value: '18',
      label: 'Colleges Covered',
      trend: '100%',
      color: '#10B981',
    },
    {
      icon: Wifi,
      value: '523',
      label: 'WiFi Hotspots',
      trend: '+12',
      color: '#F59E0B',
    },
    {
      icon: TrendingUp,
      value: '99.94%',
      label: 'Network Uptime',
      trend: 'Last 30 days',
      color: '#8B5CF6',
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
            Network Snapshot
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Real-time metrics from our campus-wide network infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F4B942] to-[#D4AF37] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative p-8 bg-white border border-[#D1D5DB] rounded-2xl hover:border-[#F4B942] transition-all duration-300 hover:shadow-xl">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${metric.color}15` }}
                >
                  <metric.icon className="w-7 h-7" style={{ color: metric.color }} />
                </div>

                <div className="text-5xl font-bold text-[#0A1628] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {metric.value}
                </div>

                <div className="text-sm text-[#6B7280] mb-3">{metric.label}</div>

                <div
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${metric.color}15`,
                    color: metric.color,
                  }}
                >
                  {metric.trend}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
