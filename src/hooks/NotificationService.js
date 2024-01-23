import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

export async function schedulePushNotificationTemperatura(temperatura) {
  let bodyMessage;

  if (temperatura < 35) {
    bodyMessage = "¡Atención! La temperatura está bajando 🌡️.";
  } else if (temperatura >= 37.4) {
    bodyMessage = "¡Atención! La temperatura está subiendo 🌡️.";
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "🐥 Eggnest - Alerta de Temperatura",
      body: bodyMessage,
      sound: "default",
      data: { data: "goes here" },
      vibrate: [500],
      icon:
        Platform.OS === "android"
          ? require("../../assets/notification-icon.png")
          : null,
    },
    trigger: { seconds: 2 },
  });
}

export async function schedulePushNotificationHumedad(humedad) {

  if (humedad < 54) {
    bodyMessage = "¡Atención! La humedad está bajando ❄️.";
  } else if (humedad >= 60.5) {
    bodyMessage = "¡Atención! La humedad está subiendo ❄️.";
  }
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "🐥 Eggnest - Alerta de Humedad",
      body: bodyMessage,
      sound: "default",
      data: { data: "goes here" },
      vibrate: [500],
      icon:
        Platform.OS === "android"
          ? require("../../assets/notification-icon.png")
          : null,
    },
    trigger: { seconds: 2 },
  });
}
