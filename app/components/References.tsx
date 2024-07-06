"use client"

import Heading from "./Heading";
import SplitBox from "./SplitBox";

const References = () => {
    return (
        <SplitBox
            rounded
            reverse
            leftChild={(
                <div>
                    <Heading
                        title="Kumppanuus paremman tulevaisuuden puolesta"
                        subtitle="Yhdistä voimasi alan johtajien kanssa urauurtava menestystä ja innovatiivista kehitystä varten"
                    />
                </div>
            )}
            rightChild={(
                <div>

                </div>
            )}
        />
    );
}

export default References;