import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    card: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        height: 120,
        borderRadius: 15,
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 2
        },
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },
    text: {
        fontSize: 25,
    },
    img: {
        width: 25,
        height: 25
    }
})