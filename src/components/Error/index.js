import React, { useEffect, useState } from "react";

const Error = ({ message, setError }) => {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(false)
      setError(false)
    }, 2000);
    return () => clearTimeout(timer)
  }, [setError])

  return showError ? (
    <p className="alert alert-danger error">{message}</p>
  ) : null;
};

export default Error;
