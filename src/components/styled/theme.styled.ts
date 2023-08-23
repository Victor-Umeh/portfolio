interface ThemeProps {
  name: string;
  colors: {
    text: "#1e293b" | "#cbd5e1";
    body: "#f8fafc" | "#0f172a";
    accent: "#0f172a" | "#F5F5F5";
    heroText: "#474444" | "#474444";
    shadow: "#0f172a" | "#020617";
    links: "orangered" | "purple";
  };
}

export const light: ThemeProps = {
  name: "light-theme",
  colors: {
    text: "#1e293b",
    body: "#f8fafc",
    accent: "#0f172a",
    heroText: "#474444",
    shadow: "#0f172a",
    links: "orangered",
  },
};

export const dark: ThemeProps = {
  name: "dark-theme",
  colors: {
    text: "#cbd5e1",
    body: "#0f172a",
    accent: "#F5F5F5",
    heroText: "#474444",
    shadow: "#020617",
    links: "purple",
  },
};
``;
