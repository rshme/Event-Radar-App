import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import {
  Text,
  Surface,
  Provider as PaperProvider,
  DefaultTheme,
  Button,
  ActivityIndicator,
  Divider,
  Card,
} from "react-native-paper";
import { EventController } from "../controllers/EventController";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ee",
    accent: "#03dac4",
  },
};

export default function EventDetail({ route, navigation }) {
  const { eventId } = route.params;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const eventController = new EventController();

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const eventData = eventController.getEventById(eventId);
      setEvent(eventData);
      setLoading(false);
    }, 1000);
  }, [eventId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Loading event details...</Text>
      </View>
    );
  }

  if (!event) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Event not found</Text>
        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          Go Back
        </Button>
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <ScrollView style={styles.container}>
        <Image source={{ uri: event.image }} style={styles.eventImage} />

        <Surface style={styles.contentContainer}>
          <Text style={styles.title}>{event.title}</Text>

          <View style={styles.metaContainer}>
            <Card style={styles.metaCard}>
              <Card.Content>
                <Text style={styles.metaLabel}>Date</Text>
                <Text style={styles.metaValue}>{event.date}</Text>
              </Card.Content>
            </Card>

            <Card style={styles.metaCard}>
              <Card.Content>
                <Text style={styles.metaLabel}>Location</Text>
                <Text style={styles.metaValue}>{event.location}</Text>
              </Card.Content>
            </Card>
          </View>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>About this event</Text>
          <Text style={styles.description}>{event.description}</Text>

          <Button mode="contained" style={styles.registerButton} icon="ticket">
            Register Now
          </Button>

          <Button mode="outlined" style={styles.shareButton} icon="share">
            Share Event
          </Button>
        </Surface>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  eventImage: {
    height: 220,
    width: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 24,
    elevation: 4,
    backgroundColor: "#fff",
    minHeight: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  metaCard: {
    width: "48%",
    elevation: 2,
  },
  metaLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  divider: {
    marginVertical: 16,
    height: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    marginBottom: 24,
  },
  registerButton: {
    marginBottom: 12,
    paddingVertical: 8,
  },
  shareButton: {
    marginBottom: 24,
    paddingVertical: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f5f5f5",
  },
  errorText: {
    fontSize: 18,
    color: "#B00020",
    marginBottom: 24,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
