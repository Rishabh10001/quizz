export class Question {
    constructor(ques, options, ans) {
        this.id = `ques-${(new Date()).getTime()}`;
        this.ques = ques
        this.options = ["", "", "", ""];
        this.ans = ans;
    }
}
