import { createStore } from 'vuex'


export default createStore({
    state: {
        user: JSON.parse(<string>localStorage.getItem('profile')),
        category: {}       
    },
    getters: {
        user: (state) => {
            return state.user;
        }
    },
    actions:{
        user(context, user) {
            context.commit('user', user);
        } 
    },
    mutations:{
        user(state, user) {
            state.user = user;
        }
    }
  })
