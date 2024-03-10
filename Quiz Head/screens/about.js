import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

const About = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.headText}>About</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>
                    Simple quiz application, build using react native, HTML, CSS, SQL and NodeJs. HTML and CSS are used as frontend, react native is used as a framework and SQL, NodeJs are used in backend for fetching API form the internet. Database used is OpenTDB online database which contain questions on different topics like science, politics, art, math etc. Node fetches the data(questions as well as their options) inside the database and render then into the front end using JavaScript.
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.btnText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
};
export default About;
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#dde6ed',
        flex:1,
        padding:15,
        paddingTop:20,
        alignItems:'center',
    },
    headText:{
        fontSize:24,
        textAlign:"center",
        fontWeight:'bold',
    },
    body:{
        paddingTop: 15,
    },
    bodyText:{
        fontSize:20,
    },
    button:{
        width:'20%',
        backgroundColor:'#4d5c70',
        padding:10,
        marginTop:200,
        borderRadius:15,
        alignItems:"center",
        marginBottom:20,
        borderWidth:3,
        borderColor:"#4d5c70",
       },
       btnText:{
            color:'#fff',
       },
})