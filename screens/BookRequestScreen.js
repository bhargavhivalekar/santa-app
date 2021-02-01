import * as React from "react"
import {View,Text,KeyboardAvoidingView,TextInput,TouchableOpacity} from "react-native"
import firebase from "firebase"
import db from "../Config"



export default class BookRequestScreen extends React.Component{
    
    constructor(){
        super();
        this.state={
          userId:firebase.auth().currentUser.email,
          bookName:"",
          reasonToRequest:""  
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    addRequest=(bookName,reasonToRequest)=>{
        db.collection("requested_books").add({
            user_Id:this.state.userId,
            book_name:bookName,
            reason_to_request:reasonToRequest,
            request_id:this.createUniqueId()
        })

        this.setState({
            bookName:"",
            reasonToRequest:""
        })

        return alert ("book Request Successfully")
    }
render(){
    return(
        <View>
            <Text>Book Request Screen</Text>
            <KeyboardAvoidingView>
                <TextInput
                    placeholder={"enter Book Name"}
                    onChangeText={(text)=>{this.setState({bookName:text})}}
                    value={this.state.bookName}
                />
                <TextInput
                    placeholder={"why do you need the book?"}
                    multiline
                    numberOfLines={8}
                    onChangeText={(text)=>{this.setState({reasonToRequest:text})}}
                    value={this.state.reasonToRequest}
                />
                <TouchableOpacity
                    onPress={()=>{this.addRequest(this.state.bookName,this.state.reasonToRequest)}}
                >
                    <Text>REQUEST</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}
}