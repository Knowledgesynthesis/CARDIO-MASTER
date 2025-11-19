# **CARDIO MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**
A clinically rigorous, evidence-based, mobile-first, offline-capable educational app blueprint that teaches the **most high-yield cardiovascular emergencies and chronic management topics** encountered in medicine, MCQs, and CCS-style cases.

This super-app covers:
- Acute coronary syndrome (ACS: STEMI, NSTEMI, unstable angina)  
- Heart failure (acute decompensated + chronic guideline-directed therapy)  
- Atrial fibrillation (rate vs rhythm control, anticoagulation strategies)  
- Hypertensive urgency vs emergency  
- Infective endocarditis (Duke criteria, empiric therapy)  
- Aortic dissection  
- Peripheral artery disease  
- Venous thromboembolism (DVT/PE) diagnosis and management  

---

# **MASTER PROMPT — Cardio Master Educational App Generator (SPECIALIZED VERSION)**

## **Role & Mission**
You are a cross-functional team (PM, Staff Engineer, Senior Instructional Designer, Cardiology SME, Emergency Medicine SME, Internal Medicine SME, Hematology/Thrombosis SME, UX Writer, QA).  
Your mission: design an **interactive cardiovascular reasoning platform** integrating diagnostics, ECG interpretation, risk pathways, hemodynamic logic, and stepwise management of acute & chronic cardiac conditions using fully synthetic cases.

The app must be:
- Mobile-first  
- Dark-mode optimized  
- Offline-capable  
- Evidence-based & internally consistent  
- Guideline-aligned (AHA/ACC, ESC concepts; CHEST VTE guidance)  
- Zero PHI  

---

# **Inputs (Fill These)**
- Primary Topics: {{TOPICS}}  
- Learner Level: {{LEVELS}}  
- Context: {{CONTEXT}}  
- Learning Outcomes: {{LEARNING_OBJECTIVES}}  
- Constraints: mobile-first, dark mode, offline-ready, synthetic-only  
- References: {{REFERENCES}}  
- Voice & Tone: {{VOICE_TONE}}  
- Locale: {{LOCALE}}

---

# **1. Executive Summary**
Cardio Master addresses the highest-yield cardiovascular material for examinations and real-world care.  
The app trains users to:
- Recognize classic cardiac presentations  
- Interpret ECGs, hemodynamics, biomarkers  
- Apply diagnostic algorithms (ACS, VTE, AFib, HF, HTN emergencies)  
- Manage conditions using evidence-based, stepwise frameworks  
- Simulate CCS-style branching scenarios  

**Alternate names:**  
- CardioAtlas MD — “Master every major cardiac condition.”  
- CV Logic Pro — “From symptoms to stabilization.”  
- HeartFlow Navigator — “Visual cardiovascular decision-making.”

---

# **2. Personas & Use Cases**

### **Personas**
- Internal Medicine resident  
- EM resident managing chest pain & dyspnea  
- Cardiology-bound student  
- Medical student preparing Step 2/3  
- PA/NP in acute care  

### **Use Cases**
- ED evaluation of chest pain  
- Rapid classification of ACS vs dissection vs PE  
- Managing AFib in clinic and inpatient  
- Hypertensive crisis management  
- HF exacerbation algorithm  
- Infective endocarditis diagnostic pathway  
- VTE workup decisions (Wells, PERC, imaging)  

---

# **3. Curriculum Map & Knowledge Graph**

## **Module 1: Acute Coronary Syndrome**
- STEMI vs NSTEMI vs unstable angina  
- Symptoms, ECG patterns, biomarkers  
- Time-to-reperfusion logic  
- PCI vs fibrinolytic criteria  
- Antiplatelet/anticoagulant regimens  
- Risk stratification (TIMI, GRACE conceptual)  
- Complications (cardiogenic shock, arrhythmias)

## **Module 2: Heart Failure**
**Chronic HF**
- HFrEF vs HFpEF  
- GDMT: ACEi/ARB/ARNI, beta-blocker, MRA, SGLT2 inhibitors  
- Diuretics  
- Device therapy basics  

