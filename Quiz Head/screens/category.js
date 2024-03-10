import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Category = ()=>{
    return(
        <View>
            <View>
                <Text>Category</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Category 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Category 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Category 3</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Category;