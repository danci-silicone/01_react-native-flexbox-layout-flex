import { View } from "react-native";

const FlexDirection = () => {
  return (
    // Try setting `flexDirection` to 'column'/'column-reverse'/'row'/'row-reverse'
    <View style={[{ flexDirection: "column" }, styles.elementsContainer]}>
      <View style={{ width: 50, height: 50, backgroundColor: "#EE2C38" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "#FAA030" }} />
      <View style={{ width: 50, height: 50, backgroundColor: "#32B76C" }} />
    </View>
  );
};

const styles = {
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
};

export default FlexDirection;
