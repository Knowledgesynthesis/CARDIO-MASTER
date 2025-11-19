import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Footprints } from 'lucide-react'

export function PAD() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-green-600/10 text-green-600">
          <Footprints className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Peripheral Artery Disease</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Evaluation and management of lower extremity PAD
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
              <CardTitle>What is Peripheral Artery Disease?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Atherosclerotic narrowing of peripheral arteries, most commonly affecting lower extremities.
                Marker of systemic atherosclerosis with increased cardiovascular risk.
              </p>

              <div>
                <h4 className="font-semibold mb-2">Clinical Spectrum</h4>
                <div className="space-y-3">
                  <Card className="border-blue-600/50 bg-blue-600/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Asymptomatic PAD (~40-50%)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      Detected incidentally by abnormal ABI. Still carries increased CV risk.
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-600/50 bg-yellow-600/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Claudication (~40-50%)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      Reproducible leg pain with exercise, relieved by rest. Stable over time in most patients.
                    </CardContent>
                  </Card>

                  <Card className="border-red-600/50 bg-red-600/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Critical Limb Ischemia (~1-2%)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      Rest pain, non-healing ulcers, gangrene. Limb-threatening condition requiring urgent revascularization.
                    </CardContent>
                  </Card>

                  <Card className="border-purple-600/50 bg-purple-600/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Acute Limb Ischemia (Rare)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      Sudden arterial occlusion (embolism or thrombosis). The "6 P's": Pain, Pallor, Pulselessness,
                      Poikilothermia, Paresthesias, Paralysis. Surgical emergency.
                    </CardContent>
                  </Card>
                </div>
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
                  <h4 className="font-semibold mb-1">Traditional CV Risk Factors</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li><strong>Smoking</strong> (strongest modifiable risk factor)</li>
                    <li>Diabetes (especially if poor control)</li>
                    <li>Hypertension</li>
                    <li>Dyslipidemia</li>
                    <li>Age &gt;65 years</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Other Factors</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Chronic kidney disease</li>
                    <li>Family history</li>
                    <li>Hyperhomocysteinemia</li>
                    <li>Inflammatory markers (↑CRP)</li>
                  </ul>
                </div>
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
                <h4 className="font-semibold mb-2">Intermittent Claudication</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li><strong>Location:</strong> Calf (most common), thigh, buttock (correlates with lesion level)</li>
                  <li><strong>Quality:</strong> Cramping, aching, fatigue, weakness</li>
                  <li><strong>Reproducible:</strong> Same distance/exertion triggers symptoms</li>
                  <li><strong>Relief:</strong> Rest (typically &lt;10 minutes) - distinguishes from neurogenic claudication</li>
                  <li><strong>NOT:</strong> Sharp pain, joint pain, present at rest (early on)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Physical Exam Findings</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Pulses</p>
                    <p className="text-muted-foreground">
                      Diminished or absent (femoral, popliteal, dorsalis pedis, posterior tibial)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Bruits</p>
                    <p className="text-muted-foreground">
                      Auscultate femoral, aorta (suggests stenosis)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Skin Changes</p>
                    <p className="text-muted-foreground">
                      Hair loss, shiny/atrophic skin, nail thickening, cool extremity
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Advanced Disease</p>
                    <p className="text-muted-foreground">
                      Rubor on dependency (reactive hyperemia), pallor on elevation, ulcers (punched-out, painful),
                      gangrene (dry/black toes)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ankle-Brachial Index (ABI) - Cornerstone of Diagnosis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Method</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  ABI = (Highest ankle systolic pressure) / (Highest arm systolic pressure)
                </p>
                <p className="text-sm text-muted-foreground">
                  Measure systolic BP in both arms and both ankles (dorsalis pedis and posterior tibial).
                  Use Doppler to detect pulses.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interpretation</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-green-600/10 rounded">
                    <span className="font-medium text-sm">1.0 - 1.4</span>
                    <span className="text-sm text-muted-foreground">Normal</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-600/10 rounded">
                    <span className="font-medium text-sm">0.9 - 0.99</span>
                    <span className="text-sm text-muted-foreground">Borderline</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-600/10 rounded">
                    <span className="font-medium text-sm">0.7 - 0.89</span>
                    <span className="text-sm text-muted-foreground">Mild PAD</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-orange-600/10 rounded">
                    <span className="font-medium text-sm">0.4 - 0.69</span>
                    <span className="text-sm text-muted-foreground">Moderate PAD (typical claudication)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-600/10 rounded">
                    <span className="font-medium text-sm">&lt;0.4</span>
                    <span className="text-sm text-muted-foreground">Severe PAD (critical limb ischemia)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-purple-600/10 rounded">
                    <span className="font-medium text-sm">&gt;1.4</span>
                    <span className="text-sm text-muted-foreground">Non-compressible vessels (calcified, common in DM/CKD)</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-600/10 border border-yellow-600/50 rounded-lg p-3 text-sm">
                <p className="font-semibold mb-1">⚠️ ABI &gt;1.4: Non-Compressible Vessels</p>
                <p className="text-muted-foreground">
                  Medial arterial calcification (common in diabetes, CKD) prevents compression. ABI falsely elevated.
                  Use toe-brachial index (TBI) or pulse volume recordings instead.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Diagnostic Tests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold mb-1">Toe-Brachial Index (TBI)</h4>
                <p className="text-muted-foreground">
                  Normal &gt;0.7. Useful when ABI non-compressible. Toe vessels less prone to calcification.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Segmental Pressures & Pulse Volume Recordings</h4>
                <p className="text-muted-foreground">
                  Localizes level of disease. Pressure drop &gt;20 mmHg between segments indicates stenosis.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Duplex Ultrasound</h4>
                <p className="text-muted-foreground">
                  Non-invasive imaging. Identifies location and severity of stenosis. Good for surveillance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">CT/MR Angiography</h4>
                <p className="text-muted-foreground">
                  Detailed anatomic imaging. Used for revascularization planning. CTA requires contrast (caution in CKD).
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Conventional Angiography</h4>
                <p className="text-muted-foreground">
                  Gold standard but invasive. Typically done at time of planned intervention.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="management" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medical Therapy (All Patients with PAD)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 border border-primary/50 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-2">Goals:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Reduce cardiovascular events (MI, stroke, death)</li>
                  <li>Improve functional status and symptoms</li>
                  <li>Prevent limb loss</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Cornerstone Therapies</h4>
                <div className="space-y-3">
                  <Card className="border-red-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Smoking Cessation (Most Important)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="text-muted-foreground">
                        Strongest modifiable risk factor. Reduces progression, improves walking distance, decreases CV events.
                        Offer counseling, nicotine replacement, varenicline, bupropion.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">High-Intensity Statin</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Atorvastatin 40-80 mg</strong> or <strong>Rosuvastatin 20-40 mg</strong></p>
                      <p className="text-muted-foreground">
                        Reduces CV events ~25%. Goal LDL &lt;70 mg/dL (ideally &lt;55). Some benefit for claudication symptoms.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Antiplatelet Therapy</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div>
                        <p className="font-medium">Aspirin 81 mg daily OR Clopidogrel 75 mg daily</p>
                        <p className="text-muted-foreground text-xs">
                          Reduces CV events. Clopidogrel slightly more effective than aspirin for PAD (CAPRIE trial).
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Dual Antiplatelet (in select patients)</p>
                        <p className="text-muted-foreground text-xs">
                          Recent revascularization or very high risk: consider adding rivaroxaban 2.5 mg BID (COMPASS trial).
                          Reduces CV events + limb events but increases bleeding.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Blood Pressure Control</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="text-muted-foreground">
                        Target &lt;140/90 mmHg (or &lt;130/80 if diabetes/CKD). ACE inhibitors reduce CV events in PAD.
                        Beta-blockers safe (do NOT worsen claudication despite old dogma).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Diabetes Control</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="text-muted-foreground">
                        Target HbA1c &lt;7%. Reduces microvascular complications. Less clear benefit for PAD progression.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Claudication-Specific Therapy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Card className="border-green-600/50 bg-green-600/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Supervised Exercise Therapy (First-Line)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">
                    <strong>Most effective therapy for claudication.</strong> Supervised treadmill walking 3x/week for 30-45 min,
                    12+ weeks. Walk to near-maximal pain, rest, repeat. Improves walking distance by 50-200%.
                    Better than medications or angioplasty for symptoms.
                  </p>
                </CardContent>
              </Card>

              <div>
                <h4 className="font-semibold mb-2">Pharmacologic Options (Adjunctive)</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Cilostazol 100 mg BID</p>
                    <p className="text-muted-foreground">
                      Phosphodiesterase inhibitor (vasodilator + antiplatelet). Improves walking distance ~50%.
                      <strong> Contraindicated in heart failure</strong> (class effect). Side effects: headache, diarrhea, palpitations.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Pentoxifylline (rarely used)</p>
                    <p className="text-muted-foreground">
                      Minimal efficacy. Not recommended as first-line.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revascularization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Indications</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li><strong>Critical limb ischemia</strong> (rest pain, ulcers, gangrene) - to prevent amputation</li>
                  <li><strong>Lifestyle-limiting claudication</strong> despite optimal medical therapy + exercise (quality of life)</li>
                  <li><strong>Acute limb ischemia</strong> (emergent)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Options</h4>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">Endovascular (Percutaneous)</p>
                    <p className="text-muted-foreground">
                      Angioplasty ± stenting. Less invasive, shorter recovery. Preferred for focal lesions,
                      aortoiliac disease. Higher re-stenosis rates.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Surgical Bypass</p>
                    <p className="text-muted-foreground">
                      More durable, especially for long segments and infrapopliteal disease. Higher upfront risk.
                      Autogenous vein graft (saphenous) preferred over synthetic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-600/10 border border-yellow-600/50 rounded-lg p-3">
                <p className="font-semibold mb-1">⚠️ Key Point</p>
                <p className="text-muted-foreground text-xs">
                  Revascularization does NOT reduce systemic CV events - medical therapy still essential post-procedure.
                  Goal is limb salvage and symptom relief, not CV risk reduction.
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
                    <li>All PAD patients need statin + antiplatelet regardless of symptoms</li>
                    <li>Supervised exercise is most effective for claudication - not just "walk more"</li>
                    <li>Check ABI in all patients ≥65 or &lt;65 with risk factors</li>
                    <li>PAD is marker of systemic atherosclerosis - screen for CAD, cerebrovascular disease</li>
                  </ul>
                </div>

                <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">⚠️ Common Pitfalls</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Confusing with neurogenic claudication (spinal stenosis): improves with flexion, worse going downhill, variable distance</li>
                    <li>Withholding beta-blockers (they're safe and beneficial in PAD)</li>
                    <li>Missing non-compressible ABI in diabetics (always consider TBI)</li>
                    <li>Rushing to revascularization before trial of exercise therapy (for stable claudication)</li>
                    <li>Using cilostazol in patients with heart failure (contraindicated)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 High-Yield Facts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>PAD patients have 4-6× increased risk of MI and stroke (treat systemically!)</li>
                    <li>Most patients with claudication remain stable - only ~25% progress symptomatically</li>
                    <li>Amputation risk is low (&lt;5% at 5 years) with good medical therapy</li>
                    <li>Leriche syndrome: aortoiliac occlusion → claudication, impotence, diminished femoral pulses</li>
                    <li>"Blue toe syndrome": atheroemboli from proximal plaque → painful blue digits with intact pulses</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🚨 Critical Limb Ischemia Warning Signs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Rest pain (especially nocturnal, improves with leg dependent)</li>
                    <li>Non-healing ulcers (painful, tips of toes, between toes, heel)</li>
                    <li>Gangrene (dry, black, mummified tissue)</li>
                    <li>ABI &lt;0.4 or toe pressure &lt;30 mmHg</li>
                    <li><strong>→ Urgent vascular referral for revascularization to prevent amputation</strong></li>
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
