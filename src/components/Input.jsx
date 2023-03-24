export const Input = ({ type, name, onChange, id, placeholder }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
