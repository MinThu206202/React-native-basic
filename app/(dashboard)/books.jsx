import { StyleSheet, FlatList, ActivityIndicator, Alert } from "react-native";
import { useBooks } from "../../contexts/BooksContext";

import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedCard from "../../components/ThemedCard";
import ThemedButton from "../../components/ThemedButton";

const Books = () => {
  const { books, loading, deleteBook } = useBooks();

  function handleDelete(id) {
    Alert.alert("Delete Book", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => deleteBook(id) },
    ]);
  }

  if (loading) {
    return (
      <ThemedView style={styles.center}>
        <ActivityIndicator size="large" color="#6366F1" />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container} safe>
      <ThemedText style={styles.heading} title>
        Your Reading List
      </ThemedText>

      {books.length === 0 ? (
        <ThemedText style={styles.empty}>No books yet. Add one!</ThemedText>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText style={styles.author}>by {item.author}</ThemedText>
              {item.description ? (
                <ThemedText style={styles.desc}>{item.description}</ThemedText>
              ) : null}
              <ThemedButton
                style={styles.deleteBtn}
                onPress={() => handleDelete(item.$id)}
              >
                <ThemedText style={styles.deleteText}>Delete</ThemedText>
              </ThemedButton>
            </ThemedCard>
          )}
        />
      )}
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#64748B",
  },
  card: {
    marginBottom: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  author: {
    color: "#64748B",
    marginTop: 4,
  },
  desc: {
    marginTop: 8,
    color: "#64748B",
  },
  deleteBtn: {
    backgroundColor: "#EF4444",
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-end",
  },
  deleteText: {
    color: "#fff",
    fontSize: 14,
  },
});