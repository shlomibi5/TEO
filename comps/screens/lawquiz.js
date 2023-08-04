import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // ייבוא אייקון מספריית @expo/vector-icons
import { LinearGradient } from "expo-linear-gradient";

const questions = [
  {
    question: "איזה עיר היא בירת יפן?",
    subquiz: "צפה בסרטון “הוא מת עלי” וענה על השאלה:",
    answers: ["נגויה", "אוסקה", "קיוטו", "טוקיו"],
    correctAnswer: 1,
  },
  {
    question: "מהו הצבע השני בספקטרום הקשור לאור ראשון?",
    subquiz: "צפה בסרטון “הוא מת עלי” וענה על השאלה:",
    answers: ["צהוב", "ירוק", "תכלת", "אדום"],
    correctAnswer: 1,
  },
  {
    question: "באיזו עברית כתבה ממשית?",
    subquiz: "צפה בסרטון “הוא מת עלי” וענה על השאלה:",
    answers: ["עברית ישראלית", "עברית ספרדית", "עברית ערבית", "עברית אנגלית"],
    correctAnswer: 1,
  },
  {
    question: "איזה עיר היא בירת יפן?",
    subquiz: "צפה בסרטון “הוא מת עלי” וענה על השאלה:",
    answers: ["נגויה", "אוסקה", "קיוטו", "טוקיו"],
    correctAnswer: 1,
  },
  {
    question: "איזה עיר היא בירת יפן?",
    subquiz: "צפה בסרטון “הוא מת עלי” וענה על השאלה:",
    answers: ["נגויה", "אוסקה", "קיוטו", "טוקיו"],
    correctAnswer: 1,
  },
];

const ProgressBar = ({ totalQuestions, currentQuestion, userAnswers }) => {
  const circles = [];
  for (let i = 0; i < totalQuestions; i++) {
    circles.push(
      <View
        key={i}
        style={[
          styles.progressCircle,
          userAnswers[i] !== null ? styles.progressCircleFilled : null,
          i === currentQuestion - 1 ? styles.currentProgressCircle : null,
        ]}
      >
        {/* הוספת אייקון וי בתוך העיגול הצבוע */}
        {userAnswers[i] !== null && (
          <FontAwesome name="check" size={18} color="white" />
        )}
      </View>
    );
  }

  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressLine}>{circles}</View>
    </View>
  );
};

const LawQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const handleAnswer = (selectedAnswerIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedAnswerIndex;
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#110C51", "#110C51", "#110C51", "#7C7C7C"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 0, y: 0 }}
        locations={[0, 0.25, 0.75, 1]}
        style={styles.gradient}
      >
        <ProgressBar
          totalQuestions={questions.length}
          currentQuestion={currentQuestionIndex + 1}
          userAnswers={userAnswers}
        />

        <Text style={styles.title}>איזה חוק עברתי?</Text>

        {currentQuestionIndex < questions.length ? (
          <View style={styles.questionContainer}>
            <View style={styles.mediaContainer}>
              <Text style={styles.subquiz}>
                {questions[currentQuestionIndex].subquiz}
              </Text>
              <Image
                source={require("/assets/images/quiz.png")}
                style={styles.quizImg}
              />
            </View>
            <Text style={styles.questionText}>
              {questions[currentQuestionIndex].question}
            </Text>
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <LinearGradient
                key={index}
                colors={["#4a13a5", "#581f6e"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.8, y: 0 }}
                locations={[0, 1]}
                style={styles.answerButton}
              >
                <TouchableOpacity onPress={() => handleAnswer(index)}>
                  <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
              </LinearGradient>
            ))}
          </View>
        ) : (
          <View style={styles.completedContainer}>
            <Text style={styles.completedText}>סיימת את השאלות!</Text>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  progressContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    paddingTop: 80,
  },
  progressLine: {
    flex: 1,
    width: "60%",
    height: "50px",
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopWidth: 5,
    borderColor: "#932ac2",
  },
  progressCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#932ac2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -18,
    backgroundColor: "#474466",
  },
  progressCircleFilled: {
    backgroundColor: "#932ac2",
  },
  currentProgressCircle: {
    borderColor: "#932ac2",
    backgroundColor: "#932ac2",
  },
  title: {
    color: "white",
    fontSize: 23,
    textAlign: "right",
    fontWeight: 600,
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  mediaContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  quizImg: {
    width: 350,
    height: 200,
    marginBottom: 40,
  },
  questionContainer: {
    width: "100%",
    padding: 40,
  },
  subquiz: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "right",
    color: "white",
    marginBottom: 20,
  },
  questionText: {
    fontSize: 21,
    fontWeight: 600,
    textAlign: "right",
    color: "white",
    marginBottom: 20,
  },
  answerButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 5,
  },
  answerText: {
    color: "white",
    fontSize: 17,
    fontWeight: 700,
    textAlign: "center",
  },
  completedContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  completedText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default LawQuiz;
