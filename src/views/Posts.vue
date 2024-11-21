<template>
    <section style="padding: 0 10px">

        <h1>List of Posts</h1>

        <ul style="list-style-type:circle">
            <li v-for="post of posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: "Posts",
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        console.log("Mounted hook. Posts..")
        this.getPosts();
    },
    methods: {
        async getPosts() {
            this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => json)
            .catch(err => console.error("Post Error: ", err.message))
        }
    }
  }
  </script>
  
  <style>
  
  </style>