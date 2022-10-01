import AppRouter from "./components/Nav/AppRouter";
import { BrowserRouter } from 'react-router-dom'
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  )
}