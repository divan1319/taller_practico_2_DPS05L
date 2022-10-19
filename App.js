import MoviesList from './components/MoviesList';
import SerieList from './components/SerieList';
import Proximamente from './components/Proximamente';
import Details from './components/DetailsMovie';
import DetailsSerie from './components/DetailsSerie';
import { NavigationContainer ,DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';



const MovieStack = createNativeStackNavigator();

function MovieStackScreen() {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen name="Peliculas" component={MoviesList} />
      <MovieStack.Screen name="Informacion" component={Details} />
    </MovieStack.Navigator>
  );
}

const SerieStack = createNativeStackNavigator();

function SerieStackScreen(){
  return(
    <SerieStack.Navigator>
      <SerieStack.Screen name='Series' component={SerieList}/>
      <SerieStack.Screen name='info_serie' component={DetailsSerie}/>
    </SerieStack.Navigator>
  );
}

const SoonStack = createNativeStackNavigator();

function SoonStackScreen (){
  return(
    <SoonStack.Navigator>
      <SoonStack.Screen name="Estrenos" component={Proximamente} />
    </SoonStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer 
    >
      <Tab.Navigator

      screenOptions={
      ({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Movies') {
            iconName = focused
              ? 'film'
              : 'film-outline';
          } else if (route.name === 'Serie') {
            iconName = focused ? 'server' : 'server-outline';
          }else if(route.name === 'Próximamente'){
            iconName = focused ? 'apps' : 'apps-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}

      
      >
      <Tab.Screen name='Movies' component={MovieStackScreen} />
      <Tab.Screen name='Serie' component={SerieStackScreen} />
      <Tab.Screen name='Próximamente' component={SoonStackScreen} />
      </Tab.Navigator>
      
      </NavigationContainer>
  );
}
