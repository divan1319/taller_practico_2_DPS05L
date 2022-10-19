import { useEffect, useState, useRef,useCallback } from "react";
import { View, StyleSheet, ScrollView ,Button,Image} from "react-native";
import { Card, Text, Icon } from "@rneui/themed";
import { soon } from "../data/soon";
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
import YoutubePlayer from "react-native-youtube-iframe";


const Proximamente = () => {

    const video = useRef(null);
    const [playing, setPlaying] = useState(false);


  const [soons, setSoon] = useState([]);

  useEffect(() => {
    setSoon(soon);
  }, []);

  return (
    <View>
        <ScrollView>
      {
      soons.map((s) => (
        <Card key={s.id}>
          <Card.Title style={styles.titulo}>{s.title}</Card.Title>
        <YoutubePlayer 
          height={200}
          width={330}
          videoId={s.trailer}
          
        />
          <Text style={{ marginBottom: 10 }}>
            Tipo: {s.type}
          </Text>
            <Text style={styles.subHeader}>
            {s.releaseDate}
            </Text>
        </Card>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    titulo:{
        color:"red"
    },
    subHeader: {
        backgroundColor : "#6404ec",
        color : "white", 
        textAlign : "center",
        paddingVertical : 10,
        borderRadius:3
      }
});

export default Proximamente;
