import { useEffect, useState } from 'react';
import React from "react";

interface Props {
  children: React.ReactNode;
}

const CustomClientOnly: React.FC<Props> = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (document != undefined) {
      setHasMounted(true);
    }
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <React.Fragment {...delegated}>{children}</React.Fragment>;
};

export default CustomClientOnly;