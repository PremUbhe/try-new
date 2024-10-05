"use client";
import type { AppStore } from "@/lib/store";
import { makeStore } from "@/lib/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";


export const StoreProvider = ({ children }: {children : React.ReactNode}) => {

  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
