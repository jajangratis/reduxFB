import React from 'react'
import { Icon, Root, View, Text, Left, Right } from 'native-base'
import { StackNavigator , TabNavigator } from 'react-navigation';

import { fbTimelineList ,TimelineDetail , CreateTimeline , EditTimeline,EditComment} from '../timeline/screens'
import { NotificationList } from '../notifications/screens'
import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'
import { ProductsList, ProductsCreate, productsDetail } from '../products/screens'
import { FriendsReq } from '../friendsreq/screens'
import { MarketsList } from '../markets/screens'
import { memberList } from '../members/screens'
import {MenuScreen} from '../menus/screens'



//BEGIN OF FILE TAB OPTIONS
const tabOptions = {    
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: false,
  backBehavior: 'none',
  //experimental
  lazy : false,
  navigationOptions: ({ navigation }) => ({
    title:null,
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      let iconType;
      if (routeName === 'Timeline') {
        iconName = `ios-calendar${focused ? '' : '-outline'}`
      }else if (routeName === 'Friends') {
        iconName = `ios-people${focused ? '' : '-outline'}`
      }else if (routeName === 'Markets') {
        iconName = `ios-cash${focused ? '' : '-outline'}`
      }else if (routeName === 'Notification') {
        iconName = `ios-notifications${focused ? '' : '-outline'}`
      }else if (routeName === 'Menus') {
        iconName = `ios-menu${focused ? '' : '-outline'}`
      }

    // You can return any component that you like here! We usually use an
    // icon component from react-native-vector-icons
      return <Icon name={iconName} type={iconType} style={{ color : tintColor, fontSize: 25 }} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#2B79C9',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 8,
      marginTop: 0,
    },
    style: {
        backgroundColor: '#fff',
        padding: 0
    },
    showLabel: false,
    showIcon: true,
    renderIndicator: () => null,
    allowFontScaling : false,
    visible:false,
  },
}//END OF FILE TAB OPTIONS

const timelineStack = StackNavigator({
  fbTimelineList: {
    screen: fbTimelineList,
    navigationOptions: {
      header:null,
      title:null,
    }
  },
  TimelineDetail: {
    screen: TimelineDetail,
    navigationOptions: {
      title:null,
    }
  },
  EditTimeline: {
    screen: EditTimeline,
    navigationOptions: {
      title:"Edit",
    }
  },
  EditComment:{
    screen: EditComment,
    navigationOptions: {
      title:"Edit Comment",
    }
  }
})

const friendStack = StackNavigator({
  FriendsReq: {
    screen: FriendsReq,
    navigationOptions: {
      header:null,
      title:null,
    }
  },
  memberList: {
    screen: memberList,
    navigationOptions:{
      title:'Friends'
    },
    tabBar:{
      visible:false,
    }
  },
})

const RootNavigator = TabNavigator(
  {
    Timeline: { 
      screen: timelineStack ,
      navigationOptions:{
        title:null
      }
    },
    Friends : { 
      screen: friendStack,
      
    },
    Markets : { screen: MarketsList },
    Notification : { screen: NotificationList },
    Menus : { screen: MenuScreen },
    // Contacts: { screen: ContactsList },

  },
  tabOptions
);



export default RootNavigator
