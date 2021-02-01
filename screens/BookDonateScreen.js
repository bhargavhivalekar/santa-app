import * as React from "react"
import {View,Text,FlatList,TouchableOpacity} from "react-native"
import {ListItem} from "react-native-elements"
import db from "../Config"

export default class BookDonateScreen extends React.Component{

    constructor(){
        super();
        this.setState={
            requestBookList:[]
        }
        this.requestRef=null
    }

    componentDidMount(){
        this.getRequestedBookList()
    }

    getRequestedBookList=()=>{
        this.requestRef=db.collection("requested_books")
        .onSnapshot((snapshot)=>{
            var requestedbooklist=snapshot.docs.map(document=>document.data());
            this.setState({requestBookList:requestedbooklist})
        })
    }

    renderItem=({item,i})=>{
        return(
            <ListItem
                key={i}
                title={item.book_name}
                subtitle={item.reason_to_request}
                titleStyle={{color:"black",fontWeight:"bold"}}
                rightElement={
                    <TouchableOpacity>
                        <Text>Donate</Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        )
    }

    keyExtractor=(item,index)=>index.toString();

    
    render(){
        return(
            <View>
                <Text>Book Donate Screen</Text>

                <View>
                    {
                        this.state.requestBookList.length===0
                        ?(
                            <View>
                                <Text>List Of All Requested Books</Text>
                            </View>
                        )
                        :(
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.requestBookList}
                                renderItem={this.renderItem}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}