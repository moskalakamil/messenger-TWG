import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackNavParamList} from "@src/features/main/_navigation/MainStack";

export const useMainNavigation = useNavigation<
  NativeStackNavigationProp<MainStackNavParamList>
>;
