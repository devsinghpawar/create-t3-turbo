import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';

// import { TRPCProvider, api } from "@/utils/api";

export default function TabTwoScareen() {
  // const { data } = api.auth.try.useQuery()
  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  return <View>
    <Text>HEYYY</Text>
    {/* <Text>{JSON.stringify(data)}</Text> */}

  </View>
}


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
