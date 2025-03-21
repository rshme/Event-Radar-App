import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Surface,
  Provider as PaperProvider,
  DefaultTheme,
  Searchbar,
  Chip,
  ActivityIndicator,
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

export default function Event({ navigation }) {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  const eventController = new EventController();

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      const allEvents = eventController.getAllEvents();
      setEvents(allEvents);
      setFilteredEvents(allEvents);
      setLoading(false);
    }, 1000);
  }, []);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    filterEvents(query, activeFilter);
  };

  const filterEvents = (query, filter) => {
    let filtered = events;

    // Apply search query filter
    if (query) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          event.description.toLowerCase().includes(query.toLowerCase()) ||
          event.location.toLowerCase().includes(query.toLowerCase())
      );
    }

    // TODO: Apply Chip Filter

    setFilteredEvents(filtered);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    filterEvents(searchQuery, filter);
  };

  const renderEventItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => console.log("Navigate to event detail")}
    >
      <Surface style={styles.eventCard}>
        <Image source={{ uri: item.image }} style={styles.eventImage} />
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
          <Text style={styles.eventLocation}>{item.location}</Text>
          <Text style={styles.eventDescription} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </Surface>
    </TouchableOpacity>
  );

  const renderFilters = () => {
    const filters = ["All", "Tech", "Business", "Workshop", "Networking"];

    return (
      <View style={styles.filtersContainer}>
        <FlatList
          horizontal
          data={filters}
          renderItem={({ item }) => (
            <Chip
              style={[
                styles.filterChip,
                activeFilter === item && styles.activeFilterChip,
              ]}
              textStyle={[
                styles.filterChipText,
                activeFilter === item && styles.activeFilterChipText,
              ]}
              onPress={() => handleFilterChange(item)}
            >
              {item}
            </Chip>
          )}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersList}
        />
      </View>
    );
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.header}>Upcoming Events</Text>

        <Searchbar
          placeholder="Search events"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
        />

        {renderFilters()}

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
            <Text style={styles.loadingText}>Loading events...</Text>
          </View>
        ) : (
          <FlatList
            data={filteredEvents}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.eventsList}
          />
        )}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchbar: {
    marginBottom: 16,
    elevation: 2,
  },
  filtersContainer: {
    marginBottom: 16,
  },
  filtersList: {
    paddingVertical: 8,
  },
  filterChip: {
    marginRight: 8,
    backgroundColor: "#f0f0f0",
  },
  activeFilterChip: {
    backgroundColor: "#6200ee",
  },
  filterChipText: {
    color: "#666",
  },
  activeFilterChipText: {
    color: "#fff",
  },
  eventsList: {
    paddingBottom: 16,
  },
  eventCard: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  eventImage: {
    height: 140,
    width: "100%",
    resizeMode: "cover",
  },
  eventInfo: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 14,
    color: "#6200ee",
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: "#444",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
});
