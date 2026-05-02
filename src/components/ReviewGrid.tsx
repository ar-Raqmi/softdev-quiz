import { useQuiz } from '../context/QuizContext';
import { Bookmark, CheckCircle2, XCircle } from 'lucide-react';
import { M3EButton, M3EIconButton, M3ECard } from './m3e';

export default function ReviewGrid() {
  const {
    currentQuestions,
    answers,
    bookmarked,
    setCurrentQuestionIndex,
    setAppState,
    finishQuiz,
  } = useQuiz();

  const handleGoToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setAppState('exam');
  };

  const answeredCount = Object.keys(answers).length;
  const totalCount = currentQuestions.length;

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1c1b1f] max-w-4xl mx-auto w-full md:py-8 px-4">
      <div className="flex items-center justify-between py-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#ff3500]">Review Grid</h1>
          <p className="text-[#1c1b1f] opacity-70 mt-1">
            Answered {answeredCount} of {totalCount} questions
          </p>
        </div>
        <M3EIconButton
          onClick={() => setAppState('exam')}
          variant="standard"
        >
          <XCircle className="w-6 h-6" />
        </M3EIconButton>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-8">
        {currentQuestions.map((q, idx) => {
          const isAnswered = !!answers[q.id];
          const isBookmarked = bookmarked.has(q.id);

          let bgClass = 'bg-white text-[#1c1b1f] border border-[#e0e0e0] hover:bg-[#f5f5f5]';
          if (isBookmarked) {
             bgClass = 'bg-[#ffe8e0] text-[#ff3500] border-[#ff3500]';
          } else if (isAnswered) {
             bgClass = 'bg-[#ccfffc] text-[#003735] border-[#46f2e7]';
          }

          return (
            <button
              key={q.id}
              onClick={() => handleGoToQuestion(idx)}
              className={`relative aspect-square flex items-center justify-center rounded-[12px] text-[14px] font-medium transition-transform active:scale-95 ${bgClass}`}
            >
              {idx + 1}
              {isBookmarked && (
                <div className="absolute top-1 right-1 text-[#ff3500]">
                   ★
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 mt-auto py-8">
        <div className="flex gap-4 text-sm text-[#1c1b1f]">
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-[3px] bg-[#ccfffc] border border-[#46f2e7]"></div> Answered</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-[3px] bg-white border border-[#e0e0e0]"></div> Unanswered</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-[3px] bg-[#ffe8e0] border border-[#ff3500]"></div> Bookmarked</div>
        </div>

        <M3EButton
          onClick={finishQuiz}
          variant="filled"
          className="w-full"
        >
          Submit Exam
        </M3EButton>
      </div>
    </div>
  );
}
