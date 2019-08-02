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

//Business logic
function Order(flavour,topping,crust,size,number){
    this.myFlavour = flavour;
    this.myTopping = topping;
    this.myCrust = crust;
    this.mySize = size;
    this.myNumber = number;
}
function resetFields(){
    $("#flavour").val("");
    $("#size").val("");
    $("#topping").val("");
    $("#crust").val("");
    $("#new-number").val("");
}
//User Interface logic
$(document).ready(function(){
    $("#order-pizza").submit(function(event){
        event.preventDefault();
        var newFlavour = $ ("#flavour").val();
        var newSize = $ ("#size").val();
        var newTopping = $ ("#topping").val();
        var newCrust = $ ("#crust").val();
        var newNumber = $ ("#new-number").val();
        var yourOrder = $ ("#your-order").val();
        var newOrder = new Order(yourOrder,newFlavour,newSize,newTopping,newCrust,newNumber);
    });
    $("ul#your-order").append("<li><span class='orders'>" + newOrder.newFlavour() + "</span></li>");
    // $("ul#your-order").append("<li><span class='orders'>" + newOrder.newSize() + "</span></li>");
    // $("ul#your-order").append("<li><span class='orders'>" + newOrder.newTopping() + "</span></li>");
    // $("ul#your-order").append("<li><span class='orders'>" + newOrder.newCrust() + "</span></li>");
    // $("ul#your-order").append("<li><span class='orders'>" + newOrder.newNumber() + "</span></li>");
    
    $(".orders").last().click(function(){
        {
            $("#show-order").show();
            $(".flavour").text(newOrder.flavour);
            $(".size").text(newOrder.size);
            $(".topping").text(newOrder.topping);
            $(".crust").text(newOrder.crust);
            $(".new-number").number(newOrder.number);

        }
    });
    resetFields();
});