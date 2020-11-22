import Vue from 'vue'
import VueRouter from 'vue-router'
import SiteList from '../components/SiteList'
import AddSite from '../components/AddSite'
import EditSite from '../components/EditSite'

Vue.use(VueRouter)

const routes = [
  { 
    path:'/',
    component:SiteList
  },
  {
    path:'/sites/add',
    component:AddSite
  },
  {
    path:'/sites/edit/:id',
    component:EditSite
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
