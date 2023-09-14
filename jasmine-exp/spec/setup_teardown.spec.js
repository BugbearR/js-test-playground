describe("A suite with some shared setup", function() {
    beforeAll(function() {
        console.log("beforeAll called.");
    });

    afterAll(function() {
        console.log("afterAll called.");
    });

    beforeEach(function() {
        console.log("beforeEach called.");
    });

    afterEach(function() {
        console.log("afterEach called.");
    });

    it("test1", function() {
        expect(true).toEqual(true);
    });

    it("test2", function() {
        expect(true).toEqual(true);
    });
});