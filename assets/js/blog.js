var posts = [
    {
        title: "Discord is up",
        content: "The discord server is up and running! Join now to get the latest updates and news about our games!",
        date: "27 Oct 2023",
        author: "Vincent",
        category: "Discord",
        link: "https://discord.gg/ecbsBezCx2",
        image: "https://static-00.iconduck.com/assets.00/discord-icon-2048x2048-nnt62s2u.png"
      },
];

var games = [
    {
        title: 'Project RTS',
        description: 'A real time strategy game',
        image: 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg',
        link: 'https://discord.gg/ecbsBezCx2'
    },
];
function generateHtml() {
    // Reverse the array to get the last posts first
    posts = posts.reverse();

    // Display the last post as a big post
    bigPost(posts[0]);

    // Display the next three posts as small posts
    for (var i = 1; i < 4; i++) {
        if (posts[i]) {
        smallPost(posts[i]);
        }
    }

    //Display games
    for (var i = 0; i < 4; i++) {
        if (games[i]) {
            ShowGame(games[i]);
        }
    }
}

function smallPost(post) {
    var blog = document.getElementById('blog-right-side');
    var li = document.createElement('li');

    var divLeft = document.createElement('div');
    divLeft.className = 'left-content align-self-center';

    var span = document.createElement('span');
    span.innerHTML = '<i class="fa fa-calendar"></i> ' + post.date;
    divLeft.appendChild(span);

    var aTitle = document.createElement('a');
    aTitle.href = post.link;
    var h4 = document.createElement('h4');
    h4.textContent = post.title;
    aTitle.appendChild(h4);
    divLeft.appendChild(aTitle);

    var p = document.createElement('p');
    p.textContent = post.content;
    divLeft.appendChild(p);

    li.appendChild(divLeft);

    var divRight = document.createElement('div');
    divRight.className = 'right-image';
    
    var aImage = document.createElement('a');
    aImage.href = post.link;
    var img = document.createElement('img');
    img.src = post.image;
    img.alt = '';
    aImage.appendChild(img);
    
    divRight.appendChild(aImage);

    li.appendChild(divRight);

    blog.appendChild(li);
}

function bigPost(post){

    var blog = document.getElementById('blog-big');

    var divLeft = document.createElement('div');
    divLeft.className = 'left-image';

    var aImage = document.createElement('a');
    aImage.href = post.link;
    var img = document.createElement('img');
    img.src = post.image;
    img.alt = 'Big Post Image';
    aImage.appendChild(img);
    
    divLeft.appendChild(aImage);

    var divInfo = document.createElement('div');
    divInfo.className = 'info';
    
    var divInnerContent = document.createElement('div');
    divInnerContent.className = 'inner-content';
    
    var ul = document.createElement('ul');

    var liDate = document.createElement('li');
    liDate.innerHTML = '<i class="fa fa-calendar"></i> ' + post.date;
    ul.appendChild(liDate);

    var liAuthor = document.createElement('li');
    liAuthor.innerHTML = '<i class="fa fa-users"></i> ' + post.author;
    ul.appendChild(liAuthor);

    var liCategory = document.createElement('li');
    liCategory.innerHTML = '<i class="fa fa-folder"></i> ' + post.category;
    ul.appendChild(liCategory);

    divInnerContent.appendChild(ul);

    var aTitle = document.createElement('a');
    aTitle.href = post.link;
    var h4 = document.createElement('h4');
    h4.textContent = post.title;
    aTitle.appendChild(h4);
    
    divInnerContent.appendChild(aTitle);

    var p = document.createElement('p');
    p.textContent = post.content;
    
    divInnerContent.appendChild(p);
    
    divInfo.appendChild(divInnerContent);
    
    divLeft.appendChild(divInfo);

    blog.appendChild(divLeft);
}

function ShowGame(game) {
        console.log(game);
        var games = document.getElementById('games-row-1');
        let div = document.createElement('div');
        div.className = 'col-lg-3 col-sm-6';
        div.innerHTML = `
            <a href="${game.link}">
                <div class="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="hidden-content">
                        <h4>${game.title}</h4>
                        <p>${game.description}</p>
                    </div>
                    <div class="showed-content">
                        <img src="${game.image}" alt="">
                    </div>
                </div>
            </a>`;
        games.appendChild(div);
}




window.onload = generateHtml();
