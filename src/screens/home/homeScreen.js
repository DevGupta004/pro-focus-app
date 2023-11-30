import { View } from "react-native"
import Card from "../../components/cards/card.component"
import Header from "../../components/header/header.component"



export default HomeScreen = () => {


  return (
    <View style={{flex : 1}}>
      <Header></Header>
      <Card></Card>
    </View>
  )
}