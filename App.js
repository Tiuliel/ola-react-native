import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
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
      <SafeAreaView style={estilos.container}>
        <View>
          <Text>Olá React Native!</Text>
        </View>
        <View style={estilos.cabecalho}>
          <Text>Topo/Cabeçalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text>Conteúdo</Text>
        </View>
        <View style={estilos.rodape}>
          <Text>Rodapé</Text>
          <Button title="Toca Aqui!!!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    /*  justifyContent: "center",
    flexDirection: "row-reverse", */
  },
  cabecalho: {
    backgroundColor: "lightgreen",
    flex: 0.7,
  },

  conteudo: {
    backgroundColor: "yellow",
    flex: 4,
  },

  rodape: {
    backgroundColor: "orange",
    flex: 0.5,
  },
});
