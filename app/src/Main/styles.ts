import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";

const isAndroid = Platform.OS === "android";

console.log( {isAndroid, currentHeight: StatusBar.currentHeight});

// View é a div, e o SafeAreaView é a div depois das "interview" para os IOS
export const Container = styled.SafeAreaView`
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;
