"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

export default function SyncUser() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isSignedIn || !user) return;

    const syncUser = async () => {
      const payload = {
        userid: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        fullName: user.fullName,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
        phoneNumbers: user.phoneNumbers?.map(p => p.phoneNumber),
      };

      try {
        // console.log("Syncing user with payload:", payload);
       const data = await axios.post("/api/userdata", payload);
       console.log("User synced successfully:", data.data);
        // console.log("User synced successfully");
      } catch (error) {
        console.error("Error syncing user with Axios:", error.response?.data || error.message);
      }
    };

    syncUser();
  }, [isSignedIn, user]);

  return null;
}
