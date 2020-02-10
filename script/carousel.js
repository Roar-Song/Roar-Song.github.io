var $li = [];     //캐러셀
var cnt = [];    //캐러셀 개수
var currentIndex = [];   // 현재 보여지는 캐러셀 인덱스
var imgW = [];   //사진 넓이
var scrollEvent = [false, false];    // 스크롤이벤트 실행 제어

$(document).ready(function() {
   carouselInit("now_image", 0);
   carouselInit("prev_image", 1);
});

$(window).resize(function() {
    carousel_setImgPosition(0);
    carousel_setImgPosition(1);
});

function carouselInit(ul, n) {
   $li[n] = $('.' + ul + ">.item");  
   cnt[n] = $li[n].length;
   currentIndex[n] = 0;
   carousel_setImgPosition(n);

   $("body").on("mousewheel", function(event) { 
        var wheelChk = (event.originalEvent.wheelDelta < 0)? -1 : 1;

        if(scrollEvent[n] == false) {
            scrollEvent[n] = true;
            carousel(wheelChk, n);
        }
    }); 
}

function carousel_setImgPosition(n) {
    imgW[n] = $li[n].width();

    for(var i = 0; i < cnt[n]; i++) {
        $li[n].eq(i).css("left", (i == currentIndex[n])? 0:imgW[n]);
    }
}

function carousel(wheelChk, n) {
    var left = imgW[n] * wheelChk;

    if(wheelChk < 0) {
        $li[n].eq(currentIndex[n]).filter(':not(:animated)').animate({
            left: left
        }, 1200, 'easeInOutQuint', () => {
            $li[n].eq(currentIndex[n]).css("left", imgW[n]);
            currentIndex[n] = (currentIndex[n] == cnt[n] - 1)? 0:currentIndex[n]+1;
            scrollEvent[n] = false;
        });
        $li[n].eq((currentIndex[n] == cnt[n] - 1 )? 0:currentIndex[n]+1).css("left", imgW[n]);
        $li[n].eq((currentIndex[n] == cnt[n] - 1 )? 0:currentIndex[n]+1).filter(':not(:animated)').animate({left: 0}, 1200, 'easeInOutQuint');
    }
    else {
        $li[n].eq(currentIndex[n]).filter(':not(:animated)').animate({
            left: left
        }, 1200, 'easeInOutQuint', () => {
            $li[n].eq(currentIndex[n]).css("left", imgW[n] * -1);
            currentIndex[n] = (currentIndex[n] == 0)? cnt[n] - 1:currentIndex[n]-1;
            scrollEvent[n] = false;
        });
        $li[n].eq((currentIndex[n] == 0 )? cnt[n] - 1:currentIndex[n]-1).css("left", -imgW[n]);
        $li[n].eq((currentIndex[n] == 0 )? cnt[n] - 1:currentIndex[n]-1).filter(':not(:animated)').animate({left: 0}, 1200, 'easeInOutQuint');
    }
}