import { useState, useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { BarChart3, Save, Download, Shield, Lock } from 'lucide-react';
import { FULL_CSF_REFERENCE, PRIVACY_FRAMEWORK } from '../data/csfData';

const MATURITY_LEVELS = [
  { value: 0, label: 'Not Implemented', color: '#EF4444', pastel: '#FCA5A5' },
  { value: 1, label: 'Partially Implemented', color: '#F59E0B', pastel: '#FCD34D' },
  { value: 2, label: 'Largely Implemented', color: '#10B981', pastel: '#6EE7B7' },
  { value: 3, label: 'Fully Implemented', color: '#3B82F6', pastel: '#93C5FD' },
];

export default function Assessment() {
  const [ratings, setRatings] = useState({});
  const [activeFramework, setActiveFramework] = useState('csf'); // 'csf' or 'privacy' or 'both'
  const [targetLevel, setTargetLevel] = useState(3); // Default target level

  const updateRating = (subKey, value) => {
    setRatings(prev => ({ ...prev, [subKey]: value }));
  };

  // CSF Radar Data
  const csfRadarData = useMemo(() => {
    return FULL_CSF_REFERENCE.map(func => {
      const allSubcategories = func.categories.flatMap(cat => cat.subcategories);
      const ratedSubcategories = allSubcategories.filter(sub => ratings[sub.subKey] !== undefined);
      const average = ratedSubcategories.length > 0
        ? ratedSubcategories.reduce((sum, sub) => sum + ratings[sub.subKey], 0) / ratedSubcategories.length
        : 0;

      return {
        function: func.funcKey,
        score: Math.round(average * 100) / 100,
        target: targetLevel,
        fullMark: 3,
      };
    });
  }, [ratings, targetLevel]);

  // Privacy Radar Data
  const privacyRadarData = useMemo(() => {
    return PRIVACY_FRAMEWORK.map(func => {
      const allSubcategories = func.categories.flatMap(cat => cat.subcategories);
      const ratedSubcategories = allSubcategories.filter(sub => ratings[sub.subKey] !== undefined);
      const average = ratedSubcategories.length > 0
        ? ratedSubcategories.reduce((sum, sub) => sum + ratings[sub.subKey], 0) / ratedSubcategories.length
        : 0;

      return {
        function: func.funcKey,
        score: Math.round(average * 100) / 100,
        target: targetLevel,
        fullMark: 3,
      };
    });
  }, [ratings, targetLevel]);

  // Combined Total Score Data
  const combinedRadarData = useMemo(() => {
    const csfScore = csfRadarData.reduce((sum, item) => sum + item.score, 0) / csfRadarData.length || 0;
    const privacyScore = privacyRadarData.reduce((sum, item) => sum + item.score, 0) / privacyRadarData.length || 0;

    return [
      { framework: 'CSF 2.0', score: Math.round(csfScore * 100) / 100, fullMark: 3 },
      { framework: 'Privacy', score: Math.round(privacyScore * 100) / 100, fullMark: 3 },
    ];
  }, [csfRadarData, privacyRadarData]);

  const overallScore = useMemo(() => {
    const scores = Object.values(ratings);
    if (scores.length === 0) return 0;
    return Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 100) / 100;
  }, [ratings]);

  const totalSubcategories = useMemo(() => {
    const csfCount = FULL_CSF_REFERENCE.reduce((total, func) => {
      return total + func.categories.reduce((catTotal, cat) => {
        return catTotal + cat.subcategories.length;
      }, 0);
    }, 0);

    const privacyCount = PRIVACY_FRAMEWORK.reduce((total, func) => {
      return total + func.categories.reduce((catTotal, cat) => {
        return catTotal + cat.subcategories.length;
      }, 0);
    }, 0);

    return csfCount + privacyCount;
  }, []);

  const completionPercentage = useMemo(() => {
    return Math.round((Object.keys(ratings).length / totalSubcategories) * 100);
  }, [ratings, totalSubcategories]);

  return (
    <div className="space-y-6">
      {/* Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-blue-500/10 p-6 border border-slate-700 hover:shadow-blue-500/20 transition-all">
          <div className="text-xs text-cyan-400 mb-2 font-semibold uppercase tracking-wide">Overall Maturity Score</div>
          <div className="text-4xl font-bold text-white">{overallScore.toFixed(2)} <span className="text-xl text-slate-400">/ 3.00</span></div>
          <div className="mt-3 text-sm text-slate-300">
            {overallScore < 1 ? 'Needs Significant Work' : overallScore < 2 ? 'Developing' : overallScore < 3 ? 'Maturing' : 'Optimized'}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-green-500/10 p-6 border border-slate-700 hover:shadow-green-500/20 transition-all">
          <div className="text-xs text-green-400 mb-2 font-semibold uppercase tracking-wide">Assessment Progress</div>
          <div className="text-4xl font-bold text-white">{completionPercentage}<span className="text-xl text-slate-400">%</span></div>
          <div className="mt-3 text-sm text-slate-300">
            {Object.keys(ratings).length} of {totalSubcategories} subcategories rated
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-purple-500/10 p-6 border border-slate-700 hover:shadow-purple-500/20 transition-all">
          <div className="mb-4">
            <label className="block text-xs text-purple-400 font-semibold uppercase tracking-wide mb-2">
              Target Maturity Level
            </label>
            <select
              value={targetLevel}
              onChange={(e) => setTargetLevel(Number(e.target.value))}
              className="w-full px-3 py-2 bg-slate-950 border-2 border-slate-600 rounded-lg text-sm font-medium text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
            >
              {MATURITY_LEVELS.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.value} - {level.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/30 transition-all">
              <Save className="w-4 h-4" />
              Save Assessment
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 text-white rounded-lg text-sm font-semibold hover:bg-slate-600 border border-slate-600 transition-all">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Framework Selection Tabs */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-700">
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setActiveFramework('csf')}
            className={`px-5 py-3 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all ${
              activeFramework === 'csf'
                ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-700 text-slate-300 border-2 border-slate-600 hover:border-cyan-500 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <Shield className="w-5 h-5" />
            Cybersecurity Framework
          </button>
          <button
            onClick={() => setActiveFramework('privacy')}
            className={`px-5 py-3 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all ${
              activeFramework === 'privacy'
                ? 'bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-slate-700 text-slate-300 border-2 border-slate-600 hover:border-purple-500 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <Lock className="w-5 h-5" />
            Privacy Framework
          </button>
          <button
            onClick={() => setActiveFramework('both')}
            className={`px-5 py-3 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all ${
              activeFramework === 'both'
                ? 'bg-gradient-to-br from-green-600 to-emerald-500 text-white shadow-lg shadow-green-500/30'
                : 'bg-slate-700 text-slate-300 border-2 border-slate-600 hover:border-green-500 hover:bg-slate-600 hover:text-white'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            Combined View
          </button>
        </div>
      </div>

      {/* Radar Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CSF Radar */}
        {(activeFramework === 'csf' || activeFramework === 'both') && (
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-blue-500/10 p-6 border border-slate-700">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-cyan-400 uppercase tracking-wide">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg shadow-lg shadow-blue-500/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
              CSF 2.0 Maturity by Function
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={csfRadarData} key={JSON.stringify(csfRadarData)}>
                <PolarGrid stroke="#cbd5e1" strokeWidth={1.5} />
                <PolarAngleAxis dataKey="function" tick={{ fontSize: 12, fill: '#374151', fontWeight: 600 }} />
                <PolarRadiusAxis angle={90} domain={[0, 3]} tick={{ fontSize: 11, fill: '#6b7280' }} />
                <Radar name="Target Level" dataKey="target" stroke="#9CA3AF" fill="#E5E7EB" fillOpacity={0.3} strokeWidth={2} strokeDasharray="5 5" />
                <Radar name="Current Score" dataKey="score" stroke="#60A5FA" fill="#93C5FD" fillOpacity={0.4} strokeWidth={3} />
                <Legend wrapperStyle={{ fontSize: '13px', fontWeight: 500 }} />
                <Tooltip contentStyle={{ fontSize: '13px', backgroundColor: 'white', border: '2px solid #e5e7eb', borderRadius: '8px', padding: '8px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Privacy Radar */}
        {(activeFramework === 'privacy' || activeFramework === 'both') && (
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-6 border border-purple-200">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-purple-900 uppercase tracking-wide">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Lock className="w-5 h-5 text-purple-600" />
              </div>
              Privacy Framework Maturity by Function
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={privacyRadarData} key={JSON.stringify(privacyRadarData)}>
                <PolarGrid stroke="#cbd5e1" strokeWidth={1.5} />
                <PolarAngleAxis dataKey="function" tick={{ fontSize: 12, fill: '#374151', fontWeight: 600 }} />
                <PolarRadiusAxis angle={90} domain={[0, 3]} tick={{ fontSize: 11, fill: '#6b7280' }} />
                <Radar name="Target Level" dataKey="target" stroke="#9CA3AF" fill="#E5E7EB" fillOpacity={0.3} strokeWidth={2} strokeDasharray="5 5" />
                <Radar name="Current Score" dataKey="score" stroke="#A78BFA" fill="#C4B5FD" fillOpacity={0.4} strokeWidth={3} />
                <Legend wrapperStyle={{ fontSize: '13px', fontWeight: 500 }} />
                <Tooltip contentStyle={{ fontSize: '13px', backgroundColor: 'white', border: '2px solid #e5e7eb', borderRadius: '8px', padding: '8px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Combined Total Score Chart */}
      {activeFramework === 'both' && (
        <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-6 border border-green-200">
          <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-green-900 uppercase tracking-wide">
            <div className="p-2 bg-green-100 rounded-lg">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            Overall Framework Comparison
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={combinedRadarData} key={JSON.stringify(combinedRadarData)}>
              <PolarGrid stroke="#cbd5e1" strokeWidth={1.5} />
              <PolarAngleAxis dataKey="framework" tick={{ fontSize: 12, fill: '#374151', fontWeight: 600 }} />
              <PolarRadiusAxis angle={90} domain={[0, 3]} tick={{ fontSize: 11, fill: '#6b7280' }} />
              <Radar name="Overall Score" dataKey="score" stroke="#34D399" fill="#6EE7B7" fillOpacity={0.4} strokeWidth={3} />
              <Legend wrapperStyle={{ fontSize: '13px', fontWeight: 500 }} />
              <Tooltip contentStyle={{ fontSize: '13px', backgroundColor: 'white', border: '2px solid #e5e7eb', borderRadius: '8px', padding: '8px' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Assessment Form - CSF */}
      {(activeFramework === 'csf' || activeFramework === 'both') && (
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 border border-blue-200">
          <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-blue-900 uppercase tracking-wide">
            <Shield className="w-5 h-5 text-blue-600" />
            Rate CSF 2.0 Subcategories
          </h3>
          <div className="space-y-4">
            {FULL_CSF_REFERENCE.map((func) => (
              <div key={func.funcKey}>
                <h4 className="font-bold text-sm text-blue-700 mb-3 pb-2 border-b border-blue-200">{func.funcKey}: {func.funcName.split(':')[0]}</h4>
                {func.categories.map((cat) => (
                  <div key={cat.catKey} className="ml-3 mb-3">
                    <h5 className="font-semibold text-xs text-gray-800 mb-2">{cat.catKey} - {cat.catName}</h5>
                    <div className="space-y-2">
                      {cat.subcategories.map((sub) => (
                        <div key={sub.subKey} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
                          <div className="flex-1">
                            <div className="font-semibold text-xs text-gray-900 tracking-tight">{sub.subKey}</div>
                            <div className="text-xs text-gray-600 mt-1 leading-tight">{sub.description}</div>
                          </div>
                          <div className="flex gap-1.5 flex-shrink-0">
                            {MATURITY_LEVELS.map((level) => (
                              <button
                                key={level.value}
                                onClick={() => updateRating(sub.subKey, level.value)}
                                className={`w-9 h-9 text-xs font-bold rounded-lg transition-all ${
                                  ratings[sub.subKey] === level.value
                                    ? 'text-white shadow-md transform scale-105'
                                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 text-gray-400 hover:text-gray-600 hover:border-gray-400 hover:from-gray-100 hover:to-gray-200'
                                }`}
                                style={ratings[sub.subKey] === level.value ? { backgroundColor: level.color } : {}}
                                title={level.label}
                              >
                                {level.value}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assessment Form - Privacy */}
      {(activeFramework === 'privacy' || activeFramework === 'both') && (
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-6 border border-purple-200">
          <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-purple-900 uppercase tracking-wide">
            <Lock className="w-5 h-5 text-purple-600" />
            Rate Privacy Framework Subcategories
          </h3>
          <div className="space-y-4">
            {PRIVACY_FRAMEWORK.map((func) => (
              <div key={func.funcKey}>
                <h4 className="font-bold text-sm text-purple-700 mb-3 pb-2 border-b border-purple-200">{func.funcKey}: {func.funcName.split(':')[0]}</h4>
                {func.categories.map((cat) => (
                  <div key={cat.catKey} className="ml-3 mb-3">
                    <h5 className="font-semibold text-xs text-gray-800 mb-2">{cat.catKey} - {cat.catName}</h5>
                    <div className="space-y-2">
                      {cat.subcategories.map((sub) => (
                        <div key={sub.subKey} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
                          <div className="flex-1">
                            <div className="font-semibold text-xs text-gray-900 tracking-tight">{sub.subKey}</div>
                            <div className="text-xs text-gray-600 mt-1 leading-tight">{sub.description}</div>
                          </div>
                          <div className="flex gap-1.5 flex-shrink-0">
                            {MATURITY_LEVELS.map((level) => (
                              <button
                                key={level.value}
                                onClick={() => updateRating(sub.subKey, level.value)}
                                className={`w-9 h-9 text-xs font-bold rounded-lg transition-all ${
                                  ratings[sub.subKey] === level.value
                                    ? 'text-white shadow-md transform scale-105'
                                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 text-gray-400 hover:text-gray-600 hover:border-gray-400 hover:from-gray-100 hover:to-gray-200'
                                }`}
                                style={ratings[sub.subKey] === level.value ? { backgroundColor: level.color } : {}}
                                title={level.label}
                              >
                                {level.value}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-sm font-bold mb-4 text-gray-700 uppercase tracking-wide">Maturity Level Guide</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MATURITY_LEVELS.map((level) => (
            <div key={level.value} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-sm shadow-sm" style={{ backgroundColor: level.color }}>
                {level.value}
              </div>
              <span className="text-sm text-gray-700 font-medium">{level.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
