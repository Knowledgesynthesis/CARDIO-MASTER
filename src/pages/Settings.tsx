import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/theme'
import { Sun, Moon, Heart, BookOpen, Shield } from 'lucide-react'

export function Settings() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Settings</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Customize your learning experience
        </p>
      </div>

      {/* Theme Toggle */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            Appearance
          </CardTitle>
          <CardDescription>
            Choose your preferred color scheme
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">
                Currently using {theme === 'dark' ? 'Dark' : 'Light'} mode
              </p>
            </div>
            <Button
              onClick={toggleTheme}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-5 w-5" />
                  Switch to Light
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  Switch to Dark
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            About Cardio Master
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cardio Master is an interactive cardiovascular reasoning platform designed to teach
              high-yield cardiovascular emergencies and chronic management topics through evidence-based,
              synthetic clinical scenarios.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
              <li>8 comprehensive cardiovascular modules covering ACS, Heart Failure, AFib, HTN Crisis, Endocarditis, Aortic Dissection, PAD, and VTE</li>
              <li>Evidence-based content aligned with AHA/ACC, ESC, and CHEST guidelines</li>
              <li>Interactive learning with clinical vignettes and assessments</li>
              <li>Mobile-first, responsive design optimized for learning on any device</li>
              <li>Dark mode support for comfortable reading in any environment</li>
              <li>Offline-capable for learning anywhere, anytime</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Target Audience</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Medical students, internal medicine residents, emergency medicine residents, cardiology fellows,
              physician assistants, nurse practitioners, and healthcare professionals seeking to strengthen
              their cardiovascular clinical reasoning skills.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Version</h3>
            <p className="text-sm text-muted-foreground">
              Cardio Master v1.0.0 - Educational Platform
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-destructive" />
            Important Disclaimers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-destructive">Educational Use Only</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This platform is designed exclusively for educational purposes. All clinical scenarios,
              cases, and examples are synthetic and do not represent real patients. The content should
              not be used as a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          <div className="bg-yellow-600/10 border border-yellow-600/50 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-yellow-600">Not for Clinical Decision-Making</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The information provided in Cardio Master should not be used to make clinical decisions
              for actual patient care. Always consult current medical literature, clinical practice
              guidelines, and appropriate medical professionals when making treatment decisions.
            </p>
          </div>

          <div className="bg-blue-600/10 border border-blue-600/50 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-blue-600">Verify Current Guidelines</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Medical knowledge and clinical guidelines evolve rapidly. While this content is based on
              current evidence-based guidelines at the time of creation, users should always verify
              recommendations against the most current published guidelines and expert consensus statements.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              No Protected Health Information (PHI)
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All cases and clinical scenarios in this application are entirely synthetic. No real
              patient data, protected health information (PHI), or personally identifiable information
              is used or stored in this application.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Limitations</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
              <li>This platform does not provide medical advice or replace formal medical education</li>
              <li>Content is simplified for educational purposes and may not cover all clinical nuances</li>
              <li>Regional variations in practice and guidelines may exist</li>
              <li>Individual patient care requires comprehensive clinical judgment beyond what any educational tool can provide</li>
            </ul>
          </div>

          <div className="bg-muted border rounded-lg p-4 mt-4">
            <p className="text-sm font-medium mb-2">Medical Emergency</p>
            <p className="text-sm text-muted-foreground">
              If you are experiencing a medical emergency, call emergency services (911 in the US)
              immediately. Do not use this educational platform to diagnose or treat medical emergencies.
            </p>
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              By using Cardio Master, you acknowledge that you have read, understood, and agree to these
              disclaimers. You understand that this is an educational tool only and should not be used
              for clinical decision-making. Always seek the guidance of qualified healthcare professionals
              for medical advice and treatment.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Acknowledgments */}
      <Card>
        <CardHeader>
          <CardTitle>Acknowledgments</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            This educational platform was created to help healthcare professionals learn and practice
            cardiovascular clinical reasoning in a safe, synthetic environment.
          </p>
          <p>
            Content is based on guidelines from:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>American Heart Association / American College of Cardiology (AHA/ACC)</li>
            <li>European Society of Cardiology (ESC)</li>
            <li>American College of Chest Physicians (CHEST)</li>
            <li>Peer-reviewed medical literature and evidence-based medicine principles</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
