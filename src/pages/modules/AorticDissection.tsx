import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Wind, AlertTriangle } from 'lucide-react'

export function AorticDissection() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-pink-600/10 text-pink-600">
          <Wind className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Aortic Dissection</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Recognition and management of this life-threatening emergency
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
          <TabsTrigger value="management">Management</TabsTrigger>
          <TabsTrigger value="pearls">Clinical Pearls</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What is Aortic Dissection?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Tear in the intimal layer allows blood to enter and propagate within the aortic wall,
                creating a false lumen. Can lead to rupture, tamponade, stroke, MI, or end-organ ischemia.
                <strong className="text-destructive"> Life-threatening surgical emergency.</strong>
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-red-600/50 bg-red-600/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600">Stanford Type A</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="font-semibold">Involves ascending aorta (± descending)</p>
                    <p className="text-muted-foreground">
                      <strong>~60% of dissections</strong>
                    </p>
                    <p className="text-muted-foreground">
                      High risk of: tamponade, acute AI, coronary occlusion, stroke
                    </p>
                    <p className="font-semibold text-red-600 mt-2">
                      → EMERGENT SURGICAL REPAIR
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-orange-600/50 bg-orange-600/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-600">Stanford Type B</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="font-semibold">Descending aorta only (distal to left subclavian)</p>
                    <p className="text-muted-foreground">
                      <strong>~40% of dissections</strong>
                    </p>
                    <p className="text-muted-foreground">
                      Better prognosis than Type A
                    </p>
                    <p className="font-semibold text-orange-600 mt-2">
                      → MEDICAL MANAGEMENT (surgery if complications)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Most Important</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li><strong>Hypertension</strong> (present in 75%)</li>
                    <li>Age (peak 60-80 years)</li>
                    <li>Male sex</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Predisposing Conditions</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Connective tissue disorders (Marfan, Ehlers-Danlos)</li>
                    <li>Bicuspid aortic valve</li>
                    <li>Aortic coarctation</li>
                    <li>Vasculitis (giant cell arteritis, Takayasu)</li>
                    <li>Cocaine/amphetamine use</li>
                    <li>Trauma (deceleration injury)</li>
                    <li>Iatrogenic (cardiac surgery, catheterization)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diagnosis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Clinical Presentation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-600/10 border border-red-600/50 rounded-lg p-4">
                <p className="font-semibold mb-2 text-red-600">Classic Triad (but only present in ~50%)</p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                  <li>Sudden onset severe "tearing" or "ripping" chest/back pain</li>
                  <li>Pulse or BP differential between arms (&gt;20 mmHg SBP difference)</li>
                  <li>Widened mediastinum on chest X-ray</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Pain Characteristics</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li><strong>Quality:</strong> Tearing, ripping, sharp (vs pressure/heaviness of MI)</li>
                  <li><strong>Onset:</strong> Sudden, maximal at onset (vs crescendo in MI)</li>
                  <li><strong>Location:</strong> Anterior chest (Type A), interscapular (Type B)</li>
                  <li><strong>Radiation:</strong> May migrate as dissection propagates</li>
                  <li><strong>Severity:</strong> Often described as "worst pain of my life"</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Associated Findings</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Pulse/BP Abnormalities</p>
                    <p className="text-muted-foreground">
                      Pulse deficit, BP differential (&gt;20 mmHg between arms), hypotension (if rupture/tamponade)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Aortic Regurgitation (Type A)</p>
                    <p className="text-muted-foreground">
                      New diastolic murmur from acute AI
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Neurologic Deficits</p>
                    <p className="text-muted-foreground">
                      Stroke (carotid involvement), spinal cord ischemia (paraplegia), Horner syndrome
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Cardiac Tamponade (Type A)</p>
                    <p className="text-muted-foreground">
                      Muffled heart sounds, elevated JVP, pulsus paradoxus
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">End-Organ Ischemia</p>
                    <p className="text-muted-foreground">
                      Mesenteric ischemia, renal failure, limb ischemia
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Diagnostic Studies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Chest X-Ray</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Widened mediastinum</strong> (most common finding, but present in only ~60%).
                  Other findings: pleural effusion, abnormal aortic contour. Normal CXR does NOT exclude dissection.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">CT Angiography (CTA) - Test of Choice</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Sensitivity/Specificity &gt;95%.</strong> Fast, widely available. Shows intimal flap,
                  false lumen, aortic dimensions, branch vessel involvement. Requires IV contrast.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Transesophageal Echocardiography (TEE)</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Sensitivity/Specificity &gt;95%.</strong> Can be done at bedside. Excellent for Type A,
                  ascending aorta, AI, pericardial effusion. Limited view of distal arch/descending aorta.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">MRI/MRA</h4>
                <p className="text-sm text-muted-foreground">
                  Most accurate but time-consuming. Not suitable for unstable patients. Useful for chronic dissection follow-up.
                </p>
              </div>

              <div className="bg-yellow-600/10 border border-yellow-600/50 rounded-lg p-3 text-sm">
                <p className="font-semibold mb-1">⚠️ ECG Pitfall</p>
                <p className="text-muted-foreground">
                  ECG often normal or shows LVH. May show ST elevation if dissection extends into coronary ostium (Type A).
                  Do NOT mistake for isolated ACS - consider dissection in differential!
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="management" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Immediate Medical Management (All Types)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 border border-primary/50 rounded-lg p-4">
                <p className="font-semibold mb-2">Goals:</p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                  <li><strong>Reduce BP:</strong> Target SBP 100-120 mmHg</li>
                  <li><strong>Reduce shear stress:</strong> Target HR &lt;60 bpm (reduce dP/dt)</li>
                  <li><strong>Pain control:</strong> Morphine (also reduces sympathetic tone)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Medication Strategy</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">1</span>
                    <div className="flex-1 text-sm">
                      <p className="font-medium">Beta-Blocker FIRST</p>
                      <p className="text-muted-foreground">
                        <strong>Labetalol 10-20 mg IV q10min</strong> OR <strong>Esmolol infusion 500 mcg/kg load, then 50-300 mcg/kg/min</strong>
                      </p>
                      <p className="text-muted-foreground">
                        Reduces HR and BP. MUST give before vasodilator (prevents reflex tachycardia).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">2</span>
                    <div className="flex-1 text-sm">
                      <p className="font-medium">Vasodilator (if BP still elevated after beta-blockade)</p>
                      <p className="text-muted-foreground">
                        <strong>Nitroprusside 0.25-10 mcg/kg/min</strong> OR <strong>Nicardipine 5-15 mg/h</strong>
                      </p>
                      <p className="text-muted-foreground">
                        Never give vasodilator alone - will increase shear stress and worsen dissection!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">3</span>
                    <div className="flex-1 text-sm">
                      <p className="font-medium">Pain Control</p>
                      <p className="text-muted-foreground">
                        Morphine IV (also reduces catecholamine surge)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                <p className="font-semibold text-destructive mb-2">🚨 Critical: Beta-Blocker Before Vasodilator</p>
                <p className="text-sm text-muted-foreground">
                  Vasodilator alone → reflex tachycardia → increased dP/dt → increased shear stress → propagation of dissection.
                  Always beta-block first!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Definitive Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="border-red-600/50 bg-red-600/5">
                <CardHeader>
                  <CardTitle className="text-base text-red-600">Type A: Emergent Surgery</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>
                    <strong>Mortality: 1-2% per hour without surgery.</strong> Emergency cardiac surgery consultation immediately.
                  </p>
                  <p className="text-muted-foreground">
                    Surgical repair involves resection of intimal tear, replacement with synthetic graft ± aortic valve replacement.
                  </p>
                  <p className="text-muted-foreground">
                    Even with surgery, mortality ~30%. Without surgery, ~50% die within 48h.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-600/50 bg-orange-600/5">
                <CardHeader>
                  <CardTitle className="text-base text-orange-600">Type B: Medical Management (Usually)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p>
                    <strong>Initial approach: aggressive medical therapy</strong> (BP/HR control as above).
                    Mortality ~10% in hospital.
                  </p>
                  <p className="font-semibold mt-2">Indications for intervention (surgery or TEVAR):</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Complicated dissection: rupture, malperfusion, uncontrolled pain/HTN, expansion</li>
                    <li>Connective tissue disorder (Marfan, etc.)</li>
                  </ul>
                </CardContent>
              </Card>
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
                    <li>Think dissection in "worst chest pain of life" + BP differential</li>
                    <li>Check BP in BOTH arms (difference &gt;20 mmHg suggests dissection)</li>
                    <li>Beta-block BEFORE vasodilator (prevents shear stress increase)</li>
                    <li>Type A = emergent surgery. Call CT surgery immediately.</li>
                  </ul>
                </div>

                <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">⚠️ Common Pitfalls</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Giving vasodilator before beta-blocker → worsens dissection</li>
                    <li>Mistaking for ACS and giving antiplatelets/anticoagulants → catastrophic bleeding</li>
                    <li>Assuming normal CXR rules out dissection (can have normal CXR)</li>
                    <li>Missing neurologic exam (stroke is presenting finding in 5-10%)</li>
                    <li>Delaying CTA if high suspicion - don't wait for CXR</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 High-Yield Facts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Most dissections start at two locations: ascending aorta (Type A) or just distal to left subclavian (Type B)</li>
                    <li>Marfan syndrome: think dissection with ANY chest pain (can occur in young patients without HTN)</li>
                    <li>Type A can cause MI if dissection extends into coronary ostium (usually RCA)</li>
                    <li>D-dimer can help rule out dissection if low (but not diagnostic)</li>
                    <li>Iatrogenic dissection during cardiac cath is a recognized complication</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🎯 Key Distinguishing Features vs ACS</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium">Pain quality:</span>
                      <span className="text-muted-foreground">Tearing vs pressure</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Pain onset:</span>
                      <span className="text-muted-foreground">Sudden/maximal vs crescendo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Pain radiation:</span>
                      <span className="text-muted-foreground">Back vs arm/jaw</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Exam:</span>
                      <span className="text-muted-foreground">BP differential vs normal</span>
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
