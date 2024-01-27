export const nextQuestion = (questions) => {
    const nextQuestion = Math.floor(Math.random() * questions.length);
    
    return questions[nextQuestion]
}