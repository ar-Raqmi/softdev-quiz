import { useQuiz } from '../context/QuizContext';
import { X } from 'lucide-react';
import { motion } from 'motion/react';

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-pc-dark flex flex-col overflow-y-auto"
    >
      <div className="max-w-[900px] mx-auto w-full px-6 py-10">
        <div className="flex items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="font-outfit text-2xl font-black uppercase tracking-widest text-white">Review Grid</h2>
            <p className="text-pc-gray text-sm font-medium mt-1 uppercase tracking-wider">
              Answered {answeredCount} of {totalCount} questions
            </p>
          </div>
          <button
            onClick={() => setAppState('exam')}
            className="p-3 border-2 border-pc-dark3 text-white hover:border-pc-red hover:text-pc-red transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {currentQuestions.map((q, idx) => {
            const isAnswered = !!answers[q.id];
            const isBookmarked = bookmarked.has(q.id);

            let cellClass = "border-pc-dark3 bg-pc-dark2 text-pc-gray";
            if (isBookmarked) {
              cellClass = "border-pc-skipped bg-pc-skipped/10 text-pc-skipped";
            } else if (isAnswered) {
              cellClass = "border-pc-cyan bg-pc-cyan/10 text-pc-cyan";
            }

            return (
              <button
                key={q.id}
                onClick={() => handleGoToQuestion(idx)}
                className={`w-[52px] h-[52px] border-2 flex items-center justify-center font-outfit text-sm font-black transition-all hover:border-pc-cyan active:scale-95 ${cellClass}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-pc-dark3 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-6 flex-wrap">
            <div className="flex items-center gap-2.5 font-outfit text-[11px] font-bold uppercase tracking-widest text-pc-gray">
              <div className="w-4 h-4 border-2 border-pc-cyan bg-pc-cyan/20"></div> Answered
            </div>
            <div className="flex items-center gap-2.5 font-outfit text-[11px] font-bold uppercase tracking-widest text-pc-gray">
              <div className="w-4 h-4 border-2 border-pc-dark3"></div> Unanswered
            </div>
            <div className="flex items-center gap-2.5 font-outfit text-[11px] font-bold uppercase tracking-widest text-pc-gray">
              <div className="w-4 h-4 border-2 border-pc-skipped bg-pc-skipped/20"></div> Bookmark
            </div>
          </div>

          <button
            onClick={finishQuiz}
            className="p-[14px_32px] bg-pc-red text-white border-2 border-pc-red font-outfit text-[13px] font-black uppercase tracking-widest hover:bg-[#cc2d00] transition-colors w-full md:w-auto"
          >
            Submit Exam
          </button>
        </div>
      </div>
    </motion.div>
  );
}
