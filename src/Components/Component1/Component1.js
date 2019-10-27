import React, { Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from "react-native";

const Component2 = ()=> {
  // const [text, setText] = useState('hello rukee')
  const [count, setCount] = useState('hello');
  return (
    <View>
      <TextInput placeHolder="enter text"/>
    </View>
  )
}

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Brad",
      showName: false,
      message: this.props.message
    };
  }
  static defaultProps = {
    message: "Hi there... "
  };
  onPress = () => {
    console.log("hello boo i was clicked");
  };
  render() {
    let name = this.state.showName ? this.state.name : "No name";
    return (
      // parent view
      <View>
        <View className="heading">
          <Text style={{ textAlign: "left", backgroundColor: "red" }}>
            Hello boo... i am heading 
          </Text>
        </View>
        <View className="flex-container" style={styles.flexContainer}>
          <View style={styles.textContainerOne}>
            <Text>v1</Text>
          </View>
          <TouchableOpacity style={styles.textContainerTwo}>
            <View>
              <Text>v2</Text>
            </View>
          </TouchableOpacity>
          <TouchableHighlight
            style={styles.textContainerThree}
            onPress={this.onPress}
          >
            <View>
              <Text>v3</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Component2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row"
  },
  textContainerOne: {
    padding: "20px",
    height: "300px",
    backgroundColor: "green",
    flex: "1"
  },
  textContainerTwo: {
    padding: "20px",
    height: "300px",
    backgroundColor: "yellow",
    flex: "1"
  },
  textContainerThree: {
    padding: "20px",
    height: "300px",
    backgroundColor: "cyan",
    flex: "1"
  },
  myView: {
    backgroundColor: "black"
  },
  myText: {
    color: "white"
  }
});

export default Component1;
