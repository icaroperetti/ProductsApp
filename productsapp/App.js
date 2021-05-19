import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ProductsScreen from "./src/screens/ProductsScreen"
import EditScreen from "./src/screens/EditScreen";
import Login from "./src/screens/Login";
import NewProduct from "./src/screens/New";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Product: ProductsScreen,
    Counter: CounterScreen,
    Edit:EditScreen,
    Login:Login,
    New:NewProduct
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Produtos"
    }
  }
);

export default createAppContainer(navigator);
