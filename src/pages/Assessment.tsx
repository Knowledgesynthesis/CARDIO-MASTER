import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topic: string
}

const sampleQuestions: Question[] = [
  {
    id: 'q1',
    question: 'A 62-year-old man presents with sudden-onset severe chest pain radiating to his back. BP in right arm is 180/95, left arm is 140/80. What is the most likely diagnosis?',
    options: [
      'Acute myocardial infarction',
      'Aortic dissection',
      'Pulmonary embolism',
      'Pneumothorax'
    ],
    correctAnswer: 1,
    explanation: 'BP differential between arms (>20 mmHg) + sudden severe "tearing" chest pain radiating to back is classic for aortic dissection, specifically Type A (involves ascending aorta).',
    topic: 'Aortic Dissection'
  },
  {
    id: 'q2',
    question: 'Which medication combination represents the "Fantastic Four" for HFrEF management?',
    options: [
      'ACE inhibitor, beta-blocker, loop diuretic, digoxin',
      'ARNI, beta-blocker, MRA, SGLT2 inhibitor',
      'ARB, calcium channel blocker, thiazide, statin',
      'ACE inhibitor, ARB, beta-blocker, MRA'
    ],
    correctAnswer: 1,
    explanation: 'The modern "Fantastic Four" GDMT for HFrEF includes: ARNI (or ACE/ARB), beta-blocker, MRA (mineralocorticoid receptor antagonist), and SGLT2 inhibitor. All four reduce mortality.',
    topic: 'Heart Failure'
  },
  {
    id: 'q3',
    question: 'A patient with new-onset atrial fibrillation has a CHA₂DS₂-VASc score of 2. What is the recommended management regarding anticoagulation?',
    options: [
      'No anticoagulation needed',
      'Aspirin 325 mg daily',
      'Anticoagulation recommended',
      'Only anticoagulate if symptomatic'
    ],
    correctAnswer: 2,
    explanation: 'CHA₂DS₂-VASc ≥2 indicates anticoagulation is recommended (reduces stroke risk ~65%). DOACs are preferred over warfarin. Aspirin is minimally effective with similar bleeding risk.',
    topic: 'Atrial Fibrillation'
  },
  {
    id: 'q4',
    question: 'In aortic dissection management, which medication should be given FIRST?',
    options: [
      'Nitroprusside',
      'Nicardipine',
      'Beta-blocker (e.g., esmolol, labetalol)',
      'Morphine'
    ],
    correctAnswer: 2,
    explanation: 'Beta-blocker must be given FIRST to reduce HR and dP/dt (shear stress). Never give vasodilator alone - it causes reflex tachycardia which worsens dissection propagation.',
    topic: 'Aortic Dissection'
  },
  {
    id: 'q5',
    question: 'Which ECG finding is diagnostic of STEMI?',
    options: [
      'New ST depression ≥1 mm in V2-V3',
      'T-wave inversion in lateral leads',
      'New ST elevation ≥1 mm in ≥2 contiguous leads',
      'Q waves in inferior leads'
    ],
    correctAnswer: 2,
    explanation: 'STEMI criteria: new ST elevation ≥1 mm (0.1 mV) in ≥2 contiguous leads (exception: V2-V3 requires ≥2 mm in men, ≥1.5 mm in women), OR new LBBB with clinical presentation.',
    topic: 'Acute Coronary Syndrome'
  },
  {
    id: 'q6',
    question: 'A 55-year-old diabetic patient has an ABI of 0.6 in the right leg with reproducible calf pain after walking 2 blocks. What is the MOST effective treatment for claudication symptoms?',
    options: [
      'Cilostazol 100 mg BID',
      'Aspirin 81 mg daily',
      'Supervised exercise therapy',
      'Immediate revascularization'
    ],
    correctAnswer: 2,
    explanation: 'Supervised exercise therapy (treadmill walking 3x/week, 30-45 min, 12+ weeks) is the MOST effective treatment for claudication, improving walking distance 50-200%. More effective than medications or angioplasty for symptoms.',
    topic: 'Peripheral Artery Disease'
  },
  {
    id: 'q7',
    question: 'A patient presents with fever and a new murmur. Blood cultures grow Staph aureus. What is the next best step?',
    options: [
      'Start antibiotics and discharge with PO therapy',
      'Order transthoracic echocardiogram (TTE)',
      'Order transesophageal echocardiogram (TEE)',
      'Repeat blood cultures in 1 week'
    ],
    correctAnswer: 2,
    explanation: 'All S. aureus bacteremia requires echo evaluation for endocarditis (high rate of IE). TEE is preferred (more sensitive, especially for vegetations and abscesses) though TTE is acceptable initially.',
    topic: 'Infective Endocarditis'
  },
  {
    id: 'q8',
    question: 'In hypertensive emergency with acute pulmonary edema, which is the target BP reduction in the first hour?',
    options: [
      'Normalize to 120/80 mmHg immediately',
      'Reduce MAP by 50%',
      'Reduce MAP by 10-20%',
      'Reduce SBP to <140 mmHg'
    ],
    correctAnswer: 2,
    explanation: 'In hypertensive emergency, target is to reduce MAP by 10-20% in the first hour, then gradually over 24h. Never normalize acutely - can cause ischemia due to shifted autoregulation in chronic HTN.',
    topic: 'Hypertensive Crisis'
  },
  {
    id: 'q9',
    question: 'A 35-year-old woman presents with unilateral leg swelling. Wells score is 1 (moderate probability for DVT). What is the next step?',
    options: [
      'Compression ultrasound',
      'D-dimer',
      'MR venography',
      'Start anticoagulation empirically'
    ],
    correctAnswer: 1,
    explanation: 'For moderate probability DVT (Wells 1-2), either D-dimer or compression ultrasound is acceptable. Many institutions proceed directly to ultrasound. D-dimer is useful to rule out if negative.',
    topic: 'VTE'
  },
  {
    id: 'q10',
    question: 'What is the minimum duration of anticoagulation for a provoked DVT (post-surgery)?',
    options: [
      '6 weeks',
      '3 months',
      '6 months',
      'Indefinite'
    ],
    correctAnswer: 1,
    explanation: 'Provoked VTE (clear reversible risk factor like surgery, trauma, immobilization) requires minimum 3 months of anticoagulation. Unprovoked VTE often requires indefinite therapy.',
    topic: 'VTE'
  },
]

