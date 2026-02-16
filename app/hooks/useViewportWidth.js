import { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";

const useViewportWidth = (initialWidth) => {
    
    const [viewportWidth, setViewportWidth] = useState(1440);

    if (typeof window !== "undefined") {
        window.addEventListener(
            "resize",
            debounce(function (e) {
                setViewportWidth(document.body.clientWidth);
            })
        );
    }
    useEffect(() => {
        setViewportWidth(document.body.clientWidth);
    });

    return [ viewportWidth ];
}

export default useViewportWidth;