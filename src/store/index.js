import Vue from 'vue'
import Vuex from 'vuex'
import classes from './modules/classes'
import Classitems from './modules/Classitems'

Vue.use(Vuex)


const state = {
    banners: [
        {imageurl: 'https://img3.mukewang.com/szimg/5a32110f00017e4e09000300.jpg'},
        {imageurl: 'https://img3.mukewang.com/szimg/5a2f3e9f000109e809000300.jpg'},
        {imageurl: 'https://img3.mukewang.com/szimg/5a2e5a3b000162b009000300.jpg'},
        {imageurl: 'https://img4.mukewang.com/szimg/5a28d3b80001bb1709000300.jpg'},
        {imageurl: 'https://img2.mukewang.com/szimg/5a32108f0001eefb09000300.jpg'},
        {imageurl: 'https://img2.mukewang.com/szimg/5a309cfe0001a37809000300.jpg'},
    ]
}
export default new Vuex.Store ({
    state,
    modules: {
        classes,
        Classitems
    }
})
