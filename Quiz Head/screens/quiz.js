import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

const shuffleArray=(array)=>{
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz=({navigation})=>{
    const [questions, setQuestions]= useState();
    const [ques, setQues]=useState(0);
    const [options, setOptions]=useState([])
    const [score, setSecore]=useState(0)  
    const [isLoading, setIsLoading]=useState(false)
    const getQuiz=async()=>{
        setIsLoading(true)
        const url='https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res= await fetch(url);
        const data = await res.json();
        console.log(data.results[0]);
        setQuestions(data.results);
        setOptions(genetereOptionsAndShuffle(data.results[0]))
        setIsLoading(false)
    }
    useEffect(()=>{
        getQuiz()
    },[])

    const handleNextPress=()=>{
        setQues(ques+1)
        setOptions(genetereOptionsAndShuffle(questions[ques+1]))

    }
    const genetereOptionsAndShuffle=(_question)=>{
        const options=[..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)
        return options
    }
    const handleSelectedOption=(_option)=>{
        if(_option===questions[ques].correct_answer){
            setSecore(score+10)
        }
        if(ques!==9){
            setQues(ques+1)
            setOptions(genetereOptionsAndShuffle(questions[ques+1]))
        }
        
    }
    const handleShowResult=()=>{
        navigation.navigate('Result',{
            score: score
        })
    }

    return(
        <View style={styles.container}>
            {isLoading ? <View style={{ justifyContent:"center", alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'500',color:'#000'}}>LOADING...</Text>
            </View>: questions &&
            <View style={styles.parent}>
            <View style={styles.que}>
                <Text style={styles.quetext}>Q. {decodeURIComponent( questions[ques].question)}</Text>
            </View>
            <View style={styles.option}>
                <TouchableOpacity style={styles.optbutton } onPress={()=>handleSelectedOption(options[0])}>
                    <Text style={styles.opttext}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optbutton} onPress={()=>handleSelectedOption(options[1])}>
                    <Text style={styles.opttext}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optbutton} onPress={()=>handleSelectedOption(options[2])}>
                    <Text style={styles.opttext}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optbutton} onPress={()=>handleSelectedOption(options[3])}>
                    <Text style={styles.opttext}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>PREVIOUS</Text>
                </TouchableOpacity >
                {ques===9 && <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                    <Text style={styles.text}>END ❔</Text>
                </TouchableOpacity>}
                {ques!==9 &&  <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                    <Text style={styles.text}>SKIP</Text>
                </TouchableOpacity>}
            </View>
            </View>
            }
        </View>
    )
}

export default Quiz;

const styles=StyleSheet.create({
    container:{
        padding:15,
        height:"100%",
        paddingTop:30,
        paddingHorizontal:20,
        // justifyContent:"center",
        backgroundColor:"#dde6ed",
    },
    parent:{
        height:'100%',
    },
    que:{
        marginVertical:20,
    },
    option:{
        marginVertical:20,
        flex:1,
    },
    quetext:{
        fontSize:24,
    },
    opttext:{
        fontSize:18,
        color:'#000',
    },
    optbutton:{
        paddingVertical:10,
        borderWidth:3,
        borderRadius:15,
        marginVertical:7,
        paddingHorizontal:8,
    },
    buton:{
        paddingVertical:15,
        justifyContent: "space-between",
        flexDirection:"row",
    },
    button:{
        paddingVertical:15,
        // justifyContent: "space-between",
        flexDirection:"row",
        backgroundColor:'#4d570',
        padding:10,
        borderRadius:15,
        alignItems:"center",
        borderWidth:3,
    },
    text:{
        alignItems:'center',
        fontSize:12,
        fontWeight:"bold",
       },
})