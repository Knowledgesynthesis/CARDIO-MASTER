import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Heart,
  Activity,
  Zap,
  TrendingUp,
  Stethoscope,
  Wind,
  Footprints,
  Droplets,
  BookOpen,
  ClipboardList,
  ArrowRight
} from 'lucide-react'

export function Home() {
  const modules = [
    {
      id: 'acs',
      title: 'Acute Coronary Syndrome',
      description: 'STEMI, NSTEMI, and unstable angina diagnosis and management',
      icon: Heart,
      color: 'text-red-600',
      path: '/modules/acs'
    },
    {
      id: 'hf',
      title: 'Heart Failure',
      description: 'Acute decompensated and chronic heart failure management',
      icon: Activity,
      color: 'text-blue-600',
      path: '/modules/heart-failure'
    },
    {
      id: 'afib',
      title: 'Atrial Fibrillation',
      description: 'Rate control, rhythm control, and anticoagulation strategies',
      icon: Zap,
      color: 'text-yellow-600',
      path: '/modules/atrial-fibrillation'
    },
    {
      id: 'htn',
      title: 'Hypertensive Crisis',
      description: 'Urgency vs emergency classification and management',
      icon: TrendingUp,
      color: 'text-orange-600',
      path: '/modules/hypertensive-crisis'
    },
    {
      id: 'endo',
      title: 'Infective Endocarditis',
      description: 'Duke criteria and evidence-based treatment approaches',
      icon: Stethoscope,
      color: 'text-purple-600',
      path: '/modules/endocarditis'
    },
    {
      id: 'dissection',
      title: 'Aortic Dissection',
      description: 'Recognition and management of Stanford A & B dissections',
      icon: Wind,
      color: 'text-pink-600',
      path: '/modules/aortic-dissection'
    },
    {
      id: 'pad',
      title: 'Peripheral Artery Disease',
      description: 'Claudication evaluation and critical limb ischemia',
      icon: Footprints,
      color: 'text-green-600',
      path: '/modules/pad'
    },
    {
      id: 'vte',
      title: 'Venous Thromboembolism',
      description: 'DVT and PE diagnosis, risk stratification, and treatment',
      icon: Droplets,
      color: 'text-indigo-600',
      path: '/modules/vte'
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to <span className="text-primary">Cardio Master</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master cardiovascular emergencies and chronic management through interactive learning
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link to="/modules">
            <Button size="lg" className="gap-2">
              <BookOpen className="h-5 w-5" />
              Explore Modules
            </Button>
          </Link>
          <Link to="/assessment">
            <Button size="lg" variant="outline" className="gap-2">
              <ClipboardList className="h-5 w-5" />
              Take Assessment
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-8">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.id} to={module.path}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
                <CardHeader>
                  <div className={`${module.color} mb-2`}>
                    <Icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* App Features */}
      <div className="pt-8 border-t">
        <h2 className="text-2xl font-bold text-center mb-6">Platform Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Evidence-Based</CardTitle>
              <CardDescription>
                Content aligned with AHA/ACC, ESC, and CHEST guidelines
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Interactive Tools</CardTitle>
              <CardDescription>
                ECG interpretation, risk calculators, and diagnostic pathways
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mobile-First</CardTitle>
              <CardDescription>
                Optimized for learning on any device, anywhere, anytime
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted/50 border rounded-lg p-6 text-sm text-muted-foreground">
        <p className="font-semibold mb-2">Educational Use Only</p>
        <p>
          This platform is designed for educational purposes only and uses synthetic cases.
          All content should be verified against current guidelines and is not intended to replace
          clinical judgment or official medical training.
        </p>
      </div>
    </div>
  )
}
