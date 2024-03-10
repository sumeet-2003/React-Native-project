import React from "react";
import { View,Text,StyleSheet ,Image, TouchableOpacity} from "react-native";
const Result=({navigation, route})=>{
    const {score} = route.params
    return(
        <View style={styles.container}>
            <View style={styles.rCont}>
                <Text style={styles.rText}>Result</Text>
            </View>
            <Text style={styles.score}>Score: {score}</Text>
            
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
                    <Text style={styles.text}>
                      Home 
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result;

const styles=StyleSheet.create({
    banner:{
        height:250,
        width:350,
       },
       container:{
        padding:40,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#dde6ed",
        flex:1,
       },
       button:{
        backgroundColor:'#4d5c70',
        padding:10,
        borderRadius:15,
        alignItems:"center",
        marginTop:25,
        borderWidth:4,
        borderColor:"#4d5c70",
        },
        text:{
        alignItems:'center',
        fontSize:20,
        fontWeight:"bold",
        color: "#fff"
        },
        rText:{
        fontSize:34,
        fontWeight: "bold",
        },
        rCont:{
        paddingVertical:16,
        justifyContent:'center',
        alignItems:'center',
        },
        score:{
            fontSize:22,
            fontWeight:"500",
            color:"#000"
        }
})