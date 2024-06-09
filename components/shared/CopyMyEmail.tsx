"use client"

import { useState } from "react";
import MagicButton from "../ui/MagicButton";
import animationData from "@/data/confetti.json"
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

const CopyMyEmail = () => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        const text = "rfitiavana.sambatra@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };
    return (
        <div className="mt-5 relative">
            <div className="absolute -bottom-5 right0">
                <Lottie
                    options={{
                        loop: copied,
                        autoplay: copied,
                        animationData,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice"
                        }
                    }}
                />
            </div>

            <div onClick={handleCopy}>
                <MagicButton
                    title={copied ? 'Email copied' : 'Copy my email'}
                    icon={<IoCopyOutline />}
                    position="left"
                    otherClasses="!bg-[#1]"
                />
            </div>
        </div>
    )
}

export default CopyMyEmail