import { useEffect, useRef, useState } from "react";

export const Input = ({ type, name, onChange, id, placeholder }) => {
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setActive(true);
  };
  const handleRelease = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      if (buttonRef.current.value === "") {
        setActive(false);
      } else {
        setActive(true);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleRelease);
  }, []);

  return (
    <div className={`input-container ${active ? "focus" : ""}`}>
      <label htmlFor={id} className="placeholder">
        {placeholder}
      </label>
      <input
        onClick={handleClick}
        ref={buttonRef}
        type={type}
        name={name}
        onChange={onChange}
        id={id}
        step={0.01}
      />
    </div>
  );
};
