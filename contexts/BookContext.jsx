import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { Role } from "react-native-appwrite";

export const BooksContext = createContext();

const DATABASE_ID = "6a58bf06002388dce74b";
const COLLECTION_ID = "books";

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }
  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id }
        [
            Permission.read(Role.user(user.$id)),
            Permission.update(Role.user(user.$id)),
            Permission.delete(Role.user(user.$id))

        ],
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteBook(data) {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <BooksContext.Provider
      value={{ books, fetchBookById, fetchBooks, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
