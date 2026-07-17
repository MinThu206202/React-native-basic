import { createContext, useEffect, useState } from "react";
import { ID } from "react-native-appwrite";
import { account } from "../lib/appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
//   const [authChecked , setauthChecked] = useState(false);

  async function getCurrentUser() {
    try {
      const response = await account.get();
      setUser(response);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    //   setauthChecked(true); 
    }
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function logout() {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      throw Error(error.message);
    }
  }


  return (
    <UserContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
}