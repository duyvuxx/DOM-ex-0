const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-items");
const panes = $$(".infor-items");

const tabActive = $(".tab-items.active");
const line = $(".bar");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((val, idx) => {
  val.onclick = function () {
    $(".tab-items.active").classList.remove("active"); //xóa class active 
    $(".infor-items.active").classList.remove("active");

    const pane = panes[idx]; //lấy ra nội dung pane ứng với mỗi tab

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active"); //add class active vào el được click
    pane.classList.add("active"); //add class active vào el pane tương tứng với tab khi click
  };
});

