"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const redirectMap = {
  dmarg: "https://dmarg.onrender.com",
  vmarg: "https://vmarg.skoegle.com",
  geocam: "https://geocam.skoegle.in",
};

export default function RedirectSlug() {
  const { slug } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!slug) return;

    const target = redirectMap[slug];
    if (target) {
      window.open(target, "_blank");

      setTimeout(() => {
        router.push("/");
      }, 500); 
    }
     else {
      router.push("/");
    }
  }, [slug, router]);

}
