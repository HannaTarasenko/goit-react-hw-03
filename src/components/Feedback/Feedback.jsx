import css from "./Feedback.module.css"

const Feedback = ({good, neutral, bad, totalFeedback, positiveFeedback}) => {
    return(
        <div>
            <ul className={css.feedbackList}>
                <li className={css.feedbackListItem}>Good: {good}</li>
                <li className={css.feedbackListItem}>Neutral: {neutral}</li>
                <li className={css.feedbackListItem}>Bad: {bad}</li>
                <li className={css.feedbackListItem}>Total: {totalFeedback}</li>
                <li className={css.feedbackListItem}>Positive : {positiveFeedback}%</li>
            </ul>
        </div>
    );
};

export default Feedback;