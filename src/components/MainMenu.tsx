import { useQuiz } from '../context/QuizContext';
import { GraduationCap, Clock, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function MainMenu() {
  const { startPractice, startExam } = useQuiz();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 font-sans text-[#1c1b1f]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        {/* Replaced M3ECard with standard Tailwind card */}
        <div className="w-full bg-white border border-[#e0e0e0] rounded-[32px] shadow-sm p-10 flex flex-col gap-10 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-[#ffe8e0] text-[#ff3500] rounded-3xl flex items-center justify-center">
              <GraduationCap className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#ff3500]">Software Development Quiz</h1>
              <p className="text-[#1c1b1f]/70 mt-3 text-lg">Test your computer science knowledge</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Replaced M3EButton with standard Tailwind button */}
            <button
              onClick={startPractice}
              className="w-full flex items-center gap-4 bg-[#ff3500] text-white rounded-3xl p-6 transition-all hover:bg-[#ff5500] active:scale-[0.98]"
            >
              <div className="bg-white/20 p-4 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-xl">Practice Mode</div>
                <div className="text-sm opacity-90 mt-1">10 random questions, instant feedback</div>
              </div>
            </button>

            <button
              onClick={startExam}
              className="w-full flex items-center gap-4 bg-white border-2 border-[#ff3500] text-[#ff3500] rounded-3xl p-6 transition-all hover:bg-[#ffe8e0] active:scale-[0.98]"
            >
              <div className="bg-[#ff3500]/10 p-4 rounded-full">
                <Clock className="w-8 h-8 text-[#ff3500]" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-xl">Exam Mode</div>
                <div className="text-sm opacity-80 mt-1">All questions, 2 hours time limit</div>
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
