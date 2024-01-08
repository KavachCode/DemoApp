import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Thread } from "../types/threads";
import PostLeftSide from "./PostLeftSide";
import PostHeading from "./PostHeading";
import BottomIcons from "./BottomIcons";
import PostFooter from "./PostFooter";
import { blurhash } from "../constants/blur";

const ThreadItem: React.FC<Thread> = (thread) => {
  return (
    <View style={styles.container}>
      <PostLeftSide thread={thread} />
      <View style={{ gap: 6, flexShrink: 1 }}>
        <PostHeading
          name={thread.author.name}
          createdAt={thread.createdAt}
          verified={thread.author.verified}
        />
        <Text>{thread.content}</Text>
        {thread.image && (
          <Image
            source={thread.image}
            style={{ width: '100%', minHeight: 300, borderRadius: 10 }}
            placeholder={blurhash}
            contentFit='cover'
            transition={200}
          />
        )}
        <BottomIcons />
        <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
    paddingBottom: 30,
  },
});

export default ThreadItem;
