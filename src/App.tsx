import { MantineProvider } from "@mantine/core";
import { useForm } from "@mantine/form";
import "./App.css";
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
      <MyRoutes />
    </MantineProvider>
  );
}

export default App;
