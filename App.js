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
  }
  function registrar(acao){
    const hora = new Date().toLocaleTimeString('pt-BR',
      {
        hour: '2-digit',
        minute:'2-digit'
      }
    );
    sethistorico([`${hora} - ${acao} para ${number}`,...historico])
  }


  async function ligacao(){
    if (numero_valido()){
      try{
        const url = `tel: ${limparNumero(number)}`;
        
        const pode_abrir = await Linking.canOpenURL(url);

        if (pode_abrir){
          await Linking.opneURL(url)
          registrar("Ligação");

        }
        else{
          Alert.alert("Aviso: ", "Este Aparelho não consegue reproduzir ligações. ")
        }
      } 
      catch(error){
        Alert.alert("Mensagem: ","Não foi possivel abrir o discador")
      }

    }
  }
  async function enviar_SMS(){
      if (numero_valido()){
        //trim tira os espaços antes e depois dos textos
        if (menssage.trim() === ""){
          Alert.alert("Mensagem vazia: ","Escreva algo antes de enviar.");
          return;
        }
        const disponivel = await SMS.isAvaibleAsync();
        if(!disponivel){
          Alert.alert("Aviso: ", "Este Aparelho não consegue enviar mensagens. ");
          return;
        }

        try {
          const { result } = await SMS.sendSMSasync(
            [limparNumero(numero)],
            menssage
          );
          
        } catch (error) {
          
        }
      }
  }

  return (
    <View >
    </View>
  );
}

