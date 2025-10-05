export const FULL_CSF_REFERENCE = [
  {
    funcKey: 'GV',
    funcName: 'GOVERN: The organization\'s cybersecurity risk management strategy, expectations, and policy are established, communicated, and monitored.',
    categories: [
      {
        catKey: 'GV.OC',
        catName: 'Organizational Context',
        subcategories: [
          { subKey: 'GV.OC-01', description: 'The organizational mission is understood and informs cybersecurity risk management.', examples: ['Share the organization\'s mission (e.g., through vision and mission statements, marketing, and service strategies) to provide a basis for identifying risks that may impede that mission'], references: ['CSF v1.1: ID.BE-1', 'SP 800-221A: GV.CT-3'] },
          { subKey: 'GV.OC-02', description: 'Internal and external stakeholders and their cybersecurity-related needs and expectations are understood.', examples: ['Inventory and analyze legal, regulatory, and contractual requirements to identify cybersecurity obligations'], references: ['CSF v1.1: ID.BE-3', 'SP 800-221A: GV.CO-1'] },
          { subKey: 'GV.OC-03', description: 'Legal, regulatory, and contractual requirements regarding cybersecurity are understood and inform the organization\'s cybersecurity policies.', examples: ['Develop policies, standards, and guidelines that address legal and regulatory requirements'], references: ['CSF v1.1: ID.BE-4', 'ISO/IEC 27001: A.18.1.1'] },
          { subKey: 'GV.OC-04', description: 'Dependencies and critical functions are understood and inform cybersecurity risk management.', examples: ['Document data, systems, and capabilities that are essential to the mission and operations of the organization'], references: ['CSF v1.1: ID.BE-5', 'ISO/IEC 27001: A.12.1.2'] },
          { subKey: 'GV.OC-05', description: 'Resources necessary for cybersecurity risk management are identified and prioritized.', examples: ['Establish a cybersecurity budget based on identified resource needs and risk prioritization'], references: ['CSF v1.1: ID.BE-2'] },
        ],
      },
      {
        catKey: 'GV.RM',
        catName: 'Risk Management Strategy',
        subcategories: [
          { subKey: 'GV.RM-01', description: 'The organization\'s cybersecurity risk management strategy is established and communicated.', examples: ['Define and communicate a standardized process for conducting risk assessments across the organization'], references: ['CSF v1.1: ID.RM-1', 'SP 800-30: R.3'] },
          { subKey: 'GV.RM-02', description: 'The organization\'s risk tolerance for cybersecurity is established and approved by management.', examples: ['Determine the acceptable level of potential impact and likelihood of risk to operations, assets, or individuals'], references: ['CSF v1.1: ID.RM-2', 'SP 800-37: R.3.1'] },
          { subKey: 'GV.RM-03', description: 'Assets are prioritized by mission and operations.', examples: ['Categorize systems based on the sensitivity of the data they process and their mission criticality'], references: ['CSF v1.1: ID.AM-2'] },
          { subKey: 'GV.RM-04', description: 'Risk is addressed based on the organization\'s risk management strategy and risk tolerance.', examples: ['Select and implement appropriate cybersecurity controls (e.g., control families in SP 800-53) based on the organization\'s risk appetite'], references: ['CSF v1.1: ID.RM-3'] },
          { subKey: 'GV.RM-05', description: 'Identified cybersecurity risks are tracked and monitored over time.', examples: ['Establish a risk register to track risk status, treatment plans, and residual risk levels'], references: ['CSF v1.1: ID.RA-6'] },
          { subKey: 'GV.RM-06', description: 'Risk response activities are approved and funded.', examples: ['Ensure that necessary resources are allocated to implement risk response plans, such as control modernization or system upgrades'], references: ['CSF v1.1: ID.RM-3'] },
          { subKey: 'GV.RM-07', description: 'Organizational change management processes incorporate cybersecurity considerations.', examples: ['Require cybersecurity review and approval before implementing major changes to the network or critical applications'], references: ['CSF v1.1: ID.AM-6'] },
        ],
      },
      {
        catKey: 'GV.RR',
        catName: 'Roles, Responsibilities, and Authorities',
        subcategories: [
          { subKey: 'GV.RR-01', description: 'Cybersecurity roles and responsibilities for all personnel are established and communicated.', examples: ['Define clear job descriptions for security team members (e.g., CISO, analyst, engineer) and their reporting structure'], references: ['CSF v1.1: ID.GV-1', 'ISO/IEC 27001: A.5.1.2'] },
          { subKey: 'GV.RR-02', description: 'Oversight, management, and operational responsibilities are allocated and managed.', examples: ['Use a RACI chart to clarify who is Responsible, Accountable, Consulted, and Informed for key cybersecurity tasks'], references: ['SP 800-221A: GV.RR-3'] },
          { subKey: 'GV.RR-03', description: 'Formal authorities for performing cybersecurity activities are established and exercised.', examples: ['Ensure the incident response team has the authority to disconnect systems or isolate networks during a major incident'], references: ['CSF v1.1: ID.GV-2'] },
          { subKey: 'GV.RR-04', description: 'The organization manages and monitors its personnel for adherence to cybersecurity responsibilities.', examples: ['Conduct annual performance reviews that include assessment of cybersecurity responsibilities'], references: ['CSF v1.1: ID.GV-3'] },
        ],
      },
      {
        catKey: 'GV.PO',
        catName: 'Policy',
        subcategories: [
          { subKey: 'GV.PO-01', description: 'A formal cybersecurity policy is established, approved by management, and communicated.', examples: ['Review and approve the overall cybersecurity policy annually by the Board or senior executive team'], references: ['CSF v1.1: ID.GV-1', 'ISO/IEC 27001: A.5.2'] },
          { subKey: 'GV.PO-02', description: 'Cybersecurity-related policies are consistent with requirements, expectations, and risk tolerance.', examples: ['Ensure the data retention policy aligns with legal requirements (e.g., GDPR, CCPA) and the organization\'s risk tolerance'], references: ['CSF v1.1: ID.RA-1', 'ISO/IEC 27001: A.18.1.1'] },
        ],
      },
      {
        catKey: 'GV.OV',
        catName: 'Oversight',
        subcategories: [
          { subKey: 'GV.OV-01', description: 'The execution of cybersecurity risk management activities is monitored, reviewed, and approved.', examples: ['Conduct quarterly executive-level reviews of risk posture, program maturity, and incident metrics'], references: ['CSF v1.1: ID.GV-4', 'ISO/IEC 27001: A.5.3'] },
          { subKey: 'GV.OV-02', description: 'Internal and external audits, assessments, and exercises of cybersecurity are conducted.', examples: ['Perform annual penetration testing, vulnerability scanning, and table-top incident response exercises'], references: ['CSF v1.1: ID.AM-6', 'ISO/IEC 27001: A.18.2.1'] },
          { subKey: 'GV.OV-03', description: 'Cybersecurity program performance information is communicated to internal and external stakeholders.', examples: ['Report key performance indicators (KPIs) and key risk indicators (KRIs) related to security to the Board of Directors monthly'], references: ['CSF v1.1: ID.GV-4', 'SP 800-221A: GV.OV-5'] },
        ],
      },
      {
        catKey: 'GV.SC',
        catName: 'Cybersecurity Supply Chain Risk Management',
        subcategories: [
          { subKey: 'GV.SC-01', description: 'Cybersecurity supply chain risk management policies, processes, and procedures are defined and maintained.', examples: ['Establish a vendor security policy that defines minimum security requirements for all third-party suppliers'], references: ['CSF v1.1: ID.SC-1'] },
          { subKey: 'GV.SC-02', description: 'Cybersecurity requirements for third parties are established and approved.', examples: ['Include mandatory security clauses, such as breach notification and audit rights, in all third-party contracts'], references: ['CSF v1.1: ID.SC-2'] },
          { subKey: 'GV.SC-03', description: 'Controls and processes are used to screen third parties.', examples: ['Conduct initial due diligence on vendors, including reviewing SOC 2 reports and performing security questionnaires'], references: ['CSF v1.1: ID.SC-3'] },
          { subKey: 'GV.SC-04', description: 'Cybersecurity risk management information is shared with third parties.', examples: ['Provide the organization\'s high-level security policy or framework compliance summary to key vendors'], references: ['CSF v1.1: ID.SC-4'] },
          { subKey: 'GV.SC-05', description: 'Third-party relationships are managed and monitored.', examples: ['Perform regular (e.g., annual or semi-annual) security assessments and monitoring of high-risk third-party vendors'], references: ['CSF v1.1: ID.SC-5'] },
          { subKey: 'GV.SC-06', description: 'Dependencies on external systems are identified and understood.', examples: ['Map all critical external service dependencies (e.g., cloud providers, managed security service providers)'], references: ['CSF v1.1: ID.SC-5'] },
          { subKey: 'GV.SC-07', description: 'Cybersecurity issues associated with hardware, software, and services procured are identified and addressed.', examples: ['Require Software Bill of Materials (SBOM) documentation from software suppliers to manage vulnerability risk'], references: ['CSF v1.1: ID.SC-4'] },
          { subKey: 'GV.SC-08', description: 'The organization has a strategy for response and recovery from potential cybersecurity incidents associated with third parties.', examples: ['Integrate third-party incident response plans and contacts into the organization\'s overall incident response plan'], references: ['CSF v1.1: ID.SC-5'] },
          { subKey: 'GV.SC-09', description: 'The organization has a strategy for off-boarding third parties.', examples: ['Ensure procedures are in place for revoking access and verifying data deletion when a vendor contract is terminated'], references: ['CSF v1.1: ID.SC-5'] },
          { subKey: 'GV.SC-10', description: 'The organization manages third-party access to its technology and data.', examples: ['Use dedicated accounts and strong authentication (e.g., MFA, PAM) for all third-party remote access'], references: ['CSF v1.1: PR.AC-3'] },
        ],
      },
    ],
  },
  {
    funcKey: 'ID',
    funcName: 'IDENTIFY: The organization\'s current cybersecurity risk is understood.',
    categories: [
      {
        catKey: 'ID.AM',
        catName: 'Asset Management',
        subcategories: [
          { subKey: 'ID.AM-01', description: 'Assets (physical devices and software) are inventoried.', examples: ['Maintain an accurate, automated inventory of all hardware assets (servers, endpoints, network gear) and software licenses'], references: ['CSF v1.1: ID.AM-1', 'CIS Controls v8.0: 1'] },
          { subKey: 'ID.AM-02', description: 'Software is inventoried to determine its operating state and how it processes data.', examples: ['Track software versions, end-of-life status, and network dependencies in the CMDB'], references: ['CSF v1.1: ID.AM-1', 'CIS Controls v8.0: 2'] },
          { subKey: 'ID.AM-03', description: 'Data are inventoried, classified, and managed.', examples: ['Implement a data classification scheme (e.g., Public, Internal, Confidential) and tag data assets accordingly'], references: ['CSF v1.1: ID.AM-1', 'ISO/IEC 27001: A.8.2.1'] },
          { subKey: 'ID.AM-04', description: 'Personnel and credentials are inventoried.', examples: ['Maintain an authoritative list of all active user accounts and their assigned roles and privileges'], references: ['CSF v1.1: ID.AM-3', 'SP 800-53: AC-2'] },
          { subKey: 'ID.AM-05', description: 'The operating state of assets is understood and managed.', examples: ['Monitor configuration settings for deviations from baseline security standards (e.g., disabling unnecessary services)'], references: ['CSF v1.1: ID.AM-5', 'CIS Controls v8.0: 5'] },
          { subKey: 'ID.AM-06', description: 'Assets are categorized by mission/business criticality.', examples: ['Apply appropriate security controls based on the assigned criticality level of the asset'], references: ['CSF v1.1: ID.AM-2'] },
          { subKey: 'ID.AM-07', description: 'The organization\'s technology architecture is understood.', examples: ['Maintain network topology diagrams, application flow maps, and data flow diagrams'], references: ['CSF v1.1: ID.AM-4', 'SP 800-53: SC-5'] },
        ],
      },
      {
        catKey: 'ID.RA',
        catName: 'Risk Assessment',
        subcategories: [
          { subKey: 'ID.RA-01', description: 'Threats and internal/external vulnerabilities are identified and documented.', examples: ['Perform regular vulnerability scans and penetration tests on critical assets'], references: ['CSF v1.1: ID.RA-1', 'CIS Controls v8.0: 7'] },
          { subKey: 'ID.RA-02', description: 'Threat events and likelihoods are identified.', examples: ['Use threat intelligence feeds to identify new, relevant threat actors and attack methods'], references: ['CSF v1.1: ID.RA-2', 'SP 800-30: R.3.1.2'] },
          { subKey: 'ID.RA-03', description: 'Impacts on assets and the organization are identified.', examples: ['Conduct Business Impact Analysis (BIA) to determine the effect of control failures on mission-essential functions'], references: ['CSF v1.1: ID.RA-3', 'SP 800-34: D.2'] },
          { subKey: 'ID.RA-04', description: 'The organization\'s risk is assessed.', examples: ['Calculate risk based on the likelihood of a threat exploiting a vulnerability and the resulting impact'], references: ['CSF v1.1: ID.RA-4', 'SP 800-30: R.3.3'] },
          { subKey: 'ID.RA-05', description: 'Vulnerability and risk information is shared with relevant internal and external stakeholders.', examples: ['Communicate high-risk vulnerabilities and associated remediation deadlines to system owners'], references: ['CSF v1.1: ID.RA-5', 'ISO/IEC 27001: A.16.1.7'] },
          { subKey: 'ID.RA-06', description: 'Cybersecurity risks associated with data processing are understood.', examples: ['Conduct Privacy Impact Assessments (PIA) for systems that collect, store, or process Personally Identifiable Information (PII)'], references: ['CSF v1.1: ID.RA-1'] },
          { subKey: 'ID.RA-07', description: 'Risk associated with the use of artificial intelligence and machine learning technologies is identified and managed.', examples: ['Assess risks related to data poisoning, model bias, and supply chain integrity of AI/ML components'], references: ['NIST AI RMF'] },
          { subKey: 'ID.RA-08', description: 'Risk associated with emerging technologies and innovative practices is identified and managed.', examples: ['Implement a formal process for reviewing security risks prior to adopting any new cloud service or IoT technology'], references: ['CSF v1.1: ID.RA-1'] },
          { subKey: 'ID.RA-09', description: 'Risk associated with the organization\'s reliance on critical infrastructure is identified and managed.', examples: ['Identify and maintain a list of critical infrastructure services (e.g., power, internet, water) that the organization depends on'], references: ['CSF v1.1: ID.SC-6'] },
          { subKey: 'ID.RA-10', description: 'Risk associated with the organization\'s physical environment is identified and managed.', examples: ['Conduct physical security assessments for data centers, offices, and restricted areas'], references: ['CSF v1.1: ID.RA-1'] },
        ],
      },
      {
        catKey: 'ID.IM',
        catName: 'Improvement',
        subcategories: [
          { subKey: 'ID.IM-01', description: 'Lessons learned from cybersecurity events and incidents are used to improve the cybersecurity risk management program.', examples: ['Perform post-incident reviews (PIRs) to identify root causes and deficiencies in policies or controls'], references: ['CSF v1.1: ID.IM-1', 'SP 800-61 Rev. 2: 3.4.1'] },
          { subKey: 'ID.IM-02', description: 'Results from assessments, audits, and exercises are used to improve the cybersecurity risk management program.', examples: ['Track remediation efforts from internal audits and penetration tests in a risk register with scheduled follow-up'], references: ['CSF v1.1: ID.IM-1'] },
          { subKey: 'ID.IM-03', description: 'Cybersecurity program performance information is used to improve the cybersecurity risk management program.', examples: ['Adjust resource allocations and training based on trends in KPI and KRI metrics'], references: ['CSF v1.1: ID.IM-1'] },
          { subKey: 'ID.IM-04', description: 'Stakeholder feedback is used to improve the cybersecurity risk management program.', examples: ['Regularly solicit and incorporate feedback from business unit leaders and system owners on control effectiveness and usability'], references: ['CSF v1.1: ID.IM-1'] },
        ],
      },
    ],
  },
  {
    funcKey: 'PR',
    funcName: 'PROTECT: Safeguards are established and operated to ensure the delivery of critical services.',
    categories: [
      {
        catKey: 'PR.AA',
        catName: 'Identity Management, Authentication, and Access Control',
        subcategories: [
          { subKey: 'PR.AA-01', description: 'Access permissions and entitlements are managed.', examples: ['Implement the principle of least privilege'], references: ['CSF v1.1: PR.AC-4'] },
          { subKey: 'PR.AA-02', description: 'Identities of users, devices, and services are managed.', examples: ['Maintain a central identity repository'], references: ['CSF v1.1: PR.AC-1'] },
        ],
      },
      {
        catKey: 'PR.AT',
        catName: 'Awareness and Training',
        subcategories: [
          { subKey: 'PR.AT-01', description: 'Cybersecurity awareness training is provided to personnel.', examples: ['Conduct mandatory annual security awareness training'], references: ['CSF v1.1: PR.AT-1'] },
        ],
      },
      {
        catKey: 'PR.DS',
        catName: 'Data Security',
        subcategories: [
          { subKey: 'PR.DS-01', description: 'Data security policies are defined and implemented.', examples: ['Establish a data handling policy'], references: ['CSF v1.1: PR.DS-1'] },
          { subKey: 'PR.DS-02', description: 'Data at rest is protected.', examples: ['Use full disk encryption on all endpoints'], references: ['CSF v1.1: PR.DS-2'] },
        ],
      },
    ],
  },
  {
    funcKey: 'DE',
    funcName: 'DETECT: Anomalies and incidents are discovered and analyzed.',
    categories: [
      {
        catKey: 'DE.CM',
        catName: 'Continuous Monitoring',
        subcategories: [
          { subKey: 'DE.CM-01', description: 'The physical environment and assets are monitored.', examples: ['Monitor physical security systems'], references: ['CSF v1.1: DE.CM-1'] },
          { subKey: 'DE.CM-02', description: 'Network and system activity is monitored.', examples: ['Deploy SIEM and EDR tools'], references: ['CSF v1.1: DE.CM-3'] },
        ],
      },
      {
        catKey: 'DE.AE',
        catName: 'Adverse Event Analysis',
        subcategories: [
          { subKey: 'DE.AE-01', description: 'Adverse event information is collected and analyzed.', examples: ['Use formalized triage procedures'], references: ['CSF v1.1: DE.AE-1'] },
        ],
      },
    ],
  },
  {
    funcKey: 'RS',
    funcName: 'RESPOND: Action is taken regarding a detected cybersecurity incident.',
    categories: [
      {
        catKey: 'RS.MA',
        catName: 'Incident Management',
        subcategories: [
          { subKey: 'RS.MA-01', description: 'The incident response plan is executed.', examples: ['Activate the incident response team'], references: ['CSF v1.1: RS.RP-1'] },
          { subKey: 'RS.MA-02', description: 'Incident response efforts are coordinated.', examples: ['Coordinate response activities with IT, Legal, HR'], references: ['CSF v1.1: RS.CO-1'] },
        ],
      },
      {
        catKey: 'RS.AN',
        catName: 'Incident Analysis',
        subcategories: [
          { subKey: 'RS.AN-01', description: 'Incident information is analyzed.', examples: ['Perform forensic analysis'], references: ['CSF v1.1: RS.AN-1'] },
        ],
      },
      {
        catKey: 'RS.MI',
        catName: 'Incident Mitigation',
        subcategories: [
          { subKey: 'RS.MI-01', description: 'Incidents are contained and eradicated.', examples: ['Isolate affected network segments'], references: ['CSF v1.1: RS.MI-1'] },
        ],
      },
    ],
  },
  {
    funcKey: 'RC',
    funcName: 'RECOVER: Assets and operations are restored to an operational state.',
    categories: [
      {
        catKey: 'RC.RP',
        catName: 'Recovery Planning',
        subcategories: [
          { subKey: 'RC.RP-01', description: 'A documented recovery plan is established and maintained.', examples: ['Maintain a Business Continuity Plan'], references: ['CSF v1.1: RC.RP-1'] },
          { subKey: 'RC.RP-02', description: 'Assets are restored consistent with the recovery plan.', examples: ['Prioritize restoration of mission-critical systems'], references: ['CSF v1.1: RC.IM-1'] },
        ],
      },
      {
        catKey: 'RC.CO',
        catName: 'Recovery Communication',
        subcategories: [
          { subKey: 'RC.CO-01', description: 'Communications are managed during and after recovery.', examples: ['Establish clear communication channels'], references: ['CSF v1.1: RC.CO-3'] },
        ],
      },
    ],
  },
];

