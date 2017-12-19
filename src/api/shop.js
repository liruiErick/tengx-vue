import * as data from './mock-data.js'
export default {
    getClasses (cb) {
        setTimeout(() => cb(data._classes_left,data._classes_right), 100)
    },
    getClassItems (cb) {
        setTimeout(() => cb(data._classitems), 100)
    },
    getItems (cb) {
      setTimeout(() => cb(data.items), 100)
    },
    getCourseItems (cb) {
      setTimeout(() => cb(data.courseItems), 100)
    },
    getRecomList (cb) {
      setTimeout(() => cb(data.recomList), 100)
    }
}