describe("A spec using the fail function", function() {
    function foo(x, callback) {
        if (x) {
            callback();
        }
    }

    it("should fail", function() {
        foo(true, function () {
            fail("I failed!");
        });
    });
});
