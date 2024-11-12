import { View } from "react-native";

const Flex = () => {
  return (
    // Try setting `flexDirection` to 'column'/'row'
    <View style={[styles.elementsContainer, { flexDirection: "row" }]}>
      <View style={{ flex: 1, backgroundColor: "#EE2C38" }} />
      <View style={{ flex: 2, backgroundColor: "#FAA030" }} />
      <View style={{ flex: 3, backgroundColor: "#32B76C" }} />
    </View>
  );
};

const styles = {
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    marginTop: 48,
    padding: 20,
  },
};

export default Flex;
