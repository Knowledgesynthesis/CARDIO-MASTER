import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Zap, Heart, Shield, Activity } from 'lucide-react'

export function AtrialFibrillation() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-yellow-600/10 text-yellow-600">
          <Zap className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Atrial Fibrillation</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Rate control, rhythm control, and anticoagulation strategies
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rate">Rate Control</TabsTrigger>
          <TabsTrigger value="rhythm">Rhythm Control</TabsTrigger>
          <TabsTrigger value="anticoag">Anticoagulation</TabsTrigger>
          <TabsTrigger value="pearls">Clinical Pearls</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What is Atrial Fibrillation?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                AFib is the most common sustained cardiac arrhythmia, characterized by rapid, irregular atrial
                activity and an irregularly irregular ventricular response.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Classification by Duration</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium">Paroxysmal</p>
                      <p className="text-muted-foreground">Self-terminates within 7 days (usually &lt;48h)</p>
                    </div>
                    <div>
                      <p className="font-medium">Persistent</p>
                      <p className="text-muted-foreground">Lasts &gt;7 days or requires cardioversion</p>
                    </div>
                    <div>
                      <p className="font-medium">Long-Standing Persistent</p>
                      <p className="text-muted-foreground">Continuous for &gt;12 months</p>
                    </div>
                    <div>
                      <p className="font-medium">Permanent</p>
                      <p className="text-muted-foreground">Accepted, no further rhythm control attempted</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Common Risk Factors</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    <li>Age (most important - doubles per decade after 50)</li>
                    <li>Hypertension</li>
                    <li>Heart failure</li>
                    <li>Valvular heart disease (especially mitral)</li>
                    <li>Obesity, obstructive sleep apnea</li>
                    <li>Alcohol ("holiday heart")</li>
                    <li>Hyperthyroidism</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Clinical Presentation & ECG</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Symptoms (Highly Variable)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Palpitations, "heart racing"</li>
                  <li>Dyspnea, fatigue, exercise intolerance</li>
                  <li>Dizziness, lightheadedness</li>
                  <li>Chest discomfort</li>
                  <li>Many patients asymptomatic (discovered incidentally)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">ECG Findings</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li><strong>Irregularly irregular rhythm</strong> (hallmark finding)</li>
                  <li>Absence of discrete P waves</li>
                  <li>Fibrillatory waves (irregular atrial activity)</li>
                  <li>Variable R-R intervals</li>
                  <li>Narrow QRS (unless aberrant conduction or BBB)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rate" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Rate Control Strategy
              </CardTitle>
              <CardDescription>
                Control ventricular rate, accept persistent AFib
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-600/10 border border-blue-600/50 rounded-lg p-4">
                <p className="font-semibold mb-2">Goal: Resting HR &lt;110 bpm (lenient) or &lt;80 bpm (strict)</p>
                <p className="text-sm text-muted-foreground">
                  Lenient control is often sufficient and better tolerated. Strict control if symptoms persist.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">First-Line Rate Control Agents</h4>

                <div className="space-y-3">
                  <Card className="border-blue-600/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Beta-Blockers (First choice in most patients)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Agents:</strong> Metoprolol, carvedilol, atenolol, bisoprolol</p>
                      <p className="text-muted-foreground">
                        Especially good if HF, CAD, or HTN. Avoid in decompensated HF or severe bradycardia.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-600/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Non-Dihydropyridine Calcium Channel Blockers</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Agents:</strong> Diltiazem, verapamil</p>
                      <p className="text-muted-foreground">
                        Good alternative, especially if beta-blockers contraindicated. Avoid in HFrEF.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-600/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Digoxin</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p className="text-muted-foreground">
                        Adjunctive therapy (weak rate control). Useful in HFrEF. Narrow therapeutic window.
                        Less effective during exercise (vagal tone dependent).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-semibold text-red-600 mb-1">AFib with RVR (Rapid Ventricular Response)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  HR typically &gt;110-120 bpm. Can cause hemodynamic instability.
                </p>
                <div className="text-sm space-y-1">
                  <p><strong>Stable patients:</strong> IV or oral beta-blocker or CCB</p>
                  <p><strong>Unstable (shock, pulmonary edema):</strong> Immediate synchronized cardioversion</p>
                  <p><strong>HFrEF with RVR:</strong> Amiodarone or digoxin (avoid BB/CCB if decompensated)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rhythm" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Rhythm Control Strategy
              </CardTitle>
              <CardDescription>
                Restore and maintain sinus rhythm
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Indications for Rhythm Control</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Young patients (&lt;65 years)</li>
                  <li>Highly symptomatic despite rate control</li>
                  <li>First episode of AFib (paroxysmal)</li>
                  <li>AFib-mediated cardiomyopathy</li>
                  <li>Patient preference</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Cardioversion Methods</h4>

                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <p className="font-semibold text-sm mb-1">Electrical Cardioversion</p>
                    <p className="text-sm text-muted-foreground">
                      Synchronized DC shock. Most effective method. Requires sedation.
                      Safe if AFib &lt;48h OR therapeutic anticoagulation ≥3 weeks OR TEE negative for thrombus.
                    </p>
                  </div>

                  <div className="border rounded-lg p-3">
                    <p className="font-semibold text-sm mb-1">Pharmacologic Cardioversion</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Less effective than electrical, but no sedation required.
                    </p>
                    <div className="text-sm space-y-1 ml-2">
                      <p><strong>No structural heart disease:</strong> Flecainide, propafenone, ibutilide</p>
                      <p><strong>Structural heart disease/HF:</strong> Amiodarone, dofetilide (inpatient initiation)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-600/10 border border-red-600/50 rounded-lg p-4">
                <h4 className="font-semibold text-red-600 mb-2">48-Hour Rule (Critical)</h4>
                <p className="text-sm mb-2">
                  AFib &gt;48h (or unknown duration) carries risk of left atrial thrombus → stroke with cardioversion.
                </p>
                <div className="text-sm space-y-1">
                  <p><strong>Safe to cardiovert if:</strong></p>
                  <ul className="list-disc list-inside ml-2 text-muted-foreground">
                    <li>AFib &lt;48 hours, OR</li>
                    <li>Therapeutic anticoagulation for ≥3 weeks prior, OR</li>
                    <li>TEE shows no left atrial appendage thrombus</li>
                  </ul>
                  <p className="mt-2"><strong>After cardioversion:</strong> Continue anticoagulation for ≥4 weeks (risk of stunning)</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Long-Term Rhythm Maintenance</h4>
                <div className="text-sm space-y-2">
                  <p className="font-medium">Antiarrhythmic Drugs (AADs):</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li><strong>No structural disease:</strong> Flecainide, propafenone, sotalol</li>
                    <li><strong>Structural disease/CAD/HF:</strong> Amiodarone, dofetilide</li>
                    <li>AADs have significant side effects and proarrhythmic risk</li>
                  </ul>
                  <p className="font-medium mt-2">Catheter Ablation:</p>
                  <p className="text-muted-foreground">
                    Pulmonary vein isolation. Increasingly first-line, especially in young, symptomatic patients
                    with paroxysmal AFib. More effective than AADs for maintaining sinus rhythm.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anticoag" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Anticoagulation for Stroke Prevention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 border border-primary/50 rounded-lg p-4">
                <p className="font-semibold mb-1">AFib increases stroke risk 5-fold</p>
                <p className="text-sm text-muted-foreground">
                  Stasis in left atrial appendage → thrombus formation → embolic stroke.
                  Anticoagulation reduces stroke risk by ~65%.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">CHA₂DS₂-VASc Score (Stroke Risk)</h4>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-2">Risk Factor</th>
                        <th className="text-center p-2">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-2"><strong>C</strong>ongestive heart failure</td>
                        <td className="text-center p-2">1</td>
                      </tr>
                      <tr>
                        <td className="p-2"><strong>H</strong>ypertension</td>
                        <td className="text-center p-2">1</td>
                      </tr>
                      <tr>
                        <td className="p-2"><strong>A</strong>ge ≥75 years</td>
                        <td className="text-center p-2">2</td>
                      </tr>
                      <tr>
                        <td className="p-2"><strong>D</strong>iabetes</td>
                        <td className="text-center p-2">1</td>
                      </tr>
                      <tr>
                        <td className="p-2"><strong>S</strong>troke/TIA/thromboembolism (prior)</td>
                        <td className="text-center p-2">2</td>
                      </tr>
                      <tr>
                        <td className="p-2"><strong>V</strong>ascular disease (MI, PAD, aortic plaque)</td>
                        <td className="text-center p-2">1</td>
                      </tr>
                      <tr>
                        <td className="p-2"><strong>A</strong>ge 65-74 years</td>
                        <td className="text-center p-2">1</td>
                      </tr>
                      <tr>
                        <td className="p-2"><strong>S</strong>ex category (female)</td>
                        <td className="text-center p-2">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-3 p-3 bg-blue-600/10 rounded-lg text-sm">
                  <p className="font-semibold mb-1">Interpretation:</p>
                  <ul className="space-y-1 text-muted-foreground ml-2">
                    <li><strong>0 (men) or 1 (women):</strong> No anticoagulation recommended</li>
                    <li><strong>1 (men):</strong> Consider anticoagulation (individualized)</li>
                    <li><strong>≥2:</strong> Anticoagulation recommended (unless contraindicated)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">HAS-BLED Score (Bleeding Risk)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Helps assess bleeding risk but should NOT be used to exclude anticoagulation - rather, to identify modifiable risk factors.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Components (1 point each):</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li><strong>H</strong>ypertension (uncontrolled)</li>
                    <li><strong>A</strong>bnormal renal/liver function (1 point each)</li>
                    <li><strong>S</strong>troke (prior)</li>
                    <li><strong>B</strong>leeding (prior major bleed or predisposition)</li>
                    <li><strong>L</strong>abile INR (if on warfarin)</li>
                    <li><strong>E</strong>lderly (age &gt;65)</li>
                    <li><strong>D</strong>rugs (antiplatelet, NSAIDs) or alcohol (1 point each)</li>
                  </ul>
                  <p className="mt-2 text-muted-foreground">
                    Score ≥3 = high bleeding risk. Address modifiable factors but don't necessarily withhold anticoagulation if indicated.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Anticoagulation Options</h4>

                <div className="space-y-3">
                  <Card className="border-green-600/50 bg-green-600/5">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">DOACs (Direct Oral Anticoagulants) - Preferred</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Agents:</strong> Apixaban, rivaroxaban, edoxaban, dabigatran</p>
                      <p className="text-muted-foreground">
                        <strong>Advantages:</strong> No monitoring required, rapid onset/offset, fewer drug/food interactions,
                        lower ICH risk vs warfarin
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Note:</strong> Contraindicated in severe renal dysfunction and mechanical valves. Dose-adjust for renal function.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-600/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Warfarin</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-1">
                      <p><strong>Target INR 2-3</strong></p>
                      <p className="text-muted-foreground">
                        Requires frequent monitoring. Multiple drug/food interactions. Still preferred for mechanical
                        valves and severe mitral stenosis.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-yellow-600/10 border border-yellow-600/50 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-1">Special Considerations:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Valvular AFib (mitral stenosis, mechanical valve): Warfarin required (DOACs contraindicated)</li>
                  <li>CrCl &lt;15 or dialysis: Warfarin or apixaban (others contraindicated)</li>
                  <li>Paroxysmal AFib: Same stroke risk as persistent - anticoagulate based on CHA₂DS₂-VASc</li>
                  <li>After successful ablation: Continue anticoagulation based on CHA₂DS₂-VASc (not rhythm status)</li>
                </ul>
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
                    <li>Anticoagulate based on CHA₂DS₂-VASc, NOT symptom burden or rhythm</li>
                    <li>Never cardiovert AFib &gt;48h without anticoagulation or TEE</li>
                    <li>Rate vs rhythm: most patients do equally well with either strategy</li>
                    <li>Don't stop anticoagulation after ablation - stroke risk unchanged</li>
                  </ul>
                </div>

                <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">⚠️ Common Pitfalls</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Withholding anticoagulation due to "paroxysmal" AFib - stroke risk is same</li>
                    <li>Using aspirin for stroke prevention - minimally effective, similar bleeding risk</li>
                    <li>Cardioverting without considering 48h rule → embolic stroke</li>
                    <li>Prescribing DOACs for mechanical valves (contraindicated - use warfarin)</li>
                    <li>Missing reversible causes: hyperthyroidism, alcohol, PE, pneumonia</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 High-Yield Facts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>AFFIRM trial: rate = rhythm control in long-term outcomes (but QOL may favor rhythm)</li>
                    <li>LAA occlusion device (Watchman) option if high stroke risk + contraindication to anticoagulation</li>
                    <li>AFib with WPW: avoid AV nodal blockers → can cause VF (use procainamide)</li>
                    <li>New AFib → check TSH (hyperthyroid) and consider echo (structural disease)</li>
                    <li>DOACs superior or non-inferior to warfarin with better safety profile</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">📚 Decision Framework</h4>
                  <div className="text-sm space-y-2">
                    <div>
                      <p className="font-medium">Step 1: Stabilize (if unstable → cardiovert)</p>
                    </div>
                    <div>
                      <p className="font-medium">Step 2: Rate vs Rhythm strategy</p>
                      <p className="text-muted-foreground ml-2">
                        Usually rate control first. Rhythm if young, symptomatic, or HF from AFib.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Step 3: Anticoagulation decision (CHA₂DS₂-VASc)</p>
                      <p className="text-muted-foreground ml-2">
                        ≥2: anticoagulate (DOAC preferred). Independent of rhythm strategy.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Step 4: Identify and treat reversible causes</p>
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
