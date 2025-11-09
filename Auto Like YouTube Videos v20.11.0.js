// ==UserScript==
// @name         Auto Like YouTube Videos v20.11.0
// @namespace    https://github.com/seth-wiiplaza
// @version      1.0
// @description  Automatically likes YouTube videos if not already liked (works in fullscreen)
// @author       Seth@WiiPlaza
// @icon         https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85aa6584-7ebf-439b-b994-59802e194f0b/djm0ls4-ac1eba6a-6058-4454-9ce9-6eba6ad26b23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1YWE2NTg0LTdlYmYtNDM5Yi1iOTk0LTU5ODAyZTE5NGYwYlwvZGptMGxzNC1hYzFlYmE2YS02MDU4LTQ0NTQtOWNlOS02ZWJhNmFkMjZiMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ei28OmVYY6hrSLNsa61AIocsIhsN2VKBCRUv2N6lTc4
// @match        https://www.youtube.com/*
// @match               https://www.youtube.com/embed/*
// @match               https://www.youtube-nocookie.com/embed/*
// @match               https://www.youtube.com/live_chat*
// @match               https://www.youtube.com/live_chat_replay*
// @match               https://music.youtube.com/*
// @match       www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function likeVideo() {
        const likeButton = document.querySelector('button[aria-label*="like this video"], button[aria-pressed][class*="yt-spec-button-shape-next"]');
        if (!likeButton) return;
        const isLiked = likeButton.getAttribute('aria-pressed') === 'true';
        if (!isLiked) {
            console.log('[AutoLike] Liking video...');
            likeButton.click();
        } else {
            console.log('[AutoLike] Already liked.');
        }
    }
    const observer = new MutationObserver(() => {
        setTimeout(likeVideo, 2000);
    });
    observer.observe(document.querySelector('ytd-app'), { childList: true, subtree: true });
    window.addEventListener('yt-navigate-finish', () => setTimeout(likeVideo, 2000));
    setTimeout(likeVideo, 3000);
})();
