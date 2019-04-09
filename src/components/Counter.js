import React,{ Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Counter extends Component{

    // increaseCounter()
    // {
    //     return this.setState({
    //         counter:this.state.counter + 1
    //     });
    // }
    // decreaseCounter()
    // {
    //     return this.setState({
    //         counter:this.state.counter - 1
    //     });
    // }

    render(){

        return(

            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.props.increase()}>
                <Text style={{ fontSize:30 }}>Increase</Text>
                </TouchableOpacity>
                <Text style={{ fontSize:30 }}>{this.props.counter}</Text>
                <TouchableOpacity onPress={()=>this.props.decrease()}>
                <Text style={{ fontSize:30 }}>Decrease</Text>
                </TouchableOpacity>
            </View>

        );
    }


}

function mapStateToProps(state)
{
    return {
        counter : state.counter
    }
}

function mapDispatchToProps(dispatch)
{
    return {
      increase: () => dispatch({ type: 'INCREMENT' }),
      decrease: () => dispatch({ type:'DECREMENT'})

    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);

