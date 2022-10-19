import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Flex, AppBar } from "@react-native-material/core";
import { Card, Dialog } from "@rneui/themed";
import { movies } from "../data/movie";
import {useNavigation} from '@react-navigation/native';

const MoviesList = () => {

  const [movie, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movies);
  }, []);

  const navigation = useNavigation();

  return (
    <View style={styles.vista}>
      <ScrollView>
        <AppBar title="Romance" />
        <Flex inline style={styles.container}>
          <ScrollView horizontal={true}>
            {movie.map((peli) =>
              peli.category == "Romance" ? (
                
                <Card key={peli.id} containerStyle={{ borderRadious: 10 }}>

                  <Card.Title style={styles.subtitle}>{peli.title}</Card.Title>
                  <TouchableOpacity onPress={() => navigation.navigate('Informacion',{id:peli.id})} >
                    <Image
                      source={{ uri: peli.imagen }}
                      style={styles.imagenes}
                    />
                  </TouchableOpacity>
                 
                </Card>
              ) : null
            )}
          </ScrollView>
        </Flex>
        <AppBar title="Acción" />
        <Flex inline style={styles.container}>
          <ScrollView horizontal={true}>
            {movie.map((peli) =>
              peli.category == "Acción" ? (
                <Card key={peli.id} containerStyle={{ borderRadius: 10 }}>

                  <Card.Title style={styles.subtitle}>{peli.title}</Card.Title>
                  <TouchableOpacity onPress={() => navigation.navigate('Informacion',{id:peli.id})}>
                  <Image
                    source={{ uri: peli.imagen }}
                    style={styles.imagenes}
                  />
                  </TouchableOpacity>
                </Card>
              ) : null
            )}
          </ScrollView>
        </Flex>
        <AppBar title="Comedia" />
        <Flex inline style={styles.container}>
          <ScrollView horizontal={true}>
            {movie.map((peli) =>
              peli.category == "Comedia" ? (
                <Card key={peli.id} containerStyle={{ borderRadious: 10 }}>
                  <Card.Title style={styles.subtitle}>{peli.title}</Card.Title>
                  <TouchableOpacity onPress={() => navigation.navigate('Informacion',{id:peli.id})}>
                  <Image
                    source={{ uri: peli.imagen }}
                    style={styles.imagenes}
                  />
                  </TouchableOpacity>
                </Card>
              ) : null
            )}
          </ScrollView>
        </Flex>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    margin: 10,
  },
  subtitle: {
    color: "red",
  },
  imagenes: {
    width: 200,
    height: 300,
  },
  vista: {
    backgroundColor: "#132139",
    marginTop: 0,
  },
  subHeader: {
    backgroundColor: "#D86B12",

    color: "white",

    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 3,
  },
});

export default MoviesList;