**Acute Decompensated HF**
- Flash pulmonary edema  
- Congestion vs hypoperfusion profiles  
- IV diuretics, vasodilators  
- When to call ICU/advanced therapies  

## **Module 3: Atrial Fibrillation**
- Rate control: beta-blockers, CCBs  
- Rhythm control indications (young, symptomatic, HF)  
- Anticoagulation (CHA₂DS₂-VASc logic)  
- Cardioversion safety (48-hour rule conceptually)  
- AFib with RVR in HF or hypotension  

## **Module 4: Hypertensive Urgency/Emergency**
- Emergencies: encephalopathy, dissection, ACS, pulmonary edema  
- IV vs oral choices  
- Goals of BP reduction  
- Avoiding overly rapid decreases  

## **Module 5: Infective Endocarditis**
- Duke criteria (major/minor explained)  
- Typical organisms  
- Empiric therapy (educational)  
- Indications for surgery  
- Complications: septic emboli, abscess  

## **Module 6: Aortic Dissection**
- Type A vs Type B  
- Risk factors  
- Diagnostics: CT angiography, TEE  
- Immediate BP control  
- Surgical vs medical management  

## **Module 7: Peripheral Artery Disease**
- Claudication evaluation  
- ABI interpretation  
- Medical therapy (statins, antiplatelets)  
- Exercise therapy  
- Critical limb ischemia warning signs  

## **Module 8: Venous Thromboembolism (DVT/PE)**
- Wells score + PERC (conceptual)  
- When to order D-dimer  
- CTPE vs V/Q scan interpretation logic  
- Anticoagulation pathways  
- Submassive vs massive PE  
- Systemic thrombolysis vs catheter-based options  
- DVT diagnosis & therapy  

Knowledge Graph Links:  
Symptoms → Initial tests → ECG/imaging → Diagnosis → Risk grading → Management → Disposition.

---

# **4. Interactive Specs (Table)**

**Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails | Presets**

ACS ECG Lab | Learn STEMI/NSTEMI patterns | ECG flags | Diagnosis + culprit hints | ECG overlays | No clinical directives | Inferior, anterior, lateral patterns  
HF Profile Mapper | Identify congestion vs perfusion type | Vitals, exam | Profile B, C, L | Quadrant map | Synth-only | ADHF cases  
AFib Anticoag Tool | CHA₂DS₂-VASc simulator | Patient factors | Score + anticoag logic | Scoring interface | Educational only | 6 example pts  
HTN Emergency Splitter | Identify urgency vs emergency | Symptoms, BP | Category + next steps | Red/green UI | No meds recommended | Mixed cases  
Endocarditis Duke Builder | Fill criteria | Symptoms, cultures | Duke classification | Checklist | Educational | 4 synthetic cases  
Aortic Dissection Pathway | Recognize red flags | Pain pattern, BP | Suspicion category | Flowchart | Educ-only | Classic case presets  
VTE Workup Engine | Wells/PERC logic | Symptoms, risk | Workup path | Algorithm map | Not diagnostic | 10 sample cases  

---

# **5. Assessment & Mastery**

Item Types:
- MCQs (ACS, HF, AFib, DVT/PE, dissection, endocarditis)  
- ECG identification  
- Risk-score calculations  
- Imaging interpretation  
- Case-based branching (CCS mimic)  
- Management tier selection  

Include **10–20 sample items with rationales**.

---

# **6. Cardiovascular Reasoning Framework**

Universal logic:
1. Identify immediate life threats (STEMI, dissection, massive PE).  
2. Stabilize: ABCs, monitoring, IV access.  
3. Use diagnostic anchors:  
   - ECG  
   - Troponin  
   - CT angiography  
   - Echo  
4. Apply risk stratification.  
5. Implement evidence-based treatment algorithms.  
6. Determine need for escalation (PCI, lytics, ICU).  
7. Reassess response and complications.  
8. Plan follow-up and secondary prevention.

**Pitfalls:**
- Misclassifying NSTEMI vs unstable angina  
- Overlooking dissection in chest pain with unequal BP  
- Misinterpreting HF perfusion profiles  
- Not checking anticoag contraindications  
- Misusing D-dimer in high-risk patients  
- Overdiagnosing endocarditis without meeting criteria  

