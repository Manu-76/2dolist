import { Image, Text } from "react-native";
import { s } from "./Header.style";
import logo from "../../assets/logo.png";

export function Header() {
    return(
        <>
        <Image style={s.img} source={logo}/>
        <Text style={s.text}>
            Tu as probablement un truc à faire
        </Text>
        </>
    )
}