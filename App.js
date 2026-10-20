import { StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Linking,
    KeyboardAvoidingView,
    Platform
  } from 'react-native';

  import * as SMS from 'expo-sms';
  import { useState } from 'react';


export default function App() {

  const [number, setnumber] = useState("");
  const[menssage, setmenssage] = useState("");
  const[historico , sethistorico] = useState([]);

  function limparNumero(Valor){
    return Valor.replace(/\D/g, "")
  }

  function numero_valido(){
    const numero_limpo = limparNumero(number)
    
    if (numero_limpo.lenght < 9){
      Alert.alert("Numero Invalido",
        "Digite um numero com pelo menos 9 digitos"
      );
      return false;
    }
    else {
      return true;
    }
  }

  async function ligacao(){

  }

  return (
    <View >
    </View>
  );
}