---

# **7. Accessibility & Safety**
- WCAG 2.2 AA  
- Synthetic ECGs and vitals  
- No real patient data  
- Educational-only  
- Clear disclaimers  
- Inclusive case representation  

---

# **8. Tech Architecture**
Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand/Redux  
- IndexedDB + Service Worker  
- D3/Recharts for ECG, flowcharts, hemodynamic diagrams  

Structure:
- /acs  
- /heart-failure  
- /afib  
- /htn  
- /endocarditis  
- /dissection  
- /pad  
- /vte  
- /cases  
- /assessment  
- /glossary  
- /settings  

---

# **9. Data Model (Plain-text JSON)**

    {
      "id": "acs_nstemi",
      "condition": "NSTEMI",
      "diagnostics": ["ECG ST-depression/T-wave inversion", "Elevated troponin"],
      "risk_scores": ["TIMI", "GRACE conceptual"],
      "management": ["Antiplatelet therapy", "Anticoagulation", "Early invasive strategy"],
      "notes": "Differentiate from unstable angina using biomarkers."
    }

    {
      "id": "wells_pe",
      "score": 6,
      "risk_category": "High",
      "recommended_next_step": "CTPA in synthetic learning workflow",
      "pitfalls": ["Do not use D-dimer in high-risk cases"]
    }

---

# **10. Screen Specs & Wireframes**

**Home**  
- ACS / HF / AFib / HTN Crisis / Endocarditis / Dissection / PAD / VTE  

**ACS Screen**  
- ECG viewer  
- STEMI criteria visualizations  
- PCI vs fibrinolytic logic  

**HF Screen**  
- Congestion-perfusion quadrant  
- GDMT ladder  

**AFib Screen**  
- Rate vs rhythm branching  
- Anticoag scoring widget  

**HTN Emergency Screen**  
- Organ-damage checklist  
- Severity meter  

**Endocarditis Screen**  
- Duke criteria builder  
- Vegetation visual diagram  

**Dissection Screen**  
- Stanford A/B split  
- Imaging selector  

**VTE Screen**  
- Wells + PERC interactive  
- Pathway builder  

**Cases**  
- Branching CCS-style navigations  

**Assessment**  
- MCQs + ECGs + case matching  

---

# **11. Copy & Content Kit**

Examples:
- “STEMI: new ST elevation in ≥2 contiguous leads.”  
- “HFrEF: GDMT with ARNI/ACEi, beta-blocker, MRA, SGLT2i.”  
- “AFib: rate control unless symptomatic or young.”  
- “Endocarditis: Duke criteria = 2 major OR 1 major + 3 minor OR 5 minor.”  
- “Aortic dissection: sudden tearing chest pain + pulse deficit.”  
- “Wells ≥4: PE likely; image rather than D-dimer.”  

Includes glossary, ECG atlas, Doppler diagrams, tables.

---

# **12. Analytics & A/B Plan**
- Compare ECG-based vs algorithm-based learning  
- Test risk-score widget comprehension  
- Evaluate case-simulation engagement  

---

# **13. QA Checklist**
- ECG interpretations correct  
- ACS & HF management pathways accurate  
- VTE workup logic consistent  
- Duke criteria correctly encoded  
- Dissection steps correct conceptually  
- Synthetic-only data  

---

# **14. Roadmap**
- M0: ACS + HF + AFib + VTE  
- M1: HTN emergencies + Dissection  
- M2: Endocarditis + PAD  
- M3: Expanded cases + adaptive logic  

---

# **Acceptance Criteria**
- Learners classify ACS confidently  
- Learners master HF + AFib algorithms  
- Learners differentiate hypertensive urgency/emergency  
- Learners apply Duke criteria correctly  
- Learners work up VTE properly  
- Cardio Master maintains consistent cardiovascular reasoning logic  

---

## **Now Generate**
Using all inputs above, produce deliverables in order.  
If inputs are missing, make reasonable cardiovascular assumptions and label defaults.
