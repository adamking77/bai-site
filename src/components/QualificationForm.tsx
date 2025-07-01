import React, { useState } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    question: 'Name',
    type: 'text',
    name: 'name',
  },
  {
    question: 'Company/Organization',
    type: 'text',
    name: 'company',
  },
  {
    question: 'Email',
    type: 'email',
    name: 'email',
  },
  {
    question: 'What significant life change is driving your need to rethink your business approach?',
    type: 'textarea',
    name: 'lifeChange',
    placeholder: 'Examples: relationship change, health shift, family transition, lifestyle evolution, geographic move',
  },
  {
    question: 'How do your current business systems conflict with your new life priorities or capabilities?',
    type: 'textarea',
    name: 'systemConflict',
  },
  {
    question: 'What aspects of your business feel most misaligned with who you\'re becoming or what you now need from your work?',
    type: 'textarea',
    name: 'misalignment',
  },
  {
    question: 'Who are the key people affected by potential changes to how you operate?',
    type: 'textarea',
    name: 'keyPeople',
    placeholder: 'Examples: team, partners, family, clients',
  },
  {
    question: 'What would business autonomy look like in your new life context?',
    type: 'textarea',
    name: 'autonomyVision',
  },
  {
    question: 'How quickly do you need to implement changes?',
    type: 'select',
    name: 'timeline',
    options: ['Immediate', 'Near-term', 'Strategic', 'Flexible timing'],
  },
  {
    question: 'Do you have capacity to implement changes if we provide intelligence and frameworks for business redesign?',
    type: 'select',
    name: 'implementationCapacity',
    options: ['Yes', 'Partially', 'No', 'Uncertain'],
  },
];

interface QualificationFormProps {
  onComplete?: () => void;
  isModal?: boolean;
}

