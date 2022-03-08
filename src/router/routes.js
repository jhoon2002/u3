import DirBlank from '@/components/DirBlank.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        icon: 'las la-campground',
        component: () => import('@/views/TestPage.vue'),
    },
    {
        path: '/task',
        name: '사업 관리',
        icon: 'las la-network-wired',
        component: DirBlank,
        children: [
            {
                path: '/task/basic',
                name: '기본 정보 등록',
                // icon: 'las la-pen',
                component: () => import('@/views/task/TaskBasicForm.vue'),
            },
            // {
            //     path: '/task/researcher',
            //     name: '연구원 등록',
            //     icon: 'mdi-account-multiple',
            //     component: () => import('@/components/PlainBlank.vue'),
            // },
            {
                path: '/task/result',
                name: '산출물 등록',
                // icon: 'las la-sign-out-alt',
                component: () => import('@/views/task/ResultForm.vue'),
            },
            {
                path: '/list',
                name: '사업 목록',
                // icon: 'las la-th-list',
                component: () => import('@/views/task/List.vue'),
            },
        ],
    },
    {
        path: '/dev-list',
        name: '개발 목록',
        icon: 'las la-tasks',
        component: () => import('@/views/DevList2.vue'),
    },
    {
        path: '/design',
        name: '스타일 가이드',
        icon: 'las la-brush',
        component: () => import('@/views/StyleGuide.vue'),
    },
]

export default routes
