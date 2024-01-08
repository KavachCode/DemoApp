import React from "react";
import { View, Image } from "react-native";
import { Thread } from "../types/threads";
import { blurhash } from "../constants/blur";
import { useColorScheme } from "react-native";

const PostLeftSide: React.FC<{ thread: Thread }> = ({ thread }) => {
  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

  const renderImage = (source: any, index: number) => (
    <Image
      key={index} 
      source={source}
      style={styles.image}
      placeholder={blurhash}
      contentFit="cover"
      transition={500}
    />
  );

  return (
    <View style={{ justifyContent: "space-between" }}>
      {renderImage(
        typeof thread.author.photo === "string"
          ? { uri: thread.author.photo }
          : thread.author.photo,
        0 
      )}
      <View
        style={{
          borderWidth: 1,
          alignSelf: "center",
          borderColor: borderColor,
          flexGrow: 1,
        }}
      />
      <View
        style={{
          width: 20,
          alignItems: "center",
          alignSelf: "center",
          gap: 3,
        }}
      >
        {[1, 2, 3].map((index) =>
          renderImage(
            thread.replies[index - 1]?.author.photo
              ? typeof thread.replies[index - 1]?.author.photo === "string"
                ? { uri: thread.replies[index - 1]?.author.photo }
                : thread.replies[index - 1]?.author.photo
              : null,
            index
          )
        )}
      </View>
    </View>
  );
};

const styles = {
  image: {
    width: 25,
    height: 30,
    borderRadius: 20,
  },
};

export default PostLeftSide;
