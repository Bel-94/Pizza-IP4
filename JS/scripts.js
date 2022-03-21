//  object constructor for pizza orders
class orderPizza {
    constructor(size, crust, toppings, numberOfPizza, delivery) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.numberOfPizza = numberOfPizza;
        this.delivery = delivery;
    }
};
// prototypes that calculates prices
orderPizza.prototype.getSizePrice = function () {
    if (this.size === "Large") {
        return 1300;
    } else if (this.size === "Medium") {
        return 1000;
    } else if (this.size === "Small") {
        return 500;
    }else { return 0;
}};
orderPizza.prototype.getCrustPrice = function () {
    if (this.crust === "Thick") {
        return 150;
    } else if (this.crust === "Thin") {
        return 200;
    } else if (this.crust === "Cheese") {
        return 170;
    } else if (this.crust === "Flat") {
        return 100;
    }else{ return 0;
}};
orderPizza.prototype.getToppingsPrice = function () {
    if (this.toppings === "Mushroom") {
        return 100;
    } else if (this.toppings === "Onions") {
        return 50;
    } else if (this.toppings === "Bacon") {
        return 120;
    } else if (this.toppings === "Pepperoni") {
        return 200;
    } else if (this.toppings === "Sausage") {
        return 150;
    } else if (this.toppings === "Green pepper") {
        return 70;
    } else if (this.toppings === "Extra cheese") {
        return 180;
    } else if (this.toppings === "Pineapple") {
        return 90;
    }else{return 0;
}};
orderPizza.prototype.priceOfDelivery = function () {
    if (this.Delivery === "Inperson") {
        return 0;
    } else {
        return 200;
    }
};
//  user values
$(document).ready(function () {
    $(".pizzaorder").submit(function (event) {
        event.preventDefault();
        var size = $("#Size option:selected").val();
        var crust = $("#Crust option:selected").val();
        var toppings = $("#Topp option:selected").val();
        var numberOfPizza = parseInt($("#number").val());
        var delivery = $("#Delivery option:selected").val();

        var newOrderPizza = new orderPizza(size, crust, toppings, numberOfPizza, delivery);
        var totalPrice = (newOrderPizza.getSizePrice()+newOrderPizza.getCrustPrice()+newOrderPizza.getToppingsPrice())*numberOfPizza;

        window.alert("Hello! You have ordered "+numberOfPizza+ " " +size+ " pizzas, with a " + crust +" crust and "+toppings + " toppings!");
        window.alert("The total cost is  " + totalPrice + " /= " + " For Delivery services kindly fill the form below");
    

        $("#order1").click(function (event) {
            event.preventDefault();
            var keyedName = $("#yourName").val();
            var keyedAddress = $("#yourAddress1").val();
            var inputAddress = $("#yourAddress2").val();
            
            
            window.alert("Hey" + " " + keyedName + " " + " Your order will be ready in 20 mins and will be delivered to" + " " + keyedAddress + " " + " "+ inputAddress +" "+ "in the next 30 mins.")
            window.alert("Your total order will be " + (totalPrice + newOrderPizza.priceOfDelivery()));
        });
});

// Address

//  object constructor for address
class address {
    constructor(name, phonenumber, address1, address2) {
        this.name = name;
        this.phonenumber = phonenumber;
        this.address1 = address1;
        this.address2 = address2;
    }
};

});