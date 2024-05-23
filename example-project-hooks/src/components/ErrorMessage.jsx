/* eslint-disable react/prop-types */
function ErrorMessage({ children }) {
  return (
    <div className="error">
      <h2>Error ⚠️</h2>
      <p>{children}</p>
    </div>
  );
}

export default ErrorMessage;
