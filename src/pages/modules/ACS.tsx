import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Heart, Activity, AlertCircle, Clock } from 'lucide-react'

export function ACS() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-red-600/10 text-red-600">
          <Heart className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Acute Coronary Syndrome</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Master the diagnosis and management of STEMI, NSTEMI, and unstable angina
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
          <TabsTrigger value="complications">Complications</TabsTrigger>
          <TabsTrigger value="pearls">Clinical Pearls</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What is Acute Coronary Syndrome?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Acute coronary syndrome (ACS) represents a spectrum of conditions caused by acute myocardial ischemia.
                The three main categories are:
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-red-600/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600">STEMI</CardTitle>
                    <CardDescription>ST-Elevation MI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Complete coronary occlusion with transmural ischemia. ECG shows ST elevation in ≥2 contiguous leads.
                      Time-critical intervention required.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-600/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600">NSTEMI</CardTitle>
                    <CardDescription>Non-ST-Elevation MI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Partial occlusion with subendocardial ischemia. Elevated troponin without ST elevation.
                      Early invasive strategy often indicated.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-600/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-600">Unstable Angina</CardTitle>
                    <CardDescription>High-Risk Chest Pain</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Ischemic symptoms without biomarker elevation. May show ECG changes (ST depression, T-wave inversion).
                      Requires risk stratification.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Key Pathophysiology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Plaque Rupture</h4>
                <p className="text-sm text-muted-foreground">
                  Atherosclerotic plaque rupture exposes thrombogenic material, triggering platelet aggregation and thrombus formation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Coronary Occlusion</h4>
                <p className="text-sm text-muted-foreground">
                  Complete occlusion → STEMI. Partial occlusion → NSTEMI/Unstable angina.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Myocardial Necrosis</h4>
                <p className="text-sm text-muted-foreground">
                  Prolonged ischemia (&gt;20 min) causes irreversible myocyte death, detected by troponin elevation.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diagnosis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Clinical Presentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Classic Symptoms</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Substernal chest pressure/heaviness ("elephant on chest")</li>
                  <li>Radiation to left arm, jaw, or back</li>
                  <li>Associated diaphoresis, nausea, dyspnea</li>
                  <li>Symptoms lasting &gt;20 minutes</li>
                  <li>Not relieved by rest or nitroglycerin (unlike stable angina)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Atypical Presentations (Elderly, Diabetes, Women)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Isolated dyspnea or fatigue</li>
                  <li>Epigastric discomfort</li>
                  <li>Unexplained altered mental status</li>
                  <li>Syncope</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ECG Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold">STEMI Criteria</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    <li>New ST elevation ≥1 mm (0.1 mV) in ≥2 contiguous leads</li>
                    <li>Exception: V2-V3 requires ≥2 mm (men), ≥1.5 mm (women)</li>
                    <li>New LBBB (Sgarbossa criteria may apply)</li>
                    <li>Posterior MI: ST depression V1-V3, tall R waves</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">NSTEMI/UA Findings</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    <li>ST depression ≥0.5 mm in ≥2 contiguous leads</li>
                    <li>T-wave inversion ≥1 mm in leads with prominent R waves</li>
                    <li>Dynamic ECG changes with symptoms</li>
                    <li>May have normal ECG (10-15% of cases)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-600/10 border border-blue-600/50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  ECG Localization
                </h4>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Inferior:</span>
                    <span className="text-muted-foreground">II, III, aVF → RCA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Anteroseptal:</span>
                    <span className="text-muted-foreground">V1-V4 → LAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Lateral:</span>
                    <span className="text-muted-foreground">I, aVL, V5-V6 → LCx</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Posterior:</span>
                    <span className="text-muted-foreground">V1-V3 (ST depression) → RCA/LCx</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cardiac Biomarkers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Troponin (I or T)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Most sensitive and specific marker for myocardial necrosis</li>
                  <li>Rises 3-4 hours after onset, peaks 18-24h, remains elevated 7-10 days</li>
                  <li>High-sensitivity troponin allows earlier rule-in/rule-out</li>
                  <li>Serial measurements (0h and 3h or 6h) recommended</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Key Distinction</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>NSTEMI:</strong> Elevated troponin + ischemic symptoms
                  <br />
                  <strong>Unstable Angina:</strong> Normal troponin + ischemic symptoms/ECG changes
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="management" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-red-600" />
                STEMI: Time-Critical Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-600/10 border border-red-600/50 rounded-lg p-4">
                <p className="font-semibold text-red-600 mb-2">Goal: Door-to-balloon &lt;90 minutes (or door-to-needle &lt;30 min for fibrinolysis)</p>
                <p className="text-sm text-muted-foreground">
                  "Time is muscle" - Every minute of delay increases mortality. Primary PCI is preferred when available within 120 minutes.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Immediate Interventions</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">1</span>
                    <div>
                      <p className="font-medium">Aspirin 162-325 mg (chewed)</p>
                      <p className="text-sm text-muted-foreground">Inhibits platelet aggregation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">2</span>
                    <div>
                      <p className="font-medium">P2Y12 inhibitor (clopidogrel, ticagrelor, or prasugrel)</p>
                      <p className="text-sm text-muted-foreground">Dual antiplatelet therapy (DAPT)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">3</span>
                    <div>
                      <p className="font-medium">Anticoagulation (heparin, enoxaparin, or bivalirudin)</p>
                      <p className="text-sm text-muted-foreground">Prevent thrombus propagation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">4</span>
                    <div>
                      <p className="font-medium">Oxygen (if SpO2 &lt;90%)</p>
                      <p className="text-sm text-muted-foreground">Avoid hyperoxia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">5</span>
                    <div>
                      <p className="font-medium">Nitroglycerin (sublingual or IV)</p>
                      <p className="text-sm text-muted-foreground">Contraindicated if RV infarct or recent PDE5 inhibitor use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">6</span>
                    <div>
                      <p className="font-medium">Morphine (if needed for pain)</p>
                      <p className="text-sm text-muted-foreground">Use cautiously - may mask symptoms</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Reperfusion Strategy Decision</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-lg p-4 bg-green-600/10 border-green-600/50">
                    <h5 className="font-semibold text-green-600 mb-2">Primary PCI (Preferred)</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                      <li>Available within 90-120 minutes</li>
                      <li>Lower mortality vs fibrinolysis</li>
                      <li>Lower risk of intracranial hemorrhage</li>
                      <li>Can be used with contraindications to lytics</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h5 className="font-semibold mb-2">Fibrinolytic Therapy</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                      <li>PCI not available within 120 minutes</li>
                      <li>Symptom onset &lt;12 hours (ideally &lt;3h)</li>
                      <li>No contraindications present</li>
                      <li>Must transfer for rescue PCI if fails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>NSTEMI/Unstable Angina Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Initial Medical Therapy (Same as STEMI)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Aspirin + P2Y12 inhibitor (DAPT)</li>
                  <li>Anticoagulation</li>
                  <li>Beta-blocker (if no contraindications)</li>
                  <li>High-intensity statin</li>
                  <li>ACE inhibitor (if LV dysfunction, HTN, DM)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Risk Stratification</h4>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Use TIMI or GRACE scores to determine timing of invasive strategy:
                  </p>
                  <div className="border rounded-lg p-3">
                    <p className="font-semibold text-sm mb-2">High-Risk Features (Urgent/Emergent Cath &lt;24h):</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                      <li>Hemodynamic instability or cardiogenic shock</li>
                      <li>Recurrent/refractory ischemia despite medical therapy</li>
                      <li>Sustained ventricular arrhythmias</li>
                      <li>Mechanical complications</li>
                      <li>Markedly elevated troponin</li>
                      <li>Dynamic ST changes</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-3">
                    <p className="font-semibold text-sm mb-2">Early Invasive Strategy (&lt;72h):</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                      <li>TIMI score ≥3</li>
                      <li>Diabetes, renal dysfunction, reduced LV function</li>
                      <li>Prior PCI or CABG</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Post-ACS Medical Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Dual Antiplatelet Therapy (DAPT)</h4>
                  <p className="text-sm text-muted-foreground">
                    Aspirin + P2Y12 inhibitor for ≥12 months (longer if high ischemic risk, lower bleeding risk)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">High-Intensity Statin</h4>
                  <p className="text-sm text-muted-foreground">
                    Atorvastatin 80 mg or rosuvastatin 40 mg (LDL goal &lt;70 mg/dL, ideally &lt;55)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Beta-Blocker</h4>
                  <p className="text-sm text-muted-foreground">
                    Especially if LV dysfunction or heart failure
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">ACE Inhibitor or ARB</h4>
                  <p className="text-sm text-muted-foreground">
                    If LVEF &lt;40%, HTN, DM, or CKD
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="complications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                Common Complications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold mb-1">Cardiogenic Shock</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Hypotension, end-organ hypoperfusion due to severe LV dysfunction. Mortality 40-50%.
                  </p>
                  <p className="text-sm">
                    <strong>Management:</strong> Urgent revascularization, inotropes, mechanical circulatory support (IABP, Impella)
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-semibold mb-1">Ventricular Arrhythmias</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    VT/VF most common in first 48h. Often due to ischemia or electrolyte abnormalities.
                  </p>
                  <p className="text-sm">
                    <strong>Management:</strong> Defibrillation/cardioversion, amiodarone, beta-blockers, correct electrolytes
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold mb-1">Heart Block</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Inferior MI: transient AV block (RCA supplies AV node). Anterior MI: infranodal block (worse prognosis).
                  </p>
                  <p className="text-sm">
                    <strong>Management:</strong> Temporary pacing if symptomatic, permanent pacemaker if persistent
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold mb-1">Mechanical Complications (Rare but Life-Threatening)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    <li><strong>Free wall rupture:</strong> Sudden hemodynamic collapse, cardiac tamponade</li>
                    <li><strong>Ventricular septal rupture:</strong> New harsh holosystolic murmur, acute HF</li>
                    <li><strong>Papillary muscle rupture:</strong> Acute severe MR, pulmonary edema</li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Management:</strong> Emergent surgical repair, mechanical support
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold mb-1">Right Ventricular Infarction</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Associated with inferior STEMI. Hypotension, elevated JVP, clear lungs.
                  </p>
                  <p className="text-sm">
                    <strong>Management:</strong> IV fluids (preload-dependent), avoid nitrates/diuretics, may need inotropes
                  </p>
                </div>
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
                    <li>Always get ECG within 10 minutes of arrival for chest pain</li>
                    <li>Don't delay reperfusion for troponin results in STEMI</li>
                    <li>Check right-sided leads (V4R) in inferior STEMI to detect RV infarct</li>
                    <li>Posterior MI often missed - look for ST depression V1-V3</li>
                  </ul>
                </div>

                <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">⚠️ Common Pitfalls</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Missing ACS in atypical presentations (elderly, diabetic, women)</li>
                    <li>Giving nitrates to RV infarct → severe hypotension</li>
                    <li>Misinterpreting LBBB as excluding STEMI (use Sgarbossa criteria)</li>
                    <li>Delaying fibrinolysis &gt;30 min when PCI unavailable</li>
                    <li>Forgetting to check for aortic dissection before giving antiplatelets</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 High-Yield Facts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Most common culprit in STEMI: LAD (anterior), followed by RCA (inferior)</li>
                    <li>Ticagrelor and prasugrel superior to clopidogrel but higher bleeding risk</li>
                    <li>STEMI equivalents: new LBBB, hyperacute T waves, Wellens syndrome</li>
                    <li>Troponin can be elevated in non-ACS: PE, sepsis, renal failure, myocarditis</li>
                    <li>Kounis syndrome: allergic reaction causing coronary vasospasm/ACS</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📚 Evidence-Based Guidelines</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Based on AHA/ACC STEMI and NSTEMI guidelines:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Primary PCI preferred over fibrinolysis when feasible</li>
                    <li>DAPT duration: minimum 12 months post-ACS (longer if tolerated)</li>
                    <li>Early invasive strategy improves outcomes in high-risk NSTEMI</li>
                    <li>Routine pre-treatment with GP IIb/IIIa inhibitors not recommended</li>
                    <li>Radial access preferred over femoral for PCI (lower bleeding)</li>
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
