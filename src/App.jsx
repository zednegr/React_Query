import { QueryClientProvider, QueryClient } from "react-query"
import './App.css'
import Cards from './components/cards/cards'
import TwoCard from "./components/twoCard/twoCard"

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Cards />
      <TwoCard />
    </QueryClientProvider>
  )
}

export default App
