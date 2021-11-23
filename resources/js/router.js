import Vue from 'vue'
import VueRouter from "vue-router";
import Post from "./components/Post";
import Tag from "./components/Tag";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/posts/id',
      component: Post
    },
    {
      path: '/tags',
      component: Tag
    },
  ]

})

