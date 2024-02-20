const Button = ({ backgroundColor = "red", ...props }) => {
  return <button {...props} style={{ backgroundColor }} />;
};

export { Button };
