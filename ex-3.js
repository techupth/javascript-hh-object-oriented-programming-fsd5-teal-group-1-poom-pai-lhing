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
  constructor(id, content, createBy) {
    this.id = id;
    this.content = content;
    this.createBy = createBy;
    this.like = 0;
  }
  addLike() {
    this.like++;
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }
  addGroup(group) {
    this.group.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
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
  send(comment, post) {
    console.log(
      `Notification: ${comment.createBy} has just commented on this post—"${post.title}"`
    );
  }
}
const newUser = new User(1, "ABC", "wowza@techup.com");
const newUserPost = new Post(1, "First time", "First Post");
const newUserPostList = new PostList();
newUserPostList.addPost(newUserPost);
const newUserPostComment = new Comment(1, "abc", "newUser's friend");
newUserPost.addComment(newUserPostComment);
newUserPostComment.addLike();
const newUserNoti = new Notification(1);

newUserNoti.send(newUserPostComment, newUserPost);
newUserPostList.sharePost(newUserPost);
