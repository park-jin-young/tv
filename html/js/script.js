$(function () {
    $(".ch li").on("click", function () {
        no = $(this).index() + 1;
        $(".pic").attr("src", "img/img" + no + ".jpg");
    })
})