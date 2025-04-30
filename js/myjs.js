// تعريف المتغيرات
// مصفوفة المنتجات
let products = document.querySelectorAll(' .card .card-body a');
// كارت الزبون
let cart = document.getElementById('cart');
// الزر لعرض السعر الاجمالي
let btn = document.getElementById('btn');
// متغير لحفظ السعر
let totalPrice = 0;
// مكان عرض السعر
let showprice = document.getElementById("total-price");
// التابع الذي ينفذ الحدث نأخذ مصفوفة المنتجات ونعرضعا عنصر عنصر على التابع
products.forEach(function (item){
   item.addEventListener("click",function(){
      // ثم نأخذ من كل عنصر محتواه النصي وقيمة اتربيوت السعر لنضعا بالكارت
      cart.innerHTML += item.getAttribute('prodcutName') +" "+item.getAttribute("price")+"$"+"<br>";
      // ونأخذ قيمة عددية لاتربيوت السعر ونجمعها في المتغير توتال برايس
      totalPrice += +(item.getAttribute("price")) ;
   })
})
// التابع الذي يظهر السعر الاجمالي في المكان المخصص
function show(){
   showprice.innerHTML = (totalPrice)+"$";
}
// الحدث
btn.onclick = show;

//تفعيل ال بوب اوفر 
  document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
        html: true // يسمح باستخدام HTML داخل Popover
      });
    });
  });