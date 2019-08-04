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

function Order(flavour,size,topping,crust,number) {
    this.myFlavour = flavour;
    this.mySize = size;
    this.myTopping = topping;
    this.myCrust = crust;
    this.myNumber = number;
  }
  
  Order.prototype.fullOrder = function() {
    return this.myFlavour + " " + this.mySize + " " + this.myTopping + " " + this.myCrust + " " + this.myNumber;
  }
  // function resetFields() {
  //     $("select#flavour").val("");
  //     $("select#size").val("");
  //     $("select#topping").val("");
  //     $("select#crust").val("");
  //     $("select#new-number").val("");
  // }
  
  // user interface logic
  $(document).ready(function() {
    $("form#order-pizza").submit(function(event) {
      event.preventDefault();
  
      var inputtedFlavour = $("select#flavour").val();
      var inputtedSize = $("select#size").val();
      var inputtedTopping = $("select#topping").val();
      var inputtedCrust = $("select#crust").val();
      var inputtedNumber = $("select#new-number").val();


      var newOrder = new Order(inputtedFlavour, inputtedSize, inputtedTopping, inputtedCrust, inputtedNumber);
      console.log(newOrder);

      // $("ul#our-order").append("<li><span class='your-order'>" + newOrder.fullOrder() + "</span></li>");
  
      $("#btn").last().click(function() {
        $("#show-order").show();
        $("#show-order h2").text(newOrder.fullOrder());
        $(".flavour").text(newOrder.flavour);
        $(".size").text(newOrder.size);
        $(".topping").text(newOrder.topping);
        $(".crust").text(newOrder.crust);
        $(".number").number(newOrder.number);

      });
  
      // resetFields();
  
    });
  });
  
