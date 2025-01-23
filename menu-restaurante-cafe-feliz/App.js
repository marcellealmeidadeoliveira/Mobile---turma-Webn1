import{SafeAreaView,Text, StyleSheet,Image, ScrollView} from 'react-native';


export default function App(){

return(
  
<SafeAreaView style = {estilo.container2}>

<ScrollView>
<Text style = {estilo.container}>
Happy Coffe 🍔
</Text>


<Text style = {estilo.container}>

<Text style = {estilo.fonte}> 
Eggscon express

</Text>

</Text>


<Image  style= {estilo.editar} source = {require('./cafe1.jpg')}
/>
<Text style = {estilo.fonte2}>
Enroladinho de bacon e ovos,
acompanhado com cafe expresso.
</Text>
<Text style = {estilo.fonte3}>
- Preço: 15,90 ✅ - ❌
</Text>

<Text style = {estilo.container}>
<Text style = {estilo.fonte}>
Burgue IceCoffe
</Text>
</Text>

<Image  style= {estilo.editar} source = {require('./cafe2.jpg')}
/>

<Text style = {estilo.fonte2}>
Hamburgue de ovos e queijo,
com cafe gelado ao leite.
</Text>
<Text style = {estilo.fonte3}>
- Preço: 20,50 ✅ - ❌
</Text>

<Text style = {estilo.container}>
<Text style = {estilo.fonte}>
croissant delux
</Text>
</Text>

<Image  style= {estilo.editar} source = {require('./cafe3.jpg')}
/>

<Text style = {estilo.fonte2}>
croissant com complementos de queijo,
alface e tomate.
</Text>
<Text style = {estilo.fonte3}>
- Preço: 15,50 ✅ - ❌
</Text>


<Text style = {estilo.container}>
<Text style = {estilo.fonte}>
fluffy pancakes
</Text>
</Text>

<Image  style= {estilo.editar} source = {require('./cafe4.jpg')}
/>

<Text style = {estilo.fonte2}>
Panquecas fofas com morangos.
</Text>
<Text style = {estilo.fonte3}>
- Preço: 22,99 ✅ - ❌
</Text>

<Text style = {estilo.container}>
<Text style = {estilo.fonte}> ChocoCakesTwo
</Text>
</Text>

<Image  style= {estilo.editar} source = {require('./cafe5.jpg')}
/>

<Text style = {estilo.fonte2}>
duas fatias de bolo de chocolate
com morango.
</Text>
<Text style = {estilo.fonte3}>
- Preço: 14,50 ✅ - ❌
</Text>

<Text style = {estilo.container}>
<Text style = {estilo.fonte}>Doce de morango
</Text>
</Text>

<Image  style= {estilo.editar} source = {require('./cafe6.jpg')}
/>

<Text style = {estilo.fonte2}>
Bolinhos de morango com chantily
</Text>
<Text style = {estilo.fonte3}>
- Preço: 13,99 ✅ - ❌
</Text>


<Text style = {estilo.container}>
<Text style = {estilo.fonte}> ChocoBear
</Text>
</Text>

<Image  style= {estilo.editar} source = {require('./cafe7.jpg')}
/>

<Text style = {estilo.fonte2}>
Doces de geleia formato de urso sabor chocolate.
</Text>
<Text style = {estilo.fonte3}>
- Preço: 13,99 ✅ - ❌
</Text>

<Text style = {estilo.container}>
<Text style = {estilo.fonte}> CAtllffes
</Text>
</Text>

<Image  style= {estilo.editar} source = {require('./cafe8.jpg')}
/>

<Text style = {estilo.fonte2}>
wallfes formato de gato
</Text>
<Text style = {estilo.fonte3}>
- Preço: 10,99 ✅ - ❌
</Text>

<Text style = {estilo.container}>
<Text style = {estilo.fonte}> Coffe express
</Text>
</Text>

<Image  style= {estilo.editar} source = {require('./cafe9.jpg')}
/>

<Text style = {estilo.fonte2}>
Cafe expresso.
</Text>
<Text style = {estilo.fonte3}>
- Preço: 7,50 ✅ - ❌
</Text>

<Text style = {estilo.container}>
<Text style = {estilo.fonte}> Coffe kitty
</Text>
</Text>

<Image  style= {estilo.editar} source = {require('./cafe10.jpg')}
/>

<Text style = {estilo.fonte2}>
Cafe formto de gato
</Text>
<Text style = {estilo.fonte3}>
- Preço: 8,20 ✅ - ❌
</Text>
</ScrollView>
</SafeAreaView>


)
}

const estilo = StyleSheet.create({ 
  container:{

    flex:1,
    height:90,
    backgroundColor:'#6B8E23',
    borderRadius:20,
    marginTop:70,
    fontSize:30,

    
  },

container2:{
  flex: 1,
  backgroundColor: '#DEB887',
 
},

editar:{
  marginRight: 130,
  marginTop:50,
  height:240,
  width:240,
  borderRadius: 30,
  marginBottom: 10
},

fonte:{
  fontSize:50,
  color: 'white',
},

fonte2:{
  fontSize:30,
  color: 'white',
  backgroundColor:'#556B2F',
  borderRadius:10
},


fonte3:{
  fontSize:40,
  color: 'white',
  backgroundColor:'#556B2F',
  borderRadius:10,
  
},

});

