// const routes = [
//   {
//     path: "/",
//     component: () => import("layouts/MainLayout.vue"),
//     children: [{ path: "", component: () => import("pages/Index.vue") }],
//   },
//
//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: "/:catchAll(.*)*",
//     component: () => import("pages/Error404.vue"),
//   },
// ];
import Blank from '@/components/PlainBlank.vue'
import DirBlank from '@/components/DirBlank.vue'

const routes = [
    {
        path: '/',
        name: 'Root',
        hidden: true,
        icon: 'mdi-home-outline',
        // component: Blank
        // component: () => import('@/views/Index.vue'),
        component: () => import('@/views/MainLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                // component: Blank,
                component: () => import('@/views/TestPage.vue'),
            },
            {
                path: '/task',
                name: '사업 생성',
                icon: 'mdi-home-outline',
                component: DirBlank,
                children: [
                    {
                        path: '/task/basic',
                        name: '기본 정보 등록',
                        icon: 'mdi-information-outline',
                        // component: Blank,
                        component: () => import('@/views/task/TaskBasicForm.vue'),
                    },
                    {
                        path: '/task/researcher',
                        name: '연구원 등록',
                        icon: 'mdi-account-multiple',
                        component: Blank,
                        // component: () => import('@/views/task/ResearcherForm.vue'),
                    },
                    {
                        path: '/task/result',
                        name: '산출물 등록',
                        icon: 'mdi-attachment',
                        component: Blank,
                        // component: () => import('@/views/task/ResultForm.vue'),
                    },
                ],
            },
            {
                path: '/list',
                name: '사업 목록',
                icon: 'mdi-format-list-bulleted-square',
                component: Blank,
                // component: () => import('@/views/task/List.vue'),
            },
            {
                path: '/dev-list',
                name: '개발 목록',
                icon: 'mdi-format-list-checks',
                component: Blank,
                // component: () => import('@/views/task/DevList.vue'),
            },
            {
                path: '/design',
                name: '스타일 가이드',
                icon: 'mdi-palette',
                // component: Blank,
                component: () => import('@/views/StyleGuide.vue'),
            },
        ],
    },
]

export default routes
