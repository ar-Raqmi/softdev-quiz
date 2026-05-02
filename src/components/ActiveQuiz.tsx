import { useQuiz } from '../context/QuizContext';
import { Bookmark, Clock, CheckCircle2, XCircle, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MermaidDiagram from './MermaidDiagram';
import ArchitectureDiagram from './ArchitectureDiagram';
import { ERDiagram } from './ERDiagram';
import CustomOptionRender from './CustomOptionRender';
import { M3EButton, M3EIconButton, M3EProgress, M3ECard } from './m3e';

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

export default function ActiveQuiz() {
  const {
    appState,
    setAppState,
    currentQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setAnswer,
    bookmarked,
    toggleBookmark,
    timeRemaining,
    finishQuiz,
  } = useQuiz();

  const isExam = appState === 'exam';
  const isPractice = appState === 'practice';
  const [showFeedback, setShowFeedback] = useState(false);

  const question = currentQuestions[currentQuestionIndex];
  const hasAnsweredCurrent = !!answers[question.id];
  const userAnswer = answers[question.id];
  const isCorrect = userAnswer === question.correctAnswer;

  useEffect(() => {
    if (isPractice) {
      if (hasAnsweredCurrent) {
        setShowFeedback(true);
      } else {
        setShowFeedback(false);
      }
    }
  }, [currentQuestionIndex, hasAnsweredCurrent, isPractice]);

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (isPractice) {
        finishQuiz();
      } else {
        setAppState('review');
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelectOption = (optionId: string) => {
    if (isPractice && hasAnsweredCurrent) return;
    setAnswer(question.id, optionId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1c1b1f] max-w-3xl mx-auto w-full md:py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between py-4 mb-4">
        <div className="flex items-center gap-4 bg-[#f5f5f5] px-4 py-2 rounded-full border border-[#e0e0e0]">
          <span className="font-semibold text-[#1c1b1f]">
            Question {currentQuestionIndex + 1} <span className="font-normal text-sm opacity-70">of {currentQuestions.length}</span>
          </span>
        </div>

        {isExam && (
          <div className="flex items-center gap-2 bg-[#ff3500] text-white px-4 py-2 rounded-full font-mono text-lg shadow-sm">
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeRemaining)}</span>
          </div>
        )}

        <M3EIconButton
          onClick={() => setAppState('review')}
          className="md:hidden"
          variant="standard"
        >
          <BookOpen className="w-5 h-5"/>
        </M3EIconButton>
      </div>

      {/* Progress Bar */}
      <div className="w-full mb-8">
        <M3EProgress
          value={currentQuestionIndex}
          max={currentQuestions.length}
          className="w-full"
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="flex-1 flex flex-col gap-6"
        >
          <div className="relative w-full bg-white border border-[#e0e0e0] rounded-[32px] shadow-sm p-6 md:p-8">
            {isExam && (
              <button
                onClick={() => toggleBookmark(question.id)}
                className={`absolute top-6 right-6 p-2 rounded-full transition-colors border ${
                  bookmarked.has(question.id) ? 'bg-[#ffe8e0] text-[#ff3500] border-[#ff3500]' : 'bg-transparent text-[#79747e] border-[#e0e0e0] hover:bg-[#f5f5f5]'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${bookmarked.has(question.id) ? 'fill-current' : ''}`} />
              </button>
            )}

            <div className="text-[#ff3500] font-semibold text-sm mb-2 uppercase">Question {currentQuestionIndex + 1} of {currentQuestions.length}</div>
            <h2 className="text-2xl font-medium leading-[1.4] pr-12 text-[#1c1b1f] mb-6 whitespace-pre-wrap">
              {question.text}
            </h2>

              {question.imageDescription && (
                <div className="mt-4 p-4 bg-[#f5f5f5] rounded-2xl text-sm text-[#1c1b1f] border border-[#e0e0e0] whitespace-pre-wrap">
                  <strong>Image Description:</strong> {question.imageDescription}
                </div>
              )}

              {question.diagram === 'architecture' && (
                <div className="mt-4 p-4 bg-white rounded-2xl border border-[#e0e0e0]">
                  <ArchitectureDiagram />
                </div>
              )}

              {question.diagram === 'er' && (
                <div className="mt-4 p-4 bg-white rounded-2xl border border-[#e0e0e0]">
                  <ERDiagram />
                </div>
              )}

              {question.tables && (
                <div className="mt-4 flex flex-wrap gap-6 justify-center bg-[#f5f5f5] p-6 rounded-2xl border border-[#e0e0e0]">
                  {question.tables.map(table => (
                    table.rows ? (
                      <div key={table.name} className="w-full overflow-x-auto border border-[#e0e0e0] rounded-xl bg-white max-w-2xl">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-[#46f2e7] text-[#003735] font-medium border-b border-[#e0e0e0]">
                            <tr>
                              {table.columns.map(col => (
                                <th key={col.name} className="px-4 py-3 whitespace-nowrap">{col.name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e0e0e0]">
                            {table.rows.map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"}>
                                {row.map((cell, j) => (
                                  <td key={j} className="px-4 py-2.5 text-[#1c1b1f]">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div key={table.name} className="border border-[#ff3500] rounded-lg overflow-hidden bg-white min-w-[150px]">
                        <div className="bg-[#46f2e7] text-[#003735] font-bold text-center py-2 border-b border-[#ff3500]">
                          {table.name}
                        </div>
                        <div className="flex flex-col">
                          {table.columns.map((col, i) => (
                             <div key={i} className="px-3 py-1.5 text-sm border-b last:border-b-0 border-[#e0e0e0] flex items-center gap-2">
                                {col.isKey ? <span className="text-[#ff3500] rotate-45 block" style={{ fontSize: '12px' }}>⚿</span> : <span className="w-3"></span>}
                                <span>{col.name}</span>
                             </div>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              )}

              {question.codeSnippet && (
                <div className="mt-4 rounded-2xl overflow-hidden shadow-sm">
                  <SyntaxHighlighter
                    language={question.language || 'javascript'}
                    style={vscDarkPlus}
                    customStyle={{ padding: '1rem', margin: 0, fontSize: '0.875rem' }}
                  >
                    {question.codeSnippet}
                  </SyntaxHighlighter>
                </div>
              )}
            </div>

          <div className="flex flex-col gap-3">
            {question.options.map((option) => {
              const isSelected = userAnswer === option.id;
              let optionClass = "bg-white hover:bg-[#f5f5f5] text-[#1c1b1f] border border-[#e0e0e0]";
              let icon = null;

              if (isSelected) {
                optionClass = "bg-[#ccfffc] text-[#003735] border-[#46f2e7]";
              }

              if (isPractice && showFeedback) {
                const isThisOptionCorrect = option.id === question.correctAnswer;
                if (isThisOptionCorrect) {
                  optionClass = "bg-[#ccfffc] text-[#003735] border-[#46f2e7]";
                  icon = <CheckCircle2 className="w-5 h-5 text-[#46f2e7]" />;
                } else if (isSelected && !isThisOptionCorrect) {
                  optionClass = "bg-[#ffe8e0] text-[#5c1200] border-[#ff3500]";
                  icon = <XCircle className="w-5 h-5 text-[#ff3500]" />;
                } else {
                  optionClass = "bg-white opacity-50 border-[#e0e0e0]";
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  disabled={isPractice && showFeedback}
                  className={`relative w-full text-left p-4 rounded-2xl transition-all border flex gap-4 items-center ${optionClass}`}
                >
                  <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border-2
                    ${isSelected || (isPractice && showFeedback && option.id === question.correctAnswer) ? 'border-[#46f2e7]' : 'border-[#ff3500]'}`}>
                    { (isSelected || (isPractice && showFeedback && option.id === question.correctAnswer)) && <div className="w-3 h-3 bg-[#46f2e7] rounded-full" /> }
                  </div>
                  <div className="flex-1 whitespace-pre-wrap">
                    {option.text && <span className="text-base leading-relaxed">{option.text}</span>}
                    {option.code && (
                      <div className="mt-2 text-left rounded-lg overflow-hidden border border-[#e0e0e0]">
                        <SyntaxHighlighter
                          language="css"
                          style={vscDarkPlus}
                          customStyle={{ margin: 0, padding: '12px', fontSize: '13px' }}
                        >
                          {option.code}
                        </SyntaxHighlighter>
                      </div>
                    )}
                    {option.uiRender && (
                      <div className="mt-2 flex justify-start">
                        <CustomOptionRender type={option.uiRender} />
                      </div>
                    )}
                  </div>
                  {icon}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Controls */}
      <div className="py-8 flex items-center justify-between gap-4">
        <M3EButton
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          variant="tonal"
        >
          <span className="hidden sm:inline">Previous</span>
        </M3EButton>

        {isExam && (
          <M3EButton
            onClick={() => setAppState('review')}
            variant="outlined"
          >
            Review Grid
          </M3EButton>
        )}

        <M3EButton
          onClick={handleNext}
          variant="filled"
          className="ml-auto"
        >
          {currentQuestionIndex === currentQuestions.length - 1 ? (
            <span>Submit Exam</span>
          ) : (
            <span>Next Question</span>
          )}
        </M3EButton>
      </div>
    </div>
  );
}
