import { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { BookOpen, GraduationCap, Clock, Shuffle, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export default function MainMenu() {
  const { startPractice, startExam } = useQuiz();
  const [shouldShuffle, setShouldShuffle] = useState(false);

  return (
    <div className="relative min-h-screen landing-bg flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Decorative skewed backgrounds */}
      <div className="absolute top-[-50%] right-[-15%] w-[50%] h-[200%] bg-pc-red transform skew-x-[-18deg] pointer-events-none opacity-[0.07] z-0" />
      <div className="absolute top-[-50%] right-[5%] w-[8%] h-[200%] bg-pc-cyan transform skew-x-[-18deg] pointer-events-none opacity-[0.1] z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-[540px] w-full text-center"
      >
        <div className="flex items-center justify-center gap-[14px] mb-[40px]">
          <div className="w-[52px] h-[52px] border-2 border-lime-500 flex items-center justify-center text-[22px] flex-shrink-0 text-lime-500 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="font-outfit text-[24px] font-bold text-white">
            by<span className="text-pc-cyan"> ar-Raqmi</span>
          </div>
        </div>

        <h1 className="font-outfit text-[38px] font-black leading-[1.1] mb-[8px] text-white">
          Software Development Quiz
        </h1>
        <p className="text-[15px] text-pc-gray mb-[48px]">
          You ready to test your knowledge?
        </p>

        <div className="space-y-[16px]">
          <button
            onClick={startPractice}
            className="w-full border-2 border-pc-dark3 p-[28px_24px] cursor-pointer transition-all hover:border-pc-red hover:bg-pc-red/5 text-left flex items-center gap-[20px] bg-pc-dark2 group"
          >
            <div className="w-[52px] h-[52px] border-2 border-pc-red flex items-center justify-center text-[22px] flex-shrink-0 text-pc-red group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="mode-info">
              <h3 className="font-outfit text-[18px] font-extrabold mb-[4px]">Practice Mode</h3>
              <p className="text-[13px] text-pc-gray leading-[1.4]">10 questions, instant feedback after each answer</p>
            </div>
          </button>

          <div className="relative group">
            <button
              onClick={() => startExam(shouldShuffle)}
              className="w-full border-2 border-pc-dark3 p-[28px_24px] cursor-pointer transition-all hover:border-pc-cyan hover:bg-pc-cyan/5 text-left flex items-center gap-[20px] bg-pc-dark2"
            >
              <div className="w-[52px] h-[52px] border-2 border-pc-cyan flex items-center justify-center text-[22px] flex-shrink-0 text-pc-cyan group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <div className="mode-info flex-1">
                <h3 className="font-outfit text-[18px] font-extrabold mb-[4px]">Exam Mode</h3>
                <p className="text-[13px] text-pc-gray leading-[1.4]">105 questions, 120 minute time limit, review at end</p>
              </div>
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShouldShuffle(!shouldShuffle);
              }}
              className={`absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 border-2 transition-all text-[10px] font-bold uppercase tracking-wider ${shouldShuffle ? 'border-pc-cyan bg-pc-cyan/20 text-pc-cyan' : 'border-pc-dark3 bg-pc-dark text-pc-gray grayscale hover:grayscale-0'}`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              {shouldShuffle ? 'Shuffled' : 'Sequential'}
            </button>
          </div>
        </div>

        <div className="mt-[48px] border border-pc-dark3 bg-black p-[16px_20px] text-left font-mono text-[12px] leading-relaxed text-pc-gray overflow-hidden">
          <div><span className="text-pc-cyan">$</span> <span className="text-white font-bold">quiz-engine</span> --status</div>
          <div className="mt-1 opacity-70">Engine: active | Questions: 105 | Subject: Software Development</div>
          <div className="mt-1"><span className="text-pc-cyan">$</span> <span className="text-white font-bold">quiz-engine</span> --awaiting-selection<span className="terminal-cursor" /></div>
        </div>
      </motion.div>
    </div>
  );
}
