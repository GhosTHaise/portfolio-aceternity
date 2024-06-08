"use client"

import { useState } from "react";
import MagicButton from "../ui/MagicButton";
import animationData from "@/data/confetti.json"
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

const CopyMyEmail = () => {
    const [copied, setCopied] = useState(false)
    const handleCopy = () => {
        const text = "hsu@jsmastery.pro";
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

            <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#1]"
                handleClick={() => handleCopy()}
            />
        </div>
    )
}

export default CopyMyEmail