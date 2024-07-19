import { NavigationProp, useNavigation } from "@react-navigation/native";
import { stackParamList } from "App";

const useStackNavigation = () => {
    return useNavigation<NavigationProp<stackParamList>>();
};

export default useStackNavigation;