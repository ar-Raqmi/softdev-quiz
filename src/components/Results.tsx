import { useEffect, useRef } from 'react';
import { useQuiz } from '../context/QuizContext';

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas') as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#ff3800', '#48f2e6', '#ffffff', '#ffd166', '#2ecc71'];
  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 8 + 3,
    h: Math.random() * 5 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 4,
    vy: Math.random() * 3 + 2,
    rot: Math.random() * 360,
    rv: (Math.random() - 0.5) * 12,
    opacity: 1,
  }));

  let frame = 0;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.rot += p.rv;
      if (frame > 50) p.opacity -= 0.01;
      if (p.opacity <= 0) return;
      alive = true;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (alive && frame < 250) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  draw();
}

export default function Results() {
  const { currentQuestions, answers, score, resetQuiz, setAppState } = useQuiz();
  const hasConfetti = useRef(false);

  const total = currentQuestions.length;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;

  let message = `Keep studying! You scored ${percentage}% on this quiz.`;
  if (percentage >= 90) message = `Outstanding! You scored ${percentage}% — top marks!`;
  else if (percentage >= 70) message = `Well done! You scored ${percentage}% — you passed!`;
  else if (percentage >= 50) message = `Almost there! You scored ${percentage}% — keep at it.`;

  let correctCount = 0, wrongCount = 0, skippedCount = 0;
  currentQuestions.forEach((q) => {
    const a = answers[q.id];
    if (a === undefined) skippedCount++;
    else if (a === q.correctAnswer) correctCount++;
    else wrongCount++;
  });

  useEffect(() => {
    if (passed && !hasConfetti.current) {
      hasConfetti.current = true;
      setTimeout(launchConfetti, 300);
    }
  }, [passed]);

  return (
    <section className="results">
      <canvas id="confettiCanvas"></canvas>
      <div className="results-content">
        {/* Medal */}
        <div className={`results-medal ${passed ? 'pass' : 'fail'}`}>
          <i className="fas fa-medal"></i>
        </div>

        {/* Score */}
        <div className="results-score">
          {correctCount} <span>/ {total}</span>
        </div>
        <p className="results-msg">{message}</p>

        {/* Grid */}
        <div className="results-grid">
          {currentQuestions.map((q, idx) => {
            const a = answers[q.id];
            let cls = 'r-cell';
            if (a === undefined) cls += ' rs';
            else if (a === q.correctAnswer) cls += ' rc';
            else cls += ' rw';
            return <div key={idx} className={cls}>{idx + 1}</div>;
          })}
        </div>

        {/* Legend */}
        <div className="results-legend">
          <div className="rl-item"><div className="rl-dot c"></div>Correct</div>
          <div className="rl-item"><div className="rl-dot w"></div>Incorrect</div>
          <div className="rl-item"><div className="rl-dot s"></div>Skipped</div>
        </div>

        {/* Actions */}
        <div className="results-actions">
          <button className="res-btn primary" onClick={() => setAppState('review')}>
            Review Answers
          </button>
          <button className="res-btn" onClick={resetQuiz}>
            Back to Menu
          </button>
        </div>

        {/* Terminal output */}
        <div className="results-terminal">
          <span className="tf-prompt">$ </span>
          quiz-engine --results --subject &quot;Software Development&quot;{'\n'}
          <span className={passed ? 'tf-ok' : 'tf-fail'}>[{passed ? 'PASSED' : 'FAILED'}]</span>
          {` Score: ${correctCount}/${total} (${percentage}%)\n`}
          <span className="tf-dim">
            Correct: {correctCount} | Incorrect: {wrongCount} | Skipped: {skippedCount}
          </span>
          {'\n'}
          <span className="tf-prompt">$ </span>
          <span className="tf-dim">_</span>
        </div>
      </div>
    </section>
  );
}
