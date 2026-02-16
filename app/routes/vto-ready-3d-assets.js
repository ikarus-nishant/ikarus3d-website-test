import React from 'react'
import { redirect } from "@remix-run/node";
import { Link } from 'react-router-dom';

const VTOReady = () => {
  return (
    <Link to="/virtual-try-on-solutions">
        virtual-try-on-solutions
    </Link>
  )
}

export async function loader() {
    return redirect(`/virtual-try-on-solutions`, 301);
}

export default VTOReady