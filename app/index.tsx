import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Doma</Text>
      <Link href="/flex">Flex</Link>
      <Link href="/flex-direction">Flex Direction</Link>
    </View>
  );
}
