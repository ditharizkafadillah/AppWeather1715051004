import React from 'react';
import { StyleSheet,Text, View, TextInput, Button } from 'react-native';

export default class Cuaca1  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: ''
}
    };
  }
  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
    + this.state.city +
    '&appid=5d3042c69020f373aeb9469a0c5989f7&units=metric';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      });
  }

  render() {
    return (
      <View style = {{flex:4,backgroundColor:'black'}}>
        <View style={{backgroundColor:'#778899'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Prakiraan Cuaca
          </Text>
         </View>

        <View style={{margin:20,padding: 40,placeholder:'center' , backgroundColor:'#778899'}}>


            <TextInput style = {{height: 40,color: 'whiite', fontSize:20}}
              placeholder="Masukan Kota"
              onChangeText={(city)=>this.setState({city})}

            />

            <Button
              onPress={() =>this.getWeather ()}
              title="Lihat"
              accessibilityLabel="Klik Untuk Mencari Kota"
            />
       </View>


        <View style={styles.box2}>
          <Text style = {{padding: 20, fontSize: 20,color: 'white'}} >
              Suhu :  {this.state.forecast.temp} {"\n"}
              Cuaca :  {this.state.forecast.main} {"\n"}
              Deskripsi: {this.state.forecast.description} {"\n"}

          </Text>
         </View>
         <View style={styles.box3}>
         <Text style={styles.text}></Text>
         </View>
         <View style={styles.box4}>
         <Text style={styles.text}> CopyRight@ Tehdit 1715051004</Text>
         </View>


   </View>

    );
  }

}
const styles = StyleSheet.create({
  box3: {
    flex: 0.8,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text:{
      fontSize:12,
      color:'white'
    },
    box2:{
      flex:5,
      margin:20,
      backgroundColor:'grey'
    },

    box4: {
      flex: 0.8,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      },
});
