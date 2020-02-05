import React, {Component} from 'react';
import {View, SafeAreaView, Modal, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {
  BorderlessButton,
  RectButton,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';

class NewView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  render() {
    //return <View style={{flex: 1, backgroundColor: 'red'}} />;
    const ExampleWithHoc = gestureHandlerRootHOC(() => {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
          <RectButton
            onPress={() => {
              console.warn('press (this wont be printed)');
              this.setState({showModal: false});
            }}>
            <View accessible>
              <Text>I am the gesture handler button</Text>
            </View>
          </RectButton>
        </View>
      );
    });
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center'}}>
        <Modal
          animationType="fade"
          transparent
          visible={this.state.showModal}
          onRequestClose={() => {
            this.setState({showModal: false});
          }}>
          <ExampleWithHoc />
        </Modal>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.setState({showModal: true});
            }}>
            <Text>Press to show modal</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default NewView;
