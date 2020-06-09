import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Notify'
import Notify from '@/components/Notify'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/notify',
            name: 'notify',
            component: Notify
        },
    ]
})