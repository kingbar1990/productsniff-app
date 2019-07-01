import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Linking,
  Text,
  View,
  Image,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  handleClick = () => Linking.openURL("https://app.ohmnilabs.com/");
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: 80 }}
          source={{
            uri:
              "https://img1.wsimg.com/isteam/ip/dcb5777b-9d0c-4ceb-b88c-cfc571335d04/logo/0e13ddeb-7b82-4ed0-98c8-963fdccdfd5b.png/:/rs=h:180/ll"
          }}
        />
        <Text style={styles.desc}>
          Shop at {"\n"}Johnstone Supply, remotely through live video, ~30
          minute delivery
        </Text>
        <Text style={styles.instructions}>
          Browse the store or video chat with{"\n"}in-store employees to pick
          out{"\n"}products. Have them delivered immediately.
        </Text>
        <View style={styles.button}>
          <Button color="black" title="Shop now" onPress={this.handleClick} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 10,
    backgroundColor: "#ffffff"
  },
  desc: {
    fontSize: 32,
    textAlign: "left",
    marginTop: 90,
    marginBottom: 10
  },
  instructions: {
    fontSize: 20,
    color: "#1b1b1b"
  },
  button: {
    textAlign: "left",
    backgroundColor: "white",
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 1,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 30
  }
});
