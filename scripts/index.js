"use strict";
var questionIds = new Array(questionList.length - 1).fill(0).map((_, i) => i);
var pontuation = 0;
// Shuffle question order
for (let i = questionIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionIds[i], questionIds[j]] = [questionIds[j], questionIds[i]];
}
questionIds.push(questionList.length - 1);
playAudio("question" + (questionIds[0] + 1));
renderQuestion(questionList[questionIds.shift()]);
