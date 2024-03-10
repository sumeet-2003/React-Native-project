import React from "react";
import { Image,View,Text,StyleSheet, Button, TouchableOpacity } from "react-native";
import { bounce } from "react-native/Libraries/Animated/Easing";
import Title from "../component/title";
const Home=({navigation})=>{
    return(
        <View style={styles.main}>
            <Title/>
            <View style={styles.container}>
                <Image source={require('../images/1.jpg')}
                    style={styles.banner}
                    resizeMode='contain'
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button}>
                    <Text style={styles.text}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Inst')} style={styles.button}>
                    <Text style={styles.text}>Instructions</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button}>
                    <Text style={styles.text}>About</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
   banner:{
    height:300,
    width:300,
   },
   container:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
   },
   main:{
    paddingTop:30,
    paddingHorizontal:20,
    justifyContent:"center",
    height:'100%',
    backgroundColor:"#dde6ed",
   },
   button:{
    width:'100%',
    backgroundColor:'#4d5c70',
    padding:10,
    borderRadius:15,
    alignItems:"center",
    marginBottom:20,
    borderWidth:3,
    borderColor:"#4d5c70",
   },
   text:{
    alignItems:'center',
    fontSize:16,
    fontWeight:"bold",
    color:"#fff"
   },
})