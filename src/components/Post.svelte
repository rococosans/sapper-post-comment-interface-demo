<script>
  import { createEventDispatcher } from "svelte";
  import { scale } from "svelte/transition";
  import { posts } from "./store.js";

  const dispatch = createEventDispatcher();

  export let id;
  export let postBody;
  export let comments;

  let comment;
</script>

<style>
  .wrapper {
    padding: 0.5em 1em;
    border-radius: 4px;
    background: #fff;
    box-shadow: 1px 1px 6px #8888;
    min-width: 700px;
  }

  .comment {
    font-size: 14px;
    margin: 0.5em 1em;
    padding: 1em 0.5em;
    background: #f0f0f0;
    border-radius: 10px;
  }

  hr {
    opacity: 0.7;
  }

  input[type="text"] {
    font-size: 14px;
    width: 100%;
  }
</style>

<div class="wrapper">
  <h3>
    {postBody}
  </h3>
  <hr size="1" />
  {#each comments as comment}
  <div class="comment" transition:scale>
    {comment}
  </div>
  {:else}
  <p>
    No comments yet.
  </p>
  {/each}
  <hr size="1" />
  <input type="text" bind:value={comment} placeholder="Write a comment..."
  on:keydown={event => event.which === 13 && dispatch('addcomment', {comment:
  comment, post: id})}/>
</div>
