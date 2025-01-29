import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Image,
  FlatList
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {estilo.fundo}>
      <Text style = {estilo.fonte2}>docinho</Text>

<FlatList 
data = {Sabores}
renderItem = {({item})=>
  <View>
  <Text style = {estilo.fonte}> {item.sabor}  {item.descricao} 
  </Text>
   <Image style = {estilo.edit} source =  {item.imagem}/>
  
  </View>
}
/>
    </SafeAreaView>
  );
}
const Sabores = [
  { sabor: 'Brigadeiro:', descricao:  'É um doce feito com leite condensado, chocolate em pó, manteiga e granulado. Fica cremoso e tem um sabor bem intenso de chocolate.', imagem: require('./assets/brigadeiro.jpg')
  },

  { sabor: 'Beijinho:', descricao: 'Semelhante ao brigadeiro, mas no lugar do chocolate, é feito com leite condensado, coco ralado e um toque de manteiga. O granulado pode ser de coco ou açúcar cristal.',  imagem: require('./assets/bei.jpg')},

  { sabor: 'Pé-de-moleque:', descricao: 'É um doce crocante feito com amendoim torrado e caramelizado com açúcar. A mistura fica firme, com um contraste de textura entre o crocante do amendoim e o açúcar derretido',  imagem: require('./assets/pe.jpg') },

  { sabor: 'Bicho de pé:', descricao: 'Doce que lembra o brigadeiro, mas é feito com leite condensado, coco e corante rosa. Tem um sabor bem doce e a cor característica.',  imagem: require('./assets/bicho.jpg') },

  { sabor: 'Mousse de maracujá:', descricao: 'Um creme leve e aerado feito com suco de maracujá, leite condensado, creme de leite e gelatina. Fica bem fresquinho e com aquele azedinho do maracujá que combina com a doçura do leite condensado.',  imagem: require('./assets/mouse.jpg') },
];

const estilo = StyleSheet.create({
  fonte: {
    fontSize:30,
    backgroundColor: '#4682B4',
    color: '#F0FFFF',
    borderRadius: 10,
    padding:20,
    marginTop:20,
    textAlign: 'center'
  },

  fonte2: {
    fontSize:50,
    backgroundColor: '#4682B4',
    color: '#F0FFFF',
    borderRadius: 10,
    padding:20,
    marginTop:20,
    textAlign: 'center'
  },
  fundo:{
    backgroundColor: '#B0E0E6',
    padding:90
  },
 edit: {
   width: 250,
   height: 250,
   borderRadius:20,
   marginTop:20,
   marginBottom: 20,
alignContent: 'center'
 }
  
});
  