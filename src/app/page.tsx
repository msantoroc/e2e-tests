"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Root() {
  const route = useRouter();

  useEffect(() => {
    route.push("/home");
  }, [route]);

  return <></>;
}
