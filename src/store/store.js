import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

export const store = new Vuex.Store({
    state: {
        events: [],
        error: '',
      
    },

    mutations: {
        setEvent(state){
            
            console.log("before staring to load data");
            console.log(state.events)
            
            firebase.database().ref('posts')
            .on('value',event =>{
               
                let items = [];
                event.forEach(data =>{
                    items.push({"$id": data.key,...data.val()})

                   // console.log(items)
                })
                console.log('after starting to laod data');
                console.log(state.events)
                state.events=[]
               // state.events = items
                for(let i=0; i<items.length;i++){
                    
                    state.events.push(items[i]);
                   
                }
                console.log(state.events);
              //  return state.events;
            });
          //  console.log(state.events)
        //  return state.events;
        }
    },

    actions: {
        addEvent ({ commit }, event) {
          
            firebase.database().ref('posts').push(event)
            .then(() => {
                firebase.database().ref('posts')
                .on('value', data => {
                    const events = data.map(item => { 
                         return { "id": item.id, ...item.val() };
                    });
                    //console.log(data)
                    commit('setEvents', events);
                });
                
            })
            .catch(err => {
                console.log(err);
            })
        },

        
    },

    getters:{
        
        eventList: state => {
            return state.events;
        }
    }

        
    
    
});