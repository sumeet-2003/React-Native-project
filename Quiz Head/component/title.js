import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

const Title = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>QuizHeads</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:28,
        fontWeight:'600',
    },
    container:{
        paddingVertical:16,
        alignItems:'center',
    }
})