import { useState } from "react";

export default function Player({ initialname, symbol, isActive }) {
  const [playerName, setplayerName] = useState(initialname);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // 이렇게하면 항상 최신상태
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setplayerName(event.target.value);
  }

  let editiablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editiablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editiablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
