const sideBar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector(".sidebar-closebtn");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

$(document).ready(function () {
  if ($(window).width() < 1001) {
    $(".menu-item-has-children > a").after('<i class="fa fa-angle-right"></i>');
    $(".menu-item-has-children .fa-angle-right").click(function () {
      $(this).next(".sub-menu").slideToggle("fast");
      $(this).toggleClass("rotate-side");
    });

    $("#nav-icon3").click(function () {
      $(sideBar).addClass("sidebar-open");
      $(sidebarOverlay).addClass("sidebar-overlay-open");
    });
    $(sidebarClose).click(function () {
      $(sideBar).removeClass("sidebar-open");
      $(sidebarOverlay).removeClass("sidebar-overlay-open");
    });
    $(sidebarOverlay).click(function () {
      $(sideBar).removeClass("sidebar-open");
      $(sidebarOverlay).removeClass("sidebar-overlay-open");
    });
  }

  $(".harf-siniri").text(function () {
    return $(this).text().length > 264
      ? $(this).text().substr(0, 264) + ".."
      : $(this).text();
  });
});
