import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import {
  TextInput,
  Button,
  Provider as PaperProvider,
  DefaultTheme,
  Text,
  Surface,
  Snackbar,
} from "react-native-paper";
import { AuthController } from "../controllers/AuthController";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ee",
    accent: "#03dac4",
  },
};

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const controller = new AuthController();

  const handleLogin = () => {
    Keyboard.dismiss();
    setLoading(true);
    setError("");
    setSuccess("");

    // Simulate network delay
    setTimeout(() => {
      controller.login(
        username,
        password,
        (successMessage) => {
          setSuccess(successMessage);
          setSnackbarVisible(true);
          setLoading(false);
        },
        (errorMessage) => {
          setError(errorMessage);
          setSnackbarVisible(true);
          setLoading(false);
        }
      );
    }, 1000);
  };

  return (
    <PaperProvider theme={theme}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Surface style={styles.formContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
              />
            </View>

            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>

            <TextInput
              label="Username"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="account" />}
            />

            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye-off" : "eye"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />

            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}
              loading={loading}
              disabled={loading}
            >
              Login
            </Button>

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Don't have an account? </Text>
              <Text style={styles.registerLink}>Register</Text>
            </View>
          </Surface>

          <Snackbar
            visible={snackbarVisible}
            onDismiss={() => setSnackbarVisible(false)}
            duration={3000}
            style={{
              backgroundColor: error ? "#B00020" : "#4CAF50",
            }}
          >
            {error || success}
          </Snackbar>
        </View>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    padding: 24,
    borderRadius: 10,
    elevation: 4,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
    paddingVertical: 8,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  registerText: {
    color: "#666",
  },
  registerLink: {
    color: "#6200ee",
    fontWeight: "bold",
  },
});
