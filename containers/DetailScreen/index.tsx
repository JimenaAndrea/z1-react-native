import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import { useNavigation, useRoute } from "@react-navigation/native";

import { DetailScreenRouteProp } from "./types";
import { NavigationProp } from "../../model";
import styles from "./styles";
import { colors } from "../../styles";

const DetailScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DetailScreenRouteProp>();
  const lesson = route.params.lesson;

  return (
    <ScrollView style={styles.containerView}>
      <View style={styles.contentView}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={10}>
          <EvilIcons name={"close"} color={colors.onBackground} size={25} />
        </Pressable>
        <View style={styles.textView}>
          <Text style={styles.category}>
            {lesson.category.title.toUpperCase()}
          </Text>
          <Text style={styles.title}>{lesson.title}</Text>
          <Text style={styles.author}>{lesson.author}</Text>
        </View>
        <Image source={{ uri: lesson.image }} style={styles.image} />
        <Text style={styles.content}>{lesson.content}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
