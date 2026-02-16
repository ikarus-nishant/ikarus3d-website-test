import React from 'react'
import { redirect } from "@remix-run/node";
import { Link } from 'react-router-dom';

const arVrReady3dModels = () => {
  return (
    <Link to="/augmented-reality-3d-modeling-services">
        augmented-reality-3d-model-creators
    </Link>
  )
}

export async function loader() {
    return redirect(`/virtual-reality-3d-modeling-services`, 301);
}

export default arVrReady3dModels