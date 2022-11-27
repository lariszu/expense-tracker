import { View, Text, FlatList, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 69.99,
    date: new Date("2022-01-19"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 14.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e5",
    description: 'Another Book',
    amount: 19.99,
    date: new Date('2021-12-19')
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 69.99,
    date: new Date("2022-01-19"),
  },
  {
    id: "e7",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e8",
    description: "Book",
    amount: 14.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e9",
    description: 'Another Book',
    amount: 19.99,
    date: new Date('2021-12-19')
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1
  }
})
