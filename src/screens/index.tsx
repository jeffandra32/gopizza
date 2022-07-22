import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import theme from "../theme";

export function SignIn() {
  return (
    <LinearGradient colors={theme.COLORS.GRADIENT}
      start={{ x: 0, y: 1 }}
      end={{ x: 0.5, y: 0.5 }}
      style={{ flex: 1, justifyContent: 'center' }}
    ></LinearGradient>
  );
}