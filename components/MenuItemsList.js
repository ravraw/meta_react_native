import React from "react";
import { View, StyleSheet, SectionList, Text } from "react-native";
import MenuItem from "./MenuItem";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const renderItem = ({ item: { name, price } }) => (
  <MenuItem name={name} price={price} />
);
const renderSectionHeader = ({ section: { title } }) => (
  <View>
    <Text style={styles.sectionHeading}>{title}</Text>
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
    // width: "100%",
  },
  subheading: {
    textAlign: "center",
    color: "white",
    fontSize: 32,
    flexWrap: "wrap",
    marginBottom: 15,
  },
  sectionHeading: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    flexWrap: "wrap",
    margin: 15,
  },
});

export default MenuItemsList;