export function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set())

  const question = sampleQuestions[currentQuestion]

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowExplanation(true)
    setAnsweredQuestions(new Set(answeredQuestions).add(question.id))
  }

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setAnsweredQuestions(new Set())
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Assessment</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Test your cardiovascular knowledge with clinical vignettes
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardDescription>
              Question {currentQuestion + 1} of {sampleQuestions.length}
            </CardDescription>
            <CardDescription className="font-medium text-primary">
              Topic: {question.topic}
            </CardDescription>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 mt-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg font-medium leading-relaxed">{question.question}</p>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correctAnswer
              const isSelected = selectedAnswer === index
              const showResult = showExplanation

              let buttonClass = "w-full justify-start text-left h-auto py-4 px-4 "
              if (showResult) {
                if (isCorrect) {
                  buttonClass += "bg-green-600/20 border-green-600 hover:bg-green-600/30"
                } else if (isSelected) {
                  buttonClass += "bg-destructive/20 border-destructive hover:bg-destructive/30"
                } else {
                  buttonClass += "opacity-50"
                }
              }

              return (
                <Button
                  key={index}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => !showExplanation && handleAnswer(index)}
                  disabled={showExplanation}
                >
                  <div className="flex items-start gap-3 w-full">
                    <span className="font-semibold text-muted-foreground flex-shrink-0">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    )}
                  </div>
                </Button>
              )
            })}
          </div>

          {showExplanation && (
            <Card className="bg-blue-600/10 border-blue-600/50">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  Explanation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{question.explanation}</p>
              </CardContent>
            </Card>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>

            <Button onClick={handleReset} variant="ghost">
              Start Over
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentQuestion === sampleQuestions.length - 1}
            >
              Next Question
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About These Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            These sample questions cover key cardiovascular topics from the modules. Each question
            includes detailed explanations to reinforce learning.
          </p>
          <p>
            <strong>Note:</strong> This assessment is for educational purposes only. Questions are based
            on synthetic scenarios and current medical guidelines. Always verify clinical decisions with
            authoritative sources and consult with appropriate medical professionals.
          </p>
          <p>
            <strong>No score tracking:</strong> This platform focuses on learning, not testing. Review
            explanations carefully to understand the clinical reasoning behind each answer.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
