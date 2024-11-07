// Define your access token
const accessToken = 'EAAUdHPMAMR0BO0sctOO7FKqIwYSxOM1B6Czu7upnJpzahHkKL4Uzr6ZAds1qitZC7mbWGIUvMcXD5avkgj1nWzmTCFXnelMZBi4UADZCmpJTJb8Iy69ZCyhyT87jiTh0gZBPG6kpicRZArANvz1OTx6weKdIHZAgou7kx07dB8enMsYhHpotS0BG7f319RgZB0ZBuL30ZCbCADbtFhO0nPrZBdZCaDhAgiZCkZD';

// Instagram feed setup
const userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: accessToken
});
userFeed.run();

// Facebook posts setup (assuming you have a function to fetch and display Facebook posts)
function fetchFacebookPosts() {
    fetch(`https://graph.facebook.com/v11.0/me/posts?access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            const facebookPostsContainer = document.getElementById('facebook-posts');
            data.data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'facebook-post';
                postElement.innerHTML = `<p>${post.message}</p>`;
                facebookPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching Facebook posts:', error));
}

fetchFacebookPosts();

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');
    var logoImage = document.querySelector('.logo img');
    var facebookIcon = document.querySelector('.facebook-icon img');
    var instagramIcon = document.querySelector('.instagram-icon img');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});



//app id: 1439385056719133
//app secret: 85dbae740da2da4503ffab46bdf7dec1
//api token: 1439385056719133|TrMWsZnKLJBzwlYXvULJztsA1bY
//access token: EAAUdHPMAMR0BO0sctOO7FKqIwYSxOM1B6Czu7upnJpzahHkKL4Uzr6ZAds1qitZC7mbWGIUvMcXD5avkgj1nWzmTCFXnelMZBi4UADZCmpJTJb8Iy69ZCyhyT87jiTh0gZBPG6kpicRZArANvz1OTx6weKdIHZAgou7kx07dB8enMsYhHpotS0BG7f319RgZB0ZBuL30ZCbCADbtFhO0nPrZBdZCaDhAgiZCkZD