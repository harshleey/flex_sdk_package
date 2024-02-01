import Typicode from "flex_sdk_package";

const client = new Typicode({
  apiKey: "123",
});

// client.getPosts().then((p) => {
//   console.log(p);

// client.getPostById(1).then((p) => {
//   console.log(p);
// });

client
  .createPost({
    title: "foo",
    body: "bar",
    userId: 101,
  })
  .then((p) => {
    console.log(`New post is created with ${p.id}`);
  });
