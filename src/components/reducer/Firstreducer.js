//State Initialization
const initialState = {
    counter : 0
    };

const Firstreducer = (state = initialState,action) => {

        switch(action.type){
            case 'INCREMENT':
            return {counter:state.counter+1}
            case 'DECREMENT':
            return {counter:state.counter-1}
        }
    
        return state;
    
};

export default Firstreducer;