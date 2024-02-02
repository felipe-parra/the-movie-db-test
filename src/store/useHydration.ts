"use client";

import { useEffect } from "react";

import { useMovieStore } from "./useMovieStore";

export default function Hydrations() {
  useEffect(() => {
    useMovieStore.persist.rehydrate();
  }, []);

  return null;
}
