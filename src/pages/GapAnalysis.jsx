import { AlertTriangle, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function GapAnalysis() {
  // This would typically use the ratings from Assessment page via context or state management
  // For now, showing a static example

  const gaps = [
    {
      subKey: 'GV.RM-05',
      category: 'Risk Management Strategy',
      description: 'Identified cybersecurity risks are tracked and monitored over time.',
      currentLevel: 'Not Implemented',
      targetLevel: 'Fully Implemented',
      priority: 'High',
      effort: 'Medium',
      recommendations: [
        'Implement a centralized risk register using tools like Archer or ServiceNow GRC',
        'Define risk scoring methodology based on NIST SP 800-30',
        'Establish quarterly risk review cadence with executive stakeholders',
      ],
    },
    {
      subKey: 'PR.AA-04',
      category: 'Identity Management, Authentication, and Access Control',
      description: 'Authentication and authorization mechanisms are implemented.',
      currentLevel: 'Partially Implemented',
      targetLevel: 'Fully Implemented',
      priority: 'Critical',
      effort: 'High',
      recommendations: [
        'Deploy Multi-Factor Authentication (MFA) across all privileged accounts',
        'Implement Single Sign-On (SSO) for cloud applications',
        'Enable passwordless authentication where possible',
      ],
    },
    {
      subKey: 'DE.CM-02',
      category: 'Continuous Monitoring',
      description: 'Network and system activity is monitored.',
      currentLevel: 'Largely Implemented',
      targetLevel: 'Fully Implemented',
      priority: 'Medium',
      effort: 'Low',
      recommendations: [
        'Expand SIEM coverage to include all cloud workloads',
        'Tune detection rules to reduce false positives',
        'Integrate threat intelligence feeds',
      ],
    },
  ];

  const getPriorityBadge = (priority) => {
    const colors = {
      Critical: 'bg-red-100 text-red-800',
      High: 'bg-orange-100 text-orange-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      Low: 'bg-green-100 text-green-800',
    };
    return colors[priority] || colors.Medium;
  };

  const getPriorityIcon = (priority) => {
    if (priority === 'Critical' || priority === 'High') {
      return <AlertTriangle className="w-4 h-4" />;
    } else if (priority === 'Medium') {
      return <AlertCircle className="w-4 h-4" />;
    }
    return <CheckCircle className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border-l-4 border-red-500 rounded-lg shadow-md p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Critical Gaps</div>
              <div className="text-3xl font-bold text-gray-900">1</div>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-lg shadow-md p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">High Priority</div>
              <div className="text-3xl font-bold text-gray-900">1</div>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-lg shadow-md p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Medium Priority</div>
              <div className="text-3xl font-bold text-gray-900">1</div>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-green-500 rounded-lg shadow-md p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Completion Rate</div>
              <div className="text-3xl font-bold text-gray-900">87%</div>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Gap Analysis Table */}
      <div className="bg-white rounded-lg shadow-md border-t-4 border-blue-600">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Identified Gaps & Recommendations</h2>
          <p className="text-sm text-gray-600 mt-1">
            Review gaps between current and target implementation levels
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {gaps.map((gap) => (
            <div key={gap.subKey} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-blue-700">{gap.subKey}</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 ${getPriorityBadge(gap.priority)}`}>
                      {getPriorityIcon(gap.priority)}
                      {gap.priority} Priority
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{gap.category}</div>
                  <div className="text-sm text-gray-800 mb-3">{gap.description}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xs text-gray-500 font-medium mb-1">Current Level</div>
                  <div className="font-bold text-red-600">{gap.currentLevel}</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xs text-gray-500 font-medium mb-1">Target Level</div>
                  <div className="font-bold text-green-600">{gap.targetLevel}</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="text-xs text-gray-500 font-medium mb-1">Estimated Effort</div>
                  <div className="font-bold text-blue-600">{gap.effort}</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-blue-600 rounded"></div>
                  Recommendations
                </div>
                <ul className="space-y-2">
                  {gap.recommendations.map((rec, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-3 pl-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span className="flex-1">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-md p-5">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <AlertCircle className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="font-bold text-gray-900 mb-2">About Gap Analysis</div>
            <div className="text-sm text-gray-700 leading-relaxed">
              Gap analysis helps identify the difference between your current cybersecurity posture and your desired target state.
              Use the Assessment page to rate your implementation levels, and this page will automatically calculate and display gaps
              with prioritized recommendations for improvement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
