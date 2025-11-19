# Cardio Master

An interactive cardiovascular reasoning platform for medical education, covering high-yield cardiovascular emergencies and chronic management topics.

## Overview

Cardio Master is a comprehensive educational web application designed to teach healthcare professionals the most important cardiovascular conditions through evidence-based, interactive learning modules.

### Key Features

- **8 Comprehensive Modules**: ACS, Heart Failure, Atrial Fibrillation, Hypertensive Crisis, Infective Endocarditis, Aortic Dissection, Peripheral Artery Disease, and Venous Thromboembolism
- **Evidence-Based Content**: Aligned with AHA/ACC, ESC, and CHEST guidelines
- **Interactive Assessments**: Clinical vignettes with detailed explanations (no score tracking per design)
- **Mobile-First Design**: Fully responsive interface optimized for all devices
- **Dark Mode Support**: Comfortable reading in any environment
- **Offline Capable**: Service worker enables offline access
- **No Data Tracking**: Privacy-focused design with no user data collection

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom components inspired by shadcn/ui
- **State Management**: Zustand
- **Routing**: React Router v6
- **Icons**: Lucide React

## Project Structure

```
CARDIO-MASTER/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   └── Navigation.tsx
│   ├── pages/
│   │   ├── modules/      # 8 cardiovascular module pages
│   │   ├── Home.tsx
│   │   ├── Modules.tsx
│   │   ├── Assessment.tsx
│   │   ├── Settings.tsx
│   │   └── Glossary.tsx
│   ├── store/
│   │   └── theme.ts      # Theme state management
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── sw.js             # Service worker for offline capability
│   └── heart-pulse.svg   # App icon
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Module Topics

### 1. Acute Coronary Syndrome (ACS)
- STEMI, NSTEMI, and Unstable Angina
- ECG interpretation and biomarkers
- Reperfusion strategies (PCI vs fibrinolysis)
- Post-ACS medical therapy

### 2. Heart Failure
- HFrEF, HFpEF, and HFmrEF classification
- Guideline-Directed Medical Therapy (GDMT)
- Acute decompensated heart failure management
- Device therapy (ICD, CRT)

### 3. Atrial Fibrillation
- Rate vs rhythm control strategies
- CHA₂DS₂-VASc and HAS-BLED scores
- Anticoagulation options (DOACs vs warfarin)
- Cardioversion safety (48-hour rule)

### 4. Hypertensive Crisis
- Emergency vs urgency classification
- Target organ damage assessment
- IV vs oral antihypertensive selection
- BP reduction targets

### 5. Infective Endocarditis
- Duke criteria application
- Common organisms and empiric therapy
- Echocardiography (TTE vs TEE)
- Surgical indications

### 6. Aortic Dissection
- Stanford A vs B classification
- Diagnostic approach (CTA, TEE)
- Medical management (beta-blockers first!)
- Surgical vs medical therapy

### 7. Peripheral Artery Disease
- ABI interpretation
- Claudication evaluation
- Medical therapy (statins, antiplatelets)
- Critical limb ischemia recognition

### 8. Venous Thromboembolism (DVT/PE)
- Wells score and PERC rule
- Diagnostic algorithms (D-dimer, CTPA, ultrasound)
- Risk stratification (massive, submassive, low-risk PE)
- Anticoagulation strategies

## Design Principles

### Educational Focus
- Synthetic cases only (no real patient data)
- Evidence-based content
- Clinical reasoning emphasis
- No gamification or score tracking per user requirements

### User Experience
- Clean, distraction-free interface
- Mobile-first responsive design
- Dark mode for comfortable reading
- Offline capability for studying anywhere

### Privacy
- No user accounts required
- No data collection or tracking
- No analytics
- Local-only theme preferences

## Important Disclaimers

**Educational Use Only**: This platform is designed exclusively for educational purposes. All clinical scenarios are synthetic. The content should not be used for clinical decision-making or as a substitute for professional medical advice.

**Not for Clinical Care**: Always consult current medical literature, clinical practice guidelines, and appropriate medical professionals when making treatment decisions for actual patients.

**Verify Current Guidelines**: Medical knowledge evolves rapidly. Always verify recommendations against the most current published guidelines.

**No PHI**: All cases are entirely synthetic. No protected health information is used or stored.

## Contributing

This is an educational project built according to specific requirements. The codebase is designed to be:
- Maintainable and well-documented
- Extensible for adding new modules
- Accessible (WCAG 2.2 AA compliant design goals)

## License

Educational use. See specific license terms if applicable.

## Acknowledgments

Content based on guidelines from:
- American Heart Association / American College of Cardiology (AHA/ACC)
- European Society of Cardiology (ESC)
- American College of Chest Physicians (CHEST)
- Peer-reviewed medical literature

---

**Medical Emergency**: If you are experiencing a medical emergency, call emergency services (911 in the US) immediately. Do not use this educational platform to diagnose or treat medical emergencies.
