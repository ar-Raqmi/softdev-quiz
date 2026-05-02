import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { questions, Question } from '../data/questions';

type AppState = 'menu' | 'practice' | 'exam' | 'review' | 'results';

interface QuizContextType {
  appState: AppState;
  setAppState: (state: AppState) => void;
  startPractice: () => void;
  startExam: () => void;
  currentQuestions: Question[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (idx: number) => void;
  answers: Record<number, string>;
  setAnswer: (questionId: number, answerId: string) => void;
  bookmarked: Set<number>;
  toggleBookmark: (questionId: number) => void;
  timeRemaining: number;
  finishQuiz: () => void;
  score: number;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [appState, setAppState] = useState<AppState>('menu');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(7200); // 2 hours
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval: number;
    if (timerActive && timeRemaining > 0) {
      interval = window.setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timerActive && timeRemaining === 0) {
      finishQuiz();
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining]);

  const startPractice = () => {
    // Pick 10 random questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setCurrentQuestions(shuffled.slice(0, 10));
    setAppState('practice');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setBookmarked(new Set());
    setTimerActive(false);
  };

  const startExam = () => {
    setCurrentQuestions([...questions]); // All questions
    setAppState('exam');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setBookmarked(new Set());
    setTimeRemaining(7200);
    setTimerActive(true);
  };

  const setAnswer = (questionId: number, answerId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerId }));
  };

  const toggleBookmark = (questionId: number) => {
    setBookmarked((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  const finishQuiz = useCallback(() => {
    setTimerActive(false);
    setAppState('results');
  }, []);

  const resetQuiz = () => {
    setAppState('menu');
    setAnswers({});
    setBookmarked(new Set());
    setTimerActive(false);
  };

  const score = currentQuestions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <QuizContext.Provider
      value={{
        appState,
        setAppState,
        startPractice,
        startExam,
        currentQuestions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        answers,
        setAnswer,
        bookmarked,
        toggleBookmark,
        timeRemaining,
        finishQuiz,
        score,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
