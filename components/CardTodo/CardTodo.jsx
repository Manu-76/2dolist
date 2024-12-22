import { Image, TouchableOpacity, Text } from "react-native";
import { s } from "./CardTodo.style";
import checkImg from "../../assets/check.png";

export function CardTodo({todo, onPress}) {
    return(
        <TouchableOpacity
            style={s.card}
            onPress={() => onPress(todo)}
        >
            <Text style={[s.text, todo.isCompleted && { textDecorationLine: "line-through"}]}>
                {todo.title}
            </Text>
            {todo.isCompleted && <Image source={checkImg} style={s.img} />}
        </TouchableOpacity>
    )
}