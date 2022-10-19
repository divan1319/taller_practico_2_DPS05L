import { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image,TouchableOpacity } from "react-native";
import { AppBar } from "@react-native-material/core";
import { Text, ListItem, Icon } from "@rneui/themed";
import {useNavigation} from '@react-navigation/native';

import { serie } from "../data/serie";

const SerieList = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries(serie);
  }, []);

  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
      <AppBar title="Comedia" />
        {series.map((ser) =>
        ser.category == "sitcom" ? 
        (
          <TouchableOpacity key={ser.id} onPress={() => navigation.navigate('info_serie',{id:ser.id})}>
          <ListItem key={ser.id} bottomDivider>
            <Image source={{uri: ser.photo}} style={{width:70, height:100}} />
            <ListItem.Content>
              <ListItem.Title style={{ color: "red" }}>
                {ser.title}
              </ListItem.Title>
              <ListItem.Subtitle><Text>Temporadas: {ser.seasons}</Text></ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          </TouchableOpacity>
        ) : null
        )}


<AppBar title="Fantasía" />
        {series.map((ser) =>
        ser.category == "fantasy" ? 
        (
          <TouchableOpacity key={ser.id} onPress={() => navigation.navigate('info_serie',{id:ser.id})}>
          <ListItem  bottomDivider>
            <Image source={{uri: ser.photo}} style={{width:70, height:100}} />
            <ListItem.Content>
              <ListItem.Title style={{ color: "red" }}>
                {ser.title}
              </ListItem.Title>
              <ListItem.Subtitle><Text>Temporadas: {ser.seasons}</Text></ListItem.Subtitle>
            </ListItem.Content>
 
          </ListItem>
          </TouchableOpacity>
        ) : null
        )}

<AppBar title="Aventura" />
        {series.map((ser) =>
        ser.category == "adventure" ? 
        (
          <TouchableOpacity key={ser.id} onPress={() => navigation.navigate('info_serie',{id:ser.id})}>
          <ListItem  bottomDivider>
            <Image source={{uri: ser.photo}} style={{width:70, height:100}} />
            <ListItem.Content>
              <ListItem.Title style={{ color: "red" }}>
                {ser.title}
              </ListItem.Title>
              <ListItem.Subtitle><Text>Temporadas: {ser.seasons}</Text></ListItem.Subtitle>
            </ListItem.Content>
 
          </ListItem>
          </TouchableOpacity>
        ) : null
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SerieList;
