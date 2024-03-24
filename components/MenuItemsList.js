import React from "react";

import { View, StyleSheet, FlatList, Text } from "react-native";
import MenuItem from "./MenuItem";

const menuItemsToDisplay = [
  { name: "Hummus", id: "1A" },
  { name: "Moutabal", id: "2B" },
  { name: "Falafel", id: "3C" },
  { name: "Marinated Olives", id: "4D" },
  { name: "Kofta", id: "5E" },
  { name: "Eggplant Salad", id: "6F" },
  { name: "Lentil Burger", id: "7G" },
  { name: "Smoked Salmon", id: "8H" },
  { name: "Kofta Burger", id: "9I" },
  { name: "Turkish Kebab", id: "10J" },
  { name: "Fries", id: "11K" },
  { name: "Buttered Rice", id: "12L" },
  { name: "Bread Sticks", id: "13M" },
  { name: "Pita Pocket", id: "14N" },
  { name: "Lentil Soup", id: "15O" },
  { name: "Greek Salad", id: "16Q" },
  { name: "Rice Pilaf", id: "17R" },
  { name: "Baklava", id: "18S" },
  { name: "Tartufo", id: "19T" },
  { name: "Tartufo", id: "20U" },
  { name: "Tiramisu", id: "21V" },
  { name: "Panna Cotta", id: "22W" },
];

const renderItem = ({ item }) => <MenuItem name={item.name} />;
const keyExtractor = (item) => item.id;

const MenuItemsList = () => (
  <View style={styles.container}>
    <Text style={styles.subheading}>Menu Items</Text>
    <FlatList
      data={menuItemsToDisplay}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "90%",
  },
  subheading: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
  },
});

export default MenuItemsList;