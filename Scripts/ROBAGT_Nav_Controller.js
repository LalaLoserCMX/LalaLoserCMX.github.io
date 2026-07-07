var latestChapter = 1;
var latestPage = 5;

var path = window.location.pathname;
if (path.endsWith('/')) path = path.substring(0, path.length - 1);

var chapter = path.substring(0, path.length - (path.split('/').pop().length + 1)).split('/').pop();
var chapterNumber = parseInt((chapter.substring(chapter.length - 1, chapter.length)), 10);

var page = path.split('/').pop().split('.')[0];
var pageNumber = parseInt((page.substring(page.length - 1, page.length)), 10);

var isLastPage = getComputedStyle(document.documentElement).getPropertyValue('--isLastPage');

var isHomePage = 0;

var navBarHTML = '\
<table class="navigation">\
        <tbody>\
            <tr>\
                <td class="nav_cell">\
                    <div class="nav first" onclick="linkFirst()">&lt;&lt; First</div>\
                    <div class="nav prev" onclick="linkPrevious()">&lt; Prev</div>\
                    <div class="nav prevchap" onclick="linkPreviousChapter()">&lt;[ Prev Chapter</div>\
                </td>\
                <td class="nav_cell"></td>\
                <td class="nav_cell">\
                    <div class="nav nextchap" onclick="linkNextChapter()">Next Chapter ]&gt;</div>\
                    <div class="nav next" onclick="linkNext()">Next &gt;</div>\
                    <div class="nav last" onclick="linkLast()">Last &gt;&gt;</div>\
                </td>\
            </tr>\
        </tbody>\
</table>\
';

document.write(navBarHTML);

if (!Number.isNaN(chapterNumber)) document.getElementById("Panel").setAttribute("src", "../../Assets/Images/Chapter_" + chapterNumber + "/Page_" + pageNumber + ".png");

else {
    document.getElementById("Panel").setAttribute("src", "../../Assets/Images/CH_1.png");
    chapterNumber = 1;
    pageNumber = 1;
    isHomePage = 1;
}

function linkFirst() { window.location.href='https://LalaLoserCMX.github.io/Pages/Chapter_1/Page_1'; }
function linkPrevious() {
    if (!isHomePage) {
        if (pageNumber !== 1) { window.location.href="https://LalaLoserCMX.github.io/Pages/Chapter_" + chapterNumber + "/Page_" + (pageNumber - 1); }
        else { window.location.href='https://LalaLoserCMX.github.io/Pages/Chapter_1/Page_1'; }
    } else window.location.href='https://LalaLoserCMX.github.io/Pages/Chapter_1/Page_1';
}
function linkPreviousChapter() {
    if (!isHomePage) {
        if (chapterNumber !== 1) { window.location.href="https://LalaLoserCMX.github.io/Pages/Chapter_" + (chapterNumber - 1) + "/Page_1"; }
        else { window.location.href='https://LalaLoserCMX.github.io/Pages/Chapter_1/Page_1'; }
    } else window.location.href='https://LalaLoserCMX.github.io/Pages/Chapter_1/Page_1';
}

function linkNextChapter() {
    if (!isHomePage) {
        if (chapterNumber !== latestChapter) { window.location.href="https://LalaLoserCMX.github.io/Pages/Chapter_" + (chapterNumber + 1) + "/Page_1"; }
        else { window.location.href="https://LalaLoserCMX.github.io/Pages/Chapter_" + latestChapter + "/Page_" + latestPage; }
    } else window.location.href='https://LalaLoserCMX.github.io/Pages/Chapter_1/Page_1';
}
function linkNext() {
    if (!isHomePage) {
        if (chapterNumber !== latestChapter || pageNumber !== latestPage) {
            if (isLastPage !== "YES") {  window.location.href="https://LalaLoserCMX.github.io/Pages/Chapter_" + chapterNumber + "/Page_" + (pageNumber + 1); }
            else { window.location.href="https://LalaLoserCMX.github.io/Pages/Chapter_" + (chapterNumber + 1) + "/Page_1"; }
        }
        else { window.location.href="https://LalaLoserCMX.github.io/Pages/Chapter_" + latestChapter + "/Page_" + latestPage; }
    } else window.location.href='https://LalaLoserCMX.github.io/Pages/Chapter_1/Page_1';
}
function linkLast() { window.location.href="https://LalaLoserCMX.github.io/Pages/Chapter_" + latestChapter + "/Page_" + latestPage; }

