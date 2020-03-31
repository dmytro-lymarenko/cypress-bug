import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(url).then(({ data }) => {
			console.log(data);
			setData(data);
		});
	}, [url]);

	return data;
}

const Home = () => {
	const first = useFetch("/api/posts");
	const second = useFetch("/api/posts");
	const third = useFetch("/api/posts");
	const fourth = useFetch("/api/posts");

	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section>
				<h1>First</h1>
				{first &&
					first.map(item => <div key={item.postId}>text: {item.text}</div>)}
			</section>

			<section>
				<h1>Second</h1>
				{second &&
					second.map(item => <div key={item.postId}>text: {item.text}</div>)}
			</section>

			<section>
				<h1>Third</h1>
				{third &&
					third.map(item => <div key={item.postId}>text: {item.text}</div>)}
			</section>

			<section>
				<h1>Fourth</h1>
				{fourth &&
					fourth.map(item => <div key={item.postId}>text: {item.text}</div>)}
			</section>
		</div>
	);
};

export default Home;
