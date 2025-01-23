import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Cidades brasileiras </Text>
      <ScrollView>
        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Sao paulo</Text>
          <Text style={styles.pontos}> --- Pontos turisticos --- </Text>
          //////////////////////////////////////////////////////////////////////////////////////
          <ScrollView horizontal>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Parque do Ibirapuera</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Pinatoqueta</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Museu</Text>
            </View>
          </ScrollView>
        </View>
        /////////////////////////////////////////////////////////////////////////////////////////////
        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Salvador</Text>

          <Text style={styles.pontos}> --- Pontos turisticos --- </Text>

          <ScrollView horizontal>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Pelourinho</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Igreja de Bonfim</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Praia da barra</Text>
            </View>
          </ScrollView>
        </View>
        ///////////////////////////////////////////////
        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Curitiba</Text>

          <Text style={styles.pontos}> --- Pontos turisticos --- </Text>
          <ScrollView horizontal>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Jardim Botânico</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Museu Oscar Niemeye</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Rua das Flores</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Recife</Text>

          <Text style={styles.pontos}> --- Pontos turisticos --- </Text>

          <ScrollView horizontal>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Praia de Boa Viagem</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Instituto Ricardo Brennand</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Marco Zero</Text>
            </View>
          </ScrollView>
        </View>
        //////////////////////////////////////
        <View style={styles.fundoC}>
          <Text style={styles.cidades}> Porto Alegre</Text>

          <Text style={styles.pontos}> --- Pontos turisticos --- </Text>

          <ScrollView horizontal>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Usina do Gasômetro</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Parque Redenção </Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Caminho dos Antiquários</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.fundoC}>
          <Text style={styles.cidades}>Maceió</Text>

          <Text style={styles.pontos}> --- Pontos turisticos --- </Text>
          <ScrollView horizontal>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Praia do Francês</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Igreja de Bonfim</Text>
            </View>
            <View style={styles.edit}>
              <Text style={styles.cidades2}>Praia da barra</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cidades: {
    fontSize: 35,
    color: '#800000',
  },
  pontos: {
    fontSize: 30,
    color: '#800000',
  },
  fundoC: {
    backgroundColor: '#4169E1',
    marginTop: 30,
    borderRadius: 20,
    padding: 30,
  },
  cidades2: {
    fontSize: 30,
    color: 'black',
  },
  edit: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    fontSize: 30,
    marginLeft: 9,
  },
});
