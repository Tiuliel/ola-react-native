import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da jenela", "Fala parça!");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View>
          <Text>Olá React Native!</Text>
        </View>
        <View>
          <Text>Topo/Cabeçalho</Text>
        </View>
        <View>
          <Text>Conteúdo</Text>
        </View>
        <View>
          <Text>Rodapé</Text>
          <Button title="Toca Aqui!!!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
