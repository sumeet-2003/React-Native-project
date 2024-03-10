import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

const About = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.headText}>Instruction</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>
                    1. Start the quiz by Start button.
                </Text>
                
                <Text style={styles.bodyText}>
                    2. There are total 10 MCQ type questions.
                </Text>
                <Text style={styles.bodyText}>
                    3. You will get +10 points for each correct answer.
                </Text>
                <Text style={styles.bodyText}>
                    4. After answering 10 questions click end button.
                </Text>
                <Text style={styles.bodyText}>
                    5. Score will be shown at the result screens at the end.
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
        margin: 10,    },
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