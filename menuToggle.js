// menuToggle.js

function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
  
  function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
  }
  
  function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
    }
  }
  
  // Add event from js to keep the markup clean
  function init() {
    document.getElementById("open-menu").addEventListener("click", toggleMenu);
    document.getElementById("body-overlay").addEventListener("click", toggleMenu);
  }
  
  // The actual function
  function toggleMenu() {
    var ele = document.getElementsByTagName('body')[0];
    if (!hasClass(ele, "menu-open")) {
      addClass(ele, "menu-open");
    } else {
      removeClass(ele, "menu-open");
    }
  }
  
  // Prevent the function from running before the document is loaded
  document.addEventListener('readystatechange', function () {
    if (document.readyState === "complete") {
      init();
    }
  });
  