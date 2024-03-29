import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MenuItemsList from "../components/MenuItemsList";

const MenuScreen = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMenu = async () => {
    try {
      const response = await fetch("", {});
      const json = await response.json();
      setMenu(json.menu);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <View>
      {loading ? <Text> Loading .....</Text> : null}
      {error ? <Text>{error}</Text> : null}
      {!error && !loading && <MenuItemsList menu={menu} />}
    </View>
  );
};

export default MenuScreen;
