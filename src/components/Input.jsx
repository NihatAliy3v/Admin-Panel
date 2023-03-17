export const Input = ({ type, name, onChange,id }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        name={name}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};
