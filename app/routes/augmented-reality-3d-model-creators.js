import React from 'react'
import { redirect } from "@remix-run/node";
import { Link } from 'react-router-dom';

const ar3DModelCreators = () => {
  return (
    <Link to="/augmented-reality-3d-modeling-services">
        augmented-reality-3d-modeling-services
    </Link>
  )
}

export async function loader() {
    return redirect(`/augmented-reality-3d-modeling-services`, 301);
}

export default ar3DModelCreators