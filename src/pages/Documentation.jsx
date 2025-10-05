import { FileText, BookOpen, ExternalLink, Download } from 'lucide-react';

export default function Documentation() {
  const resources = [
    {
      category: 'Official NIST Resources',
      items: [
        {
          title: 'NIST Cybersecurity Framework 2.0',
          description: 'The complete CSF 2.0 document with all functions, categories, and subcategories.',
          url: 'https://www.nist.gov/cyberframework',
          type: 'PDF',
        },
        {
          title: 'CSF 2.0 Quick Start Guide',
          description: 'A quick reference guide for getting started with the Framework.',
          url: 'https://www.nist.gov/cyberframework/getting-started',
          type: 'Web',
        },
        {
          title: 'Implementation Examples',
          description: 'Real-world examples of CSF implementation across various industries.',
          url: 'https://www.nist.gov/cyberframework/resources',
          type: 'Web',
        },
      ],
    },
    {
      category: 'Supporting Publications',
      items: [
        {
          title: 'NIST SP 800-53 Rev. 5',
          description: 'Security and Privacy Controls for Information Systems and Organizations',
          url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final',
          type: 'PDF',
        },
        {
          title: 'NIST SP 800-30',
          description: 'Guide for Conducting Risk Assessments',
          url: 'https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final',
          type: 'PDF',
        },
        {
          title: 'NIST SP 800-37',
          description: 'Risk Management Framework for Information Systems',
          url: 'https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final',
          type: 'PDF',
        },
      ],
    },
    {
      category: 'Training & Education',
      items: [
        {
          title: 'CSF Online Learning',
          description: 'Free online courses and training modules for the Cybersecurity Framework.',
          url: 'https://www.nist.gov/cyberframework/online-learning',
          type: 'Web',
        },
        {
          title: 'Webinar Series',
          description: 'Recorded webinars on CSF implementation and best practices.',
          url: 'https://www.nist.gov/cyberframework/events',
          type: 'Video',
        },
      ],
    },
  ];

  const frameworkOverview = {
    title: 'About NIST CSF 2.0',
    sections: [
      {
        heading: 'What is the NIST Cybersecurity Framework?',
        content: 'The NIST Cybersecurity Framework (CSF) 2.0 provides guidance to industry, government agencies, and other organizations to manage cybersecurity risks. It offers a taxonomy of high-level cybersecurity outcomes that can be used by any organization to better understand, assess, prioritize, and communicate its cybersecurity efforts.',
      },
      {
        heading: 'The Six Core Functions',
        content: 'CSF 2.0 is built around six core functions that provide a strategic view of the lifecycle of an organization\'s cybersecurity risk management:',
        list: [
          'GOVERN (GV) - Organizational governance and strategy',
          'IDENTIFY (ID) - Asset and risk understanding',
          'PROTECT (PR) - Safeguards implementation',
          'DETECT (DE) - Anomaly and incident discovery',
          'RESPOND (RS) - Incident response actions',
          'RECOVER (RC) - Restoration of capabilities and services',
        ],
      },
      {
        heading: 'Implementation Tiers',
        content: 'The Framework includes four Implementation Tiers that describe the degree to which an organization\'s cybersecurity risk management practices exhibit the characteristics defined in the Framework:',
        list: [
          'Tier 1: Partial - Risk management practices are not formalized',
          'Tier 2: Risk Informed - Risk management practices are approved by management but may not be established as organizational policy',
          'Tier 3: Repeatable - Organization\'s risk management practices are formally approved and expressed as policy',
          'Tier 4: Adaptive - Organization adapts its cybersecurity practices based on lessons learned and predictive indicators',
        ],
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Framework Overview */}
      <div className="bg-white rounded-lg shadow-md border-t-4 border-blue-600 p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          {frameworkOverview.title}
        </h2>
        <div className="space-y-5">
          {frameworkOverview.sections.map((section, idx) => (
            <div key={idx} className="border-l-4 border-gray-200 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{section.heading}</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{section.content}</p>
              {section.list && (
                <ul className="space-y-2 ml-2">
                  {section.list.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm text-gray-700 flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      {resources.map((category, catIdx) => (
        <div key={catIdx} className="bg-white rounded-lg shadow-md border-t-4 border-green-600">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-bold flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              {category.category}
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {category.items.map((item, idx) => (
              <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-700">
                        {item.type}
                      </span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1.5 transition-colors"
                      >
                        View Resource
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Download className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Additional Information */}
      <div className="bg-white border-l-4 border-purple-500 rounded-lg shadow-md p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <ExternalLink className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              If you have questions about implementing the NIST Cybersecurity Framework or need additional resources,
              visit the official NIST CSF website or contact your organization's cybersecurity team.
            </p>
          </div>
        </div>
        <a
          href="https://www.nist.gov/cyberframework"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm"
        >
          Visit NIST CSF Website
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
