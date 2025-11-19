import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface GlossaryTerm {
  term: string
  definition: string
  category: string
}

const glossaryTerms: GlossaryTerm[] = [
  { term: 'ABI', definition: 'Ankle-Brachial Index - ratio of ankle to arm systolic blood pressure, used to diagnose peripheral artery disease', category: 'Diagnostics' },
  { term: 'ACS', definition: 'Acute Coronary Syndrome - spectrum including STEMI, NSTEMI, and unstable angina', category: 'Conditions' },
  { term: 'ADHF', definition: 'Acute Decompensated Heart Failure - sudden worsening of heart failure symptoms', category: 'Conditions' },
  { term: 'AFib', definition: 'Atrial Fibrillation - irregular heart rhythm originating in the atria', category: 'Arrhythmias' },
  { term: 'ARNI', definition: 'Angiotensin Receptor-Neprilysin Inhibitor (e.g., sacubitril/valsartan) - medication for heart failure', category: 'Medications' },
  { term: 'CHA₂DS₂-VASc', definition: 'Stroke risk score in atrial fibrillation (Congestive HF, Hypertension, Age ≥75 [2 points], Diabetes, Stroke [2 points], Vascular disease, Age 65-74, Sex category [female])', category: 'Scores' },
  { term: 'CLI', definition: 'Critical Limb Ischemia - severe PAD with rest pain, ulcers, or gangrene; limb-threatening', category: 'Conditions' },
  { term: 'CTPA', definition: 'CT Pulmonary Angiography - imaging test to diagnose pulmonary embolism', category: 'Diagnostics' },
  { term: 'DAPT', definition: 'Dual Antiplatelet Therapy - aspirin plus P2Y12 inhibitor (e.g., clopidogrel), used post-ACS', category: 'Medications' },
  { term: 'DOAC', definition: 'Direct Oral Anticoagulant (e.g., apixaban, rivaroxaban) - newer anticoagulants that don\'t require monitoring', category: 'Medications' },
  { term: 'Duke Criteria', definition: 'Diagnostic criteria for infective endocarditis using major (blood cultures, echo findings) and minor criteria', category: 'Scores' },
  { term: 'DVT', definition: 'Deep Vein Thrombosis - blood clot in deep veins, usually lower extremity', category: 'Conditions' },
  { term: 'GDMT', definition: 'Guideline-Directed Medical Therapy - evidence-based medications proven to reduce mortality, especially in heart failure', category: 'Treatment' },
  { term: 'HFpEF', definition: 'Heart Failure with Preserved Ejection Fraction (LVEF ≥50%) - diastolic dysfunction', category: 'Conditions' },
  { term: 'HFrEF', definition: 'Heart Failure with Reduced Ejection Fraction (LVEF ≤40%) - systolic dysfunction', category: 'Conditions' },
  { term: 'LBBB', definition: 'Left Bundle Branch Block - ECG pattern that can indicate STEMI (Sgarbossa criteria)', category: 'ECG' },
  { term: 'LMWH', definition: 'Low Molecular Weight Heparin (e.g., enoxaparin) - anticoagulant that doesn\'t require monitoring', category: 'Medications' },
  { term: 'LVEF', definition: 'Left Ventricular Ejection Fraction - percentage of blood ejected from left ventricle with each contraction; normal >50%', category: 'Diagnostics' },
  { term: 'MAP', definition: 'Mean Arterial Pressure - average pressure in arteries during one cardiac cycle; calculated as (2×DBP + SBP)/3', category: 'Vitals' },
  { term: 'MRA', definition: 'Mineralocorticoid Receptor Antagonist (e.g., spironolactone, eplerenone) - medication for heart failure', category: 'Medications' },
  { term: 'NSTEMI', definition: 'Non-ST-Elevation Myocardial Infarction - partial coronary occlusion with troponin elevation but no ST elevation', category: 'Conditions' },
  { term: 'NYHA Class', definition: 'New York Heart Association functional classification of heart failure (I-IV based on symptoms with activity)', category: 'Classification' },
  { term: 'PAD', definition: 'Peripheral Artery Disease - atherosclerotic narrowing of arteries, usually lower extremities', category: 'Conditions' },
  { term: 'PCI', definition: 'Percutaneous Coronary Intervention - catheter-based procedure to open blocked coronary arteries (angioplasty ± stent)', category: 'Procedures' },
  { term: 'PE', definition: 'Pulmonary Embolism - blood clot in pulmonary arteries, usually from DVT', category: 'Conditions' },
  { term: 'PERC', definition: 'Pulmonary Embolism Rule-Out Criteria - 8 criteria to exclude PE without testing if all negative', category: 'Scores' },
  { term: 'SGLT2i', definition: 'Sodium-Glucose Cotransporter-2 Inhibitor (e.g., dapagliflozin, empagliflozin) - medication for heart failure and diabetes', category: 'Medications' },
  { term: 'STEMI', definition: 'ST-Elevation Myocardial Infarction - complete coronary occlusion with ST elevation on ECG; requires emergent reperfusion', category: 'Conditions' },
  { term: 'TEE', definition: 'Transesophageal Echocardiogram - ultrasound from esophagus, better views of heart structures than TTE', category: 'Diagnostics' },
  { term: 'TIMI Score', definition: 'Thrombolysis In Myocardial Infarction risk score - predicts outcomes in ACS', category: 'Scores' },
  { term: 'Troponin', definition: 'Cardiac biomarker that rises with myocardial necrosis; distinguishes NSTEMI from unstable angina', category: 'Labs' },
  { term: 'TTE', definition: 'Transthoracic Echocardiogram - ultrasound of heart from chest wall', category: 'Diagnostics' },
  { term: 'VTE', definition: 'Venous Thromboembolism - includes both DVT and PE', category: 'Conditions' },
  { term: 'Wells Score', definition: 'Clinical prediction rule for DVT or PE probability; guides diagnostic workup', category: 'Scores' },
]

export function Glossary() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTerms = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Group by category
  const categories = Array.from(new Set(glossaryTerms.map((t) => t.category))).sort()

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Glossary</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Quick reference for cardiovascular terms and abbreviations
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search terms, definitions, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {searchTerm ? (
        <Card>
          <CardHeader>
            <CardTitle>
              {filteredTerms.length} result{filteredTerms.length !== 1 ? 's' : ''} found
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTerms.map((item, index) => (
                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.term}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.definition}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {categories.map((category) => {
            const termsInCategory = glossaryTerms.filter((t) => t.category === category)
            return (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {termsInCategory.map((item, index) => (
                      <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <h3 className="font-semibold">{item.term}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {/* Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>About This Glossary</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            This glossary contains common cardiovascular terms, abbreviations, and acronyms used
            throughout the Cardio Master platform. Use the search function to quickly find specific terms.
          </p>
          <p>
            Terms are organized by category including Conditions, Diagnostics, Medications, Procedures,
            Scores, ECG findings, and more.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
