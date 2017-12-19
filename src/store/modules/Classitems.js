import * as types from '../mutation-type'
import shop from '@/api/shop'
const state = {
    all: [],
    selectId: 1
}
const getters = {
    allClassItems: state => state.all
}
const actions = {
    getClassItems ({ commit }) {
        shop.getClassItems(classItems => {
            // console.log(classItems)
            commit(types.RECEIVE_CLASSITEMS, {classItems})
        })
    }
}
const mutations = {
    [types.RECEIVE_CLASSITEMS] (state, { classItems }) {
        state.all = classItems
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}