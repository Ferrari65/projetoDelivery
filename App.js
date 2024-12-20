import { Text }  from 'react-native';
import { Styles } from "./style.js";
import Button from "./src/components/button/button.jsx";

export default function App() {

 return ( <>
    <Text style={style.textos}></Text>

    <Button texto= "Acessar" />
 </>
 );
}