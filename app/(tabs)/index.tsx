import * as React from 'react';
import { Platform, SafeAreaView, ScrollView } from "react-native";
import Lottie from 'lottie-react-native'
import { RefreshControl } from "react-native-gesture-handler";
import { ThreadContext } from '../../context/thread-context';
import {View ,Text} from 'react-native'
import ThreadItem from '../../components/ThreadsItem';


export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadContext)
  return (
    <SafeAreaView>
      <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: Platform.select({android: 30}),
      }}
      refreshControl={
        <RefreshControl
        refreshing={false} 
        tintColor={'transparent'}
        onRefresh={() => {animationRef.current?.play();}}
        />
      }
      >
    <Lottie 
    ref={animationRef}
    source={require("../../animation/threads.json")}
    loop={false}
    autoPlay
    style={{width: 90, height: 90, alignSelf: 'center'}}
    />
    {threads.map((thread) => (
     <ThreadItem key={thread.id} {...thread} />
    ))}
      </ScrollView>
    </SafeAreaView>
  );
}

