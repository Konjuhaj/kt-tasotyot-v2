"use client"

import Button from "./Button";
import Company from "./Company";
import Heading from "./Heading";
import Spacer from "./Spacer";
import SplitBox from "./SplitBox";

const References = () => {
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
                        label="Yhteistyökumppanimme"
                        onClick={() => { }}
                    />
                </div>
            )}
            rightChild={(
                <div className="
                    grid
                    grid-cols-4
                    grid-template-cols-2
                ">
                    <Company
                        label="logoIpsum"
                        src="/images/companies/logoipsum-1.svg"
                    />
                    <Company
                        label="logoIpsum"
                        src="/images/companies/logoipsum-2.svg"
                    />
                    <Company
                        label="logoIpsum"
                        src="/images/companies/logoipsum-3.svg"
                    />
                    <Company
                        label="logoIpsum"
                        src="/images/companies/logoipsum-4.svg"
                    />
                </div>
            )}
        />
    );
}

export default References;