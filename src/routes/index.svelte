<script>
	import { posts } from '../components/store.js'
	import Post from '../components/Post.svelte'
	
	function addComment(event){
		console.log(event.detail);
		postArray[event.detail.post].comments.push(event.detail.comment)
		console.log(JSON.stringify(postArray))
		posts.set(postArray)
	}
	
	let postArray 
	const unsubscribe = posts.subscribe(value => {
		postArray = value;
	});
	
	let comments = [];
	
	
	// When ever i create a few post and then put a comment to it, the comment i put from the the post is duplicating with other post i created. Please help thanks.
	function addPost(input){
		const newPost = {id: postArray.length + 1, postBody: input.value, comments};
		postArray = [...postArray, newPost];
		console.log(postArray);
	}
</script>

<style>
	:global(body){
		box-sizing: border-box;
		background-color: #F8f8f8;
	}

	main {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section {
		max-width: 960px;
		padding: 0 36px;
		margin: 0 auto;
	}
	
	input[type=text]{
		width: 100%;
		margin: 1em auto;
	}

</style>

<main>

	<section>
		<input type="text" placeholder="Write a post..." on:keydown={event => event.which === 13 && addPost(event.target)}/>
		
		{#each postArray as post, i}
		<Post id={i} postBody={post.postBody} comments={post.comments} on:addcomment={addComment}/>
		{/each}
	</section>
	
</main>