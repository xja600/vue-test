import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Index from '../views/index.vue'
import Test from '../views/test.vue'
import UserInfo from '../views/user/UserInfo.vue'
Vue.use(VueRouter)


//左侧导航
/*
import Home from '../views/menu/home.vue'
import TopNav from '../components/nav/TopNav.vue'
//import Dashboard from '@/views/workbench/dashboard.vue'
import LeftNav from '../components/nav/LeftNav.vue'
import MySettings from '../views/workbench/MySettings.vue'
import Plan from '../views/workbench/Plan.vue'
import Mission from '../views/workbench/Mission.vue'
//import Maillist from '../views/workbench/Maillist.vue'
import EnterpriseList from '../views/workbench/EnterpriseList.vue'
import EnterpriseDetail from '../views/workbench/EnterpriseDetail.vue'
import EnterpriseAdd from '../views/workbench/EnterpriseAdd.vue'
import EnterpriseValidate from '../views/workbench/EnterpriseValidate.vue'
import VehicleManage from '../views/workbench/VehicleManage.vue'
import DeptManager from '../views/workbench/DeptManager.vue'
import Dashboard from '../views/workbench/dashboard.vue'
*/

import TopNav from '@/components/nav/TopNav.vue'
import LeftNav from '@/components/nav/LeftNav.vue'
import Home from '@/views/menu/home.vue'
import Dashboard from '@/views/workbench/dashboard.vue'
import MySettings from '@/views/workbench/mySettings.vue'
import Mission from '@/views/workbench/mission/mission.vue'
import Plan from '@/views/workbench/plan/plan.vue'
import Maillist from '@/views/workbench/maillist.vue'
import EnterpriseList from '@/views/enterprise/index.vue'
import EnterpriseAdd from '@/views/enterprise/add.vue'
import EnterpriseDetail from '@/views/enterprise/detail.vue'
import EnterpriseValidate from '@/views/enterprise/validate.vue'
import VehicleManage from '@/views/vehicle/index.vue'
import DeptManager from '@/views/dept/index.vue'
import NotFound from '@/components/404.vue'


const routes = [
 /* {
    path: '/',
    name: 'Login',
    component: Login
  },*/
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  },
  {
    path: '/UserInfo',
    name: 'UserInfo',
    component: UserInfo
  },


  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    type: 'home', // 根据type区分不同模块（顶部导航）
    name: 'home', // 根据name区分不同子模块（左侧导航）
    redirect: '/dashboard',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: '首页', // 当前路由的name（导航栏显示文字）
        components: {
          default: Dashboard,
          top: TopNav,
          aside: LeftNav
        },
        leaf: true, // 只有一个节点
        iconCls: 'iconfont icon-home', // 图标样式class
        menuShow: true
      },
      {
        path: '/mySet',
        components: {
          default: MySettings,
          top: TopNav,
          aside: LeftNav
        },
        name: '我的设置',
        iconCls: 'el-icon-menu',
        menuShow: true,
        children: [
          { path: '/mySet/plan', component: Plan, name: '行程计划', menuShow: true },
          { path: '/mySet/mission', component: Mission, name: '我的任务', menuShow: true },
          { path: '/mySet/maillist', component: Maillist, name: '通讯录', menuShow: true }
        ]
      }
    ]
  },
  {
    path: '/enterpriseManager',
    type: 'enterprise',
    name: 'enterprise',
    component: Home,
    redirect: '/enterprise/list',
    menuShow: true,
    children: [
      {
        path: '/enterprise/list',
        name: '企业信息',
        components: {
          default: EnterpriseList,
          top: TopNav,
          aside: LeftNav
        },
        leaf: true,
        iconCls: 'el-icon-setting',
        menuShow: true
      },
      {
        path: '/enterprise/detail',
        name: '企业详情',
        components: {
          default: EnterpriseDetail,
          top: TopNav,
          aside: LeftNav
        },
        leaf: true,
        iconCls: 'el-icon-setting',
        menuShow: false
      },
      {
        path: '/enterprise/add',
        name: '添加企业',
        components: {
          default: EnterpriseAdd,
          top: TopNav,
          aside: LeftNav
        },
        leaf: true,
        iconCls: 'el-icon-menu',
        menuShow: true
      },
      {
        path: '/enterprise/validate',
        name: '企业认证',
        components: {
          default: EnterpriseValidate,
          top: TopNav,
          aside: LeftNav
        },
        leaf: true,
        iconCls: 'el-icon-menu',
        menuShow: true
      }
    ]
  },
  {
    path: '/vehicleManager',
    type: 'enterprise',
    name: 'vehicle',
    component: Home,
    redirect: '/vehicle/list',
    menuShow: true,
    children: [
      {
        path: '/vehicle/list',
        name: '车辆信息',
        components: {
          default: VehicleManage,
          top: TopNav,
          aside:  LeftNav
        },
        leaf: true, // 只有一个节点
        iconCls: 'iconfont icon-home', // 图标样式class
        menuShow: true
      }
    ]
  },
  {
    path: '/deptManager',
    type: 'enterprise',
    name: 'dept',
    component: Home,
    redirect: '/dept/list',
    menuShow: true,
    children: [
      {
        path: '/dept/list',
        name: '部门信息',
        components: {
          default: DeptManager,
          top: TopNav,
          aside:  LeftNav
        },
        leaf: true, // 只有一个节点
        iconCls: 'iconfont icon-home', // 图标样式class
        menuShow: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
