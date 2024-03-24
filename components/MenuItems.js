import React from "react";

import { View, Text, ScrollView, StyleSheet } from "react-native";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
];

const MenuItems = () => {
  return (
    <ScrollView indicatorStyle="white" style={styles.scrollView}>
      <Text style={styles.subheading}>View Menu</Text>
      <Text style={styles.menuItem}>{menuItemsToDisplay[0]}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: "black",
  },
  subheading: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
  },
  menuItem: {
    color: "#F4CE14",
    fontSize: 36,
  },
});

export default MenuItems;
