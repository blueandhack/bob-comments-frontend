# Bob Community Frontend

First of all, I chose Ant Design as the UI framework because it was my first choice about 6 years ago when I was a founding engineer, and there were only two engineers in our team, so we needed a UI framework that could help us build the UI quickly, and Ant Design is a good choice for that.

Same as backend, the project is inspired by my old boilerplate project [kelp](https://github.com/blueandhack/kelp), which also used Ant Design.

The frontend was just created using create-react-app, so the default is TS.

I just added the models for the types, but the best way I think I can use Zod.

Also, I create context for the comments, use the context to manage the state of the comments, and provide the functions to add, update, and delete comments. I wanted to add Redux, but I thought that it was too heavy for this project, so I just used the context to manage the state as global variables.

I also considered just modifying the local comments state when adding, updating, and deleting comments, which I thought could save bandwidth, and it is admin-only, so admins can manually refresh the page if they want to see the latest comments, but I think that is not a good user experience. So if I have enough time, I can add the last refreshed timestamp to api request as a parameter, so it can pull the comments after that time, so it can save bandwidth and also provide a better user experience.

The page design is very simple:

- NewComment
- Comments:
  - CommentCard

So, the user can add a new comment by the NewComment component, and the comments will show by the CommentCard component. The CommentCard component will show the comment content, the author name, the created time, and the picture if available, the edit button, and the delete button. The edit button will show the text area, and the delete button will delete the comment.


## Setup

```
npm install
npm run dev
```

I don't have more time to add more features, but I think I can add pagination, sorting, filtering, or waterfall loading in the future.
