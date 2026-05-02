import { useEffect, useState } from 'react';
import './TerminalBoot.css';

interface BootLine {
  html: string;
  delay: number;
}

const bootLines: BootLine[] = [
  { html: '<span class="prompt">$ </span><span class="cmd">by ar-Raqmi</span> ', delay: 0 },
  { html: '<span class="prompt">$ </span><span class="cmd">python</span> <span class="flag">--version</span>', delay: 100 },
  { html: 'Python 3.12.0', delay: 300 },
  { html: '', delay: 400 },
  { html: '<span class="prompt">$ </span><span class="cmd">pip</span> install <span class="str">softdev-quiz-engine</span>', delay: 500 },
  { html: 'Collecting softdev-quiz-engine', delay: 700 },
  { html: '  Downloading softdev_quiz_engine-2.1.0-py3-none-any.whl (184 kB)', delay: 900 },
  { html: '<span class="ok">Successfully installed softdev-quiz-engine-2.1.0</span>', delay: 1200 },
  { html: '', delay: 1300 },
  { html: '<span class="prompt">$ </span><span class="cmd">quiz-engine</span> <span class="flag">--subject</span> <span class="str">"Software Development"</span> <span class="flag">--load</span>', delay: 1400 },
  { html: '<span class="accent">[LOADING]</span> Initializing question bank...', delay: 1600 },
  { html: '<span class="accent">[LOADING]</span> Parsing 105 questions...', delay: 1900 },
  { html: '<span class="ok">[READY]</span> Quiz engine initialized.', delay: 2200 },
];

export function TerminalBoot({ onComplete }: { onComplete: () => void }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let timeout: number;

    const runBoot = async () => {
      for (const line of bootLines) {
        await new Promise<void>((r) => { timeout = window.setTimeout(r, line.delay ? 200 : 80); });
        setDisplayedLines((prev) => [...prev, line.html]);
      }
      await new Promise<void>((r) => { timeout = window.setTimeout(r, 800); });
      onComplete();
    };

    runBoot();
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="boot-screen">
      {displayedLines.map((html, i) => (
        <div
          key={i}
          className="terminal-line"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ))}
      <span className="terminal-cursor" />
    </div>
  );
}
