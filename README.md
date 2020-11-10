# React Native Dropdown View

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)

### Installation

#### Using npm
```bash
$ npm i react-native-dropdownview --save
```
#### Using yarn
```bash
$ yarn add react-native-dropdownview
```

### Basic Usage

<p align="rigth">
  <img alt="react-native-awesome-alerts" src="https://media.giphy.com/media/F1OvUzgTlEsA5g7SFR/giphy.gif">
</p


```jsx
import * as React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

import { DropDownView } from 'react-native-dropdownview';

const { width } = Dimensions.get("window");

export default class App extends React.Component {

 renderItem = () => {
   return(
     <View>
      <Text 
      style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam consectetur dapibus. Integer commodo sagittis nibh eu finibus. Duis vulputate tristique velit vel sollicitudin. Cras sed fermentum lorem, in luctus sem.</Text>
     </View>
   );
 }
  render(){
    return (
      <View style={styles.container}>
        <DropDownView 
          renderItem = {this.renderItem()}
          title="Header"
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },text:{
    maxWidth:width-25,
    fontSize:14,
    fontWeight:"300"
  }
});

```

## License

Released under the [Mit License](https://opensource.org/licenses/MIT)
