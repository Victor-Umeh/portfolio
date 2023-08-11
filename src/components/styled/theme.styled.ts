export interface ThemeProps {
  name: string;
  colors: {
    text: string;
    body: string;
    accent: string;
    heroText: string;
    shadow: string;
    // swiper: string;
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
  },
};
``