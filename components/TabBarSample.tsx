import React, { PureComponent } from 'react';
import { Animated, Button, Easing, View, Text, StyleSheet } from 'react-native';

class AnimateBox extends PureComponent {
  state = { opacity: new Animated.Value(0), height: new Animated.Value(0) };

  showContent = () => {
    const { opacity, height } = this.state;

    Animated.timing(height, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false  // <-- neccessary
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false  // <-- neccessary
      }).start();
    });
  };

  render() {
    const { opacity, height } = this.state;
    const maxHeight = height.interpolate({ 
      inputRange: [0, 1], 
      outputRange: [0, 1000]  // <-- value that larger than your content's height
    });

    return (
      <View style={styles.box}>
        <Animated.View style={{ opacity: opacity, maxHeight: maxHeight }}>
          <Text style={styles.content}>
            Lorem Ipsum is simply a dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </Animated.View>
        <View style={styles.spacing}>
          <Button title="Show content" onPress={this.showContent} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    paddingHorizontal: 15
  },
  spacing: {
    paddingVertical: 10
  },
  content: {
    fontSize: 16,
    lineHeight: 30,
    color: '#555'
  }
});


export default AnimateBox;