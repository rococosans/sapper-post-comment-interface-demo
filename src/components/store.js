import { writable} from 'svelte/store';


export const posts = writable([
	{
		id: 1,
		postBody: 'This is Post one',
		comments: ['Comment one']
	},
	{
		id: 2,
		postBody: 'This is Post two',
		comments: ['Comment one', 'Comment two']
	}
])