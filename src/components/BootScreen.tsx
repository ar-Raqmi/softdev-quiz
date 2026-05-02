import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const bootLines = [
  { text: 'by ar-Raqmi', delay: 0 },
  { text: '<span class="text-pc-cyan">$</span> <span class="text-white font-bold">python</span> <span class="text-pc-red">--version</span>', delay: 150 },
  { text: 'Python 3.12.0', delay: 300 },
  { text: '', delay: 400 },
  { text: '<span class="text-pc-cyan">$</span> <span class="text-white font-bold">pip</span> install <span class="text-[#c3e88d]">softdev-quiz-engine</span>', delay: 500 },
  { text: 'Collecting softdev-quiz-engine', delay: 700 },
  { text: '  Downloading softdev_quiz_engine-2.1.0-py3-none-any.whl (184 kB)', delay: 900 },
  { text: '<span class="text-pc-correct">Successfully installed softdev-quiz-engine-2.1.0</span>', delay: 1200 },
  { text: '', delay: 1300 },
  { text: '<span class="text-pc-cyan">$</span> <span class="text-white font-bold">quiz-engine</span> <span class="text-pc-red">--subject</span> <span class="text-[#c3e88d]">"Advanced Programming"</span> <span class="text-pc-red">--load</span>', delay: 1400 },
  { text: '<span class="text-pc-cyan">[LOADING]</span> Initializing question bank...', delay: 1600 },
  { text: '<span class="text-pc-cyan">[LOADING]</span> Parsing 51 questions...', delay: 1900 },
  { text: '<span class="text-pc-correct font-bold">[READY]</span> Quiz engine initialized.', delay: 2200 },
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timers: number[] = [];
    
    bootLines.forEach((_, i) => {
      const timer = window.setTimeout(() => {
        setVisibleLines(prev => {
          if (prev.includes(i)) return prev;
          return [...prev, i];
        });
        
        if (i === bootLines.length - 1) {
          const finishTimer = window.setTimeout(() => {
            setFinished(true);
            const completeTimer = window.setTimeout(onComplete, 600);
            timers.push(completeTimer);
          }, 800);
          timers.push(finishTimer);
        }
      }, bootLines[i].delay + 200);
      timers.push(timer);
    });

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col justify-center p-[10%]"
        >
          <div className="space-y-1">
            {visibleLines.map((lineIdx) => (
              <div
                key={`boot-line-${lineIdx}-${bootLines[lineIdx].text.length}`}
                className="font-mono text-sm leading-relaxed text-pc-gray whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: bootLines[lineIdx].text || '&nbsp;' }}
              />
            ))}
            <span className="terminal-cursor" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
