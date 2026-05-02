import { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCcw, CheckCircle2, XCircle, Award, BookOpen } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MermaidDiagram from './MermaidDiagram';
import ArchitectureDiagram from './ArchitectureDiagram';
import { ERDiagram } from './ERDiagram';
import CustomOptionRender from './CustomOptionRender';
import { M3EButton, M3ECard } from './m3e';

export default function Results() {
  const { currentQuestions, answers, score, resetQuiz } = useQuiz();
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const total = currentQuestions.length;
  const percentage = Math.round((score / total) * 100);

  let message = "Good effort!";
  if (percentage >= 90) message = "Outstanding!";
  else if (percentage >= 70) message = "Great job!";
  else if (percentage >= 50) message = "Passed!";
  else message = "Keep studying!";

  if (isReviewMode) {
    const q = currentQuestions[reviewIndex];
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;
    const userOption = q.options.find(o => o.id === userAnswer);
    const correctOption = q.options.find(o => o.id === q.correctAnswer);

    const handlePrev = () => {
      if (reviewIndex > 0) setReviewIndex(reviewIndex - 1);
    };

    const handleNext = () => {
      if (reviewIndex < total - 1) setReviewIndex(reviewIndex + 1);
    };

    return (
      <div className="flex flex-col min-h-screen bg-white font-sans text-[#1c1b1f] max-w-3xl mx-auto w-full md:py-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between py-4 mb-4">
          <div className="flex items-center gap-4 bg-[#f5f5f5] px-4 py-2 rounded-full border border-[#e0e0e0]">
            <span className="font-semibold text-[#1c1b1f]">
              Reviewing {reviewIndex + 1} <span className="font-normal text-sm opacity-70">of {total}</span>
            </span>
          </div>

          <M3EButton
            onClick={() => setIsReviewMode(false)}
            variant="outlined"
          >
            Back <span className="hidden sm:inline">to Summary</span>
          </M3EButton>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col gap-6"
          >
            <div className="w-full bg-white border border-[#e0e0e0] rounded-[32px] shadow-sm p-6 md:p-8">
                <div className="text-[#ff3500] font-semibold text-sm mb-2 uppercase">Question {reviewIndex + 1}</div>
                <h2 className="text-2xl font-medium leading-[1.4] text-[#1c1b1f] mb-6 whitespace-pre-wrap">
                  {q.text}
                </h2>

                {q.imageDescription && (
                  <div className="mb-4 p-4 bg-[#f5f5f5] rounded-2xl text-sm text-[#1c1b1f] border border-[#e0e0e0] whitespace-pre-wrap">
                    <strong>Image Description:</strong> {q.imageDescription}
                  </div>
                )}

                {q.diagram === 'architecture' && (
                  <div className="mb-4 p-4 bg-white rounded-2xl border border-[#e0e0e0]">
                    <ArchitectureDiagram />
                  </div>
                )}

                {q.diagram === 'er' && (
                  <div className="mb-4 p-4 bg-white rounded-2xl border border-[#e0e0e0]">
                    <ERDiagram />
                  </div>
                )}

                {q.tables && (
                  <div className="mb-4 flex flex-wrap flex-col items-center gap-4 justify-center bg-[#f5f5f5] p-4 rounded-2xl border border-[#e0e0e0]">
                    {q.tables.map(table => (
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
                        <div key={table.name} className="border border-[#ff3500] rounded-lg overflow-hidden bg-white min-w-[120px]">
                          <div className="bg-[#46f2e7] text-[#003735] font-bold text-center py-1.5 text-sm border-b border-[#ff3500]">
                            {table.name}
                          </div>
                          <div className="flex flex-col">
                            {table.columns.map((col, i) => (
                               <div key={i} className="px-3 py-1 text-xs border-b last:border-b-0 border-[#e0e0e0] flex items-center gap-2">
                                  {col.isKey ? <span className="text-[#ff3500] rotate-45 block" style={{ fontSize: '10px' }}>⚿</span> : <span className="w-2"></span>}
                                  <span>{col.name}</span>
                               </div>
                            ))}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                )}

                {q.codeSnippet && (
                  <div className="mb-6 rounded-2xl overflow-hidden shadow-sm">
                    <SyntaxHighlighter
                      language={q.language || 'javascript'}
                      style={vscDarkPlus}
                      customStyle={{ padding: '1rem', margin: 0, fontSize: '0.875rem' }}
                    >
                      {q.codeSnippet}
                    </SyntaxHighlighter>
                  </div>
                )}

                <div className="flex flex-col gap-4 text-sm mt-4">
                  {/* User's Answer */}
                  <div className={`p-4 rounded-[20px] flex items-start gap-4 border ${isCorrect ? 'bg-[#ccfffc] text-[#003735] border-[#46f2e7]' : 'bg-[#ffe8e0] text-[#5c1200] border-[#ff3500]'}`}>
                    <div className="shrink-0 mt-1">
                      {isCorrect ? <CheckCircle2 className="w-6 h-6 text-[#46f2e7]" /> : <XCircle className="w-6 h-6 text-[#ff3500]" />}
                    </div>
                    <div className="flex-1">
                      <span className="font-bold opacity-80 block mb-1 uppercase tracking-wide text-xs">Your Answer - {userAnswer || 'Skipped'}</span>
                      {userOption ? (
                        <div className="whitespace-pre-wrap text-base font-medium">
                          {userOption.text && <span>{userOption.text}</span>}
                          {userOption.code && (
                            <div className="mt-2 text-left rounded-lg overflow-hidden border border-[#e0e0e0]">
                              <SyntaxHighlighter language="css" style={vscDarkPlus} customStyle={{ margin: 0, padding: '12px', fontSize: '13px' }}>
                                {userOption.code}
                              </SyntaxHighlighter>
                            </div>
                          )}
                          {userOption.uiRender && (
                            <div className="mt-2 flex justify-start">
                              <CustomOptionRender type={userOption.uiRender} />
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className="whitespace-pre-wrap text-base font-medium">No answer provided</span>
                      )}
                    </div>
                  </div>

                  {/* Correct Answer (if wrong) */}
                  {!isCorrect && (
                    <div className="p-4 rounded-[20px] flex items-start gap-4 bg-[#f5f5f5] text-[#1c1b1f] border border-[#e0e0e0]">
                      <div className="shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-[#46f2e7]" />
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-[#46f2e7] block mb-1 uppercase tracking-wide text-xs">Correct Answer - {q.correctAnswer}</span>
                        {correctOption ? (
                          <div className="whitespace-pre-wrap text-base font-medium">
                            {correctOption.text && <span>{correctOption.text}</span>}
                            {correctOption.code && (
                              <div className="mt-2 text-left rounded-lg overflow-hidden border border-[#e0e0e0]">
                                <SyntaxHighlighter language="css" style={vscDarkPlus} customStyle={{ margin: 0, padding: '12px', fontSize: '13px' }}>
                                  {correctOption.code}
                                </SyntaxHighlighter>
                              </div>
                            )}
                            {correctOption.uiRender && (
                              <div className="mt-2 flex justify-start">
                                <CustomOptionRender type={correctOption.uiRender} />
                              </div>
                            )}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
        </AnimatePresence>

        {/* Footer Controls */}
        <div className="py-8 flex items-center justify-between gap-4">
          <M3EButton
            onClick={handlePrev}
            disabled={reviewIndex === 0}
            variant="tonal"
          >
            <span className="hidden sm:inline">Previous</span>
          </M3EButton>

          <M3EButton
            onClick={handleNext}
            disabled={reviewIndex === total - 1}
            variant="filled"
            className="ml-auto"
          >
             <span className="hidden sm:inline">Next</span>
          </M3EButton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1c1b1f] max-w-4xl mx-auto w-full md:py-8 px-4">
      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto w-full bg-white border border-[#e0e0e0] rounded-[32px] shadow-sm p-8"
      >
        <div className="flex flex-col items-center text-center gap-6">
            <div className="w-24 h-24 bg-[#ccfffc] rounded-2xl flex items-center justify-center text-[#003735]">
               <Award className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-[#ff3500] mb-2">{score} / {total}</h1>
              <p className="text-xl font-medium text-[#1c1b1f]/80 mt-2">{message}</p>
              <p className="text-[#1c1b1f]/70 mt-1">You scored {percentage}% on this quiz.</p>
            </div>

            <div className="w-full mt-6 mb-2">
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-3 md:gap-4">
                {currentQuestions.map((q, idx) => {
                  const uAns = answers[q.id];
                  const isCorrect = uAns === q.correctAnswer;
                  const isUnanswered = uAns === undefined;
                  
                  let bgClass = 'bg-white text-[#1c1b1f] border border-[#e0e0e0] hover:bg-[#f5f5f5]';
                  if (!isUnanswered) {
                    if (isCorrect) {
                      bgClass = 'bg-[#ccfffc] text-[#003735] border-[#46f2e7] font-bold';
                    } else {
                      bgClass = 'bg-[#ffe8e0] text-[#5c1200] border-[#ff3500] font-bold';
                    }
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setReviewIndex(idx);
                        setIsReviewMode(true);
                      }}
                      className={`relative aspect-square flex items-center justify-center rounded-[12px] text-[14px] transition-transform active:scale-95 ${bgClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-center gap-6 mt-6 text-sm text-[#1c1b1f]/80 font-medium">
                 <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-[3px] bg-[#ccfffc] border border-[#46f2e7]"></div> Correct</div>
                 <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-[3px] bg-[#ffe8e0] border border-[#ff3500]"></div> Incorrect</div>
                 <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-[3px] bg-white border border-[#e0e0e0]"></div> Skipped</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full justify-center">
              <M3EButton
                onClick={() => setIsReviewMode(true)}
                variant="outlined"
                icon={<BookOpen className="w-5 h-5" />}
              >
                Review Answers
              </M3EButton>

              <M3EButton
                onClick={resetQuiz}
                variant="filled"
                icon={<RefreshCcw className="w-5 h-5" />}
              >
                Back to Menu
              </M3EButton>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
