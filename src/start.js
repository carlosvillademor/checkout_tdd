function Checkout() {
}

var getPrice  = function (item) {
    var prices = {"A": 50, "B": 30, "C":20};
    return  prices[item];
};

var sumItems = function (items) {
    var checkoutPrice = 0;
    for (i = 0; i < items.length; i++) {
        checkoutPrice += getPrice(items[i]);
    }
    return checkoutPrice;
};

var applyDiscounts = function(items, priceBeforeDiscounts) {
    var itemsGroupedByType = _.groupBy(items);
    console.log(itemsGroupedByType);
    var discount = _.each(itemsGroupedByType, function(itemGroup){
        console.log("item group:", itemGroup);
        if (itemGroup[0]=="B" && itemGroup.length == 2)
            return 15;
    });
    return priceBeforeDiscounts - discount;

};

Checkout.prototype.price = function(listOfItems) {
    var items = listOfItems.split('');
    var priceBeforeDiscounts = sumItems(items);
    console.log(priceBeforeDiscounts);
    return applyDiscounts(items, priceBeforeDiscounts);
};

