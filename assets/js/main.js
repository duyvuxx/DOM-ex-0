const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$$(".tab-items")[0].style.opacity = 1;        //make first item opacity

function changeContent(type, element) {
  var tabs = $$(".tab-items");
  console.log(`🚀 | changeContent | tabs[0]:`, tabs[0]);

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.opacity = 0.6;              // opacity for tab items
  }
  
  element.style.opacity = 1;             

  var bar = $(".bar");

  $("#" + type).style.display = "block";      // display content

  switch (type) {
    case "react":
      $("#angular").style.display = "none";
      $("#ember").style.display = "none";
      $("#vue").style.display = "none";
      bar.style.width = tabs[0].offsetWidth + "px";
      bar.style.left = tabs[0].offsetLeft;
      break;
    case "angular":
      $("#react").style.display = "none";
      $("#ember").style.display = "none";
      $("#vue").style.display = "none";
      bar.style.width = tabs[1].offsetWidth + "px";
      bar.style.left = tabs[1].offsetLeft + "px";
      break;
    case "ember":
      $("#angular").style.display = "none";
      $("#react").style.display = "none";
      $("#vue").style.display = "none";
      bar.style.width = tabs[2].offsetWidth + "px";
      bar.style.left = tabs[2].offsetLeft + "px";
      break;
    default:
      $("#angular").style.display = "none";
      $("#react").style.display = "none";
      $("#ember").style.display = "none";
      bar.style.width = tabs[3].offsetWidth + "px";
      bar.style.left = tabs[3].offsetLeft + "px";
  }
}
