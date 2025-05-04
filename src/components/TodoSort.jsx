export default function TodoSort({ sortBy, setSortBy }) {
  return (
    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
      <option value="input">入力順</option>
      <option value="text">名前順</option>
      <option value="isChecked">完了順</option>
    </select>
  );
}
