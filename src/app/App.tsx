import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NetworkMetrics } from './components/NetworkMetrics';
import { CampusMap } from './components/CampusMap';
import { Services } from './components/Services';
import { NOCDashboard } from './components/NOCDashboard';
import { UserSegments } from './components/UserSegments';
import { Resources } from './components/Resources';
import { Support } from './components/Support';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <NetworkMetrics />
        <CampusMap />
        <Services />
        <NOCDashboard />
        <UserSegments />
        <Resources />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
