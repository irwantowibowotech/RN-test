import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DayListItem from "./src/components/core/DayListItem";

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.column}
          numColumns={2}
          data={days}
          renderItem={({item}) => (
            <DayListItem day={item} />
          )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    gap: 10,
    padding: 10,
  },

  column: {
    gap: 10,
  },

  box: {
    backgroundColor: '#F9EDE3',
    flex: 1,
    aspectRatio: 1/2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius: 20,
  },

  text: {
    color: '#9b4521',
    fontSize: 70
  }
});
