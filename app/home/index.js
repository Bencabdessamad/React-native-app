import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Feather, Entypo, Ionicons,Octicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const IndexScreen = () => {
    const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["#98AFC7","#EEEEEE"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 12, fontWeight: "600" }}>PersonnelPlus</Text>
            <Entypo name="lock" size={24} color="black" />
          </View>

          <View  style={{marginTop: 20,flexDirection: "row",alignItems: "center",gap: 20,
            }}>
            <Pressable onPress={()=>router.push("/home/employees")} style={{backgroundColor: "#C2DFFF",padding: 12, borderRadius: 6,alignItems: "center",justifyContent: "center", flex: 1}}>
              <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{marginTop:7,fontWeight:"600"}}>Employee List</Text>
            </Pressable>
            <Pressable style={{backgroundColor: "#C2DFFF",padding: 12, borderRadius: 6,alignItems: "center",justifyContent: "center", flex: 1}}>
              <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{marginTop:7,fontWeight:"600"}}>Mark Attendance</Text>
            </Pressable>
          </View>
          <View style={{marginTop:20,backgroundColor:"#ffffff",paddingHorizontal:10,paddingVertical:10,borderRadius:7}}>
            <Pressable style={{backgroundColor:"#98AFC7",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}}>
                <View style={{padding:7,height:45,width:45,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Ionicons name="newspaper-outline" size={24} color="black" />
                </View>
                <Text style={{marginLeft:10,fontSize:16,fontWeight:"600",flex:1}}>Attendance Report</Text>
                <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </Pressable>
            <Pressable style={{backgroundColor:"#98AFC7",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}}>
                <View style={{padding:7,height:45,width:45,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Octicons name="repo-pull" size={24} color="black" />
                </View>
                <Text style={{marginLeft:10,fontSize:16,fontWeight:"600",flex:1}}>Summary Report</Text>
                <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </Pressable>
            <Pressable style={{backgroundColor:"#98AFC7",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}}>
                <View style={{padding:7,height:45,width:45,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Octicons name="report" size={24} color="black" />
                </View>
                <Text style={{marginLeft:10,fontSize:16,fontWeight:"600",flex:1}}>Generate Report</Text>
                <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </Pressable>
            <Pressable style={{backgroundColor:"#98AFC7",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}}>
                <View style={{padding:7,height:45,width:45,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Octicons name="people" size={24} color="black" />
                </View>
                <Text style={{marginLeft:10,fontSize:16,fontWeight:"600",flex:1}}>overtime Employee</Text>
                <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Entypo name="chevron-right" size={24} color="black" />
                </View>
            </Pressable>
          </View>
          <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:12}}>
            <View style={{backgroundColor:"#C2DFFF",flex:1,borderRadius:6,padding:8,alignItems:"center",justifyContent:"center"}}>
                <View style={{width:35, height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
                </View>
                <Text style={{marginTop:7}}>Attendance Criteria</Text>
            </View>
            <View style={{backgroundColor:"#C2DFFF",flex:1,borderRadius:6,padding:8,alignItems:"center",justifyContent:"center"}}>
                <View style={{width:35, height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Feather name="bar-chart" size={24} color="black" />
                </View>
                <Text style={{marginTop:7}}>Increased WorkFlow</Text>
            </View>
          </View>
          <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:12}}>
            <View style={{backgroundColor:"#C2DFFF",flex:1,borderRadius:6,padding:8,alignItems:"center",justifyContent:"center"}}>
                <View style={{width:35, height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
                </View>
                <Text style={{marginTop:7}}>Cost Saving</Text>
            </View>
            <View style={{backgroundColor:"#C2DFFF",flex:1,borderRadius:6,padding:8,alignItems:"center",justifyContent:"center"}}>
                <View style={{width:35, height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                <Feather name="bar-chart" size={24} color="black" />
                </View>
                <Text style={{marginTop:7}}>Increased WorkFlow</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default IndexScreen;

const styles = StyleSheet.create({});
