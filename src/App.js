import { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { Button } from "./components/button.style";
import { AppContainer, MainSection } from "./components/app.style";
import "./App.css";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>You are in {currentTheme} mode</h1>
          <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
            Switch to {getOpositeTheme()} mode
          </Button>
        </MainSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
