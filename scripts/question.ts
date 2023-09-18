class Question{
    title:string;
    options:Array<string>;
    rightAnswer:null|1|2|3|4;

    constructor(title:string, options:Array<string>, rightAnswer:null|1|2|3|4){
        this.title = title;
        this.options = options;
        this.rightAnswer = rightAnswer;
    }
}