import { StatusBar } from 'expo-status-bar';

import{useState} from 'react';

import {
        Button,
        FlatList, 
        StyleSheet, 
        Text, 
        TextInput, 
        View 
} from 'react-native';

import {PROTOCOL,LANGUAGE,UNITS,CNT,APPID,BASE_URL} from '@env';

export default function App() {

  // const endPoint = `${BASE_URL}lang=${LANG}&units=${UNITS}&cnt=${CNT}&appid=${APPID}&q=`

  const [cidade, setCidade] = useState('')
  const capturaCidade = (cidade) => {setCidade(cidade)}
  
  const [previsoes, setPrevisoes] = useState([]);

  const obterPrevisoes = () => {
    const endPoint = `${PROTOCOL}://${BASE_URL}?lang=${LANGUAGE}&units=${UNITS}&cnt=${CNT}&appid=${APPID}&q=${cidade}`
    fetch(endPoint)
    .then(dados => {
      return dados.json()
    })
    .then(dados => {
      setPrevisoes(dados['list'])
    })
  }

  return (
    <View style={styles.containerView}>
      <View styles={styles.entradaView}>
        <TextInput
          style={styles.cidadeTextInput}
          value={cidade}
          onChangeText={capturaCidade}
          placeholder="Digite o nome de uma cidade"
        />
        <Button
          title="ok"
          onPress={obterPrevisoes}
        />
      </View>

      <FlatList
        data={previsoes}
        renderItem={p =>(
          <Cartao>
            <Text>{JSON.stringify(p)}</Text>
          </Cartao>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    padding: 40,

  },
  entradaView:{
    marginBottom:8
  },
  cidadeTextInput: {
    padding: 4,
    borderBottomColor: '#FF8100',
    borderBottomWidth: 2 ,
    marginBottom:4
  }
});
