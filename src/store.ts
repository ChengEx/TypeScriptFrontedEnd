import { createStore } from 'vuex'

type updateInformationInterface = {
    name: String,
    email: String,
    phone: String
}

export default createStore({
    state: {
        // user: JSON.parse(<string>localStorage.getItem('profile')), 
        // user: {
        //     studentObj:{
        //         _id:'',
        //         name:'',
        //         token:'',
        //         email:'',
        //         phone:''
        //     }
        // }, 
        user: null,
        photo: null  
    },
    getters: {
        user: (state) => {
            return state.user;
        },
        photo: (state) => {
            return state.photo;
        }
    },

    actions:{
        user(context, user) {
            context.commit('user', user);
        },
        photo(context, photo) {
            context.commit('photo', photo);
        }

    },
    mutations:{
        user(state, user) {
            state.user = user;
        },
        photo(state, photo){
            state.photo = photo;
        }
    }
  })
