type RecipeSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RecipeSearch({ value, onChange }: RecipeSearchProps) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search recipes by name..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label="Search recipes by name"
    />
  );
}
