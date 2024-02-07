import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import estilos from "./src/stylesheets/estilos";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da jenela", "Fala parça!");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View>
          <Text>Olá Rapazes!</Text>
        </View>
        <View style={estilos.cabecalho}>
          <Text style={estilos.textcabecalho}>React Native </Text>
        </View>
        <View style={estilos.conteudo}>
          <Text style={estilos.textconteudo}>
            React Native é uma biblioteca JavaScript criada pelo Facebook. É
            usada para desenvolver aplicativos para os sistemas Android e iOS de
            forma nativa.
          </Text>
        </View>
        <View style={estilos.rodape}>
          <Text style={estilos.textrodape}>Software</Text>
          <Button title="Toca Aqui!!!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
