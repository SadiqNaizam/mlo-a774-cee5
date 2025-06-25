import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

// Pre-defined quiz questions for the personal journey
const quizQuestions = [
  {
    id: 1,
    question: "Where did we have our first date?",
    answers: ["The Italian Place", "That Cozy Cafe", "The Movie Theater", "A Walk in the Park"],
    correctAnswer: "That Cozy Cafe",
  },
  {
    id: 2,
    question: "What's my favorite silly thing you do?",
    answers: ["Your dance in the kitchen", "The face you make when you concentrate", "Your terrible puns", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    id: 3,
    question: "What was the name of the first big trip we took together?",
    answers: ["The Beach Getaway", "Mountain Adventure", "City Exploration '22", "The Spontaneous Roadtrip"],
    correctAnswer: "Mountain Adventure",
  },
  {
    id: 4,
    question: "What's the most ridiculous thing we've argued about (and then laughed at 5 minutes later)?",
    answers: ["The 'correct' way to load the dishwasher", "Which way the toilet paper should hang", "Who ate the last cookie", "All of the above, probably"],
    correctAnswer: "All of the above, probably",
  },
  {
    id: 5,
    question: "What's our secret code word for when we need to escape a boring party?",
    answers: ["'Did we feed the cat?'", "'I think I left the oven on.'", "'Pineapple.'", "'Let's go get tacos.'"],
    correctAnswer: "'Pineapple.'",
  },
  {
    id: 6,
    question: "Which of my outfits is your secret favorite?",
    answers: ["That one gray sweatshirt I always steal", "The fancy dress from that wedding", "My 'super-focused-on-work' pajamas", "That one t-shirt that's technically too old to wear"],
    correctAnswer: "That one gray sweatshirt I always steal",
  },
];

const InteractiveQuiz: React.FC = () => {
    console.log('InteractiveQuiz loaded');

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showNextButton, setShowNextButton] = useState(false);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleAnswerSelect = (value: string) => {
        setSelectedAnswer(value);
        const correct = value === currentQuestion.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            toast.success("You got it! My heart just skipped a beat.", {
                duration: 2500,
            });
            setShowNextButton(true);
        } else {
            toast.error("Not quite! But every guess is a cute one.", {
                duration: 2500,
            });
            setShowNextButton(false);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            // Reset state for the new question
            setSelectedAnswer(null);
            setIsCorrect(null);
            setShowNextButton(false);
        }
    };

    const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
    const isQuizComplete = isLastQuestion && isCorrect;

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-xl animate-fade-in-up">
            <CardHeader>
                <CardTitle className="text-3xl text-center font-serif text-gray-800">A Little Quiz About Us</CardTitle>
                <CardDescription className="text-center text-lg">
                    Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <p className="text-xl font-medium text-center text-gray-700">{currentQuestion.question}</p>
                    <RadioGroup
                        value={selectedAnswer || ''}
                        onValueChange={handleAnswerSelect}
                        className="space-y-4"
                        disabled={isCorrect === true} // Disable after a correct answer is selected
                    >
                        {currentQuestion.answers.map((answer, index) => {
                            const isSelected = selectedAnswer === answer;
                            let indicator = null;

                            if (isSelected) {
                                indicator = isCorrect 
                                    ? <CheckCircle className="h-5 w-5 text-green-500" /> 
                                    : <XCircle className="h-5 w-5 text-red-500" />;
                            }

                            return (
                                <Label 
                                  key={index} 
                                  htmlFor={`q${currentQuestion.id}-a${index}`} 
                                  className="flex items-center space-x-3 p-4 border rounded-lg transition-colors hover:bg-gray-50 cursor-pointer"
                                >
                                    <RadioGroupItem value={answer} id={`q${currentQuestion.id}-a${index}`} />
                                    <span className="flex-1 text-lg">{answer}</span>
                                    {indicator}
                                </Label>
                            );
                        })}
                    </RadioGroup>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center pt-6 h-16">
                {showNextButton && !isQuizComplete && (
                    <Button onClick={handleNextQuestion} size="lg" className="animate-pulse">
                        Next Question <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
                {isQuizComplete && (
                     <Button asChild size="lg" className="animate-pulse bg-green-600 hover:bg-green-700">
                        <Link to="/video-message">
                            There's one more thing...
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};

export default InteractiveQuiz;