import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#fff", ui: "#333", bg: "#171010" },
    btnLight: { syntax: "#555", bg: "#ddd" },
    btnDark: { syntax: "#ddd", bg: "#171010" },
  };

  ToggleTheme = () => this.setState({ isLightTheme: !this.state.isLightTheme });

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, ToggleTheme: this.ToggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
