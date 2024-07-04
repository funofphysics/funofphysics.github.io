
document.addEventListener('DOMContentLoaded', function () {
    var url = window.location.href;
    var title = document.title;

    document.getElementById('share-facebook').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
    document.getElementById('share-twitter').href = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);
    document.getElementById('share-reddit').href = 'https://www.reddit.com/submit?url='+encodeURIComponent(url) + '&title' +  encodeURIComponent(title);
    document.getElementById('share-linkedin').href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title);
    document.getElementById('share-email').href = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(url);
    document.getElementById('share-whatsapp').href = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(title + ' ' + url);
    document.getElementById('share-telegram').href = 'https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);
});
