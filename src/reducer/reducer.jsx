
const initialState = {
    coffeeList:[
        {id:1,name:"AROMISTICO Coffee 1 kg",price:'6.99$',country:'Brazil',count:0},
        {id:2,name:"AROMISTICO Coffee 2 kg",price:'12$', country:'Brazil',count:0},
        {id:3,name:"ARABICA Coffee 1 kg",price:'5.99$', country:'Kenya',count:0 },
        {id:4,name:"ARABICA Coffee 2 kg",price:'10$', country:'Kenya',count:0},
        {id:5,name:"BLUE MAUNTIN Coffee 1 kg",price:'6.99$',country:'Brazil',count:0},
        {id:6,name:"ROBUSTA Coffee 1 kg",price:'7.99$',country:'Columbia',count:0},
        {id:7,name:"TIMIKO Coffee 1 kg",price:'8.30$',country:'Columbia',count:0},
        {id:8,name:"Jacobs Coffee 1 kg",price:'8.30$',country:'Brazil',count:0},
        {id:9,name:"Jacobs Coffee 2 kg",price:'16.50$',country:'Brazil',count:0},
        ],
    filter:''
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case 'CHANGE_FILTER': 
            return {
                ...state,
                filter: action.payload
            }
        case 'SEARCH':
            return {
                ...state,
                search:action.payload
            }
        case 'ADD_COFFEE':
            return {
                ...state,
                coffeeList: state.coffeeList.map((item)=>{
                    if (item.id == action.payload) {
                      return {...item, count:item.count + 1}
                    }
                    return item
                  })
            }
            case 'REMOVE_COFFEE':
                return {
                    ...state,
                    coffeeList: state.coffeeList.map((item)=>{
                        if (item.id == action.payload) {
                          return {...item, count:item.count - 1}
                        }
                        return item
                      })
                }
        default: return state;
    }
}

export default reducer;