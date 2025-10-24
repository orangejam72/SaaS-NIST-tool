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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-700/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg shadow-blue-500/20">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                NIST Cybersecurity Framework 2.0
              </h1>
              <p className="text-sm text-slate-400 mt-0.5">Interactive Reference & Assessment Tool</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-t-lg transition-all ${
                    active
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
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
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Reference />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/gap-analysis" element={<GapAnalysis />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-sm text-slate-400">
              Based on the{' '}
              <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                NIST Cybersecurity Framework 2.0
              </a>
              {' '}and{' '}
              <a href="https://www.nist.gov/privacy-framework" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                Privacy Framework
              </a>
            </p>
            <p className="mt-3 text-xs text-slate-500">This tool is for reference purposes. Always consult official NIST documentation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
