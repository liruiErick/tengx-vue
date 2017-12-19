import * as types from '../mutation-type'
import shop from '@/api/shop'
const state = {
    _classes_left: [],  
    _classes_right: [],
    _classitems: [],
    items: [],
    courseItems: [],
    recomList: []
}
const getters = {
    _classes_left: state => state._classes_left,
    _classes_right: state => state._classes_right,
    _classitems: state => state._classitems,
    items: state => state.items,
    courseItems: state => state.courseItems,
    recomList: state => state.recomList
}
const actions = {
    getRecomList({ commit }) {
        shop.getRecomList((recomList) => {
            commit(types.RECEIVE_RECOMLIST, {recomList})
        })
    },
    getItems({ commit }) {
        shop.getItems((items)=> {
            commit(types.RECEIVE_ITEMS, {items})
        })
    },
    getCourseItems({ commit }) {
        shop.getCourseItems((courseItems)=> {
            commit(types.RECEIVE_COURSEITEMS, {courseItems})
        })
    },
    getAllclasses ({ commit }) {
        shop.getClasses((_classes_left, _classes_right) => {
            // console.log(classes)
            commit(types.RECEIVE_CLASSES, {_classes_left, _classes_right})
        })
    },
    getClassItems ({ commit }) {
        shop.getClassItems((_classitems) => {
            commit(types.RECEIVE_CLASSITEMS, {_classitems})
        })
    }
}
const mutations = {
    [types.RECEIVE_RECOMLIST] (state, { recomList}) {
        state.recomList = recomList
    },
    [types.RECEIVE_CLASSES] (state, { _classes_left, _classes_right }) {
        state._classes_left = _classes_left,
        state._classes_right = _classes_right
    },
    [types.RECEIVE_CLASSITEMS] (state, { _classitems }) {
        state._classitems = _classitems
    },
    [types.RECEIVE_ITEMS] (state, { items }) {
        state.items = items
    },
    [types.RECEIVE_COURSEITEMS] (state, {courseItems}) {
        state.courseItems = courseItems
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}