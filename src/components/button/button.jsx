import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

//* funcoes dos botton login
function Button(props) {
    return <TouchableOpacity style={styles.btn}>
        <Text style={styles.texto}>Login</Text>
    </TouchableOpacity>
}

export default Button;