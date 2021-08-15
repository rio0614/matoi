$(function () {

// 【変数・定数の設定】
    var duration = 400, // アニメーションの遷移時間
        $menu = $('.headerMenu'),
        $window = $(window),
        $header = $('header, header a, header .headerLogo a, .nav_toggle i'),
        navLink = $('.headerMenu li a');
    const $headerOffsetTop = $('body').offset().top;

// 【メニューアンカーの設定（パララックスとの併用のため必要）】
    // ナビゲーションをクリックした時のスムーズスクロール
    navLink.click(function() {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 200);
    });


// 【スティッキーヘッダー設定】
    $header.each(function () {

        // ウィンドウがスクロールされたらヘッダーを表示する設定
        $window.on('scroll', function () {
            if($window.scrollTop() > $headerOffsetTop) {
                $header.addClass('active');
            } else {
                $header.removeClass('active');
            }
        });

        // ウィンドウのスクロールイベントを発生させる
        // (ヘッダーの初期位置を調整)
        $window.trigger('scroll');
    });

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

// 【ハンバーガーメニューボタンがクリックされた際のメニュー欄の表示非表示設定】
    $('.nav_toggle').on('click', function(event) {
        // nav_toggle、headerMenu、headerMenu ul liに
        // showクラスをつける
        $('.nav_toggle, .headerMenu, .headerMenu ul li').toggleClass('show');
        // showクラスがついていればメニューを表示、
        // showクラスがついていなければメニューが非表示
        if ($menu.hasClass('show')) {
            $menu.stop(true).animate({'right': 0}, duration);
            // ハンバーガーメニューボタンの色を白にする
            $('.nav_toggle i').css('background-color', '#fff');
            // メニュー内のリストがクリックされたらメニューを非表示とする
            $('.headerMenu ul li').on('click', function(event) {
                $menu.removeClass('show');
                $('.nav_toggle').removeClass('show');
                $menu.stop(true).animate({'right': '-450px'}, duration);
                $('.nav_toggle i').css('background-color', '');
            });
        } else {
            $menu.stop(true).animate({'right': '-450px'}, duration);
            $('.nav_toggle i').css('background-color', '');
        };

    });

});
