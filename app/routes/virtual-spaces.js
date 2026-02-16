import React from 'react'
import { redirect } from "@remix-run/node";
import { Link } from 'react-router-dom';

const arVrReady3dModels = () => {
  return (
    <Link to="/3d-virtual-spaces">
        3d-virtual-spaces
    </Link>
  )
}

export async function loader() {
    return redirect(`/3d-virtual-spaces`, 301);
}

export default arVrReady3dModels