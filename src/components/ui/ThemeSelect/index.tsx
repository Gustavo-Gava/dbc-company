import { useTheme } from "~/context/ThemeContext";

export const ThemeSelect = () => {
  const { setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as "dark" | "light");
  };

  return (
    <select
      onChange={handleChange}
      className="bg-transparent dark:bg-slate-900 dark:text-white"
    >
      <option value="light" className="bg-transparent">
        ☀️
      </option>
      <option value="dark" className="bg-transparent">
        🌙
      </option>
    </select>
  );
};
