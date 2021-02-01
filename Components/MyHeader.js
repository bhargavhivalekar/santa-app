import * as React from "react";
import { ImagePropTypes } from "react-native";
import {View} from 'react-native';
import {Header} from "react-native-elements"

const MyHeader=(Props)=>{
    return(
        <Header
            centerComponent={{
                text:Props.title,
                style:{color:"red",fontSize:20,fontweight:"bold"}

            }}
            backgroundColor="blue"
        />
    )
    
}
export default MyHeader 