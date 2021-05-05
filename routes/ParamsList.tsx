import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ParamsList = {
  Home: undefined;
  Favorites: undefined;
  Profile: undefined;
  Search: undefined;
};

export type NavProps<T extends keyof ParamsList> = {
  navigation: StackNavigationProp<ParamsList, T>;
  route: RouteProp<ParamsList, T>;
};