describe("Checkout price should be", function() {
    var checkout;

    beforeEach(function() {
        checkout = new Checkout();
    });

    it("0 if the basket is empty", function() {
        expect(checkout.price("")).toEqual(0);
    });

    it("50 if the basket contains only one unit of item A", function() {
        expect(checkout.price("A")).toEqual(50);
    });

    it("30 if the basket contains only one unit of item B", function() {
        expect(checkout.price("B")).toEqual(30);
    });

    it("20 if the basket contains only one unit of item C", function() {
        expect(checkout.price("C")).toEqual(20);
    });

    it("80 if the basket contains one unit of item A and one unit of item B", function() {
        expect(checkout.price("AB")).toEqual(80);
    });

    it("45 if the basket contains only two units of item B", function() {
        expect(checkout.price("BB")).toEqual(45);
    });

});