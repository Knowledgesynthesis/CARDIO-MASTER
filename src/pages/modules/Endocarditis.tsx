import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Stethoscope, CheckSquare, AlertCircle } from 'lucide-react'

export function Endocarditis() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-purple-600/10 text-purple-600">
          <Stethoscope className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Infective Endocarditis</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Duke criteria, organisms, and treatment strategies
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="diagnosis">Duke Criteria</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
          <TabsTrigger value="pearls">Clinical Pearls</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>What is Infective Endocarditis?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Infection of the endocardial surface, typically involving heart valves. Forms vegetations
                consisting of platelets, fibrin, microorganisms, and inflammatory cells.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">High-Risk Conditions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    <li>Prosthetic valves (highest risk)</li>
                    <li>Previous endocarditis</li>
                    <li>IV drug use (IVDU)</li>
                    <li>Congenital heart disease</li>
                    <li>Structural valve disease (MR, AS)</li>
                    <li>Intracardiac devices (pacemaker, ICD)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Common Organisms</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium">Staph aureus (most common overall)</p>
                      <p className="text-muted-foreground text-xs">Acute, aggressive, IVDU, device-related</p>
                    </div>
                    <div>
                      <p className="font-medium">Viridans streptococci</p>
                      <p className="text-muted-foreground text-xs">Subacute, dental procedures, native valve</p>
                    </div>
                    <div>
                      <p className="font-medium">Enterococcus</p>
                      <p className="text-muted-foreground text-xs">GU/GI procedures, elderly</p>
                    </div>
                    <div>
                      <p className="font-medium">Staph epidermidis</p>
                      <p className="text-muted-foreground text-xs">Prosthetic valves, nosocomial</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Clinical Presentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold mb-1">Constitutional Symptoms</h4>
                <p className="text-muted-foreground">
                  Fever (85-90%), chills, night sweats, fatigue, weight loss, myalgias
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Cardiac Manifestations</h4>
                <p className="text-muted-foreground">
                  New or changing murmur (80%), heart failure (from valve destruction)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Embolic Phenomena</h4>
                <p className="text-muted-foreground">
                  Stroke, splenic/renal infarcts, septic pulmonary emboli (right-sided IE)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Classic Peripheral Stigmata (Less Common)</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Osler nodes (painful nodules on finger/toe pads)</li>
                  <li>Janeway lesions (painless hemorrhagic macules on palms/soles)</li>
                  <li>Splinter hemorrhages (under nails)</li>
                  <li>Roth spots (retinal hemorrhages with pale centers)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diagnosis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckSquare className="h-5 w-5" />
                Modified Duke Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 border border-primary/50 rounded-lg p-4">
                <p className="font-semibold mb-2">Diagnosis:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li><strong>Definite IE:</strong> 2 Major OR 1 Major + 3 Minor OR 5 Minor</li>
                  <li><strong>Possible IE:</strong> 1 Major + 1 Minor OR 3 Minor</li>
                  <li><strong>Rejected:</strong> Firm alternative diagnosis OR resolution with ≤4 days antibiotics</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Major Criteria</h4>

                <Card className="border-green-600/50 bg-green-600/5 mb-3">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">1. Positive Blood Cultures (Typical Organisms)</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>
                      <p className="font-medium">Typical microorganism from 2 separate blood cultures:</p>
                      <ul className="list-disc list-inside text-muted-foreground ml-2">
                        <li>Viridans strep, S. bovis, HACEK group, S. aureus, or</li>
                        <li>Community-acquired enterococcus (without primary focus)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">OR Persistently positive blood cultures:</p>
                      <ul className="list-disc list-inside text-muted-foreground ml-2">
                        <li>≥2 positive cultures drawn &gt;12 hours apart, OR</li>
                        <li>3 out of 3, or majority of ≥4 separate cultures (first and last drawn ≥1h apart)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-600/50 bg-blue-600/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">2. Evidence of Endocardial Involvement</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="font-medium mb-1">Echocardiogram findings:</p>
                    <ul className="list-disc list-inside text-muted-foreground ml-2">
                      <li>Vegetation (oscillating mass on valve or supporting structures)</li>
                      <li>Abscess (paravalvular)</li>
                      <li>New partial dehiscence of prosthetic valve</li>
                      <li>New valvular regurgitation</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-2">
                      TEE more sensitive than TTE, especially for prosthetic valves and detecting abscesses
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Minor Criteria</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li><strong>Predisposition:</strong> Predisposing heart condition or IVDU</li>
                  <li><strong>Fever:</strong> Temperature &gt;38°C (100.4°F)</li>
                  <li><strong>Vascular phenomena:</strong> Arterial emboli, septic pulmonary infarcts, mycotic aneurysm, intracranial hemorrhage, Janeway lesions</li>
                  <li><strong>Immunologic phenomena:</strong> Glomerulonephritis, Osler nodes, Roth spots, rheumatoid factor</li>
                  <li><strong>Microbiologic evidence:</strong> Positive blood culture not meeting major criterion OR serologic evidence of active infection</li>
                </ul>
              </div>

              <div className="bg-yellow-600/10 border border-yellow-600/50 rounded-lg p-3 text-sm">
                <p className="font-semibold mb-1">🩸 Blood Culture Strategy</p>
                <p className="text-muted-foreground">
                  Obtain 3 sets from different sites before antibiotics. No need to wait for fever spikes
                  (bacteremia is continuous in IE). Hold antibiotics if possible until cultures obtained.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Antibiotic Therapy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-600/10 border border-red-600/50 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-1">⚠️ Educational Note</p>
                <p className="text-muted-foreground">
                  Specific antibiotic regimens should be guided by organism sensitivities, valve type,
                  and infectious disease consultation. General principles outlined below.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Empiric Therapy (Before culture results)</h4>
                <div className="space-y-2 text-sm">
                  <div className="border-l-4 border-blue-600 pl-3">
                    <p className="font-semibold">Native Valve, Community-Acquired</p>
                    <p className="text-muted-foreground">
                      Vancomycin + Ceftriaxone (covers S. aureus including MRSA, strep, enterococcus)
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-3">
                    <p className="font-semibold">Prosthetic Valve or Nosocomial</p>
                    <p className="text-muted-foreground">
                      Vancomycin + Gentamicin + Cefepime OR Meropenem
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold">IVDU (suspect right-sided IE)</p>
                    <p className="text-muted-foreground">
                      Vancomycin (covers MRSA, most common in IVDU)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Organism-Specific Therapy (Simplified)</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Streptococcus (viridans, S. bovis)</p>
                    <p className="text-muted-foreground">
                      Penicillin G or ceftriaxone ± gentamicin. Duration: 4 weeks (6 weeks for prosthetic)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Staph aureus</p>
                    <p className="text-muted-foreground">
                      MSSA: Nafcillin/oxacillin. MRSA: Vancomycin or daptomycin. Duration: 6 weeks
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Enterococcus</p>
                    <p className="text-muted-foreground">
                      Ampicillin + gentamicin OR vancomycin + gentamicin. Duration: 4-6 weeks
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Culture-Negative</p>
                    <p className="text-muted-foreground">
                      Often due to prior antibiotics or fastidious organisms (HACEK, Bartonella, Coxiella).
                      Consult ID for specialized testing and treatment.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                Indications for Cardiac Surgery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="bg-red-600/10 border border-red-600/50 rounded-lg p-3">
                  <p className="font-semibold mb-1">Urgent/Emergent Surgery Indications:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li><strong>Heart failure</strong> due to severe valve dysfunction (most common indication)</li>
                    <li><strong>Uncontrolled infection:</strong> Persistent bacteremia despite appropriate antibiotics, abscess, fistula</li>
                    <li><strong>Prevention of embolism:</strong> Large (&gt;10mm) mobile vegetation (especially anterior mitral leaflet)</li>
                    <li><strong>Prosthetic valve endocarditis</strong> (especially with complications)</li>
                    <li><strong>Fungal endocarditis</strong></li>
                  </ul>
                </div>

                <p className="text-muted-foreground">
                  Surgery mortality is high but often life-saving. Timing depends on balancing infection control
                  vs hemodynamic/embolic risk. Neurologic complications (stroke) may delay surgery.
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
                    <li>3 sets of blood cultures from different sites BEFORE antibiotics</li>
                    <li>TEE if TTE negative but clinical suspicion high (TEE more sensitive)</li>
                    <li>Always get TEE for prosthetic valves and S. aureus bacteremia</li>
                    <li>Consult cardiothoracic surgery early if high-risk features</li>
                  </ul>
                </div>

                <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">⚠️ Common Pitfalls</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Starting antibiotics before blood cultures obtained</li>
                    <li>Dismissing diagnosis because of absent murmur (up to 20% have no murmur)</li>
                    <li>Relying only on TTE (misses up to 20% of cases, especially prosthetic valves)</li>
                    <li>Not searching for embolic complications (CNS, spleen, kidney)</li>
                    <li>Stopping antibiotics too early (need prolonged IV therapy)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">💡 High-Yield Facts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>All S. aureus bacteremia should have echo (high rate of IE)</li>
                    <li>Right-sided IE (IVDU): tricuspid valve, septic pulmonary emboli, better prognosis</li>
                    <li>Left-sided IE: mitral &gt; aortic, systemic emboli, worse prognosis</li>
                    <li>Antibiotic prophylaxis only for highest-risk (prosthetic valve, prior IE) before dental procedures</li>
                    <li>HACEK organisms (fastidious gram-negatives): subacute, large vegetations</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🎯 Red Flags</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                    <li>Persistent fever on antibiotics → abscess, wrong antibiotic, or alternate diagnosis</li>
                    <li>New AV block → perivalvular extension/abscess (surgical emergency)</li>
                    <li>Acute severe regurgitation → acute HF, pulmonary edema (emergent surgery)</li>
                    <li>Stroke in IE → risk of hemorrhagic conversion, delay surgery if possible</li>
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
