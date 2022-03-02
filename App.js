import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const data = [
  { id: "A", text: "Steal Taco's", selected: false },
  { id: "B", text: "Sign Transactions", selected: false },
  { id: "C", text: "Get Free Bagel's", selected: false },
  { id: "D", text: "Marry Adam Holmes", selected: false },
];

export default function App() {
  const [userAnswer, setUserAnswer] = useState(null);

  const selectedAnswer = (item) => {
    console.log(item.name);
    setUserAnswer(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Quiz: Private Keys</Text>
          <Text style={styles.tag}>QUIZ</Text>
          <Text style={styles.question}>
            What is the purpose of the private key?
          </Text>
        </View>
      </View>

      <View style={styles.answersContainer}>
        <Text style={styles.selectAnswer}>SELECT A CHOICE</Text>
        <FlatList
          style={styles.answersList}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.answer}
              key={item.id}
              onPress={() => selectedAnswer(item)}
            >
              <Text>{item.id}</Text>
              <Text>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    margin: 0,
    width: "100%",
  },
  questionContainer: {
    backgroundColor: "black",
    height: "50%",
    justifyContent: "flex-start",
    width: "100%",
  },
  header: {
    color: "#fff",
    fontSize: 12,
    height: "50%",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#fff",
    textAlign: "center",
  },
  tag: {
    color: "black",
    backgroundColor: "#fff",
    borderRadius: 25,
    fontSize: 14,
    padding: 10,
    textAlign: "center",
    width: "25%",
  },
  question: {
    color: "#fff",
    backgroundColor: "black",
    fontSize: 24,
    textAlign: "left",
  },
  answersContainer: {
    alignItems: "center",
    height: "50%",
    justifyContent: "center",
    width: "100%",
  },
  selectAnswer: {
    textAlign: "left",
    alignSelf: "flex-start",
  },
  answersList: {
    alignContent: "space-between",
    width: "75%",
  },
  answer: {
    backgroundColor: "#fff",
    fontSize: 14,
    margin: 10,
    padding: 25,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
