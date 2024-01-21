import { createNativeStackNavigator} from '@react-navigation/native-stack'

import LoadingScreen from '../screens/home/LoadingScreen';
import Login from '../screens/auth/Login';
import MainScreen from '../screens/home/Main';
import ReportScreen from '../screens/home/Reporte';
import Admin from '../screens/home/Admin';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
       <Stack.Navigator>
            <Stack.Screen name='Loading' component={LoadingScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Admin' component={Admin} options={{headerShown: false}}/>
            <Stack.Screen name='Main' component={MainScreen} options={{headerShown: false}}/>
            <Stack.Screen
                name="Report"
                component={ReportScreen}
                options={{
                headerShown: true,
                title: "",
                }}
            />
       </Stack.Navigator> 
    );
}

