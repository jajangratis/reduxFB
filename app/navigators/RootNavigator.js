import { StackNavigator } from 'react-navigation';

import { fbTimelineList ,TimelineDetail , CreateTimeline , EditTimeline} from '../timeline/screens'
import { NotificationList } from '../notifications/screens'
import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'
import { ProductsList, ProductsCreate, productsDetail } from '../products/screens'

const RootNavigator = StackNavigator({
  
  // NOTIFICATION
  NotificationList: {
    screen: NotificationList,
    navigationOptions: {
      title: 'Notification List'
    }
  },
  
  //TIMELINE
  fbTimelineList: {
    screen: fbTimelineList,
    navigationOptions: {
      header:null
    }
  },
  TimelineDetail: {
    screen: TimelineDetail,
    navigationOptions: {
      title:"Detail"
    }
  },
  EditTimeline: {
    screen: EditTimeline,
    navigationOptions: {
      title:"Edit"
    }
  },
  // CreateTimeline: {
  //   screen: CreateTimeline,
  //   navigationOptions: {
  //     title: 'FormCreateTimeline'
  //   }
  // },

  //EXP
  ContactsList: {
    screen: ContactsList,
    navigationOptions: {
      title: 'Contacts List'
    }
  },
  ContactsCreate: {
    screen: ContactsCreate,
    navigationOptions: {
      title: 'Create Contact'
    }
  },
  ContactsDetail: {
    screen: ContactsDetail,
    navigationOptions: {
      title: 'Detail Contact'
    }
  },
  //
  ProductsList: {
    screen: ProductsList,
    navigationOptions: {
      title: 'Products List'
    }
  },
})

export default RootNavigator
