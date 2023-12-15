//  Start coding here

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  sharePost(post) {
    console.log(`You've shared post ${post.title} to your friend.`);
  }
}

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [];
  }

  addComment(comment) {
    this.comment.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }

  addLike() {
    this.like += 1;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(newGroup) {
    this.groupList.push(newGroup);
  }

  addPage(newPage) {
    this.pageList.push(newPage);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send(post) {
    for (let i of post.comment) {
      console.log(
        `Notification: ${i.createdBy} has just commented on this post—"${post.title}"`
      );
    }
  }
}

//Create new users
const userId001 = new User("001", "AAA", "AAA@xyz.com");
const userId002 = new User("002", "BBB", "BBB@xyz.com");
//Create new posts
const postId001 = new Post("p001", "OOP in 15 minutes", "impossible");
const postId002 = new Post("p002", "OOP in 60 minutes", "start with.....");
//Create new post lists
const postList001 = new PostList();
//add posts
postList001.addPost(postId001);
postList001.addPost(postId002);
//Create new comment
const commentId001 = new Comment("c001", "great", userId001.name);
const commentId002 = new Comment("c002", "good", userId002.name);
//add comment to Post
postId001.addComment(commentId001);
postId001.addComment(commentId002);
//add likes to comment
commentId001.addLike();
commentId001.addLike();
commentId001.addLike();
//share post
postList001.sharePost(postId001);
//Create facebook list
const facebookList = new Facebook();
//Create new page
const pageId001 = new FacebookPage("Techup");
const pageId002 = new FacebookPage("Techtalk");
//add page
facebookList.addPage(pageId001);
facebookList.addPage(pageId002);
//Create new group
const groupId001 = new FacebookGroup("G01");
const groupId002 = new FacebookGroup("G02");
//add group
facebookList.addGroup(groupId001);
facebookList.addGroup(groupId002);
//Create notification
const noticeId001 = new Notification("n001");
//notice
noticeId001.send(postId001);

console.log(postList001);
console.log("************************************************");
console.log(facebookList);
