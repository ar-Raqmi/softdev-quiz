import { useQuiz } from '../context/QuizContext';

export default function ReviewGrid() {
  const {
    currentQuestions,
    currentQuestionIndex,
    answers,
    bookmarked,
    setCurrentQuestionIndex,
    setAppState,
    finishQuiz,
  } = useQuiz();

  const answeredCount = currentQuestions.filter((q) => answers[q.id] !== undefined).length;

  const handleGoToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setAppState('exam');
  };

  return (
    <div className="review-overlay show">
      {/* Header */}
      <div className="review-header">
        <div>
          <h2>Review Grid</h2>
          <p>Answered {answeredCount} of {currentQuestions.length} questions</p>
        </div>
        <button className="review-close" onClick={() => setAppState('exam')}>Resume</button>
      </div>

      {/* Grid */}
      <div className="review-grid-wrap">
        {currentQuestions.map((q, idx) => {
          const isAnswered = answers[q.id] !== undefined;
          const isBookmarked = bookmarked.has(q.id);
          const isCurrent = idx === currentQuestionIndex;

          let cls = 'review-cell';
          if (isCurrent) cls += ' current';
          if (isBookmarked) cls += ' bookmarked';
          else if (isAnswered) cls += ' answered';

          return (
            <button
              key={q.id}
              className={cls}
              onClick={() => handleGoToQuestion(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="review-footer">
        <div className="review-legend">
          <div className="legend-item">
            <div className="legend-dot l-answered"></div>Answered
          </div>
          <div className="legend-item">
            <div className="legend-dot l-unanswered"></div>Unanswered
          </div>
          <div className="legend-item">
            <div className="legend-dot l-bookmark"></div>Bookmark
          </div>
        </div>
        <button className="submit-exam-btn" onClick={finishQuiz}>
          Submit Exam
        </button>
      </div>
    </div>
  );
}
