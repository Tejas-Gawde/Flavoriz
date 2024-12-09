import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../views/RecipesView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SigninView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/recipes/:slug',
      name: 'recipe-detail',
      component: () => import('../views/RecipeReadView.vue'),
      props: (route) => ({ slug: route.params.slug, recipeId: route.query.recipe })
    },
    {
      path: '/add-recipe',
      name: 'add-recipe',
      component: () => import('../views/AddView.vue'),
      props: (route) => ({ slug: route.params.slug, recipeId: route.query.recipe })
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotfoundView.vue')
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.path === '/recipes' && !to.query.page) {
    next({
      path: to.path,
      query: { ...to.query, page: '1' }
    })
  } else {
    next()
  }
})

export default router
