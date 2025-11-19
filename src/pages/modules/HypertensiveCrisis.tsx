import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrendingUp, AlertTriangle, Target } from 'lucide-react'

export function HypertensiveCrisis() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-orange-600/10 text-orange-600">
          <TrendingUp className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Hypertensive Crisis</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Distinguish urgency from emergency and manage appropriately
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
          <TabsTrigger value="urgency">Urgency</TabsTrigger>
          <TabsTrigger value="pearls">Clinical Pearls</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hypertensive Crisis Classification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Hypertensive crisis is defined as BP &gt;180/120 mmHg. The key distinction is presence or absence
                of acute target organ damage.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-red-600/50 bg-red-600/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Hypertensive Emergency
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="font-semibold">BP &gt;180/120 + Acute End-Organ Damage</p>
                    <p className="text-muted-foreground">
                      Requires immediate BP reduction (minutes to hours) with IV medications in ICU setting.
                      Life-threatening condition.
                    </p>
                    <p className="font-semibold mt-2">Target: Reduce MAP by 10-20% in first hour</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-600/50 bg-orange-600/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600">Hypertensive Urgency</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="font-semibold">BP &gt;180/120 WITHOUT End-Organ Damage</p>
                    <p className="text-muted-foreground">
                      Can be managed with oral medications as outpatient or observation unit.
                      Gradual BP reduction over 24-48 hours. Not immediately life-threatening.
                    </p>
                    <p className="font-semibold mt-2">Target: Reduce over hours to days</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Target Organ Damage Manifestations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Cardiovascular</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Acute coronary syndrome</li>
                    <li>Acute heart failure / pulmonary edema</li>
                    <li>Aortic dissection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Neurologic</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Hypertensive encephalopathy</li>
                    <li>Stroke (ischemic or hemorrhagic)</li>
                    <li>Subarachnoid hemorrhage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Renal</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Acute kidney injury</li>
                    <li>Hematuria, proteinuria</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Other</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Eclampsia (pregnancy)</li>
                    <li>Microangiopathic hemolytic anemia</li>
                    <li>Retinal hemorrhages, papilledema</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                Management of Hypertensive Emergency
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-600/10 border border-red-600/50 rounded-lg p-4">
                <h4 className="font-semibold text-red-600 mb-2">Critical Principles</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li><strong>ICU monitoring required</strong> - continuous BP monitoring, arterial line often needed</li>
                  <li><strong>IV medications</strong> - allows rapid titration and control</li>
                  <li><strong>Gradual reduction</strong> - avoid precipitous drops (can worsen ischemia)</li>
                  <li><strong>Initial target: 10-20% MAP reduction in first hour, then 5-15% over next 23h</strong></li>
                  <li><strong>DO NOT normalize BP acutely</strong> - chronic HTN shifts autoregulation curve</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">IV Antihypertensive Agents</h4>

                <div className="space-y-3">
                  <Card className="border-blue-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Nicardipine (First-line for most emergencies)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Dose:</strong> 5 mg/h IV infusion, increase by 2.5 mg/h q5-15min (max 15 mg/h)</p>
                      <p className="text-muted-foreground">
                        <strong>Pros:</strong> Predictable, easy to titrate, no tachyphylaxis
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Use:</strong> Most hypertensive emergencies (except aortic dissection - use BB first)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Clevidipine</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Dose:</strong> 1-2 mg/h, double q2-5min to effect (max 32 mg/h)</p>
                      <p className="text-muted-foreground">
                        <strong>Pros:</strong> Ultra-short half-life (1 min), very titratable
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Cons:</strong> Expensive, lipid formulation (caution in hypertriglyceridemia)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Labetalol (Beta-blocker + alpha-blocker)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Dose:</strong> 10-20 mg IV bolus, then 20-80 mg q10min OR 0.5-2 mg/min infusion</p>
                      <p className="text-muted-foreground">
                        <strong>Pros:</strong> No reflex tachycardia
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Use:</strong> Good for eclampsia, pheo. Avoid in cocaine toxicity, HF, asthma
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Esmolol (Ultra-short-acting beta-blocker)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Dose:</strong> 500 mcg/kg load, then 50-300 mcg/kg/min infusion</p>
                      <p className="text-muted-foreground">
                        <strong>Use:</strong> Aortic dissection (with nitroprusside), perioperative HTN
                      </p>
                      <p className="text-muted-foreground">
                        Half-life 9 min - very titratable
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Nitroprusside (Reserve for specific indications)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Dose:</strong> 0.25-10 mcg/kg/min infusion</p>
                      <p className="text-muted-foreground">
                        <strong>Pros:</strong> Rapid onset, very potent
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Cons:</strong> Cyanide toxicity risk (&gt;48h use), requires arterial line, light-sensitive
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Use:</strong> Acute HF with severe HTN; dissection (with BB)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-indigo-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Hydralazine</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Dose:</strong> 10-20 mg IV q20-30min PRN</p>
                      <p className="text-muted-foreground">
                        <strong>Use:</strong> Eclampsia/preeclampsia (drug of choice in pregnancy)
                      </p>
                      <p className="text-muted-foreground">
                        Unpredictable response, reflex tachycardia
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Specific Clinical Scenarios</h4>
                <div className="space-y-2 text-sm">
                  <div className="border-l-4 border-red-600 pl-3">
                    <p className="font-semibold">Aortic Dissection</p>
                    <p className="text-muted-foreground">
                      Target SBP 100-120 mmHg AND HR &lt;60. Beta-blocker FIRST (esmolol/labetalol),
                      then vasodilator (nitroprusside/nicardipine). Never vasodilator alone (increases shear stress).
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-3">
                    <p className="font-semibold">Acute Pulmonary Edema</p>
                    <p className="text-muted-foreground">
                      Nitroprusside or nitroglycerin (afterload reduction). Plus diuretics.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-3">
                    <p className="font-semibold">Acute Ischemic Stroke</p>
                    <p className="text-muted-foreground">
                      Permissive hypertension (BP &lt;220/120 if not getting tPA, &lt;185/110 if getting tPA).
                      Avoid aggressive lowering (worsens perfusion to penumbra).
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold">Intracerebral Hemorrhage</p>
                    <p className="text-muted-foreground">
                      Target SBP 140-160 mmHg. Nicardipine or labetalol.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-3">
                    <p className="font-semibold">Eclampsia</p>
                    <p className="text-muted-foreground">
                      Hydralazine or labetalol. Plus magnesium sulfate for seizure prophylaxis. Definitive treatment = delivery.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="urgency" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Management of Hypertensive Urgency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-600/10 border border-orange-600/50 rounded-lg p-4">
                <p className="font-semibold mb-2">Key Principle: Gradual outpatient reduction over 24-48 hours</p>
                <p className="text-sm text-muted-foreground">
                  NO acute IV therapy needed. Rapid reduction can cause ischemia (stroke, MI, AKI) due to shifted
                  autoregulation in chronic HTN.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Approach</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">1</span>
                    <div className="flex-1 text-sm">
                      <p className="font-medium">Exclude end-organ damage</p>
                      <p className="text-muted-foreground">
                        Careful history, exam, ECG, basic labs (creatinine, troponin if chest pain), urinalysis.
                        Fundoscopic exam if concern for encephalopathy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">2</span>
                    <div className="flex-1 text-sm">
                      <p className="font-medium">Oral antihypertensives</p>
                      <p className="text-muted-foreground mb-1">
                        Resume home medications if non-adherent. If no prior meds or inadequate control:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                        <li>Amlodipine 5-10 mg PO</li>
                        <li>Clonidine 0.1-0.2 mg PO (avoid rebound)</li>
                        <li>Labetalol 200-400 mg PO</li>
                        <li>Captopril 25 mg PO</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">3</span>
                    <div className="flex-1 text-sm">
                      <p className="font-medium">Observation and reassessment</p>
                      <p className="text-muted-foreground">
                        Monitor BP after 30-60 min. Ensure adequate reduction but not precipitous drop.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">4</span>
                    <div className="flex-1 text-sm">
                      <p className="font-medium">Outpatient follow-up</p>
                      <p className="text-muted-foreground">
                        Close follow-up within 24-72h. Adjust antihypertensive regimen. Emphasize medication adherence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-600/10 border border-yellow-600/50 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-1">⚠️ Common Mistake: Treating Numbers, Not Patients</p>
                <p className="text-muted-foreground">
                  Asymptomatic BP elevation alone is NOT an emergency. Aggressive IV reduction in urgency setting
                  increases risk of ischemic complications. Educate patient on long-term management rather than
                  "treat and street."
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
                    <li>Distinguish emergency (end-organ damage) from urgency (no damage) - completely different management</li>
                    <li>For dissection: beta-block FIRST before vasodilator</li>
                    <li>Target 10-20% MAP reduction in first hour, NOT normalization</li>
                    <li>Permissive hypertension in acute ischemic stroke (unless tPA candidate)</li>
                  </ul>
                </div>

                <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">⚠️ Common Pitfalls</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Over-treating urgency with IV meds → ischemic complications</li>
                    <li>Normalizing BP too rapidly in emergency → cerebral/renal hypoperfusion</li>
                    <li>Using vasodilator alone in dissection → increased shear stress, worsened dissection</li>
                    <li>Aggressive BP lowering in acute stroke → worsened neurologic outcome</li>
                    <li>Giving nifedipine SL (unpredictable, precipitous drops - avoid)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 High-Yield Facts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Chronic HTN shifts cerebral autoregulation curve rightward → need higher MAP for perfusion</li>
                    <li>Malignant HTN = severe HTN + papilledema/retinopathy + renal failure</li>
                    <li>Most common cause of hypertensive emergency = medication non-adherence</li>
                    <li>Cocaine/amphetamine toxicity: benzodiazepines first, then labetalol (never pure beta-blocker)</li>
                    <li>Pheochromocytoma crisis: phentolamine (alpha-blocker) first, then beta-blocker</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📋 Decision Algorithm</h4>
                  <div className="text-sm space-y-2">
                    <div>
                      <p className="font-semibold">Elevated BP (&gt;180/120)?</p>
                      <p className="text-muted-foreground">↓</p>
                      <p className="font-semibold">Assess for end-organ damage</p>
                      <p className="text-muted-foreground ml-4">
                        • Symptoms: chest pain, dyspnea, headache, vision changes, focal neuro deficits<br/>
                        • Exam: pulmonary edema, papilledema, focal deficits<br/>
                        • Testing: ECG, troponin, creatinine, UA
                      </p>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-red-600">End-organ damage present → EMERGENCY</p>
                      <p className="text-muted-foreground text-xs">ICU, IV meds, arterial line, reduce MAP 10-20% in 1h</p>
                      <p className="font-semibold text-orange-600 mt-2">No end-organ damage → URGENCY</p>
                      <p className="text-muted-foreground text-xs">Oral meds, outpatient follow-up, gradual reduction over 24-48h</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
