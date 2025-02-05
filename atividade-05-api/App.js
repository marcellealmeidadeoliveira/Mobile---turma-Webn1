import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';

const request = async (callback) => {
  const response = await fetch('https://shrekofficial.com/0/cast/top');
  const parsed = await response.json();
  callback(parsed);
};

export default function App() {
  const [registros, setRegistros] = useState([]);
  useEffect(() => {
    request(setRegistros);
  }, []);

  return (
    <FlatList
      data={registros}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({ item }) => (
        <View>
          <View style={estilo.fundo3}>
            <View style={estilo.fundo}>
              <Text style={estilo.cor}>
                {' '}
                Nome dos dubladores: - {item.name}
              </Text>
            </View>

            <View style={estilo.fundo2}>
              <Text style={estilo.cor}>
                {' '}
                Nome do personagem: - {item.characters}
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const estilo = StyleSheet.create({
  cor: {
    color: 'black',
    fontSize: 50,
    textAlign: 'center',
    padding: 20,
  },
  fundo: {
    backgroundColor: '#808000',
    borderRadius: 30,
    padding: 10,
    marginTop: 50,
    marginBottom: 40,
  },
  fundo2: {
    backgroundColor: '#556B2F',
 borderRadius: 30,
    padding: 10,
      marginTop: 50,
    marginBottom: 40,
  },
  fundo3: {
    backgroundColor: '#006400',
   borderTopColor:'#228B22',
   borderTopWidth:40
  },
});
