"use client";

import { useEffect } from "react";
import { captureFirstTouch } from "@/lib/lead-source";

/** Records first-touch campaign and referrer data once per visitor. */
export default function FirstTouchCapture() {
    useEffect(() => {
        captureFirstTouch();
    }, []);

    return null;
}
