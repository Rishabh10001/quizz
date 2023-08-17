export class Quiz{
    constructor(title, description, durationInMin, questions){
        this.id =`quiz-${(new Date()).getTime()}`;
        this.title = title;
        this.description = description;
        this.durationInMin = durationInMin;
        this.questions = []
    }
}
