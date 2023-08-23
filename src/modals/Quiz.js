export class Quiz{
    constructor(title, description, ques,answers){
        this.id =`quiz-${(new Date()).getTime()}`;
        this.title = title;
        this.description = description;
        // this.durationInMin = durationInMin;
        this.ques = []
        this.answers = {}
    }
}
