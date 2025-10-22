import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, ClipboardCheck, TrendingUp, FileText, Shield } from 'lucide-react';
import Reference from './pages/Reference';
import Assessment from './pages/Assessment';
import GapAnalysis from './pages/GapAnalysis';
import Documentation from './pages/Documentation';

function App() {
  const location = useLocation();

  const navigation = [
    { name: 'Framework Reference', path: '/', icon: BookOpen },
    { name: 'Assessment', path: '/assessment', icon: ClipboardCheck },
    { name: 'Gap Analysis', path: '/gap-analysis', icon: TrendingUp },
    { name: 'Documentation', path: '/documentation', icon: FileText },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-2xl font-bold text-white">NIST Cybersecurity Framework 2.0</h1>
              <p className="text-sm text-blue-200">Interactive Reference & Assessment Tool</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-3 transition-all ${
                    active
                      ? 'border-blue-600 text-blue-700 bg-blue-50'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Reference />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/gap-analysis" element={<GapAnalysis />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-300">
              Based on the{' '}
              <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">
                NIST Cybersecurity Framework 2.0
              </a>
              {' '}and{' '}
              <a href="https://www.nist.gov/privacy-framework" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-medium">
                Privacy Framework
              </a>
            </p>
            <p className="mt-2 text-xs text-gray-400">This tool is for reference purposes. Always consult official NIST documentation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
