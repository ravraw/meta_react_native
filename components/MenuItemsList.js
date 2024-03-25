import React from "react";
import { View, StyleSheet, SectionList, Text } from "react-native";
import MenuItem from "./MenuItem";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Marinated Olives",
      "Kofta",
      "Eggplant Salad",
    ],
  },
  {
    title: "Main Dishes",
    data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
  },
  {
    title: "Sides",
    data: [
      "Fries",
      "Buttered Rice",
      "Bread Sticks",
      "Pita Pocket",
      "Lentil Soup",
      "Greek Salad",
      "Rice Pilaf",
    ],
  },
  {
    title: "Desserts",
    data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
  },
];

const renderItem = ({ item }) => <MenuItem name={item} />;
const renderSectionHeader = ({ section: { title } }) => (
  <View>
    <Text style={styles.subheading}>{title}</Text>
  </View>
);
const keyExtractor = (item, i) => item + i;

const MenuItemsList = () => (
  <View style={styles.container}>
    <SectionList
      sections={menuItemsToDisplay}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      renderSectionHeader={renderSectionHeader}
      ListHeaderComponent={() => <Text style={styles.subheading}> MENU </Text>}
      ListFooterComponent={() => <Text>"--------- END -----------"</Text>}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    margin: 20,
    width: "100%",
  },
  subheading: {
    color: "white",
    fontSize: 28,
    flexWrap: "wrap",
  },
});

export default MenuItemsList;
