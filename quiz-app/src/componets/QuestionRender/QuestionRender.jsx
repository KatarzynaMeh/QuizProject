import classes from '../QuestionRender/QuestionRender.module.css'

export const QuestionRender = ({ question, options, correctAnswer }) => {
  return (
    <form>
      <div>
        <h3 className={classes.questionStyle}>{question}</h3>
      </div>

      <div>
        <div className={classes.containerInput}>
          <label className={classes.labelStyle} htmlFor="option_one__question">
            {" "}
            {options[0]}
            <input className={classes.inputStyle} type="radio" id="option_one__question" name="one_choice" />
          </label>

          <label className={classes.labelStyle} htmlFor="option_two__question">
            {" "}
            {options[1]}
            <input className={classes.inputStyle} type="radio" id="option_two__question" name="one_choice" />
          </label>
       
          <label className={classes.labelStyle} htmlFor="option_three__question">
            {" "}
            {options[2]}
            <input className={classes.inputStyle} type="radio" id="option_three__question" name="one_choice" />
          </label>

          <label className={classes.labelStyle} htmlFor="option_four__question">
            {" "}
            {options[3]}
            <input className={classes.inputStyle} type="radio" id="option_four__question" name="one_choice" />
          </label>
        </div>
      </div>

    </form>
  );
};
