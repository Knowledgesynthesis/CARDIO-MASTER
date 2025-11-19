import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Activity, Droplets, AlertCircle } from 'lucide-react'

export function HeartFailure() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-blue-600/10 text-blue-600">
          <Activity className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Heart Failure</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Comprehensive guide to chronic HF management and acute decompensation
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="chronic">Chronic HF</TabsTrigger>
          <TabsTrigger value="acute">Acute HF</TabsTrigger>
          <TabsTrigger value="gdmt">GDMT</TabsTrigger>
          <TabsTrigger value="pearls">Clinical Pearls</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Heart Failure Classification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-blue-600/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">HFrEF</CardTitle>
                    <CardDescription>Heart Failure with Reduced Ejection Fraction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">
                      <strong>LVEF ≤40%</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Systolic dysfunction. Most evidence for GDMT. Causes: ischemic cardiomyopathy, dilated CM,
                      valvular disease, toxins.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-600/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">HFpEF</CardTitle>
                    <CardDescription>Heart Failure with Preserved Ejection Fraction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">
                      <strong>LVEF ≥50%</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Diastolic dysfunction. Common in elderly, HTN, DM. Fewer proven therapies.
                      Focus on diuresis and treating comorbidities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-indigo-600/50 md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg text-indigo-600">HFmrEF</CardTitle>
                    <CardDescription>Heart Failure with Mildly Reduced Ejection Fraction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">
                      <strong>LVEF 41-49%</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Intermediate category. May benefit from HFrEF therapies. Represents improvement from HFrEF
                      or decline from HFpEF.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>NYHA Functional Classification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-lg w-12">I</span>
                  <p className="text-sm">No limitation. Ordinary physical activity does not cause symptoms.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-lg w-12">II</span>
                  <p className="text-sm">Slight limitation. Comfortable at rest, but ordinary activity causes symptoms.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-lg w-12">III</span>
                  <p className="text-sm">Marked limitation. Less than ordinary activity causes symptoms.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-lg w-12">IV</span>
                  <p className="text-sm">Severe limitation. Symptoms at rest.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chronic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Clinical Presentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Left-Sided HF Symptoms (Forward Failure)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Dyspnea on exertion, orthopnea, paroxysmal nocturnal dyspnea (PND)</li>
                  <li>Fatigue, exercise intolerance</li>
                  <li>Pulmonary congestion → rales, cough</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Right-Sided HF Symptoms (Backward Failure)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Peripheral edema, weight gain</li>
                  <li>Elevated jugular venous pressure (JVP)</li>
                  <li>Hepatomegaly, ascites</li>
                  <li>Abdominal discomfort, early satiety</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Diagnostic Workup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Echocardiography (Essential)</h4>
                <p className="text-sm text-muted-foreground">
                  Assess LVEF, chamber sizes, valvular function, wall motion abnormalities, diastolic function
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">BNP or NT-proBNP</h4>
                <p className="text-sm text-muted-foreground">
                  Elevated in volume overload. Helps differentiate cardiac from pulmonary dyspnea.
                  Useful for monitoring therapy.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Chest X-Ray</h4>
                <p className="text-sm text-muted-foreground">
                  Cardiomegaly, pulmonary edema, pleural effusions, Kerley B lines
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Labs</h4>
                <p className="text-sm text-muted-foreground">
                  CBC, CMP, TSH, iron studies. Check renal function and electrolytes (critical for GDMT dosing)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">ECG</h4>
                <p className="text-sm text-muted-foreground">
                  Look for ischemia, LVH, arrhythmias (AFib common), QRS width (consider CRT if ≥150 ms)
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="acute" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-600" />
                Acute Decompensated Heart Failure (ADHF)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-600/10 border border-blue-600/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Common Precipitants</h4>
                <div className="grid gap-2 md:grid-cols-2 text-sm">
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Medication non-compliance</li>
                    <li>Dietary indiscretion (salt, fluid)</li>
                    <li>Acute coronary syndrome</li>
                    <li>Arrhythmias (especially AFib)</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Infection/sepsis</li>
                    <li>Uncontrolled hypertension</li>
                    <li>Anemia</li>
                    <li>Renal dysfunction</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Hemodynamic Profiles (Forrester Classification)</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <Card className="border-green-600/50 bg-green-600/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Profile A: Warm & Dry</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      Adequate perfusion, no congestion. Well-compensated. Continue GDMT.
                    </CardContent>
                  </Card>

                  <Card className="border-blue-600/50 bg-blue-600/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Profile B: Warm & Wet</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      Adequate perfusion, congestion present. Most common ADHF. Treat with diuretics ± vasodilators.
                    </CardContent>
                  </Card>

                  <Card className="border-orange-600/50 bg-orange-600/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Profile L: Cold & Dry</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      Low perfusion, no congestion. Rare. Consider inotropes, volume challenge if appropriate.
                    </CardContent>
                  </Card>

                  <Card className="border-red-600/50 bg-red-600/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Profile C: Cold & Wet</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      Low perfusion + congestion. Cardiogenic shock. Aggressive diuresis, inotropes, consider MCS.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ADHF Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Immediate Interventions</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">1</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Oxygen / Respiratory Support</p>
                      <p className="text-sm text-muted-foreground">
                        Oxygen if hypoxic. CPAP/BiPAP for severe pulmonary edema. Intubation if needed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">2</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">IV Loop Diuretics</p>
                      <p className="text-sm text-muted-foreground">
                        Furosemide or bumetanide. Start at home dose (if on diuretics) or higher IV.
                        Monitor urine output, daily weights, electrolytes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">3</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Vasodilators (if hypertensive)</p>
                      <p className="text-sm text-muted-foreground">
                        Nitroglycerin IV (afterload reduction). Avoid if SBP &lt;90 mmHg.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">4</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Inotropes (if low perfusion)</p>
                      <p className="text-sm text-muted-foreground">
                        Dobutamine or milrinone for "cold" profile. Use cautiously (arrhythmia risk, increased mortality).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">5</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Treat Precipitants</p>
                      <p className="text-sm text-muted-foreground">
                        ACS, AFib with RVR, infection, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                <h4 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Flash Pulmonary Edema
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Rapid-onset severe dyspnea, hypoxia, pink frothy sputum. Often due to acute MR, severe HTN, or ischemia.
                </p>
                <p className="text-sm">
                  <strong>Emergent management:</strong> Upright positioning, high-flow O₂/CPAP, IV diuretics,
                  IV nitroglycerin, treat underlying cause
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gdmt" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Guideline-Directed Medical Therapy (GDMT) for HFrEF</CardTitle>
              <CardDescription>
                "The Fantastic Four" - All proven to reduce mortality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <Card className="border-blue-600/50 bg-blue-600/5">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className="text-2xl">1️⃣</span>
                      ACE Inhibitor / ARB / ARNI
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div>
                      <p className="font-semibold">First-Line: ARNI (Sacubitril/Valsartan)</p>
                      <p className="text-muted-foreground">
                        Superior to ACEi. Contraindicated with ACEi (36h washout required). Avoid if history of angioedema.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Alternative: ACE Inhibitor</p>
                      <p className="text-muted-foreground">
                        Lisinopril, enalapril, ramipril. Target max tolerated dose.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">If ACEi not tolerated: ARB</p>
                      <p className="text-muted-foreground">
                        Losartan, valsartan. Use if cough or angioedema with ACEi.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-600/50 bg-orange-600/5">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className="text-2xl">2️⃣</span>
                      Beta-Blocker
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>
                      <strong>Evidence-based agents:</strong> Carvedilol, metoprolol succinate, bisoprolol
                    </p>
                    <p className="text-muted-foreground">
                      Start low, go slow. Titrate to max tolerated dose. Continue even if ADHF (may reduce temporarily).
                      Contraindicated in decompensated HF with hypotension or shock.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-600/50 bg-purple-600/5">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className="text-2xl">3️⃣</span>
                      Mineralocorticoid Receptor Antagonist (MRA)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>
                      <strong>Spironolactone or Eplerenone</strong>
                    </p>
                    <p className="text-muted-foreground">
                      Add if LVEF ≤35% and NYHA II-IV despite ACEi/ARB + BB. Monitor K⁺ and creatinine closely.
                      Avoid if K⁺ &gt;5.0 or severe renal dysfunction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-600/50 bg-green-600/5">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className="text-2xl">4️⃣</span>
                      SGLT2 Inhibitor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>
                      <strong>Dapagliflozin or Empagliflozin</strong>
                    </p>
                    <p className="text-muted-foreground">
                      Revolutionary addition to GDMT. Reduces HF hospitalizations and mortality even in non-diabetics.
                      Well-tolerated. Monitor for euglycemic DKA (rare).
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="border-t pt-4 mt-4">
                <h4 className="font-semibold mb-2">Additional Therapies</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Diuretics (for volume overload)</p>
                    <p className="text-muted-foreground">
                      Loop diuretics (furosemide, bumetanide, torsemide). Don't reduce mortality but essential for symptom control.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Hydralazine + Isosorbide Dinitrate</p>
                    <p className="text-muted-foreground">
                      For Black patients (in addition to GDMT) or if ACEi/ARB/ARNI contraindicated
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Ivabradine</p>
                    <p className="text-muted-foreground">
                      If sinus rhythm, HR &gt;70 despite max BB, and LVEF ≤35%
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Device Therapy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="font-semibold mb-1">ICD (Implantable Cardioverter-Defibrillator)</p>
                <p className="text-muted-foreground">
                  Primary prevention if LVEF ≤35% despite ≥3 months GDMT. Secondary prevention if survived VT/VF.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">CRT (Cardiac Resynchronization Therapy)</p>
                <p className="text-muted-foreground">
                  Biventricular pacing. Indicated if LVEF ≤35%, sinus rhythm, QRS ≥150 ms (especially LBBB), NYHA II-IV on GDMT.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">LVAD / Heart Transplant</p>
                <p className="text-muted-foreground">
                  Advanced HF refractory to medical therapy. LVAD as bridge or destination therapy.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pearls" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Key Clinical Pearls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-primary/10 border border-primary/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">⚡ Critical Actions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>All HFrEF patients should be on "Fantastic Four" unless contraindicated</li>
                    <li>Don't hold beta-blockers in ADHF unless cardiogenic shock</li>
                    <li>BNP useful to differentiate dyspnea (cardiac vs pulmonary)</li>
                    <li>Daily weights are critical for outpatient management</li>
                  </ul>
                </div>

                <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">⚠️ Common Pitfalls</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Under-dosing GDMT - always titrate to target doses</li>
                    <li>Starting ACEi/ARB after ARNI without 36h washout → angioedema risk</li>
                    <li>Over-diuresis → worsening renal function, hypotension</li>
                    <li>Missing MRA in eligible patients due to fear of hyperkalemia</li>
                    <li>Forgetting to reassess LVEF after optimal GDMT (may improve → affects ICD need)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 High-Yield Facts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>HFpEF has few proven therapies; focus on diuresis, BP/HR control, treat AFib</li>
                    <li>SGLT2i benefits both HFrEF and HFpEF (paradigm shift)</li>
                    <li>Diastolic HF: small, stiff LV. Systolic HF: dilated, weak LV</li>
                    <li>Acute rise in troponin in ADHF suggests ischemic component</li>
                    <li>ARNI contraindicated in pregnancy, history of angioedema</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📋 Discharge Checklist</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Optimize GDMT (all 4 pillars initiated/titrated)</li>
                    <li>Assess need for ICD/CRT (if not already placed)</li>
                    <li>Dietary counseling (2g sodium, fluid restriction if needed)</li>
                    <li>Daily weight monitoring instructions</li>
                    <li>Early follow-up (within 1-2 weeks)</li>
                    <li>Ensure understanding of medications and warning signs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
