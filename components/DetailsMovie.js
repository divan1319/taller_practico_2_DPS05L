import { View, Text,StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { movies } from "../data/movie";
import {serie} from '../data/serie';
import YoutubePlayer from "react-native-youtube-iframe";

const Details = ({ navigation, route }) => {
  const [status, setStatus] = useState({ title: "", category: "", video: "" });
  useEffect(() => {
    movies.map((m) => {
      if (m.id == route.params.id) {
        navigation.setOptions({ headerTitle: m.title });
        setStatus({
          ...status,
          title: m.title,
          category: m.category,
          video: m.video,
        });
      }
    });
  }, []);
  return (
    <View style={styles.videos}>

      <YoutubePlayer height={300} width={393} videoId={status.video} />
    </View>
  );
};

const styles = StyleSheet.create({
  videos:{
      marginTop:220
  }
})

export default Details;

