import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import AddCity from '@/components/AddCity'
import Detail from '@/components/Detail'
import Calculate from '@/components/Calculate'
import DemoLayout from '@/components/layouts/DemoLayout'
import AuthLayout from '@/components/layouts/AuthLayout'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
            meta: {layout:AuthLayout}
        },
        {
            path:'/addcity',
            name: 'AddCity',
            component: AddCity,
            meta:{ layout:AuthLayout }
        },
        {
            path:'/detail/:city',
            name:'Detail',
            component: Detail,
            meta:{ layout: AuthLayout }
        },
        {
            path: '/demo',
            name: 'Calculate',
            meta: {
                layout: DemoLayout
            },
            component: Calculate
        }
    ]
})
