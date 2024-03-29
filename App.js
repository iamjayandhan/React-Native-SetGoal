import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList} from 'react-native';

export default function App() {

  const [goalText,setGoalText]=useState("")
  const [goals,setGoals]=useState([]);

  function goalInputHandler(text){
    setGoalText(text);
  }

  // this causes old goals deleted and replaced 
  // by new goal everytime. so avoid this!
  // function addGoalHandler(){
  //     setGoals([goalText]);
  // }

  function addGoalHandler(){
    // setGoals((currentGoals) => [...currentGoals,goalText]);
    if (goalText.trim() !== "") { // Check if goalText is not empty or whitespace
      setGoals((currentGoals) => [...currentGoals, goalText.trim()]);
    }
  }



  return (
    <View style={styles.appContainer}>
      {/* <Text>Hello world!</Text>

      <View style={styles.innerContainer}>
      <Text>Welcome killer!</Text>
      </View> */}
      {/* <View style={styles.img}> */}
      {/* <Image source={require('./assets/icon.png')} /> */}
      {/* </View> */}

      <View style={styles.inputContainer} >
        <TextInput
            onChangeText={goalInputHandler} 
            style={styles.textInput} 
            placeholder="Type your Goal"/>
        <Button title="Add Goal"
          onPress={addGoalHandler}
          />
      </View>

      {/* method 1 to display goals! */}

      {/* <ScrollView style={styles.goalsContainer }>
        <Text style={{marginTop:10}}>List of Goals</Text> */}

        {/* to assign unique value to each goal(to avoid duplicates!.we use key) */}
        {/* { goals.map(
            (goal,i) => 
              <View key={i} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ) 
            }
      </ScrollView> */}

      {/* method 2 for displaying goals */}
      <FlatList 
        data={goals}
        style={styles.flatlist}
        renderItem={(ItemData) => {
          return(
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{ItemData.item}</Text>
              </View>
          )
        }
        }
      />

      {/* <Text style={{margin:16,borderWidth:2,borderColor:'yellow'}}>Here's the flag:
        knd124jtp34jg4-293rg4g924jgrosig4
      </Text> */}
      <StatusBar style="auto" />
      {/* <Button title="Tap me!"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer:{
    backgroundColor: 'yellow',
  },
  img:{
    width:10,
    height:10,
  },
  appContainer:{
    padding:50,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    paddingBottom:44,
    marginBottom:20,
    right:10,
    top:60,
  },
  textInput:{
    borderWidth:2,
    borderColor:'#cccccc',
    width:'65%',
    marginRight:8,
    padding:8,
  },
  goalsContainer:{
    flex:1,
    marginBottom:64,
  },
  goalItem:{
    margin:8,
    padding:14,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    color:'white',
    right:8,
    width:260,
    alignSelf:'flex-start',
  },
  goalText:{
    color:'white',
  },
  flatlist:{
    marginVertical:70,
  }

});
