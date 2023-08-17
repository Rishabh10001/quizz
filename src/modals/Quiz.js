export class Quiz{
    constructor(title, description, durationInMin, questions){
        this.id =`quiz-${(new Date()).getTime()}`;
        this.title = '';
        this.description = '';
        this.durationInMin = 20;
        this.questions = []
    }
}
