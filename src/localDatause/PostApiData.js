import React from "react";
import { View,Text ,TouchableOpacity} from "react-native";


const PostApiData = () =>{

    getApiData =async ()=>{
  

      
        data = {
            id:8,
            name : 'Chotu',
            age : 15,
        }
        url = "http://192.168.0.107:3000/User"
        let result = await fetch(url,{
            method:'Post',
            headers:{
              "Content-Type" : "application/json"
            },
            body:JSON.stringify(data)
        })
        result = result.JSON()
        console.log(result)
       
     }
    return(
        <View>
            <Text>
                Hello hoe
            </Text>
            <TouchableOpacity style={{backgroundColor:"blue",margin:20,padding:20,justifyContent:'center',alignItems:"center"}}
            onPress={()=>getApiData()}
            >
                <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>
                    Button
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default PostApiData