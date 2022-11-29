const colors = {
  "pigment-indigo": {
    DEFAULT: "#390099",
    "50": "#AC7AFF",
    "100": "#9F66FF",
    "200": "#853DFF",
    "300": "#6C14FF",
    "400": "#5700EB",
    "500": "#4800C2",
    "600": "#390099",
    "700": "#240061",
    "800": "#0F0029",
    "900": "#000000",
  },
  "fresh-eggplant": {
    DEFAULT: "#9E0059",
    "50": "#FF7FC7",
    "100": "#FF6BBE",
    "200": "#FF42AD",
    "300": "#FF199B",
    "400": "#F00087",
    "500": "#C70070",
    "600": "#9E0059",
    "700": "#660039",
    "800": "#2E001A",
    "900": "#000000",
  },
  "torch-red": {
    DEFAULT: "#FF0054",
    "50": "#FFB8CF",
    "100": "#FFA3C1",
    "200": "#FF7AA6",
    "300": "#FF528B",
    "400": "#FF296F",
    "500": "#FF0054",
    "600": "#C70042",
    "700": "#8F002F",
    "800": "#57001D",
    "900": "#1F000A",
  },
  "international-orange": {
    DEFAULT: "#FF5400",
    "50": "#FFCFB8",
    "100": "#FFC1A3",
    "200": "#FFA67A",
    "300": "#FF8B52",
    "400": "#FF6F29",
    "500": "#FF5400",
    "600": "#C74200",
    "700": "#8F2F00",
    "800": "#571D00",
    "900": "#1F0A00",
  },
  "amber": {
    DEFAULT: "#FFBD00",
    "50": "#FFF7E0",
    "100": "#FFF2CC",
    "200": "#FFE7A3",
    "300": "#FFDD7A",
    "400": "#FFD252",
    "500": "#FFC829",
    "600": "#FFBD00",
    "700": "#C79300",
    "800": "#8F6A00",
    "900": "#574000",
  },
};

/** @type {Omit<import("$fresh/plugins/twind.ts").Options, "selfURL">} */
export default {
  theme: {
    colors: {
      black: "#000000",
      blue: colors["pigment-indigo"],
      purple: colors["fresh-eggplant"],
      red: colors["torch-red"],
      orange: colors["international-orange"],
      yellow: colors.amber,
      white: "#FFF7E0",
    },
    fontFamily: {
      body: [
        "Hind",
        "ui-sans-serif",
        "system-ui",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      header: [
        "Finger Paint",
        "ui-sans-serif",
        "system-ui",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
      ],
      mono: [
        "Syne Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  preflight: {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=Finger+Paint&family=Hind&family=Syne+Mono&display=swap')",
  },
};
