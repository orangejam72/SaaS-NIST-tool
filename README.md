# NIST Cybersecurity Framework 2.0 - Interactive Tool

An interactive web application for exploring, assessing, and implementing the NIST Cybersecurity Framework 2.0.

## Features

### 📚 Framework Reference
- Complete NIST CSF 2.0 core reference
- All 6 functions (GOVERN, IDENTIFY, PROTECT, DETECT, RESPOND, RECOVER)
- Expandable categories and subcategories
- Implementation examples and cross-references

### ✅ Assessment
- Interactive maturity assessment tool
- Rate implementation level for each subcategory (0-3 scale)
- Visual radar chart showing maturity by function
- Overall score calculation
- Progress tracking
- Save and export functionality

### 📊 Gap Analysis
- Identify gaps between current and target states
- Prioritized recommendations
- Effort estimation
- Implementation roadmap

### 📖 Documentation
- Framework overview and implementation guidance
- Links to official NIST resources
- Supporting publications (SP 800-53, SP 800-30, etc.)
- Training and education resources

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Tailwind CSS** - Styling

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The application will be available at `http://localhost:5173/`

## Project Structure

```
src/
├── App.jsx                 # Main app component with routing
├── main.jsx               # Application entry point
├── data/
│   └── csfData.js         # NIST CSF 2.0 reference data
└── pages/
    ├── Reference.jsx      # Framework reference browser
    ├── Assessment.jsx     # Maturity assessment tool
    ├── GapAnalysis.jsx    # Gap analysis and recommendations
    └── Documentation.jsx  # Resources and documentation
```

## Usage

### Viewing the Framework
Navigate to the **Framework Reference** tab to browse the complete NIST CSF 2.0 structure. Click on functions and categories to expand and view subcategories.

### Conducting an Assessment
1. Go to the **Assessment** tab
2. Rate each subcategory from 0 (Not Implemented) to 3 (Fully Implemented)
3. View your overall maturity score and radar chart

### Analyzing Gaps
The **Gap Analysis** tab shows identified gaps between current and target implementation levels with prioritized recommendations.

## Resources

- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [CSF 2.0 Documentation](https://www.nist.gov/cyberframework/framework)
- [NIST Special Publications](https://csrc.nist.gov/publications)
