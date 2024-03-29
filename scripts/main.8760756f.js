"use strict";
$(document).ready(function () {
    (new WOW).init(), $(".lightSlider").each(function () {
        var a = ($(this), $(this).find("li.item a")),
            b = [];
        a.each(function () {
            var a = $(this),
                c = "image";
            a.hasClass("video") && (c = "iframe");
            var d = {
                src: a.attr("href"),
                type: c
            };
            d.title = a.data("title"), b.push(d)
        }), a.magnificPopup({
            mainClass: "mfp-fade",
            items: b,
            gallery: {
                enabled: !0,
                tPrev: $(this).data("prev-text"),
                tNext: $(this).data("next-text")
            },
            type: "image",
            callbacks: {
                beforeOpen: function () {
                    var b = a.index(this.st.el); - 1 !== b && this.goTo(b)
                }
            }
        })
    }), $(".lightSlider").lightSlider({
        gallery: !0,
        item: 1,
        loop: !0,
        slideMargin: 0,
        thumbItem: 9
    }), $("figure.image a").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-img-mobile",
        image: {
            verticalFit: !0
        }
    }), $(".get-sample").magnificPopup({
        type: "inline",
        focus: "#FirstName",
        callbacks: {
            beforeOpen: function () {
                this.st.focus = $(window).width() < 700 ? !1 : "#FirstName"
            }
        }
    }), $(".see-demo, .test-material, .get-sample, .ask-question, .fullform, .video1, .video2, .video3, .component-popup ").magnificPopup({
        type: "inline",
        focus: "#FirstName",
        callbacks: {
            beforeOpen: function () {
                this.st.focus = $(window).width() < 700 ? !1 : "#FirstName"
            }
        }
    }), $(".list-gallery").magnificPopup({
        delegate: ".item a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        }
    });
    var a = $(".list-gallery").isotope({
            itemSelector: ".item"
        }),
        b = $(".group-checked .item input");
    b.change(function () {
        var c = [];
        b.each(function (a, b) {
            b.checked && c.push(b.value), console.log(c, "sdfsdf")
        });
        var d = c.length ? c.join(", ") : "*";
        a.isotope({
            filter: d
        })
    })

});


//  back to top button
$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

var amountScrolled = 300;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});

$('a.back-to-top, a.simple-back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});