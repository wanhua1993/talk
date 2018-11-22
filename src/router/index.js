import Vue from 'vue'
import Router from 'vue-router'

const asyncComponent = (name) => {
  return resolve => require([`@/views/${name}`], resolve)
}
const Friend = asyncComponent('friend');
const Message = asyncComponent('message');
const Login = asyncComponent('login');
const Register = asyncComponent('register');
const Chatroom = asyncComponent('chatroom');
const AddFriend = asyncComponent('friend/addFriend');
const Usercenter = asyncComponent('friend/usercenter');
const Circle = asyncComponent('circle');
const Release = asyncComponent('circle/release');
const EditInfo = asyncComponent('friend/editInfo');
const FindPass = asyncComponent('login/findPass');
const UpdatePass = asyncComponent('login/updatePass');
const ApplyList = asyncComponent('friend/applyList');
const UserInfo = asyncComponent('userInfo');
const Avatar = asyncComponent('userInfo/avatar');
const UserSign = asyncComponent('userInfo/userSign');
const Job = asyncComponent('userInfo/job');
const Info = asyncComponent('userInfo/info');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/message',
      name: 'Message',
      component: Message,
    },
    {
      path: '/friend',
      name: 'friend',
      component: Friend,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom
    },
    {
      path: '/addFriend',
      name: 'AddFriend',
      component: AddFriend
    },
    {
      path: '/usercenter',
      name: 'Usercenter',
      component: Usercenter
    },
    {
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/release',
      name: 'Release',
      component: Release
    },
    {
      path: '/editInfo',
      name: 'EditInfo',
      component: EditInfo
    },
    {
      path: '/findPass',
      name: 'FindPass',
      component: FindPass
    },
    {
      path: '/updatePass',
      name: 'UpdatePass',
      component: UpdatePass
    },
    {
      path: '/applyList',
      name: 'ApplyList',
      component: ApplyList
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: Avatar
    },
    {
      path: '/usersign',
      name: 'UserSign',
      component: UserSign
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
