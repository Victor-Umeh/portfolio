interface ThemeProps {
  name: string;
  colors: {
    text: string;
    body: string;
    accent: string;
    heroText: string;
    other: string;
  };
}

export const light: ThemeProps = {
  name: "light-theme",
  colors: {
    text: "#474444",
    body: "#FCFBF8",
    accent: "#171B20",
    heroText: "#474444",
    other: "#11272f",
  },
};

export const dark: ThemeProps = {
  name: "dark-theme",
  colors: {
    text: "#D9D9D9",
    body: "#0d1c22",
    heroText: "#474444",
    accent: "#F5F5F5",
    other: "#11272f",
  },
};
