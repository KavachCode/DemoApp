import React from "react";
import { Text } from "react-native";

const PostFooter: React.FC<{ replies: number; likes: number }> = ({
  replies,
  likes,
}) => {
  return <Text>{replies} replies . {likes} likes</Text>;
};

export default PostFooter;
