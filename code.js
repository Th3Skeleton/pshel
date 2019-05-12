$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
        $('div.main').toggleClass('night');
    });
});
if ( navigator.platform.indexOf('Win') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "windows");
} else if ( navigator.platform.indexOf('Mac') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "mac");
}