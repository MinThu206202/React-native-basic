import { createContext, useContext, useEffect, useState } from "react";
import { ID, Query } from "react-native-appwrite";
import { account, databases } from "../lib/appwrite";

const DB_ID = "6a58bf06002388dce74b";
const COLLECTION_ID = "books";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getBooks() {
    try {
      setLoading(true);
      const user = await account.get();
      const response = await databases.listDocuments(DB_ID, COLLECTION_ID, [
        Query.equal("userid", user.$id),
      ]);
      setBooks(response.documents);
    } catch (error) {
      console.warn("Could not load books:", error.message);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }

  async function addBook(title, author, description) {
    try {
      const user = await account.get();
      const response = await databases.createDocument(
        DB_ID,
        COLLECTION_ID,
        ID.unique(),
        { title, author, description, userid: user.$id }
      );
      setBooks((prev) => [...prev, response]);
      return response;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function deleteBook(id) {
    try {
      await databases.deleteDocument(DB_ID, COLLECTION_ID, id);
      setBooks((prev) => prev.filter((book) => book.$id !== id));
    } catch (error) {
      throw Error(error.message);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, loading, addBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  return useContext(BooksContext);
}