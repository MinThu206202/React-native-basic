import { useContext, useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { UserContext } from "../contexts/UserContext";

export function UserOnly({ children }) {
  const { user, loading } = useContext(UserContext);
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    if (!loading && !user) {
      const redirect = params.redirect || "/(auth)/login";
      router.replace(`${redirect}`);
    }
  }, [user, loading, router, params]);

  if (loading) return null;

  return user ? children : null;
}