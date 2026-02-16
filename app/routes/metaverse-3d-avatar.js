import React from 'react'
import { redirect } from "@remix-run/node";
import { Link } from 'react-router-dom';
const metaverse3davatarcreator = () => {
  return (
    <Link to="/metaverse-3d-avatars">
        metaverse-3d-avatars
    </Link>
  )
}
export async function loader() {
    return redirect(`/metaverse-3d-avatars`, 301);
}
export default metaverse3davatarcreator;