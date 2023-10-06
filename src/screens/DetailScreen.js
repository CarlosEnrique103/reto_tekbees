import { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { COLORS } from "../constants/colors";
import photo from "../../assets/user.jpg";

import {
  AntDesign,
  Feather,
  Entypo,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import AuthContext from "../store/Auth/auth-context";

const DetailsScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  const [isOnDarkMode, setIsOnDarkMode] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [language, setLanguage] = useState(1);

  const handleLanguage = () => {
    setShowLanguages((prev) => !prev);
    setLanguage((prev) => Number(!prev));
  };

  const handleNavigationEdit = () => {
    console.log("Editing");

    // TODO: View Edit User
  };

  const username = user.email.split("@")[0];

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.photoContainer}>
        <Image source={photo} style={styles.photo} />
        <Text style={styles.userText}>{username}</Text>
      </View>
      <View style={styles.fieldsContainer}>
        <View style={styles.section}>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <AntDesign name="user" size={24} color="black" />
              <Text>Username</Text>
            </View>
            <Pressable style={styles.item} onPress={handleNavigationEdit}>
              <Text>{username}</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </Pressable>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Entypo name="email" size={24} color="black" />
              <Text>Email</Text>
            </View>

            <Pressable style={styles.item} onPress={handleNavigationEdit}>
              <Text>{user.email}</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </Pressable>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <MaterialIcons name="language" size={24} color="black" />
              <Text>Idioma</Text>
            </View>
            <View style={styles.item}>
              <Pressable
                style={styles.item}
                onPress={() => setShowLanguages((prev) => !prev)}
              >
                <Text>{language ? "Español" : "Inglés"}</Text>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </Pressable>
            </View>
          </View>
          {showLanguages && (
            <View style={styles.list}>
              <Pressable
                style={[styles.languageItem]}
                onPress={() => handleLanguage()}
              >
                <Text>{language ? "Inglés" : "Español"}</Text>
              </Pressable>
            </View>
          )}
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={24}
                color="black"
              />
              <Text>Modo Oscuro</Text>
            </View>
            <View style={styles.item}>
              <Switch
                value={isOnDarkMode}
                color={COLORS.primaryColor}
                onValueChange={() => setIsOnDarkMode((prev) => !prev)}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
  },
  photoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  photo: {
    width: 100,
    height: 100,
    backgroundColor: "#cccccca8",
    borderRadius: 75,
  },

  fieldsContainer: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  userText: {
    fontSize: 20,
    fontWeight: "600",
  },
  section: {
    alignItems: "center",
    marginBottom: 20,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 5,
  },
  list: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 30,
  },
  languageItem: {
    padding: 10,
  },
});
