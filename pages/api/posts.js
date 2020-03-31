export default (req, res) => {
	res.status(200).json([{ postId: 1, text: "John Doe" }]);
};