export const PRIVACY_FRAMEWORK = [
  {
    funcKey: 'ID-P',
    funcName: 'IDENTIFY-P: Develop understanding to manage privacy risk for individuals arising from data processing.',
    categories: [
      {
        catKey: 'ID.IM-P',
        catName: 'Inventory and Mapping',
        subcategories: [
          { subKey: 'ID.IM-P1', description: 'Systems/products/services that process data are inventoried.', examples: ['Use a CMDB to track applications handling personal data'], references: ['NIST SP 800-53: CM-8'] },
          { subKey: 'ID.IM-P2', description: 'Owners or operators are inventoried.', examples: ['Assign data owners and business process owners'], references: ['ISO/IEC 27001: A.5.1.2'] },
          { subKey: 'ID.IM-P3', description: 'Categories of individuals whose data are being processed are inventoried.', examples: ['Document data subject categories: customers, employees, visitors'], references: ['GDPR: Article 30'] },
          { subKey: 'ID.IM-P4', description: 'Data actions of the systems/products/services are inventoried.', examples: ['Map data lifecycle: collection, use, storage, sharing, disposal'], references: ['NIST Privacy Framework'] },
          { subKey: 'ID.IM-P5', description: 'The purposes for the data actions are inventoried.', examples: ['Document business purposes for each data processing activity'], references: ['GDPR: Article 5'] },
          { subKey: 'ID.IM-P6', description: 'Legal, regulatory, and contractual requirements are inventoried.', examples: ['Maintain obligations register citing CCPA, HIPAA, GDPR'], references: ['ISO/IEC 27001: A.18.1.1'] },
        ],
      },
      {
        catKey: 'ID.BE-P',
        catName: 'Business Environment',
        subcategories: [
          { subKey: 'ID.BE-P1', description: 'The organization\'s role in the data processing ecosystem is understood.', examples: ['Document role as Controller or Processor in DPAs'], references: ['GDPR: Recitals 77-78'] },
          { subKey: 'ID.BE-P2', description: 'Priorities are established based on risk appetite and mission.', examples: ['Prioritize privacy efforts based on data sensitivity'], references: ['NIST CSF 2.0: GV.RM-01'] },
        ],
      },
      {
        catKey: 'ID.RA-P',
        catName: 'Risk Assessment',
        subcategories: [
          { subKey: 'ID.RA-P1', description: 'Potential problems are identified and assessed.', examples: ['Conduct Privacy Impact Assessments (PIAs) or DPIAs'], references: ['NIST SP 800-30'] },
          { subKey: 'ID.RA-P2', description: 'Identified privacy risks are prioritized.', examples: ['Establish risk tolerance thresholds for privacy issues'], references: ['NIST CSF 2.0: GV.RM-02'] },
        ],
      },
      {
        catKey: 'ID.DE-P',
        catName: 'Data Processing Ecosystem Risk Management',
        subcategories: [
          { subKey: 'ID.DE-P1', description: 'Risk associated with third-party data processing is managed.', examples: ['Perform due diligence on data processors'], references: ['ISO/IEC 27001: A.15.2.1'] },
          { subKey: 'ID.DE-P2', description: 'Privacy requirements are addressed in procurement.', examples: ['Include privacy clauses in vendor contracts'], references: ['NIST CSF 2.0: GV.SC-01'] },
        ],
      },
    ],
  },
  {
    funcKey: 'GV-P',
    funcName: 'GOVERN-P: Develop and implement organizational governance structure to manage privacy risk.',
    categories: [
      {
        catKey: 'GV.PO-P',
        catName: 'Policies, Processes, and Procedures',
        subcategories: [
          { subKey: 'GV.PO-P1', description: 'Policies, processes, and procedures are defined and maintained.', examples: ['Maintain formal privacy policy reviewed annually'], references: ['ISO/IEC 27001: A.5.1.1'] },
          { subKey: 'GV.PO-P2', description: 'Privacy roles, responsibilities, and authorities are established.', examples: ['Appoint Data Protection Officer (DPO) or Chief Privacy Officer'], references: ['GDPR: Article 37'] },
        ],
      },
      {
        catKey: 'GV.RM-P',
        catName: 'Risk Management Strategy',
        subcategories: [
          { subKey: 'GV.RM-P1', description: 'Privacy risk management strategy is established.', examples: ['Define privacy risk methodology with scoring criteria'], references: ['NIST CSF 2.0: GV.RM-01'] },
          { subKey: 'GV.RM-P2', description: 'Risk tolerance is established and approved by management.', examples: ['Define acceptable levels of residual privacy risk'], references: ['NIST CSF 2.0: GV.RM-02'] },
        ],
      },
      {
        catKey: 'GV.AT-P',
        catName: 'Awareness and Training',
        subcategories: [
          { subKey: 'GV.AT-P1', description: 'Personnel are trained on privacy duties.', examples: ['Provide role-specific privacy training'], references: ['NIST CSF 2.0: PR.AT-01'] },
          { subKey: 'GV.AT-P2', description: 'Data processing personnel are trained in privacy risk management.', examples: ['Train system owners on conducting PIAs/DPIAs'], references: ['NIST CSF 2.0: PR.AT-02'] },
        ],
      },
      {
        catKey: 'GV.MT-P',
        catName: 'Monitoring and Review',
        subcategories: [
          { subKey: 'GV.MT-P1', description: 'Privacy risk management activities are monitored and reviewed.', examples: ['Conduct quarterly internal privacy audits'], references: ['NIST CSF 2.0: GV.OV-01'] },
          { subKey: 'GV.MT-P2', description: 'Privacy activities are communicated to stakeholders.', examples: ['Report privacy metrics to executive team monthly'], references: ['NIST CSF 2.0: GV.OV-03'] },
        ],
      },
    ],
  },
  {
    funcKey: 'CT-P',
    funcName: 'CONTROL-P: Implement appropriate activities to manage data with sufficient safeguards.',
    categories: [
      {
        catKey: 'CT.PO-P',
        catName: 'Data Processing Policies',
        subcategories: [
          { subKey: 'CT.PO-P1', description: 'Data processing policies are aligned with risk tolerance.', examples: ['Define data retention policy based on legal requirements'], references: ['NIST CSF 2.0: GV.PO-02'] },
          { subKey: 'CT.PO-P2', description: 'Policies guide data processing consistent with purpose.', examples: ['Enforce purpose limitation standard'], references: ['GDPR: Article 5'] },
        ],
      },
      {
        catKey: 'CT.DM-P',
        catName: 'Data Processing Management',
        subcategories: [
          { subKey: 'CT.DM-P1', description: 'Data processing activities are managed per policy.', examples: ['Implement automated controls for data retention'], references: ['NIST CSF 2.0: ID.IM-01'] },
          { subKey: 'CT.DM-P2', description: 'Data quality and integrity are maintained.', examples: ['Implement validation checks at data entry points'], references: ['GDPR: Article 5'] },
        ],
      },
      {
        catKey: 'CT.DP-P',
        catName: 'Disassociated Processing',
        subcategories: [
          { subKey: 'CT.DP-P1', description: 'Privacy-enhancing technologies are used where appropriate.', examples: ['Implement anonymization or pseudonymization'], references: ['GDPR: Article 25'] },
          { subKey: 'CT.DP-P2', description: 'Data elements are disassociated as appropriate.', examples: ['Use tokenization for sensitive data fields'], references: ['NIST Privacy Framework'] },
        ],
      },
    ],
  },
  {
    funcKey: 'CM-P',
    funcName: 'COMMUNICATE-P: Enable informed decision-making by data subjects and stakeholders.',
    categories: [
      {
        catKey: 'CM.AW-P',
        catName: 'Awareness and Training',
        subcategories: [
          { subKey: 'CM.AW-P1', description: 'Data processing purposes are communicated.', examples: ['Provide clear privacy notices at point of collection'], references: ['GDPR: Article 13'] },
          { subKey: 'CM.AW-P2', description: 'Individuals understand their privacy rights.', examples: ['Make privacy policy easily accessible'], references: ['CCPA, GDPR'] },
        ],
      },
      {
        catKey: 'CM.TB-P',
        catName: 'Transparency',
        subcategories: [
          { subKey: 'CM.TB-P1', description: 'Mechanisms support data subject rights.', examples: ['Implement DSAR (Data Subject Access Request) portal'], references: ['GDPR: Article 15'] },
          { subKey: 'CM.TB-P2', description: 'Data processing changes are communicated.', examples: ['Notify users of material privacy policy changes'], references: ['FTC Fair Information Practices'] },
        ],
      },
    ],
  },
  {
    funcKey: 'PR-P',
    funcName: 'PROTECT-P: Safeguard data from inappropriate access, use, or disclosure.',
    categories: [
      {
        catKey: 'PR.AC-P',
        catName: 'Data Processing Access Control',
        subcategories: [
          { subKey: 'PR.AC-P1', description: 'Access to data is managed and protected.', examples: ['Implement role-based access control (RBAC) for personal data'], references: ['NIST CSF 2.0: PR.AA-01'] },
          { subKey: 'PR.AC-P2', description: 'Data is protected during collection and use.', examples: ['Encrypt data in transit and at rest'], references: ['NIST CSF 2.0: PR.DS-02'] },
        ],
      },
      {
        catKey: 'PR.DS-P',
        catName: 'Data Security for Processing',
        subcategories: [
          { subKey: 'PR.DS-P1', description: 'Data are protected during storage.', examples: ['Use database encryption and access logging'], references: ['GDPR: Article 32'] },
          { subKey: 'PR.DS-P2', description: 'Data are protected during transmission.', examples: ['Require TLS 1.2+ for all data transfers'], references: ['NIST CSF 2.0: PR.DS-03'] },
          { subKey: 'PR.DS-P3', description: 'Data are protected during disposal.', examples: ['Implement secure deletion and sanitization procedures'], references: ['NIST SP 800-88'] },
        ],
      },
    ],
  },
];
