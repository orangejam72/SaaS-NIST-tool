import { useState } from 'react';
import { ChevronDown, ChevronRight, Shield, Eye, Link } from 'lucide-react';
import { FULL_CSF_REFERENCE } from '../data/csfData';

export default function Reference() {
  const [expandedFunctions, setExpandedFunctions] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleFunction = (funcKey) => {
    setExpandedFunctions(prev => ({ ...prev, [funcKey]: !prev[funcKey] }));
  };

  const toggleCategory = (catKey) => {
    setExpandedCategories(prev => ({ ...prev, [catKey]: !prev[catKey] }));
  };

  const getFunctionColor = (funcKey) => {
    const colors = {
      'GV': { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-700', icon: 'bg-purple-100 text-purple-600' },
      'ID': { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700', icon: 'bg-blue-100 text-blue-600' },
      'PR': { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', icon: 'bg-green-100 text-green-600' },
      'DE': { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-700', icon: 'bg-yellow-100 text-yellow-600' },
      'RS': { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700', icon: 'bg-orange-100 text-orange-600' },
      'RC': { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-700', icon: 'bg-red-100 text-red-600' },
    };
    return colors[funcKey] || colors['ID'];
  };

  return (
    <div className="space-y-4">
      {FULL_CSF_REFERENCE.map((func) => {
        const colors = getFunctionColor(func.funcKey);
        return (
          <div key={func.funcKey} className={`bg-white rounded-lg shadow-md border-l-4 ${colors.border}`}>
            <button
              onClick={() => toggleFunction(func.funcKey)}
              className={`w-full px-5 py-4 flex items-center justify-between hover:${colors.bg} transition-colors`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 ${colors.icon} rounded-lg`}>
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className={`font-bold text-base ${colors.text}`}>{func.funcKey}</span>
                  <p className="text-sm text-gray-700 mt-1">{func.funcName}</p>
                </div>
              </div>
              {expandedFunctions[func.funcKey] ? (
                <ChevronDown className={`w-5 h-5 ${colors.text}`} />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedFunctions[func.funcKey] && (
              <div className={`px-5 pb-4 pt-2 space-y-3 ${colors.bg}`}>
                {func.categories.map((cat) => (
                  <div key={cat.catKey} className={`border-l-3 ${colors.border} pl-4 bg-white rounded-r-lg p-3 shadow`}>
                    <button
                      onClick={() => toggleCategory(cat.catKey)}
                      className={`w-full text-left py-2 flex items-center justify-between hover:${colors.bg} rounded px-2 transition-colors`}
                    >
                      <div className="flex-1">
                        <span className={`font-semibold text-sm ${colors.text}`}>{cat.catKey}</span>
                        <span className="text-sm text-gray-800 ml-2">{cat.catName}</span>
                      </div>
                      {expandedCategories[cat.catKey] ? (
                        <ChevronDown className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </button>

                    {expandedCategories[cat.catKey] && (
                      <div className="mt-3 space-y-2">
                        {cat.subcategories.map((sub) => (
                          <div key={sub.subKey} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                            <div className="font-semibold text-sm text-gray-900 mb-1">
                              {sub.subKey}
                            </div>
                            <p className="text-sm text-gray-700 mb-2 leading-relaxed">{sub.description}</p>

                            {sub.examples && sub.examples.length > 0 && (
                              <div className="mb-2 bg-white rounded p-2.5 border border-gray-100">
                                <div className={`text-xs font-semibold ${colors.text} mb-1.5 flex items-center`}>
                                  <Eye className="w-3.5 h-3.5 mr-1.5" />
                                  Examples:
                                </div>
                                <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 ml-1">
                                  {sub.examples.map((ex, idx) => (
                                    <li key={idx} className="leading-relaxed">{ex}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {sub.references && sub.references.length > 0 && (
                              <div className="bg-white rounded p-2.5 border border-gray-100">
                                <div className={`text-xs font-semibold ${colors.text} mb-1.5 flex items-center`}>
                                  <Link className="w-3.5 h-3.5 mr-1.5" />
                                  References:
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {sub.references.map((ref, idx) => (
                                    <span key={idx} className={`text-xs ${colors.icon} px-2.5 py-1 rounded font-medium`}>
                                      {ref}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
