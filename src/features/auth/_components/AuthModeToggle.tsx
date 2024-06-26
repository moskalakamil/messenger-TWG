import {useAuthNavigation} from "@src/features/auth/_navigation/useAuthNavigation";
import {useTheme} from "@src/theme/theme";
import useKeyboard from "@src/utils/hooks/useKeyboard";
import {Pressable, Text, View} from "react-native";

interface AuthModeToggleProps {
  text: [string, string];
  mode: "login" | "signup";
}

const AuthModeToggle = ({
  text: [firstPart, secondPart],
  mode,
}: AuthModeToggleProps) => {
  const {textVariants} = useTheme();
  const nav = useAuthNavigation();
  const {keyboardOpen} = useKeyboard();

  if (keyboardOpen) return null;

  return (
    <View className={"flex-row items-center gap-3 justify-center"}>
      <Text style={textVariants.body} className={"text-white-500"}>
        {firstPart}
      </Text>
      <Pressable
        onPress={() => {
          if (mode === "login") {
            return nav.navigate("Register");
          }
          return nav.navigate("Login");
        }}>
        <Text style={textVariants.btn} className={"text-primary-500"}>
          {secondPart}
        </Text>
      </Pressable>
    </View>
  );
};

export default AuthModeToggle;
