import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Heart,
  Activity,
  Zap,
  TrendingUp,
  Stethoscope,
  Wind,
  Footprints,
  Droplets,
  ArrowRight
} from 'lucide-react'

export function Modules() {
  const modules = [
    {
      id: 'acs',
      title: 'Acute Coronary Syndrome',
      description: 'Learn to differentiate STEMI, NSTEMI, and unstable angina. Master ECG interpretation, biomarker analysis, and time-critical interventions.',
      icon: Heart,
      color: 'text-red-600',
      path: '/modules/acs',
      topics: ['STEMI Recognition', 'Risk Stratification', 'Reperfusion Strategies', 'Antiplatelet Therapy']
    },
    {
      id: 'hf',
      title: 'Heart Failure',
      description: 'Understand HFrEF vs HFpEF, guideline-directed medical therapy, and acute decompensation management.',
      icon: Activity,
      color: 'text-blue-600',
      path: '/modules/heart-failure',
      topics: ['GDMT Protocol', 'Congestion Profiles', 'Diuretic Strategies', 'Device Therapy']
    },
    {
      id: 'afib',
      title: 'Atrial Fibrillation',
      description: 'Master rate vs rhythm control strategies, anticoagulation decision-making, and cardioversion safety.',
      icon: Zap,
      color: 'text-yellow-600',
      path: '/modules/atrial-fibrillation',
      topics: ['CHA₂DS₂-VASc Scoring', 'Rate Control', 'Rhythm Control', 'Anticoagulation']
    },
    {
      id: 'htn',
      title: 'Hypertensive Crisis',
      description: 'Differentiate urgency from emergency and learn appropriate BP reduction strategies.',
      icon: TrendingUp,
      color: 'text-orange-600',
      path: '/modules/hypertensive-crisis',
      topics: ['Target Organ Damage', 'IV vs Oral Therapy', 'BP Goals', 'Complications']
    },
    {
      id: 'endo',
      title: 'Infective Endocarditis',
      description: 'Apply Duke criteria, understand typical organisms, and learn indications for surgical intervention.',
      icon: Stethoscope,
      color: 'text-purple-600',
      path: '/modules/endocarditis',
      topics: ['Duke Criteria', 'Blood Cultures', 'Empiric Therapy', 'Surgical Indications']
    },
    {
      id: 'dissection',
      title: 'Aortic Dissection',
      description: 'Recognize classic presentations, understand Type A vs B classification, and manage BP control.',
      icon: Wind,
      color: 'text-pink-600',
      path: '/modules/aortic-dissection',
      topics: ['Stanford Classification', 'Imaging', 'BP Management', 'Surgical vs Medical']
    },
    {
      id: 'pad',
      title: 'Peripheral Artery Disease',
      description: 'Evaluate claudication, interpret ABI, and recognize critical limb ischemia.',
      icon: Footprints,
      color: 'text-green-600',
      path: '/modules/pad',
      topics: ['ABI Interpretation', 'Claudication', 'Medical Therapy', 'Critical Ischemia']
    },
    {
      id: 'vte',
      title: 'Venous Thromboembolism',
      description: 'Apply Wells score and PERC rule, understand imaging strategies, and manage PE risk categories.',
      icon: Droplets,
      color: 'text-indigo-600',
      path: '/modules/vte',
      topics: ['Wells Score', 'PERC Rule', 'Anticoagulation', 'Massive PE']
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Learning Modules</h1>
        <p className="text-lg text-muted-foreground">
          Explore comprehensive cardiovascular topics with interactive tools and clinical reasoning frameworks
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.id} to={module.path}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`${module.color} p-3 rounded-lg bg-muted`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                      <CardDescription className="text-base">
                        {module.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-primary text-sm font-medium mt-4">
                    Start learning
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
