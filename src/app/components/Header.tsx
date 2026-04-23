import { Activity, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'Network Status',
    'Services',
    'Coverage Map',
    'Resources',
    'Support',
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A1628] border-b border-[#1E3A5F] backdrop-blur-md bg-opacity-95">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F4B942] to-[#D4AF37] flex items-center justify-center">
              <span className="text-2xl font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-heading)' }}>K</span>
            </div>
            <div>
              <h1 className="text-white text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                KNUST
              </h1>
              <p className="text-[#9CA3AF] text-xs">Network Operations</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 text-sm text-[#D1D5DB] hover:text-white hover:bg-[#1E3A5F] rounded-lg transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 bg-[#10B981] bg-opacity-10 border border-[#10B981] border-opacity-30 rounded-lg">
            <div className="relative">
              <Activity className="w-4 h-4 text-[#10B981]" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
            </div>
            <span className="text-sm text-[#10B981] font-medium">All Systems Operational</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-[#1E3A5F] rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#1E3A5F]">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-3 text-sm text-[#D1D5DB] hover:text-white hover:bg-[#1E3A5F] rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="mt-2 mx-4 px-4 py-3 bg-[#10B981] bg-opacity-10 border border-[#10B981] border-opacity-30 rounded-lg flex items-center gap-3">
                <Activity className="w-4 h-4 text-[#10B981]" />
                <span className="text-sm text-[#10B981] font-medium">All Systems Operational</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
