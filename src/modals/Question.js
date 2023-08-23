export class Question {
    constructor(ques, ans ,correctAnsIndex) {
        this.id = `ques-${(new Date()).getTime()}`;
        this.ques = ques
        this.ans = ans;
        this.correctAnsIndex = correctAnsIndex;
    }
}
