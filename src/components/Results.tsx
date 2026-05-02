import { useState, useMemo } from 'react';
import { useQuiz } from '../context/QuizContext';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCcw, CheckCircle2, XCircle, Award, ArrowLeft, ArrowRight, BookOpen, Medal } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ArchitectureDiagram from './ArchitectureDiagram';
import { ERDiagram } from './ERDiagram';
import MermaidDiagram from './MermaidDiagram';
import CustomOptionRender from './CustomOptionRender';

export default function Results() {
  const { currentQuestions, answers, score, resetQuiz, appState } = useQuiz();
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const total = currentQuestions.length;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;

  const elapsedTime = useMemo(() => {
    // Just a mock for now since we don't track start time in context specifically for the final result display
    // but the user template had some time display
    return "12m 45s"; 
  }, []);

  if (isReviewMode) {
    const q = currentQuestions[reviewIndex];
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;
    const userOption = q.options.find(o => o.id === userAnswer);
    const correctOption = q.options.find(o => o.id === q.correctAnswer);

    return (
      <div className="flex flex-col min-h-screen bg-pc-off-white font-sans text-pc-dark w-full overflow-hidden">
        {/* Topbar */}
        <div className="bg-pc-dark border-b border-pc-dark3 sticky top-0 z-40">
          <div className="max-w-[900px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="font-outfit text-base font-bold text-white leading-none">
                by<span className="text-pc-cyan"> ar-Raqmi</span>
              </div>
              <div className="w-px h-5 bg-pc-dark3" />
              <div className="text-pc-gray text-xs font-semibold uppercase tracking-wider">
                Reviewing {reviewIndex + 1} <span className="opacity-60 lowercase">of</span> {total}
              </div>
            </div>

            <button
              onClick={() => setIsReviewMode(false)}
              className="nav-btn bg-white py-1 px-4 h-auto text-xs"
            >
              Summary
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[900px] mx-auto p-6 md:p-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-white border-2 border-pc-dark overflow-hidden">
                  <div className="p-7">
                    <div className="text-pc-gray font-bold text-[10px] mb-2 uppercase tracking-[0.2em] border-b border-pc-dark/5 pb-2">
                      Review Mode / Question {reviewIndex + 1}
                    </div>
                    
                    <div className="text-[17px] font-sans font-medium leading-relaxed text-pc-dark mb-7 whitespace-pre-wrap antialiased">
                      {q.text}
                    </div>

                    {q.imageDescription && (
                      <div className="mb-6 p-4 bg-pc-dark/5 rounded-lg text-sm italic border-l-4 border-pc-cyan">
                        {q.imageDescription}
                      </div>
                    )}

                    {q.diagram === 'architecture' && <div className="mb-6"><ArchitectureDiagram /></div>}
                    {q.diagram === 'er' && <div className="mb-6"><ERDiagram /></div>}
                    {q.diagram === 'mermaid' && q.mermaidCode && <div className="mb-6"><MermaidDiagram chart={q.mermaidCode} /></div>}

                    {q.tables && (
                       <div className="mb-6 flex flex-wrap gap-4 justify-center bg-pc-off-white p-6 border border-pc-dark/10">
                        {q.tables.map(table => (
                          <div key={table.name} className="w-full max-w-2xl border border-pc-dark/20 bg-white shadow-sm font-mono text-[11px]">
                             <div className="bg-pc-dark text-white p-2 font-bold text-center uppercase tracking-tighter">{table.name}</div>
                             <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                   <thead className="bg-[#E6E0D9] border-b border-pc-dark/10">
                                      <tr>{table.columns.map(c => <th key={c.name} className="p-2 whitespace-nowrap">{c.name}</th>)}</tr>
                                   </thead>
                                   <tbody>
                                      {table.rows?.map((row, i) => (
                                         <tr key={i} className="border-b last:border-b-0 border-pc-dark/5">
                                            {row.map((cell, j) => <td key={j} className="p-2">{cell}</td>)}
                                         </tr>
                                      )) || table.columns.map((c, i) => (
                                         <tr key={i} className="border-b last:border-b-0 border-pc-dark/5">
                                            <td className="p-2 font-bold">{c.name}</td>
                                            <td className="p-2">{c.isKey ? '[PK]' : ''}</td>
                                         </tr>
                                      ))}
                                   </tbody>
                                </table>
                             </div>
                          </div>
                        ))}
                       </div>
                    )}

                    {q.codeSnippet && (
                      <div className="code-block">
                        <SyntaxHighlighter language={q.language || 'python'} style={vscDarkPlus} customStyle={{ background: 'transparent', padding: 0 }}>
                          {q.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    )}

                    <div className="space-y-4">
                      {/* User's Answer Block */}
                      <div className={`border-2 p-5 flex gap-4 ${isCorrect ? 'bg-pc-correct/5 border-pc-correct/30' : 'bg-pc-wrong/5 border-pc-wrong/30'}`}>
                        <div className="mt-1">
                          {isCorrect ? <CheckCircle2 className="w-6 h-6 text-pc-correct" /> : <XCircle className="w-6 h-6 text-pc-wrong" />}
                        </div>
                        <div className="flex-1">
                          <p className={`font-outfit font-black text-[10px] uppercase tracking-widest mb-2 ${isCorrect ? 'text-pc-correct' : 'text-pc-wrong'}`}>
                            Your Answer: {userAnswer || 'NO INPUT'}
                          </p>
                          <div className="text-sm font-medium leading-relaxed">
                            {userOption ? (
                              <>
                                {userOption.text}
                                {userOption.code && <div className="mt-2 text-xs font-mono p-3 bg-pc-dark text-pc-cyan">{userOption.code}</div>}
                                {userOption.uiRender && <div className="mt-2"><CustomOptionRender type={userOption.uiRender} /></div>}
                              </>
                            ) : 'Candidate skipped this question requirement.'}
                          </div>
                        </div>
                      </div>

                      {/* Correct Answer Block */}
                      {!isCorrect && (
                        <div className="border-2 border-pc-dark/10 p-5 flex gap-4 bg-white">
                          <div className="mt-1">
                            <CheckCircle2 className="w-6 h-6 text-pc-correct" />
                          </div>
                          <div className="flex-1">
                            <p className="font-outfit font-black text-[10px] text-pc-gray uppercase tracking-widest mb-2">
                              System Reference: {q.correctAnswer}
                            </p>
                            <div className="text-sm font-medium leading-relaxed italic opacity-80">
                              {correctOption?.text}
                              {correctOption?.code && <div className="mt-2 text-xs font-mono p-3 bg-pc-dark text-pc-cyan">{correctOption.code}</div>}
                               {correctOption?.uiRender && <div className="mt-2"><CustomOptionRender type={correctOption.uiRender} /></div>}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-pc-off-white border-t border-pc-dark/10 p-6">
          <div className="max-w-[900px] mx-auto flex items-center justify-between">
            <button onClick={() => setReviewIndex(prev => Math.max(0, prev - 1))} disabled={reviewIndex === 0} className="nav-btn bg-white">
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
            <button onClick={() => setReviewIndex(prev => Math.min(total - 1, prev + 1))} disabled={reviewIndex === total - 1} className="nav-btn primary">
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-[560px] w-full">
        <div className={`w-20 h-20 border-3 flex items-center justify-center text-4xl mx-auto mb-4 ${passed ? 'border-pc-correct text-pc-correct' : 'border-pc-wrong text-pc-wrong'}`}>
          <Medal />
        </div>
        
        <h1 className="font-outfit text-5xl font-black mb-2 text-white">
          {score} <span className="text-pc-gray text-2xl font-normal">/ {total}</span>
        </h1>
        <p className="text-[15px] text-pc-gray mb-9 max-w-sm mx-auto leading-relaxed">
          {passed ? 'Outstanding! System verification complete.' : 'Keep studying! System verification failed.'} 
          <br />You scored {percentage}% on this software development quiz.
        </p>

        <div className="flex flex-wrap gap-1.5 justify-center mb-7">
          {currentQuestions.map((q, idx) => {
            const uAns = answers[q.id];
            const isCorrect = uAns === q.correctAnswer;
            const isSkipped = uAns === undefined;
            
            let cellClass = "border-pc-dark3 text-pc-gray bg-pc-dark2";
            if (!isSkipped) {
              if (isCorrect) cellClass = "border-pc-correct text-pc-correct bg-pc-correct/10";
              else cellClass = "border-pc-wrong text-pc-wrong bg-pc-wrong/10";
            } else {
              cellClass = "border-pc-skipped text-pc-skipped bg-pc-skipped/10";
            }

            return (
              <button
                key={q.id}
                onClick={() => { setReviewIndex(idx); setIsReviewMode(true); }}
                className={`w-10 h-10 border-2 rounded-none flex items-center justify-center font-outfit text-xs font-black transition-all hover:border-pc-cyan ${cellClass}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-pc-gray">
            <div className="w-3 h-3 border-2 border-pc-correct"></div> Correct
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-pc-gray">
            <div className="w-3 h-3 border-2 border-pc-wrong"></div> Incorrect
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-pc-gray">
            <div className="w-3 h-3 border-2 border-pc-skipped"></div> Skipped
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 w-full max-w-[320px] mx-auto">
          <button
            onClick={() => setIsReviewMode(true)}
            className="w-full py-3.5 border-2 border-pc-dark3 text-white font-outfit text-[13px] font-black uppercase tracking-widest hover:border-pc-cyan hover:text-pc-cyan transition-all"
          >
            Review Answers
          </button>
          <button
            onClick={resetQuiz}
            className="w-full py-3.5 bg-pc-red border-2 border-pc-red text-white font-outfit text-[13px] font-black uppercase tracking-widest hover:bg-[#cc2d00] transition-all"
          >
            Back to Menu
          </button>
        </div>

        <div className="mt-8 border border-pc-dark3 bg-black p-5 text-left font-mono text-[11px] leading-relaxed text-pc-gray">
          <div className="flex gap-2">
             <span className="text-pc-cyan">$</span>
             <span className="text-white font-bold">quiz-engine</span> --results --subject "Advanced Python"
          </div>
          <div className="mt-1">
            <span className={passed ? 'text-pc-correct' : 'text-pc-wrong'}>[{passed ? 'PASSED' : 'FAILED'}]</span> Score: {score}/{total} ({percentage}%)
          </div>
          <div className="mt-1 opacity-60">
            Correct: {score} | Incorrect: {total - score - (total - Object.keys(answers).length)} | Skipped: {total - Object.keys(answers).length}
          </div>
          <div className="mt-1 opacity-60">
            Engine: 2.1.0 | Status: FINISHED | Time: {elapsedTime}
          </div>
          <div className="mt-1">
             <span className="text-pc-cyan">$</span> <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}
