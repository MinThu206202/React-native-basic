import { Account, Avatars, Client ,Databases } from "react-native-appwrite";
import "react-native-url-polyfill/auto";

export const client = new Client()
    .setProject("6a584321000ee0c5e740")
    .setEndpoint("https://sgp.cloud.appwrite.io/v1");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);