import { motion } from 'motion/react';
import { MapPin, Wifi, Server, Radio } from 'lucide-react';

export function CampusMap() {
  const locations = [
    { id: 1, name: 'College of Science', type: 'college', x: 20, y: 25, status: 'operational' },
    { id: 2, name: 'College of Engineering', type: 'college', x: 45, y: 35, status: 'operational' },
    { id: 3, name: 'College of Health Sciences', type: 'college', x: 70, y: 20, status: 'operational' },
    { id: 4, name: 'Main Data Center', type: 'datacenter', x: 50, y: 50, status: 'operational' },
    { id: 5, name: 'Great Hall', type: 'building', x: 35, y: 60, status: 'operational' },
    { id: 6, name: 'Library', type: 'building', x: 60, y: 65, status: 'operational' },
    { id: 7, name: 'Unity Hall', type: 'hostel', x: 25, y: 75, status: 'operational' },
    { id: 8, name: 'Republic Hall', type: 'hostel', x: 75, y: 75, status: 'operational' },
  ];

  const connections = [
    { from: 4, to: 1 },
    { from: 4, to: 2 },
    { from: 4, to: 3 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
    { from: 4, to: 7 },
    { from: 4, to: 8 },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'datacenter':
        return Server;
      case 'college':
        return Wifi;
      case 'hostel':
        return Radio;
      default:
        return MapPin;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'datacenter':
        return '#EF4444';
      case 'college':
        return '#3B82F6';
      case 'hostel':
        return '#8B5CF6';
      default:
        return '#10B981';
    }
  };

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
            Campus Coverage Map
          </h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            Complete network coverage across all colleges, lecture halls, hostels, and administrative buildings
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1E3A5F] rounded-3xl p-8 md:p-12 border border-[#2C5282] overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, #F4B942 1px, transparent 1px),
                linear-gradient(to bottom, #F4B942 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          {/* Map Container */}
          <div className="relative h-[600px] bg-[#0A1628] rounded-2xl border border-[#2C5282] overflow-hidden">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {connections.map((conn, i) => {
                const from = locations.find(l => l.id === conn.from);
                const to = locations.find(l => l.id === conn.to);
                if (!from || !to) return null;

                return (
                  <motion.line
                    key={i}
                    x1={`${from.x}%`}
                    y1={`${from.y}%`}
                    x2={`${to.x}%`}
                    y2={`${to.y}%`}
                    stroke="#F4B942"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                );
              })}
            </svg>

            {/* Location Nodes */}
            {locations.map((location, index) => {
              const Icon = getIcon(location.type);
              const color = getColor(location.type);

              return (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                  }}
                >
                  {/* Pulse Ring */}
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{
                      backgroundColor: color,
                      width: location.type === 'datacenter' ? '60px' : '40px',
                      height: location.type === 'datacenter' ? '60px' : '40px',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  ></div>

                  {/* Node */}
                  <div
                    className="relative flex items-center justify-center rounded-full border-2 border-white shadow-lg transition-all duration-200 group-hover:scale-125"
                    style={{
                      backgroundColor: color,
                      width: location.type === 'datacenter' ? '60px' : '40px',
                      height: location.type === 'datacenter' ? '60px' : '40px',
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
                      <div className="text-sm font-semibold text-[#0A1628]">{location.name}</div>
                      <div className="text-xs text-[#10B981] flex items-center gap-1 mt-1">
                        <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
                        Operational
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {[
              { type: 'datacenter', label: 'Data Center', icon: Server },
              { type: 'college', label: 'Colleges', icon: Wifi },
              { type: 'building', label: 'Buildings', icon: MapPin },
              { type: 'hostel', label: 'Hostels', icon: Radio },
            ].map((item) => (
              <div key={item.type} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white"
                  style={{ backgroundColor: getColor(item.type) }}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm text-[#D1D5DB]">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
