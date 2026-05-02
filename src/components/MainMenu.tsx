import { useQuiz } from '../context/QuizContext';

export default function MainMenu() {
  const { startPractice, startExam } = useQuiz();

  return (
    <section className="landing">
      <div className="landing-content">
        {/* Logo */}
        <div className="landing-logo">
          <div className="mode-icon"><i className="fas fa-graduation-cap"></i></div>
          <div className="landing-brand">by<span> ar-Raqmi</span></div>
        </div>

        <h1 className="landing-title">Software Development Quiz</h1>
        <p className="landing-subtitle">Test your knowledge on software development skills</p>

        <div className="mode-cards">
          <button className="mode-card practice" onClick={startPractice}>
            <div className="mode-icon"><i className="fas fa-book"></i></div>
            <div className="mode-info">
              <h3>Practice Mode</h3>
              <p>10 random questions, instant feedback after each answer</p>
            </div>
          </button>

          <button className="mode-card exam" onClick={startExam}>
            <div className="mode-icon"><i className="fas fa-clock"></i></div>
            <div className="mode-info">
              <h3>Exam Mode</h3>
              <p>All questions, 2 hour time limit, review at end</p>
            </div>
          </button>
        </div>

        {/* Terminal snippet */}
        <div className="landing-terminal">
          <span className="t-prompt">$ </span>
          <span className="t-cmd">quiz-engine</span>
          {' --status\n'}
          <span className="t-out">Engine: active | Questions: {105} | Subject: Software Development</span>
          {'\n'}
          <span className="t-prompt">$ </span>
          <span className="t-cmd">quiz-engine</span>
          {' --awaiting-selection'}
          <span className="terminal-cursor"></span>
        </div>
      </div>
    </section>
  );
}
