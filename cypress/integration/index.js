describe("cypress bug", () => {
	it("should fail sometimes, rerun if not ;)", () => {
		cy.server();
		cy.route("get", "/api/posts").as("getPosts");

		cy.visit("http://localhost:3000");

		cy.wait("@getPosts");
		cy.wait("@getPosts");
		cy.wait("@getPosts");
		cy.wait("@getPosts");
	});
});
