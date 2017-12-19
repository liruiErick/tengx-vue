import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const Index = (resolve) => {
  import('@/pages/index/index').then((module) => {
    resolve(module)
  })
};
const Classify = (resolve) => {
  import('@/pages/classify/classify').then((module) => {
    resolve(module)
  })
};
const Classlist = (resolve) => {
  import('@/pages/classlist/classlist').then((module) => {
    resolve(module)
  })
};
const Mine = (resolve) => {
  import('@/pages/mine/mine').then((module) => {
    resolve(module)
  })
};
const Search = (resolve) => {
  import('@/pages/search/search').then((module) => {
    resolve(module)
  })
};
const AddNav = (resolve) => {
  import('@/pages/addNav').then((module) => {
    resolve(module)
  })
};
const Course = (resolve) => {
  import('@/pages/course/course').then((module) => {
    resolve(module)
  })
};
const Info = (resolve) => {
  import('@/pages/course/info').then((module) => {
    resolve(module)
  })
};
const Directory = (resolve) => {
  import('@/pages/course/directory').then((module) => {
    resolve(module)
  })
};
const Related = (resolve) => {
  import('@/pages/course/related').then((module) => {
    resolve(module)
  })
};
export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/classlist',
      component: Classlist
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      name: 'search',
      path: '/search',
      component: Search
    },
    {
      name: 'addNav',
      path: '/addnav',
      component: AddNav
    },
    {
      name: 'course',
      path: '/course',
      component: Course,
      children: [
        {
          path: 'Info',
          component: Info
        },
        {
          path: 'directory',
          component: Directory
        },
        {
          path: 'related',
          component: Related
        }
      ]
    }
  ]
});
