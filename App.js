import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";

// const TODO_LIST = [
//   { id:1, title: "Sortir le chien", isCompleted: false},
//   { id:2, title: "Aller chez le garagiste", isCompleted: false},
//   { id:3, title: "Faire les courses", isCompleted: false},
//   { id:4, title: "Appeler le vétérinaire", isCompleted: true}
// ]

export default function App() {
	const [selectedTabName, setSelectedTabName] = useState("all");
  const [todoList, setTodoList] = useState([
    { id:1, title: "Sortir le chien", isCompleted: true},
    { id:2, title: "Aller chez le garagiste", isCompleted: false},
    { id:3, title: "Faire les courses", isCompleted: false},
    { id:4, title: "Appeler le vétérinaire", isCompleted: true},
    { id:5, title: "Récuperer le colis", isCompleted: false},
    { id:6, title: "RDV Dentiste", isCompleted: true},
    { id:7, title: "Faire le ménage", isCompleted: false},
  ])

  function getFilteredList() {
		switch (selectedTabName) {
			case "all":
				return todoList;
			case "inProgress":
				return todoList.filter((todo) => !todo.isCompleted);
			case "done":
				return todoList.filter((todo) => todo.isCompleted);
		}
	}

  function updateTodo(todo) {
    // console.log(todo)
    const updatedTodo= {
      ...todo, isCompleted : !todo.isCompleted
    }

    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updatedTodo.id
    )

    const updatedTodoList = [...todoList]
    updatedTodoList[indexToUpdate] = updatedTodo
    setTodoList(updatedTodoList)
  }

  function renderTodoList() {
    return getFilteredList().map((todo) => (
      <View style={s.cardItem} key={todo.id}>
        <CardTodo todo={todo} onPress={updateTodo}/>
      </View>
    ))
  }

  // function renderTodoList() {
  //   return todoList.map((todo) => (
  //     <View style={s.cardItem} key={todo.id}>
  //       <CardTodo todo={todo} onPress={updateTodo}/>
  //     </View>
  //   ))
  // }

	return (
		<SafeAreaProvider>
			<SafeAreaView style={s.app}>
				<View style={s.header}>
					{/* <Text>Header</Text> */}
          <Header />
				</View>
				<View style={s.body}>
					{/* <Text>Body</Text> */}
          {/* <CardTodo todo={todoList[0]}/> */}
          <ScrollView>
            {renderTodoList()}
          </ScrollView>
				</View>
				<View style={s.footer}>
					{/* <Text>Footer</Text> */}
          <TabBottomMenu 
            selectedTabName={selectedTabName} 
            onPress={setSelectedTabName} 
            todoList={todoList}
          />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

