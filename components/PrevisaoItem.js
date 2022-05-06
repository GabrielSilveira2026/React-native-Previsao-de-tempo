import { 
    Image,
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'

const PrevisaoItem = () => {
  return (
    <Cartao
        estilos={styles.cartao}>
        <View style={styles.tela}>
            <Image style={styles.imagem}
                source={{url:''}}
            />
        </View>
    </Cartao>
  )
}

export default PrevisaoItem

const styles = StyleSheet.create({
    cartao:{
        marginBottom: 8,
    },
    tela: {
        flexDirection:'row'
    },
    imagem:{
        width: 50,
        height: 50
    }
})