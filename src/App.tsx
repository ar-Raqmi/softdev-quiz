/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { QuizProvider, useQuiz } from './context/QuizContext';
import MainMenu from './components/MainMenu';
import ActiveQuiz from './components/ActiveQuiz';
import ReviewGrid from './components/ReviewGrid';
import Results from './components/Results';
import BootScreen from './components/BootScreen';

function QuizApp() {
  const { appState } = useQuiz();
  const [bootCompleted, setBootCompleted] = useState(false);

  const handleBootComplete = useCallback(() => setBootCompleted(true), []);

  if (!bootCompleted) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  switch (appState) {
    case 'menu':
      return <MainMenu />;
    case 'practice':
    case 'exam':
      return <ActiveQuiz />;
    case 'review':
      return <ReviewGrid />;
    case 'results':
      return <Results />;
    default:
      return <MainMenu />;
  }
}

export default function App() {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
}
