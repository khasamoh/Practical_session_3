document.addEventListener("DOMContentLoaded", ()=> {
  // Big Bird Yellow
  var cookieHeader = document.querySelector("#cookie-header");
  cookieHeader.style.color = "#f7f16d";

  // Count Chocula
  var cookieJar = document.querySelector("#cookie-jar");
  var cookies = cookieJar.getElementsByClassName("cookie");
  var cookieCount = cookies.length;
  var cookieCountText = "There are " + cookieCount + " cookie(s) in the cookie jar!";
  var cookieCountElement = document.querySelector("#cookie-count");
  cookieCountElement.textContent = cookieCountText;

  // Cookie Monster hungry
  setInterval(()=> {
    if (cookieCount > 0) {
      cookieJar.removeChild(cookies[cookieCount - 1]);
      cookieCount--;
      cookieCountText = "There are " + cookieCount + " cookie(s) in the cookie jar!";
      cookieCountElement.textContent = cookieCountText;
    }
  }, 30000);
});
