import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 主页
import Service from '@/view/Service'
import User from '@/view/User'
import Orders from '@/view/Orders'
import Home from '@/view/Home'
import SendOrders from '@/view/SendOrders'
import Problem from '@/view/Problem'
// 地图和通知
import Notice from '@/view/Notice/Notice'
import MapNotice from '@/view/Notice/MapNotice'
// 登录与注册
import Login from '@/view/login/Login'
import PasswordFreeLogin from '@/view/login/passwordFreeLogin'
import Registered from '@/view/login/Registered'
// 安装与维修 拉货
import ServiceType from '@/view/serviceType/ServiceType'
import Installation from '@/view/serviceType/Installation'
import Delivery from '@/view/serviceType/Delivery'
// 个人中心
import Setting from '@/view/my/Setting'
import UserInfo from '@/view/my/UserInfo'
import MyWallet from '@/view/my/MyWallet'
import Recharge from '@/view/my/Recharge'
import Address from '@/view/my/Address'
import AddAddress from '@/view/my/AddAddress'
import ChangePassword from '@/view/my/ChangePassword'
import PasswordOption from '@/view/my/PasswordOption'
import ForgetPassword from '@/view/my/ForgetPassword'
import UserType from '@/view/my/UserType'
import UserAgreement from '@/view/my/UserAgreement'
import Privacy from '@/view/my/Privacy'
import AboutUs from '@/view/my/AboutUs'
import Opinion from '@/view/my/Opinion'
import Enterprise from '@/view/my/Enterprise'

// 企业用户 派单内页
import MyOrder from '@/view/orders/MyOrder'
import Processing from '@/view/orders/Processing'
import WaitingSingle from '@/view/orders/WaitingSingle'
import Abnormal from '@/view/orders/Abnormal'
import Completed from '@/view/orders/Completed'

// 测试
// import Test from '@/view/login/Test'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Service',
      name: 'service',
      component: Service
    },
    {
      path: '/User',
      name: 'user',
      component: User
    },
    {
      path: '/Orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/Problem',
      name: 'problem',
      component: Problem
    },
    {
      path: '/SendOrders',
      name: 'sendOrders',
      component: SendOrders
    },
    {
      path: '/Notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/MapNotice',
      name: 'mapNotice',
      component: MapNotice
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/Test',
    //   name: 'test',
    //   component: Test
    // },
    {
      path: '/Registered',
      name: 'registered',
      component: Registered
    },
    {
      path: '/ServiceType',
      name: 'serviceType',
      component: ServiceType
    },
    {
      path: '/PasswordFreeLogin',
      name: 'passwordFreeLogin',
      component: PasswordFreeLogin
    },
    {
      path: '/Setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/UserInfo',
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: '/MyWallet',
      name: 'myWallet',
      component: MyWallet
    },
    {
      path: '/Recharge',
      name: 'recharge',
      component: Recharge
    },
    {
      path: '/Installation',
      name: 'installation',
      component: Installation
    },
    {
      path: '/Address',
      name: 'address',
      component: Address
    },
    {
      path: '/Delivery',
      name: 'delivery',
      component: Delivery
    },
    {
      path: '/AddAddress',
      name: 'addAddress',
      component: AddAddress
    },
    {
      path: '/ChangePassword',
      name: 'changePassword',
      component: ChangePassword
    },
    {
      path: '/PasswordOption',
      name: 'passwordOption',
      component: PasswordOption
    },
    {
      path: '/ForgetPassword',
      name: 'forgetPassword',
      component: ForgetPassword
    },
    {
      path: '/UserType',
      name: 'userType',
      component: UserType
    },
    {
      path: '/UserAgreement',
      name: 'userAgreement',
      component: UserAgreement
    },
    {
      path: '/Privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/AboutUs',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/Opinion',
      name: 'opinion',
      component: Opinion
    },
    {
      path: '/Enterprise',
      name: 'enterprise',
      component: Enterprise
    },
    {
      path: '/MyOrder',
      name: 'myOrder',
      component: MyOrder
    },
    {
      path: '/WaitingSingle',
      name: 'waitingSingle',
      component: WaitingSingle
    },
    {
      path: '/Processing',
      name: 'processing',
      component: Processing
    },
    {
      path: '/Abnormal',
      name: 'abnormal',
      component: Abnormal
    },
    {
      path: '/Completed',
      name: 'completed',
      component: Completed
    }
  ]
})
