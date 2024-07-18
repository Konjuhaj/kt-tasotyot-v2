"use client"

import useFiles from "@/app/hooks/useFiles";
import Button from "../Button";
import Company from "../Company";
import Heading from "../Heading";
import Spacer from "../Spacer";
import SplitBox from "../SplitBox";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";


const References = () => {
    const { files, isLoading, errors } = useFiles();
    const router = useRouter();

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    if (errors) {
        return (
            <div>One moment please</div>
        )
    }

    console.log(files);

    return (
        <SplitBox
            rounded
            reverse
            leftChild={(
                <div>
                    <Heading
                        secondary
                        title="Kumppanuus paremman tulevaisuuden puolesta"
                        subtitle="Yhdistä voimasi alan johtajien kanssa urauurtava menestystä ja innovatiivista kehitystä varten"
                    />
                    <Spacer />
                    <Button
                        label="Referenssit"
                        onClick={() => router.push("/referenssit")}
                    />
                </div>
            )}
            rightChild={(
                <div className="
                    grid
                    grid-cols-4
                    grid-template-cols-2
                ">
                    {files.map((file) => (
                        <Company
                            key={file}
                            label={file}
                            src={`/images/companies/${file}`}
                        />
                    ))}
                </div>
            )}
        />
    );
}

export default React.memo(References);