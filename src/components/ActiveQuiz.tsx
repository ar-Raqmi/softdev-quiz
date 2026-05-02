import { useQuiz } from '../context/QuizContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { TableSchema } from '../data/questions';

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

function DbTable({ table }: { table: TableSchema }) {
  return (
    <div className="db-table-wrap">
      <div className="db-table-name">{table.name}</div>
      <table className="db-table">
        <thead>
          <tr>
            {table.columns.map((col) => (
              <th key={col.name} className={col.isKey ? 'pk' : ''}>
                {col.isKey ? '🔑 ' : ''}{col.name}
              </th>
            ))}
          </tr>
        </thead>
        {table.rows && (
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default function ActiveQuiz() {
  const {
    appState,
    setAppState,
    currentQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setAnswer,
    timeRemaining,
    finishQuiz,
  } = useQuiz();

  const isPractice = appState === 'practice';
  const isExam = appState === 'exam';
  const question = currentQuestions[currentQuestionIndex];

  if (!question) return null;

  const userAnswer = answers[question.id];
  const hasAnswered = userAnswer !== undefined;
  const showFeedback = isPractice && hasAnswered;

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (isExam) {
        setAppState('review');
      } else {
        finishQuiz();
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSelect = (optionId: string) => {
    if (showFeedback) return; // already answered in practice
    setAnswer(question.id, optionId);
  };

  const isWarning = timeRemaining <= 60;

  return (
    <section className="quiz">
      {/* Topbar */}
      <div className="quiz-topbar">
        <div className="quiz-topbar-inner">
          <div className="quiz-topbar-left">
            <div className="quiz-topbar-logo">People<span>Cert</span></div>
            <div className="quiz-topbar-sep"></div>
            <div className="quiz-topbar-qnum">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </div>
          </div>
          <div className="quiz-topbar-right">
            {isExam && (
              <div className={`quiz-timer${isWarning ? ' warning' : ''}`}>
                <i className="fas fa-clock"></i>
                <span>{formatTime(timeRemaining)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="quiz-body">
        <div className="question-area">
          <div className="q-header">
            <div className="q-number">{question.id}</div>
            <span className="q-tag">{question.tag || 'Quiz'}</span>
          </div>
          <div className="q-body">
            <p className="q-text">{question.text}</p>

            {/* DB Tables */}
            {question.tables && question.tables.length > 0 && (
              <div className="db-tables-grid">
                {question.tables.map((t) => (
                  <DbTable key={t.name} table={t} />
                ))}
              </div>
            )}

            {/* Code Snippet */}
            {question.codeSnippet && (
              <div className="code-block">
                <SyntaxHighlighter
                  language={question.language || 'python'}
                  style={vscDarkPlus}
                  customStyle={{ background: 'transparent', margin: 0, padding: 0 }}
                >
                  {question.codeSnippet}
                </SyntaxHighlighter>
              </div>
            )}

            {/* Options */}
            <div className="options-list">
              {question.options.map((option, idx) => {
                let cls = 'option-btn';
                if (showFeedback) {
                  cls += ' disabled';
                  if (option.id === question.correctAnswer) cls += ' correct-answer';
                  else if (option.id === userAnswer) cls += ' wrong-answer';
                } else if (option.id === userAnswer) {
                  cls += ' selected';
                }
                return (
                  <button
                    key={option.id}
                    className={cls}
                    onClick={() => handleSelect(option.id)}
                  >
                    <div className="opt-radio"></div>
                    <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="opt-text">{option.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Practice feedback */}
            {showFeedback && (() => {
              const isCorrect = userAnswer === question.correctAnswer;
              return (
                <>
                  <div className={`q-feedback show ${isCorrect ? 'correct-fb' : 'wrong-fb'}`}>
                    <i className={`fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                    <span>{isCorrect ? 'Correct!' : `Incorrect. The correct answer is ${question.correctAnswer}.`}</span>
                  </div>
                  <div className="terminal-feedback show">
                    <span className="tf-prompt">$ </span>
                    check-answer --q{question.id} --selected {userAnswer} --correct {question.correctAnswer}
                    {'\n'}
                    <span className={isCorrect ? 'tf-ok' : 'tf-fail'}>[{isCorrect ? 'PASS' : 'FAIL'}]</span>
                    {' '}
                    <span className="tf-dim">question {question.id} scored</span>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="quiz-nav">
        <button className="nav-btn" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          <i className="fas fa-arrow-left"></i> Previous
        </button>
        <button className="nav-btn" onClick={() => setAppState('review')}>
          <i className="fas fa-th"></i> Review Grid
        </button>
        <button className="nav-btn primary" onClick={handleNext}>
          {currentQuestionIndex === currentQuestions.length - 1
            ? (isExam ? <><i className="fas fa-flag-checkered"></i> Finish</> : <><i className="fas fa-flag-checkered"></i> See Results</>)
            : <>Next <i className="fas fa-arrow-right"></i></>
          }
        </button>
      </div>
    </section>
  );
}
