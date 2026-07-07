var latestChapter = 1;
var latestPage = 5;

var path = window.location.pathname;
if (path.endsWith('/')) path = path.substring(0, path.length - 1);

var chapter = path.substring(0, path.length - (path.split('/').pop().length + 1)).split('/').pop();
var chapterNumber = chapterNumber = parseInt((chapter.substring(chapter.length - 1, chapter.length)), 10);

var page = path.split('/').pop().split('.')[0];
var pageNumber = parseInt((page.substring(page.length - 1, page.length)), 10);

var isLastPage = getComputedStyle(document.documentElement).getPropertyValue('--isLastPage');

propose("--Current_Chapter_Number", chapterNumber);
propose("--Current_Page_Number", pageNumber);
propose("--Current_Chapter", chapter);
propose("--Current_Page", page);


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

function linkFirst() { window.location.href='https://LalaLoserCMX.github.io/Chapter_1/Page_1'; }
function linkPrevious() {
    if (pageNumber != 1) { window.location.href="https://LalaLoserCMX.github.io/Chapter_" + chapterNumber + "/Page_" + (pageNumber - 1); }
    else { window.location.href='https://LalaLoserCMX.github.io/Chapter_1/Page_1'; }
}
function linkPreviousChapter() {
    if (chapterNumber != 1) { window.location.href="https://LalaLoserCMX.github.io/Chapter_" + (chapterNumber - 1) + "/Page_1"; }
    else { window.location.href='https://LalaLoserCMX.github.io/Chapter_1/Page_1'; }
}

function linkNextChapter() {
    if (chapterNumber != latestChapter) { window.location.href="https://LalaLoserCMX.github.io/Chapter_" + (chapterNumber + 1) + "/Page_1"; }
    else { window.location.href="https://LalaLoserCMX.github.io/Chapter_" + latestChapter + "/Page_" + latestPage; }
}
function linkNext() {
    if (chapterNumber != latestChapter || pageNumber != latestPage) {
        if (isLastPage != "YES") {  window.location.href="https://LalaLoserCMX.github.io/Chapter_" + chapterNumber + "/Page_" + (pageNumber + 1); }
        else { window.location.href="https://LalaLoserCMX.github.io/Chapter_" + (chapterNumber + 1) + "/Page_1"; }
    }
    else { window.location.href="https://LalaLoserCMX.github.io/Chapter_" + latestChapter + "/Page_" + latestPage; }
}
function linkLast() { window.location.href="https://LalaLoserCMX.github.io/Chapter_" + latestChapter + "/Page_" + latestPage; }

if (chapterNumber != NaN) document.getElementById("Panel").setAttribute("src", "../../Assets/Images/Chapter_" + chapterNumber + "/Page_" + pageNumber + ".png");
