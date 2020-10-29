class Comment{
    constructor(comment){
        this.comment = comment;
    }

    render =()=>{
        let componentC = document.createElement('div');
        
        let pComment = document.createElement('p');
        pComment.innerHTML = this.comment.comment

        componentC.appendChild(pComment);

        return componentC;
    }
}