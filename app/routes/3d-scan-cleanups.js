import React from 'react'
import { redirect } from "@remix-run/node";
import { Link } from 'react-router-dom';

const ScanCleanups = () => {
  return (
    <Link to="/3d-scan-cleanup-services">
        3d-scan-cleanup-services
    </Link>
  )
}

export async function loader() {
    return redirect(`/3d-scan-cleanup-services`, 301);
}

export default ScanCleanups