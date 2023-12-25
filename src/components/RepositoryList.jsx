// React Native component
import { View, Text, StyleSheet, FlatList } from "react-native"

// Data
import repositories from "../data/repositories"

// App components
import RepositoryItem from "./RepositoryItem"


const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      keyExtractor={item => item.id}
      renderItem={( item ) => (
        <RepositoryItem
            repository={item}
        />
      )}
    />
  )
}


export default RepositoryList