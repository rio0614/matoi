$(function () {

    let smoothDuration = 400,
        openDuration = 250,
        closeDuration = 200,
        $menu = $('.headerMenu'),
        $window = $(window),
        $header = $('header, header a, header .headerLogo a, .nav_toggle i');
    const $headerOffsetTop = $('body').offset().top;

// ナビゲーションをクリックした時のスムーズスクロール
    $('a[href^="#"]').click(function(){
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, smoothDuration, "swing");
        return false;
    });

// 【スティッキーヘッダー設定】
    $header.each(function () {

        $window.on('scroll', function () {
            if($window.scrollTop() > $headerOffsetTop) {
                $header.addClass('active');
            } else {
                $header.removeClass('active');
            }
        });

        $window.trigger('scroll');
    });

// 【ハンバーガーメニューボタンがクリックされた際のメニュー欄の表示非表示設定】
    $('.nav_toggle').on('click', function(event) {
        $('.nav_toggle, .headerMenu, .headerMenu ul li').toggleClass('show');
        if ($menu.hasClass('show')) {
            $menu.stop(true).animate({'right': 0}, openDuration);
            $('.nav_toggle i').css('background-color', '#fff');
            $('.headerMenu ul li a').on('click', function(event) {
                $menu.removeClass('show');
                $('.nav_toggle').removeClass('show');
                $menu.stop(true).css({'right': '-450px'});
                $('.nav_toggle i').css('background-color', '');
            });
        } else {
            $menu.stop(true).animate({'right': '-450px'}, closeDuration);
            $('.nav_toggle i').css('background-color', '');
        };

    });

// 【スマホ表示の際のアドレスバーの高さ制御】
    var vh = window.innerHeight;
    // 該当要素の高さを取得しピクセル単位に変換
    // document.getElementById('fullScreen').style.height=vh+'px';
    $('#fullScreen').css('height',$(window).height());

// 【トップページ：メインビジュアル画像スライド設定】
    $('.mainVisual').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        speed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        arrows: false
    });

// 【トップページ：プロダクト画像のスライド設定】
    $('.productImages').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        infinite: true,
        centerMode: true,
        centerPadding: '20%',
        variableWidth: true,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



});
