function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // A part of my effort to learn parallax.
// Photo Cred: Andre Benz @ https://unsplash.com/@trapnation

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleMouseMove",
    e => {
      const el = document.getElementById("wrapper");
      const d = el.getBoundingClientRect();
      let x = e.clientX - (d.left + Math.floor(d.width / 2));
      let y = e.clientY - (d.top + Math.floor(d.height / 2));
      // Invert values
      x = x - x * 2;
      y = y - y * 2;
      document.documentElement.style.setProperty("--scale", 1.6);
      document.documentElement.style.setProperty("--x", x / 2 + "px");

      document.documentElement.style.setProperty("--y", y / 2 + "px");
    });_defineProperty(this, "handleMouseLeave",

    () => {
      document.documentElement.style.setProperty("--scale", 1);
      document.documentElement.style.setProperty("--x", 0);
      document.documentElement.style.setProperty("--y", 0);
    });}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        id: "wrapper",
        onMouseMove: this.handleMouseMove,
        onClick: this.handleMouseLeave }, /*#__PURE__*/

      React.createElement("img", { id: "image" })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 30) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// NAVIGATION LOGO SCROLL TOP
$(".logo").on("click", function (e) {
  e.preventDefault();
  $(".nav-toggle").removeClass("open");
  $(".menu-left").removeClass("collapse");
  $("html, body").animate(
    {
      scrollTop: 0
    },
    750,
    "easeInOutQuad"
  );
});
// LINKS TO ANCHORS
$('a[href^="#"]').on("click", function (event) {
  var $target = $(this.getAttribute("href"));

  if ($target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top
      },
      750,
      "easeInOutQuad"
    );
  }
});

// TOGGLE HAMBURGER & COLLAPSE NAV
$(".nav-toggle").on("click", function () {
  $(this).toggleClass("open");
  $(".menu-left").toggleClass("collapse");
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$(".menu-left a").on("click", function () {
  $(".nav-toggle").removeClass("open");
  $(".menu-left").removeClass("collapse");
});

// SHOW/HIDE NAV

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("show-nav").addClass("hide-nav");
    $(".nav-toggle").removeClass("open");
    $(".menu-left").removeClass("collapse");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("hide-nav").addClass("show-nav");
    }
  }

  lastScrollTop = st;
}

// elements
var $page = $('.page');

$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
});
$('.content').on('click', function(){
  $page.removeClass('shazam');
});