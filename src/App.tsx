import { MantineProvider } from "@mantine/core";
import { useForm } from "@mantine/form";
import "./App.css";
import Header from "./components/Header";
import { NavbarMinimal } from "./components/Navbar";
import "./index.css";
import MyRoutes from "./MyRoutes";

function App() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
    },
  });
  return (
    <MantineProvider>
      <div className="flex">
        <NavbarMinimal/>
        <div className="w-full">
          <Header/>
        <MyRoutes />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
