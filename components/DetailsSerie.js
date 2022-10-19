import { View, Text , StyleSheet} from 'react-native'
import { useEffect, useState } from "react";
import {serie} from '../data/serie';
import YoutubePlayer from "react-native-youtube-iframe";

const DetailsSerie = ({ navigation, route }) => {
    const [status, setStatus] = useState({ title: "", category: "",video:""});
    useEffect(() => {
        serie.map((s) => {
          if (s.id == route.params.id) {
            navigation.setOptions({ headerTitle: s.title });
            setStatus({
              ...status,
              title: s.title,
              category: s.category,
              video:s.video
            });
          }
        });
      }, []);
  return (
    <View>
        <View style={styles.videos}>
      <YoutubePlayer  height={300} width={393} videoId={status.video} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    videos:{
        marginTop:220
    }
})

export default DetailsSerie