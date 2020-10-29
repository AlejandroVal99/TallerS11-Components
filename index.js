const userName = document.getElementById('userName');
const ppost = document.getElementById('post');
const btPublish = document.getElementById('publish_Post');
const postsContainer = document.getElementById('potsContainer');
//const database = firebase.database();

newPublish = () =>{
    if(userName.value === "" || ppost.value === ""){
        alert("Llena todos los datos")
    }else{

        let u = userName.value;
        let p = ppost.value;
        let reference = database.ref('posts').push();
    
        let publish = {
    
            username: u,
            post: p,
            id: reference.key,
        }
    
        userName.value = "";
        ppost.value ="";
    
        reference.set(publish);
    }
}

btPublish.addEventListener('click',newPublish);

database.ref('posts').on('value',function (data) {
    postsContainer.innerHTML = '';
    data.forEach(

       nPost =>{

            let infoPost = nPost.val();
            let publication = new Post(infoPost);
            //console.log(infoPost.username + "  "+" ")
            potsContainer.appendChild(publication.render());

        }
    )

})