import "../sass/product-detail.scss";
// console.log('___detail page');
// const boxes = document.querySelectorAll('.padding-p');
// // Bấm vào ô → bật màu, tắt màu các ô còn lại
// boxes.forEach(box => {
//   box.addEventListener('click', function (e) {
//     e.stopPropagation(); // Ngăn click lan ra ngoài
//     boxes.forEach(b => b.classList.remove('active'));
//     this.classList.add('active');
//   });
// });
// // Bấm vào bất kỳ đâu ngoài box → tắt hết
// document.addEventListener('click', () => {
//   boxes.forEach(b => b.classList.remove('active'));
// });
// cộng trừ thêm giỏ hàng
let count = 1;

window.increase = function () {
  count++;
  document.getElementById("quantity").textContent = count;
}

 window.decrease = function() {
  if (count > 1) { // Không giảm dưới 1
    count--;
    document.getElementById("quantity").textContent = count;
  }
}