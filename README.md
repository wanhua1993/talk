# shengyu

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

将用户登录状态写到 vuex 中

用户登录 先获取用户的登录状态 登录则跳转到消息页面 否则触发socket 将 用户id 发送到后台; 并将用户信息 通过 action  保存到 localstroage 中;

进入到 消息页面以后  在 created 中 就要触发监听消息函数 （函数中监听 私聊消息 和 群聊消息）;

监听消息函数 一直得监听着 不管在哪个页面

私聊、群聊  点击发送消息时 1 是通过 socket 发送消息到后台 2 是 发送后台服务器一份 3 将自己发送的消息更新到页面上 4 将消息框 内容置为空  5 消息列表中的时间表示