const QualificationForm: React.FC<QualificationFormProps> = ({ onComplete, isModal = false }) => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > -1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleChange = (name, value) => {
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
    console.log('BAI Strategic Intelligence Call Application:', answers);
    setSubmitted(true);
    
    // Modal stays open until user manually closes it
    // User can close by clicking X button or clicking outside modal
  };

  const progress = currentQuestion > -1 ? ((currentQuestion + 1) / (questions.length + 1)) * 100 : 0;

  if (submitted) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-12 max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            <div className="w-16 h-px bg-foreground/20 mx-auto"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.5] text-foreground">
              Next Steps
            </h1>
            <div className="space-y-6 max-w-4xl mx-auto text-left">
              <div>
                <p className="text-lg font-light leading-relaxed text-foreground/80 mb-2">
                  <strong className="font-normal">Application Review:</strong> We'll review your application within 48 hours to determine if Business Autonomy Intelligence frameworks apply to your situation.
                </p>
              </div>
              
              <div>
                <p className="text-lg font-light leading-relaxed text-foreground/80 mb-2">
                  <strong className="font-normal">If You Qualify:</strong> You'll receive an acceptance email with a scheduling link to book your Strategic Intelligence Call at your convenience.
                </p>
              </div>
              
              <div>
                <p className="text-lg font-light leading-relaxed text-foreground/80 mb-3">
                  <strong className="font-normal">How to Prepare:</strong>
                </p>
                <ul className="text-base font-light leading-relaxed text-foreground/70 space-y-2 ml-6">
                  <li>• Gather specific examples of how your business systems conflict with your new life priorities</li>
                  <li>• Identify which industry standards or processes feel most misaligned with your current capabilities</li>
                  <li>• Be ready to discuss what business autonomy would look like in your new context</li>
                </ul>
              </div>
              
              <div>
                <p className="text-lg font-light leading-relaxed text-foreground/80">
                  <strong className="font-normal">What to Expect:</strong> A 60-90 minute intelligence analysis session where we'll identify the specific patterns creating Ownership Inversion in your situation and determine if our frameworks can provide the strategic clarity you need.
                </p>
                <p className="text-base font-light leading-relaxed text-foreground/60 mt-2 italic">
                  This is pattern recognition work, not a sales presentation.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <div className="inline-flex items-center space-x-3 text-sm font-light tracking-widest uppercase text-foreground/60">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Application Submitted</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={isModal ? "w-full flex flex-col" : "min-h-screen w-full flex flex-col"}>
      <div className={isModal ? "flex flex-col" : "flex-1 flex flex-col"}>
        {/* Fixed Progress Bar at Top */}
        <div className="w-full bg-background/95 backdrop-blur-sm px-6 py-4 sticky top-0 z-10">
          <div className="max-w-2xl mx-auto">
            <Progress value={progress} className="mb-2" />
            <div className="flex justify-between items-center text-xs font-light tracking-widest uppercase text-foreground/60">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className={isModal ? "flex flex-col justify-start px-6 pt-4" : "flex-1 flex flex-col justify-start px-6 pt-8"}>
          <div className="w-full max-w-3xl mx-auto my-10">
            <AnimatePresence mode="wait">
              {currentQuestion === -1 && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center space-y-12"
                >
                  <div className="space-y-8">
                    <div className="w-16 h-px bg-foreground/20 mx-auto"></div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.5] text-foreground">
                      Strategic Intelligence
                      <span className="block">Call Application</span>
                    </h1>
                  </div>
                  <p className="text-base sm:text-lg font-light leading-relaxed text-foreground/80 max-w-xl mx-auto">
                    We'll analyze your life-business misalignment and determine if Business Autonomy Intelligence frameworks apply to your situation.
                  </p>
                  <div className="text-sm font-light text-foreground/60 mt-4">
                    Response Time: We'll respond within 48 hours to schedule your call.
                  </div>
                  <Button 
                    onClick={() => setCurrentQuestion(0)}
                    variant="outline"
                    size="lg"
                    className="font-light text-base px-8 py-3 border-2 border-foreground/30 rounded-full"
                  >
                    Begin Application
                  </Button>
                </motion.div>
              )}
              {currentQuestion > -1 && currentQuestion < questions.length && (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-4 py-12"
                >
                  <div className="text-center space-y-6">
                    <div className="space-y-3">
                      <div className="text-sm font-light tracking-widest uppercase text-foreground/60">
                        Question {currentQuestion + 1} of {questions.length}
                      </div>
                    </div>
                    <label htmlFor={questions[currentQuestion].name} className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2] text-foreground block">
                      {questions[currentQuestion].question}
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                      {questions[currentQuestion].type === 'text' && (
                        <Input
                          id={questions[currentQuestion].name}
                          type="text"
                          className="w-full p-4 text-lg font-light text-center bg-background border-2 border-foreground/20 rounded-lg focus:border-primary focus:ring-0 transition-all duration-300"
                          onChange={(e) => handleChange(questions[currentQuestion].name, e.target.value)}
                          value={answers[questions[currentQuestion].name] || ''}
                          autoFocus
                        />
                      )}
                      {questions[currentQuestion].type === 'email' && (
                        <Input
                          id={questions[currentQuestion].name}
                          type="email"
                          className="w-full p-4 text-lg font-light text-center bg-background border-2 border-foreground/20 rounded-lg focus:border-primary focus:ring-0 transition-all duration-300"
                          onChange={(e) => handleChange(questions[currentQuestion].name, e.target.value)}
                          value={answers[questions[currentQuestion].name] || ''}
                          autoFocus
                        />
                      )}
                      {questions[currentQuestion].type === 'textarea' && (
                        <Textarea
                          id={questions[currentQuestion].name}
                          className="w-full p-4 text-lg font-light min-h-[120px] bg-background border-2 border-foreground/20 rounded-lg focus:border-primary focus:ring-0 transition-all duration-300 resize-none"
                          placeholder={questions[currentQuestion].placeholder || ''}
                          onChange={(e) => handleChange(questions[currentQuestion].name, e.target.value)}
                          value={answers[questions[currentQuestion].name] || ''}
                          autoFocus
                        />
                      )}
                      {questions[currentQuestion].type === 'select' && (
                        <Select onValueChange={(value) => handleChange(questions[currentQuestion].name, value)} value={answers[questions[currentQuestion].name] || ''}>
                          <SelectTrigger className="w-full p-4 text-lg font-light bg-background border-2 border-foreground/20 rounded-lg focus:border-primary focus:ring-0 transition-all duration-300">
                            <SelectValue placeholder="Select an option" className="font-light" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border border-foreground/20 z-[10000]">
                            {questions[currentQuestion].options.map((option) => (
                              <SelectItem key={option} value={option} className="text-lg font-light hover:bg-secondary/30 p-3">
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
              {currentQuestion === questions.length && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-12"
                >
                  <div className="text-center space-y-8">
                    <div className="space-y-4">
                      <div className="w-16 h-px bg-foreground/20 mx-auto"></div>
                      <div className="text-sm font-light tracking-widest uppercase text-foreground/60">
                        Final Review
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2] text-foreground">
                      Review Your Answers
                    </h2>
                  </div>
                  <div className="space-y-6 max-w-4xl mx-auto">
                    {questions.map((q, i) => (
                      <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 bg-secondary/20 border border-foreground/10 rounded-lg hover:bg-secondary/30 transition-all duration-300">
                        <p className="font-light text-foreground/80 text-base">{q.question}</p>
                        <p className="text-foreground font-light text-base lg:text-right">{answers[q.name] || 'Not answered'}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Navigation - Now inside content area */}
            <div className="w-full max-w-2xl mx-auto flex justify-between items-center mt-12">
              {currentQuestion > -1 ? (
                <Button 
                  variant="outline" 
                  onClick={handlePrev}
                  size="lg"
                  className="font-light text-base px-8 py-3 border-2 border-foreground/30 rounded-full"
                >
                  Previous
                </Button>
              ) : <div />}
              {currentQuestion < questions.length -1 ? (
                <Button 
                  onClick={handleNext}
                  variant="outline"
                  size="lg"
                  className="font-light text-base px-8 py-3 border-2 border-foreground/30 rounded-full"
                >
                  Next
                </Button>
              ) : currentQuestion === questions.length -1 ? (
                  <Button 
                    onClick={handleNext}
                    variant="outline"
                    size="lg"
                    className="font-light text-base px-8 py-3 border-2 border-foreground/30 rounded-full"
                  >
                    Review
                  </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  variant="outline"
                  size="lg"
                  className="font-light text-base px-8 py-3 border-2 border-foreground/30 rounded-full"
                >
                  Schedule Strategic Intelligence Call
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationForm;