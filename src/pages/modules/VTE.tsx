import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Droplets, Calculator, Shield } from 'lucide-react'

export function VTE() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-indigo-600/10 text-indigo-600">
          <Droplets className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Venous Thromboembolism</h1>
          <p className="text-lg text-muted-foreground mt-2">
            DVT and PE diagnosis, risk stratification, and management
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="dvt">DVT</TabsTrigger>
          <TabsTrigger value="pe">Pulmonary Embolism</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
          <TabsTrigger value="pearls">Clinical Pearls</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What is Venous Thromboembolism (VTE)?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                VTE encompasses deep vein thrombosis (DVT) and pulmonary embolism (PE). Same disease process
                at different anatomic sites. PE occurs when DVT embolizes to pulmonary circulation.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Deep Vein Thrombosis (DVT)</h4>
                  <p className="text-sm text-muted-foreground">
                    Blood clot in deep veins, most commonly lower extremity (femoral, popliteal, iliac).
                    Can be asymptomatic. Risk of PE and post-thrombotic syndrome.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pulmonary Embolism (PE)</h4>
                  <p className="text-sm text-muted-foreground">
                    Clot lodges in pulmonary arteries. Ranges from asymptomatic to massive PE with shock/death.
                    ~90% originate from lower extremity DVT.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Factors (Virchow's Triad)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-3 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Stasis</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Immobility (surgery, hospitalization, long flight)</li>
                    <li>Paralysis, stroke</li>
                    <li>Varicose veins</li>
                    <li>Heart failure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hypercoagulability</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Malignancy (strong association)</li>
                    <li>Pregnancy/postpartum, OCPs, HRT</li>
                    <li>Thrombophilias (Factor V Leiden, prothrombin mutation, antiphospholipid syndrome)</li>
                    <li>Obesity, smoking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Endothelial Injury</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Recent surgery, trauma</li>
                    <li>Central venous catheters</li>
                    <li>Prior VTE (strongest risk factor)</li>
                    <li>Inflammatory conditions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dvt" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>DVT Diagnosis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Clinical Presentation</h4>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Classic findings (but many DVTs are asymptomatic):</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Unilateral leg swelling (most sensitive finding)</li>
                    <li>Pain, tenderness (especially calf)</li>
                    <li>Warmth, erythema</li>
                    <li>Palpable cord (thrombosed vein)</li>
                    <li>Homan's sign (dorsiflexion pain) - unreliable, not recommended</li>
                  </ul>
                  <div className="bg-yellow-600/10 border border-yellow-600/50 rounded-lg p-3 mt-2">
                    <p className="font-semibold">⚠️ Bilateral leg swelling suggests alternative diagnosis</p>
                    <p className="text-muted-foreground text-xs">
                      Consider heart failure, hypoalbuminemia, IVC obstruction, bilateral DVT (rare)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  Wells Score for DVT (Pretest Probability)
                </h4>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-2">Clinical Feature</th>
                        <th className="text-center p-2">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr><td className="p-2">Active cancer (treatment within 6 months or palliative)</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Paralysis, paresis, or recent leg immobilization</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Recently bedridden &gt;3 days or major surgery within 12 weeks</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Localized tenderness along deep venous system</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Entire leg swelling</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Calf swelling &gt;3 cm vs asymptomatic leg (10 cm below tibial tuberosity)</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Pitting edema (symptomatic leg only)</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Collateral superficial veins (non-varicose)</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Previous documented DVT</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Alternative diagnosis at least as likely</td><td className="text-center p-2">-2</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between p-2 bg-green-600/10 rounded text-sm">
                    <span className="font-medium">≤0 points</span>
                    <span className="text-muted-foreground">Low probability (~5%)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-600/10 rounded text-sm">
                    <span className="font-medium">1-2 points</span>
                    <span className="text-muted-foreground">Moderate probability (~17%)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-600/10 rounded text-sm">
                    <span className="font-medium">≥3 points</span>
                    <span className="text-muted-foreground">High probability (~53%)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Diagnostic Approach</h4>
                <div className="space-y-2 text-sm">
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold">Low Probability (Wells ≤0)</p>
                    <p className="text-muted-foreground">
                      D-dimer → if negative, DVT excluded. If positive → ultrasound
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-600 pl-3">
                    <p className="font-semibold">Moderate Probability (Wells 1-2)</p>
                    <p className="text-muted-foreground">
                      D-dimer or ultrasound (institutional preference)
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-3">
                    <p className="font-semibold">High Probability (Wells ≥3)</p>
                    <p className="text-muted-foreground">
                      Skip D-dimer → compression ultrasound directly
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Diagnostic Tests</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Compression Ultrasound (Test of Choice)</p>
                    <p className="text-muted-foreground">
                      Non-compressibility of vein = DVT. Sensitivity/specificity &gt;95% for proximal DVT (femoral/popliteal).
                      Less sensitive for calf DVT. If initial negative but high suspicion, repeat in 1 week.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">D-Dimer</p>
                    <p className="text-muted-foreground">
                      Fibrin degradation product. <strong>High sensitivity, low specificity.</strong>
                      Negative D-dimer (age-adjusted) rules out DVT/PE in low-moderate risk.
                      Elevated in many conditions (not diagnostic). Age-adjusted cutoff = age × 10 mcg/L (if age &gt;50).
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pe" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pulmonary Embolism Diagnosis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Clinical Presentation (Highly Variable)</h4>
                <div className="grid gap-3 md:grid-cols-2 text-sm">
                  <div>
                    <p className="font-medium mb-1">Common Symptoms</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                      <li>Dyspnea (most common, 85%)</li>
                      <li>Pleuritic chest pain</li>
                      <li>Cough, hemoptysis</li>
                      <li>Syncope (suggests massive PE)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Common Signs</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                      <li>Tachypnea, tachycardia</li>
                      <li>Hypoxia (but may have normal SpO₂)</li>
                      <li>Hypotension (massive PE)</li>
                      <li>Signs of DVT (only ~30%)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">PERC Rule (Pulmonary Embolism Rule-Out Criteria)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  If <strong>ALL 8 criteria negative</strong> → PE risk &lt;2%, no further testing needed
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                  <li>Age &lt;50</li>
                  <li>HR &lt;100</li>
                  <li>SpO₂ ≥95% on room air</li>
                  <li>No hemoptysis</li>
                  <li>No estrogen use</li>
                  <li>No prior DVT/PE</li>
                  <li>No recent surgery/trauma (≤4 weeks)</li>
                  <li>No unilateral leg swelling</li>
                </ul>
                <div className="bg-blue-600/10 border border-blue-600/50 rounded-lg p-3 mt-2">
                  <p className="text-xs text-muted-foreground">
                    <strong>Use:</strong> Low clinical suspicion only. If any criterion positive, proceed with Wells score.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  Wells Score for PE
                </h4>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-2">Clinical Feature</th>
                        <th className="text-center p-2">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr><td className="p-2">Clinical signs/symptoms of DVT</td><td className="text-center p-2">+3</td></tr>
                      <tr><td className="p-2">PE most likely diagnosis (or equally likely)</td><td className="text-center p-2">+3</td></tr>
                      <tr><td className="p-2">Heart rate &gt;100</td><td className="text-center p-2">+1.5</td></tr>
                      <tr><td className="p-2">Immobilization ≥3 days or surgery in past 4 weeks</td><td className="text-center p-2">+1.5</td></tr>
                      <tr><td className="p-2">Previous PE or DVT</td><td className="text-center p-2">+1.5</td></tr>
                      <tr><td className="p-2">Hemoptysis</td><td className="text-center p-2">+1</td></tr>
                      <tr><td className="p-2">Malignancy</td><td className="text-center p-2">+1</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between p-2 bg-green-600/10 rounded text-sm">
                    <span className="font-medium">&lt;2 points (or ≤4 by alternative scoring)</span>
                    <span className="text-muted-foreground">PE unlikely (~10%)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-600/10 rounded text-sm">
                    <span className="font-medium">≥2 points (or &gt;4)</span>
                    <span className="text-muted-foreground">PE likely (~40%)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Diagnostic Approach</h4>
                <div className="space-y-2 text-sm">
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold">PE Unlikely (Wells &lt;2)</p>
                    <p className="text-muted-foreground">
                      D-dimer → if negative, PE excluded. If positive → CTPA
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-3">
                    <p className="font-semibold">PE Likely (Wells ≥2)</p>
                    <p className="text-muted-foreground">
                      CTPA (skip D-dimer in high probability - high pretest probability makes negative D-dimer unreliable)
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-3">
                    <p className="font-semibold">Hemodynamically Unstable</p>
                    <p className="text-muted-foreground">
                      If shock/hypotension → bedside echo (RV strain) → empiric anticoagulation → consider thrombolytics.
                      CTPA only if stable enough.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Diagnostic Tests</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">CT Pulmonary Angiography (CTPA) - Test of Choice</p>
                    <p className="text-muted-foreground">
                      Sensitivity/specificity &gt;95%. Direct visualization of clot. Requires IV contrast (caution in renal dysfunction, allergy).
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">V/Q Scan (Ventilation/Perfusion Scan)</p>
                    <p className="text-muted-foreground">
                      Alternative if CTPA contraindicated (pregnancy, severe renal failure). Requires normal baseline CXR.
                      Interpreted as low, intermediate, or high probability.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">ECG</p>
                    <p className="text-muted-foreground">
                      Usually nonspecific. Classic findings (rare): S1Q3T3 (S wave in I, Q wave and T inversion in III),
                      new RBBB, right heart strain. Most commonly: sinus tachycardia.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Chest X-Ray</p>
                    <p className="text-muted-foreground">
                      Usually normal or nonspecific. Hampton's hump (wedge opacity), Westermark sign (oligemia). Useful to exclude other causes.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">ABG</p>
                    <p className="text-muted-foreground">
                      May show hypoxemia, hypocapnia, respiratory alkalosis, elevated A-a gradient. NOT diagnostic - many PEs have normal ABG.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                PE Risk Stratification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="bg-red-600/10 border border-red-600/50 rounded-lg p-3">
                <p className="font-semibold text-red-600 mb-1">Massive PE (High-Risk, ~5%)</p>
                <p className="text-muted-foreground mb-1">
                  Sustained hypotension (SBP &lt;90 mmHg for ≥15 min), obstructive shock, or cardiac arrest
                </p>
                <p className="text-xs">
                  <strong>Management:</strong> ICU, systemic thrombolysis (if no contraindications) or catheter-directed therapy,
                  embolectomy if thrombolytics fail/contraindicated
                </p>
              </div>

              <div className="bg-orange-600/10 border border-orange-600/50 rounded-lg p-3">
                <p className="font-semibold text-orange-600 mb-1">Submassive PE (Intermediate-Risk, ~40%)</p>
                <p className="text-muted-foreground mb-1">
                  Normotensive but RV dysfunction (on echo/CT) or elevated troponin/BNP
                </p>
                <p className="text-xs">
                  <strong>Management:</strong> Admission, anticoagulation, close monitoring. Consider thrombolytics if deteriorates.
                  Intermediate-high risk (RV dysfunction + biomarkers) may benefit from catheter-directed therapy.
                </p>
              </div>

              <div className="bg-green-600/10 border border-green-600/50 rounded-lg p-3">
                <p className="font-semibold text-green-600 mb-1">Low-Risk PE (~55%)</p>
                <p className="text-muted-foreground mb-1">
                  Hemodynamically stable, no RV dysfunction, normal biomarkers (sPESI score 0)
                </p>
                <p className="text-xs">
                  <strong>Management:</strong> Anticoagulation. Many can be managed outpatient or with early discharge (&lt;24h).
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Anticoagulation (Cornerstone of VTE Treatment)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 border border-primary/50 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-1">Start anticoagulation immediately if:</p>
                <ul className="list-disc list-inside text-muted-foreground ml-2">
                  <li>High clinical probability while awaiting confirmatory testing</li>
                  <li>VTE confirmed by imaging</li>
                  <li>Unless contraindications (active bleeding, recent surgery, thrombocytopenia &lt;50K)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Anticoagulant Options</h4>

                <div className="space-y-3">
                  <Card className="border-green-600/50 bg-green-600/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">DOACs (Direct Oral Anticoagulants) - Preferred for Most</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <div>
                        <p className="font-medium">Rivaroxaban (Xarelto)</p>
                        <p className="text-muted-foreground text-xs">15 mg BID × 21 days, then 20 mg daily</p>
                      </div>
                      <div>
                        <p className="font-medium">Apixaban (Eliquis)</p>
                        <p className="text-muted-foreground text-xs">10 mg BID × 7 days, then 5 mg BID</p>
                      </div>
                      <div>
                        <p className="font-medium">Edoxaban (Savaysa)</p>
                        <p className="text-muted-foreground text-xs">Requires 5-10 days LMWH/UFH lead-in, then 60 mg daily</p>
                      </div>
                      <div>
                        <p className="font-medium">Dabigatran (Pradaxa)</p>
                        <p className="text-muted-foreground text-xs">Requires 5-10 days LMWH/UFH lead-in, then 150 mg BID</p>
                      </div>
                      <p className="text-muted-foreground mt-2">
                        <strong>Advantages:</strong> Oral, no monitoring, rapid onset, predictable.
                        <strong>Avoid if:</strong> CrCl &lt;30, pregnancy, mechanical valves, antiphospholipid syndrome
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Low Molecular Weight Heparin (LMWH)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="mb-1"><strong>Enoxaparin 1 mg/kg SC BID</strong> or 1.5 mg/kg daily</p>
                      <p className="text-muted-foreground">
                        Preferred in cancer, pregnancy, severe renal dysfunction (use UFH if CrCl &lt;30), obesity. No monitoring needed (usually).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Unfractionated Heparin (UFH)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="mb-1"><strong>80 units/kg bolus, then 18 units/kg/h infusion</strong></p>
                      <p className="text-muted-foreground">
                        Requires aPTT monitoring (goal 1.5-2.5× control). Use if: hemodynamic instability (short half-life),
                        severe renal failure, high bleeding risk, thrombolysis planned.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-600/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Warfarin</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p className="mb-1"><strong>Start with heparin bridge, overlap ≥5 days until INR 2-3 × 2 days</strong></p>
                      <p className="text-muted-foreground">
                        Requires INR monitoring. Numerous drug/food interactions. Still used if DOACs/LMWH unavailable or contraindicated.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Duration of Anticoagulation</h4>
                <div className="space-y-2 text-sm">
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold">Provoked VTE (reversible risk factor)</p>
                    <p className="text-muted-foreground">
                      3 months (e.g., post-surgery, trauma, immobilization, estrogen use)
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-600 pl-3">
                    <p className="font-semibold">Unprovoked VTE (no clear risk factor)</p>
                    <p className="text-muted-foreground">
                      ≥3 months, then reassess. Often continue indefinitely if low bleeding risk (prevents recurrence).
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-3">
                    <p className="font-semibold">Active cancer, recurrent VTE, or thrombophilia</p>
                    <p className="text-muted-foreground">
                      Indefinite anticoagulation (cancer: prefer LMWH or DOAC over warfarin)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Therapies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold mb-1">Systemic Thrombolysis (Massive PE)</h4>
                <p className="text-muted-foreground mb-1">
                  <strong>tPA 100 mg IV over 2h</strong> (or alteplase, tenecteplase)
                </p>
                <p className="text-muted-foreground">
                  <strong>Indication:</strong> Massive PE with shock/hypotension AND no absolute contraindications
                </p>
                <p className="text-muted-foreground">
                  <strong>Risk:</strong> Major bleeding 10%, ICH 2%. Weigh risk vs mortality (~50% untreated massive PE)
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Catheter-Directed Therapy</h4>
                <p className="text-muted-foreground">
                  Lower-dose thrombolytics via catheter directly into clot. For submassive/massive PE when systemic
                  lysis contraindicated or failed. Lower bleeding risk than systemic lysis.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Surgical Embolectomy</h4>
                <p className="text-muted-foreground">
                  Last resort for massive PE if thrombolysis contraindicated/failed and patient deteriorating. High mortality but life-saving.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">IVC Filter</h4>
                <p className="text-muted-foreground">
                  <strong>Indications:</strong> Absolute contraindication to anticoagulation with acute VTE, or recurrent PE despite therapeutic anticoagulation.
                  Prefer retrievable filters. Does NOT treat existing clot, only prevents new emboli. Resume anticoagulation when safe.
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
                    <li>Start anticoagulation based on clinical suspicion while awaiting imaging (if high probability)</li>
                    <li>Use validated scores (Wells, PERC) - don't rely on gestalt alone</li>
                    <li>D-dimer only useful in low-moderate probability (rules out, not rules in)</li>
                    <li>Massive PE with shock → thrombolytics (if no contraindications)</li>
                  </ul>
                </div>

                <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">⚠️ Common Pitfalls</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Ordering D-dimer in high-risk patients (high false positive rate, doesn't change management)</li>
                    <li>Assuming normal O₂ saturation excludes PE (many PEs have normal SpO₂)</li>
                    <li>Forgetting age-adjusted D-dimer cutoff (age × 10 mcg/L if age &gt;50)</li>
                    <li>Anticoagulating for only 3 months in unprovoked VTE (high recurrence risk - consider indefinite)</li>
                    <li>Using DOACs in antiphospholipid syndrome (warfarin preferred - higher recurrence with DOACs)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 High-Yield Facts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Most common source of PE: proximal leg DVT (popliteal, femoral, iliac)</li>
                    <li>Isolated calf DVT: lower risk of PE, can monitor vs anticoagulate (controversial)</li>
                    <li>Upper extremity DVT: usually related to central line or pacemaker - still needs anticoagulation</li>
                    <li>Cancer-associated VTE: use LMWH or DOAC (apixaban, rivaroxaban) over warfarin (more effective)</li>
                    <li>Post-thrombotic syndrome: chronic leg pain/swelling after DVT. Prevention: compression stockings (controversial efficacy)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🎯 Special Scenarios</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li><strong>Pregnancy:</strong> LMWH (DOACs/warfarin contraindicated). Continue through delivery. Higher VTE risk postpartum.</li>
                    <li><strong>Cancer:</strong> LMWH or DOAC preferred. Don't stop when cancer treated - recurrence risk persists.</li>
                    <li><strong>Thrombophilia:</strong> Usually doesn't change acute management. Test if unprovoked VTE in young (&lt;50) or family history.</li>
                    <li><strong>Subsegmental PE:</strong> Small peripheral clots. If no DVT and low risk, some experts suggest no anticoagulation + surveillance.</li>
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
