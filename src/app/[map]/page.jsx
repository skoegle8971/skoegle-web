"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const redirectMap = {
  dmarg: "https://dmarg.onrender.com",
  vmarg: "https://vmarg.skoegle.com",
  geocam: "https://geocam.skoegle.in",
  apk:"https://yrldiyjabkjrbvuwpahv.supabase.co/storage/v1/object/public/skoegleimages//vmarg.apk"
};

export default function RedirectSlug() {
  const params = useParams();
  const router = useRouter();

  const map = params?.map; 

  useEffect(() => {
    if (!map) return;

    const target = redirectMap[map];

    if (target) {
      window.open(target, "_blank");

      setTimeout(() => {
        router.push("/");
      }, 500);
    } else {
      router.push("/");
    }
  }, [map, router]);

  return null;
}



