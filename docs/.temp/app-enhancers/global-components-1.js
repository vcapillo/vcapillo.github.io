import Vue from 'vue'
Vue.component("OtherComponent", () => import("/opt/workspace/mediumish-vuepress-blog-theme/docs/.vuepress/components/OtherComponent"))
Vue.component("demo-component", () => import("/opt/workspace/mediumish-vuepress-blog-theme/docs/.vuepress/components/demo-component"))
Vue.component("Foo-Bar", () => import("/opt/workspace/mediumish-vuepress-blog-theme/docs/.vuepress/components/Foo/Bar"))
Vue.component("BaseListLayout", () => import("/opt/workspace/mediumish-vuepress-blog-theme/global-components/BaseListLayout"))
Vue.component("BlogTag", () => import("/opt/workspace/mediumish-vuepress-blog-theme/global-components/BlogTag"))
Vue.component("BlogTags", () => import("/opt/workspace/mediumish-vuepress-blog-theme/global-components/BlogTags"))
Vue.component("NavLink", () => import("/opt/workspace/mediumish-vuepress-blog-theme/global-components/NavLink"))


export default {}