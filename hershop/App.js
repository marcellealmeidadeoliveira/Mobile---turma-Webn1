import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={estilo.fundo3}>
      <View style={estilo.fundo1}>
        <Image style={estilo.imagem} source={require('./assets/logo.jpg')} />
      </View>

      <ScrollView>
        <View style={estilo.center}>
          <Text style={estilo.fonte}>Camisetas</Text>
        </View>
        <View style={estilo.fundo2}>
          <ScrollView horizontal>
            <Image
              style={estilo.imagem2}
              source={require('./assets/roupa1.jpg')}
            />
           
            <Image
              style={estilo.imagem2}
              source={require('./assets/roupa3.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/roupa4.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/roupa5.jpg')}
            />
           
          </ScrollView>
        </View>

        <View style={estilo.center}>
          <Text style={estilo.fonte}>Saias</Text>
        </View>
        <View style={estilo.fundo2}>
          <ScrollView horizontal>
            <Image
              style={estilo.imagem2}
              source={require('./assets/roupa2.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/saia1.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/saia3.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/saia2.jpg')}
            />
          </ScrollView>
        </View>

         <View style={estilo.center}>
          <Text style={estilo.fonte}>Calças</Text>
        </View>
        <View style={estilo.fundo2}>
          <ScrollView horizontal>
            <Image
              style={estilo.imagem2}
              source={require('./assets/calca1.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/calca2.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/calca3.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/calca4.jpg')}
            />
          </ScrollView>
        </View>

         <View style={estilo.center}>
          <Text style={estilo.fonte}>Calçados</Text>
        </View>
        <View style={estilo.fundo2}>
          <ScrollView horizontal>
            <Image
              style={estilo.imagem2}
              source={require('./assets/sapato.jpg')}
            />
         
            <Image
              style={estilo.imagem2}
              source={require('./assets/sapato2.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/sapato3.jpg')}
            />
            <Image
              style={estilo.imagem2}
              source={require('./assets/sapato4.jpg')}
            />
  
          </ScrollView>
        </View>
                <View style={estilo.fundo1}>
        <Image style={estilo.imagem} source={require('./assets/logo.jpg')} />
      </View>     
      </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  imagem: {
    height: 150,
    width: 150,
    marginTop: 60,
    borderRadius: 40,
  },
  fundo1: {
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
  },
  fundo2: {
    marginTop: 20,
    backgroundColor: '#D8BFD8',
    borderRadius: 10,
    alignItems: 'center',
  },

  imagem2: {
    height: 250,
    width: 250,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  fonte: {
    fontSize: 50,
    color: 'black'
  },
  center: {
    alignItems: 'center',
  },
  fundo3:{
    backgroundColor:'black'
  },
  
});
