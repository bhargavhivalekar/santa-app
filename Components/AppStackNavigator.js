import React from "react"
import BookDonateScreen from "../screens/BookDonateScreen"
import RecieverDetailscreen from "../screens/RecieverDetailscreen"
import {createStackNavigator} from "react-navigation-stack"

export const AppStackNavigator=createStackNavigator({
    BookDonateList:{screen:BookDonateScreen},
    RecieverDetails:{screen:RecieverDetailscreen}
},
    {initialRouteName:"BookDonateList"}
)