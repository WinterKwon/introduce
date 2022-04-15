// let home = document.getElementById("home");


// home.addEventListener("mouseover", function(e){
//     e.preventDefault();

//     let homeText = document.createElement('p');
//     homeText.innerText = "home";
//     this.appendChild(homeText);

// });

/// 우하하 이렇게 하면 마우스오보동안 계속 텍스트가 생김!! css에서 처리하자!



let interest = document.getElementById("interest")

interest.addEventListener("click", showInterest);

function showInterest(e){
    e.preventDefault();

    let content = "웹 개발, 백엔드, 데브옵스";

    e.target.innerText = content;

    
    
}

