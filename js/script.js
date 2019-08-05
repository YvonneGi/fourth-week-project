// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none"; 
//   }
//   x[slideIndex-1].style.display = "block"; 
// }

//Business Logic
function Order(flavour, size, topping, crust, pFlavour, pTopping, pCrust, pSize) {
  this.myFlavour = flavour;
  this.mySize = size;
  this.myTopping = topping;
  this.myCrust = crust;
  this.myPriceF = pFlavour;
  this.myPriceT = pTopping;
  this.myPriceC = pCrust;
  this.myPriceS = pSize;
}

Order.prototype.fullOrder = function () {
  return this.myPriceF + this.myPriceT + this.myPriceS + this.myPriceC;
}
function resetFields() {
  $("select#flavour").val("");
  $("select#size").val("");
  $("select#topping").val("");
  $("select#crust").val("");
  $("select#new-number").val("");
}

// user interface logic
$(document).ready(function () {
  $("#btn").click(function (event) {
    event.preventDefault();
    $(".my").show();
    var inputtedFlavour = $("#flavour option:selected").text();
    var inputtedSize = $("#size option:selected").text();
    var inputtedTopping = $("#topping option:selected").text();
    var inputtedCrust = $("#crust option:selected").text();

    var inputtedPFlavour = parseInt($("#flavour option:selected").val());
    var inputtedPSize = parseInt($("#size option:selected").val());
    var inputtedPTopping = parseInt($("#topping option:selected").val());
    var inputtedPCrust = parseInt($("#crust option:selected").val());

    var newOrder = new Order(inputtedFlavour, inputtedSize, inputtedTopping,
      inputtedCrust, inputtedPFlavour, inputtedPSize, inputtedPTopping, inputtedPCrust);

    // console.log(inputtedPFlavour+'/'+inputtedPSize+'/'+inputtedPTopping+'/'+inputtedPCrust);
    $(".flavour").text(newOrder.myFlavour);
    $(".size").text(newOrder.mySize);
    $(".topping").text(newOrder.myTopping);
    $(".crust").text(newOrder.myCrust);
    $(".cost").text(newOrder.fullOrder());

  });

  resetFields();

});

