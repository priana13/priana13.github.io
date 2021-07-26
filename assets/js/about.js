var stories = [
    {
        title: "Pergi Ke Gunung",
        image: "https://www.splitshire.com/wp-content/uploads/2017/05/SplitShire-141.jpg",
        paragraph: "Sungai Bengawan Solo" 
    },
    {  
        title: "Pergi Ke Gunung",
        image: "https://www.splitshire.com/wp-content/uploads/2017/05/SplitShire-141.jpg",
        paragraph: "Sungai Bengawan Solo" 
    },
    {  
        title: "Pergi Ke Gunung",
        image: "https://www.splitshire.com/wp-content/uploads/2017/05/SplitShire-141.jpg",
        paragraph: "Sungai Bengawan Solo" 
    },
    {  
        title: "Pergi Ke Gunung",
        image: "https://www.splitshire.com/wp-content/uploads/2017/05/SplitShire-141.jpg",
        paragraph: "Sungai Bengawan Solo" 
    },

];

conts socials = [
    {
        background: #fbc531,
        icon : "fab fa-medium-m",
        url: "#"
    },
    {
        background: #fbc531,
        icon : "fab fa-instagram",
        url: "#"
    },
    {
        background: #fbc531,
        icon : "fab fa-twitter-square",
        url: "#"
    },
    {
        background: #fbc531,
        icon : "fab fa-facebook-square",
        url: "#"
    }
];


const storiesContent = document.querySelector("#my-story .body");


function renderstoriesContent (image,title,paragraph){
    storiesContent.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="card">
        <div class="card-header">
            <img src="{$image}">
        </div>
        <div class="card-body">
            <h1>Pergi ke pantai</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam reiciendis ut molestiae inventore. Qui eveniet doloribus suscipit saepe? Dolor?</p>
        </div>
     </div>

        `
        
    );
}


