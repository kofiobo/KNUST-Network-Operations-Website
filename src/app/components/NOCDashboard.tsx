import { motion } from 'motion/react';
import { Activity, AlertCircle, CheckCircle, TrendingUp, Cpu, HardDrive, Zap } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function NOCDashboard() {
  const systemHealth = [
    { name: 'Core Network', status: 'operational', uptime: '99.98%', icon: Activity },
    { name: 'WiFi Infrastructure', status: 'operational', uptime: '99.95%', icon: Zap },
    { name: 'Data Center', status: 'operational', uptime: '99.99%', icon: HardDrive },
    { name: 'Edge Routers', status: 'operational', uptime: '99.97%', icon: Cpu },
  ];

  const trafficData = [
    { time: '00:00', incoming: 45, outgoing: 32 },
    { time: '04:00', incoming: 28, outgoing: 18 },
    { time: '08:00', incoming: 82, outgoing: 65 },
    { time: '12:00', incoming: 95, outgoing: 78 },
    { time: '16:00', incoming: 88, outgoing: 72 },
    { time: '20:00', incoming: 68, outgoing: 55 },
  ];

  const performanceData = [
    { time: '6h', value: 94 },
    { time: '5h', value: 96 },
    { time: '4h', value: 93 },
    { time: '3h', value: 97 },
    { time: '2h', value: 95 },
    { time: '1h', value: 98 },
    { time: 'Now', value: 97 },
  ];

  const alerts = [
    { type: 'info', message: 'Scheduled maintenance: Data Center cooling system - April 25, 2:00 AM', time: '2h ago' },
    { type: 'success', message: 'Bandwidth upgrade completed: Engineering College uplink increased to 10Gbps', time: '5h ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return '#10B981';
      case 'warning':
        return '#F59E0B';
      case 'error':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FB] to-[#E5E8EC]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Network Operations Center
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Real-time monitoring and system health dashboard
          </p>
        </motion.div>

        {/* System Health Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemHealth.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-white border border-[#D1D5DB] rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${getStatusColor(system.status)}15` }}
                >
                  <system.icon className="w-6 h-6" style={{ color: getStatusColor(system.status) }} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: getStatusColor(system.status) }}></span>
                  <span className="text-xs font-semibold" style={{ color: getStatusColor(system.status) }}>
                    {system.status.toUpperCase()}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {system.name}
              </h3>
              <div className="text-sm text-[#6B7280]">
                Uptime: <span className="font-semibold text-[#0A1628]">{system.uptime}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Traffic Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white border border-[#D1D5DB] rounded-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  Network Traffic
                </h3>
                <p className="text-sm text-[#6B7280]">24-hour bandwidth utilization</p>
              </div>
              <TrendingUp className="w-6 h-6 text-[#10B981]" />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E8EC" />
                <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Line type="monotone" dataKey="incoming" stroke="#3B82F6" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="outgoing" stroke="#10B981" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#3B82F6] rounded-full"></span>
                <span className="text-sm text-[#6B7280]">Incoming</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#10B981] rounded-full"></span>
                <span className="text-sm text-[#6B7280]">Outgoing</span>
              </div>
            </div>
          </motion.div>

          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white border border-[#D1D5DB] rounded-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  System Performance
                </h3>
                <p className="text-sm text-[#6B7280]">Last 6 hours average</p>
              </div>
              <Activity className="w-6 h-6 text-[#F4B942]" />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F4B942" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#F4B942" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E8EC" />
                <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#F4B942"
                  strokeWidth={3}
                  fill="url(#performanceGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <span className="text-sm text-[#6B7280]">Current Performance: </span>
              <span className="text-sm font-semibold text-[#F4B942]">97%</span>
            </div>
          </motion.div>
        </div>

        {/* Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-white border border-[#D1D5DB] rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-[#0A1628] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            System Alerts & Notifications
          </h3>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-[#F8F9FB] border border-[#E5E8EC] rounded-xl"
              >
                {alert.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="text-sm text-[#0A1628]">{alert.message}</p>
                  <p className="text-xs text-[#6B7280] mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
