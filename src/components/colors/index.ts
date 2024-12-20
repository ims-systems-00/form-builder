export type ColorName =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";
export interface ColorPalette {
  [key: string]: {
    lightest: string;
    lighter: string;
    light: string;
    base: string;
    dark: string;
    darker: string;
    darkest: string;
  };
}
export const colors = {
  slate: {
    lightest: "#f8fafc",
    lighter: "#f1f5f9",
    light: "#e2e8f0",
    base: "#64748b",
    dark: "#1e293b",
    darker: "#0f172a",
    darkest: "#020617",
  },
  gray: {
    lightest: "#f9fafb",
    lighter: "#f3f4f6",
    light: "#e5e7eb",
    base: "#6b7280",
    dark: "#1f2937",
    darker: "#111827",
    darkest: "#030712",
  },
  zinc: {
    lightest: "#fafafa",
    lighter: "#f4f4f5",
    light: "#e4e4e7",
    base: "#71717a",
    dark: "#27272a",
    darker: "#18181b",
    darkest: "#09090b",
  },
  neutral: {
    lightest: "#fafafa",
    lighter: "#f5f5f5",
    light: "#e5e5e5",
    base: "#737373",
    dark: "#262626",
    darker: "#171717",
    darkest: "#0a0a0a",
  },
  stone: {
    lightest: "#fafaf9",
    lighter: "#f5f5f4",
    light: "#e7e5e4",
    base: "#78716c",
    dark: "#292524",
    darker: "#1c1917",
    darkest: "#0c0a09",
  },
  red: {
    lightest: "#fef2f2",
    lighter: "#fee2e2",
    light: "#fecaca",
    base: "#ef4444",
    dark: "#991b1b",
    darker: "#7f1d1d",
    darkest: "#450a0a",
  },
  orange: {
    lightest: "#fff7ed",
    lighter: "#ffedd5",
    light: "#fed7aa",
    base: "#f97316",
    dark: "#9a3412",
    darker: "#7c2d12",
    darkest: "#431407",
  },
  amber: {
    lightest: "#fffbeb",
    lighter: "#fef3c7",
    light: "#fde68a",
    base: "#f59e0b",
    dark: "#92400e",
    darker: "#78350f",
    darkest: "#451a03",
  },
  yellow: {
    lightest: "#fefce8",
    lighter: "#fef9c3",
    light: "#fef08a",
    base: "#eab308",
    dark: "#854d0e",
    darker: "#713f12",
    darkest: "#422006",
  },
  lime: {
    lightest: "#f7fee7",
    lighter: "#ecfccb",
    light: "#d9f99d",
    base: "#84cc16",
    dark: "#3f6212",
    darker: "#365314",
    darkest: "#1a2e05",
  },
  green: {
    lightest: "#f0fdf4",
    lighter: "#dcfce7",
    light: "#bbf7d0",
    base: "#22c55e",
    dark: "#166534",
    darker: "#14532d",
    darkest: "#052e16",
  },
  emerald: {
    lightest: "#ecfdf5",
    lighter: "#d1fae5",
    light: "#a7f3d0",
    base: "#10b981",
    dark: "#065f46",
    darker: "#064e3b",
    darkest: "#022c22",
  },
  teal: {
    lightest: "#f0fdfa",
    lighter: "#ccfbf1",
    light: "#99f6e4",
    base: "#14b8a6",
    dark: "#115e59",
    darker: "#134e4a",
    darkest: "#042f2e",
  },
  cyan: {
    lightest: "#ecfeff",
    lighter: "#cffafe",
    light: "#a5f3fc",
    base: "#06b6d4",
    dark: "#155e75",
    darker: "#164e63",
    darkest: "#083344",
  },
  sky: {
    lightest: "#f0f9ff",
    lighter: "#e0f2fe",
    light: "#bae6fd",
    base: "#0ea5e9",
    dark: "#075985",
    darker: "#0c4a6e",
    darkest: "#082f49",
  },
  blue: {
    lightest: "#eff6ff",
    lighter: "#dbeafe",
    light: "#bfdbfe",
    base: "#3b82f6",
    dark: "#1e40af",
    darker: "#1e3a8a",
    darkest: "#172554",
  },
  indigo: {
    lightest: "#eef2ff",
    lighter: "#e0e7ff",
    light: "#c7d2fe",
    base: "#6366f1",
    dark: "#3730a3",
    darker: "#312e81",
    darkest: "#1e1b4b",
  },
  violet: {
    lightest: "#f5f3ff",
    lighter: "#ede9fe",
    light: "#ddd6fe",
    base: "#8b5cf6",
    dark: "#5b21b6",
    darker: "#4c1d95",
    darkest: "#2e1065",
  },
  purple: {
    lightest: "#faf5ff",
    lighter: "#f3e8ff",
    light: "#e9d5ff",
    base: "#a855f7",
    dark: "#6b21a8",
    darker: "#581c87",
    darkest: "#3b0764",
  },
  fuchsia: {
    lightest: "#fdf4ff",
    lighter: "#fae8ff",
    light: "#f5d0fe",
    base: "#d946ef",
    dark: "#86198f",
    darker: "#701a75",
    darkest: "#4a044e",
  },
  pink: {
    lightest: "#fdf2f8",
    lighter: "#fce7f3",
    light: "#fbcfe8",
    base: "#ec4899",
    dark: "#9d174d",
    darker: "#831843",
    darkest: "#500724",
  },
  rose: {
    lightest: "#fff1f2",
    lighter: "#ffe4e6",
    light: "#fecdd3",
    base: "#f43f5e",
    dark: "#9f1239",
    darker: "#881337",
    darkest: "#4c0519",
  },
};
