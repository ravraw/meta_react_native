import React, { useState } from "react";
import { View, StyleSheet, SectionList, Text, Pressable } from "react-native";
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

const MenuItemsList = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Pressable onPress={() => setShowMenu(!showMenu)} style={styles.button}>
        <Text style={styles.buttonText}>{showMenu ? "Home" : "Show Menu"}</Text>
      </Pressable> */}
      {/* {showMenu && ( */}
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={() => (
          <Text style={styles.subheading}> MENU </Text>
        )}
        ListFooterComponent={() => <Text>"--------- END -----------"</Text>}
      />
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  subheading: {
    textAlign: "center",
    fontSize: 32,
    flexWrap: "wrap",
    marginBottom: 15,
  },
  sectionHeading: {
    textAlign: "center",
    fontSize: 24,
    flexWrap: "wrap",
    margin: 15,
  },
  button: {
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 18,
  },
});

export default MenuItemsList;
