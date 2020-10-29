class Post{
    constructor(post){
        
        this.post = post;
        
    }

    render = ()=>{

        //Creo componente y contenedores

        let postComponent = document.createElement('div');
        postComponent.className="postComponent"

        let postContain = document.createElement('div');
        postContain.className = "postContain"

        let createComContain = document.createElement('div');
        createComContain.className = "createCom"

       //agrego elementos alos contenedores
        let pInfopost = document.createElement('p');
        pInfopost.className = "pInfopost"
        pInfopost.innerHTML = this.post.post

       
        
        let pInfouser = document.createElement('p');
        pInfouser.className = "pInfopost"
        pInfouser.innerHTML = "@"+this.post.username;

        postContain.appendChild(pInfopost);
        postContain.appendChild(pInfouser);

        let inputComment = document.createElement('input');
        inputComment.className = "input_text"
        inputComment.placeholder="Escribe tu comentario"
        inputComment.type = "text"
        //inputComment.id = "inputComment"

        let btnNComment = document.createElement('button');
        btnNComment.className = "buttons"
        btnNComment.id = "btnNComment"
        btnNComment.innerHTML = "Crear Comentario"

        createComContain.appendChild(inputComment);
        createComContain.appendChild(btnNComment);
        
        //Comportamiento del boton

        let commentsContain = document.createElement('div');
        commentsContain.className = "commentsContains"

        postComponent.appendChild(postContain);
        postComponent.appendChild(createComContain);
        postComponent.appendChild(commentsContain);
        //let database = firebase.database();

        //Evento de creacion dentro del componente
        database.ref('posts/'+this.post.id+'/comments').on('value',function (data) {

            data.forEach(
               nComment =>{
                    let infoComment = nComment.val();
                    let comment = new Comment(infoComment);
                    commentsContain.appendChild(comment.render());
        
                }
            )
        
        });

       

              
        btnNComment.addEventListener('click', ()=>{
            
                let c = inputComment.value;
                let reference = database.ref('posts/'+this.post.id+'/comments').push();
    
                if(c === ""){
                    alert("Llena el campo para crear un nuevo comentario");
                   
                }else{
                    let nComment = {
                        comment: c,
                        id: reference.key,
                    }
                    inputComment.value = "";
    
                    reference.set(nComment);
                }
        });
        //console.log(postComponent);
        return postComponent;
    }
   
    
}