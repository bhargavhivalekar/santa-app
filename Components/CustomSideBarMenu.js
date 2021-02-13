import * as React from "react"
import {View,TouchableOpacity,Text,StyleSheet} from "react-native"
import {DrawerItems} from "react-navigation-drawer"


export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <DrawerItems {...this.props}/>
                </View>

                <View>
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{
                            this.props.navigation.navigate("WelcomeScreen")
                        }}
                    >
                        
                        <Text style={styles.title}>log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"orange"
            
  
        },

        button:{
          justifyContent:"center",
          alignItems:"center",
          alignSelf:"center",
          marginTop:44,
          borderRadius:30,
          backgroundColor:"light blue",
          elevation:16,
          shadowColor:"gray",
          shadowRadius:10,
          shadowOpacity:0.5,
          shadowOffset:{width:0,height:8}
  
          
        },
        title:{
            justifyContent:"center",
            alignItems:"center",
            alignSelf:"center",
        }

    }  
  )