import * as React from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class DropDownView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        expand:this.props.expand,
    }
  }


  handlePress = ()=>{
    this.setState({
      expand:this.state.expand ? false : true,
    })
  }
 
  renderBody = () =>{
    let { expand } = this.state;
    if(expand){
      return(
        <View style={styles.header}>
            {this.props.renderItem}
        </View>
      );
    }else return(<View/>);
  }

  render(){
    const { expand } = this.state;
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{this.props.label}</Text>
        <TouchableOpacity onPress={()=>this.handlePress()}>
          <Text style={styles.icon}>{expand ? "-" : "+"}</Text>
        </TouchableOpacity>
      </View>
      {this.renderBody()}
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    margin:5,
    borderRadius:5,
    padding:10,
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon:{
    fontSize:20,
    fontWeight:"bold"
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:5
  }
});



DropDownView.PropTypes = {
    expand: PropTypes.bool,
    label: PropTypes.string
}

DropDownView.defaultProps = {
    expand : false,
    label : 'Label'
}

export default DropDownView;