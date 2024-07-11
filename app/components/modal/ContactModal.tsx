"use client"

import Container from "../Container";
import Heading from "../Heading";
import Input from "../inputs/Input";
import {
    useForm,
    FieldValues,
    SubmitHandler
} from "react-hook-form"
import Textarea from "../inputs/Textarea";
import Button from "../Button";

const ContactModal = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })

    return (
        <Container>
            <div
                id="contact"
                className="
                relative
                flex 
                flex-col 
                gap-4 
                bg-blue-500 
                rounded-3xl
                p-6">
                <div className="
                    flex 
                    flex-col 
                    gap-3 
                    items-center
                    justify-between
                    ">
                    <Heading
                        title="Ota yhteyttä meihin"
                        center
                    />
                    <div className="
                        flex 
                        flex-col
                        md:flex-row 
                        gap-3
                        w-full
                    ">
                        <Input
                            id="name"
                            label="Nimi"
                            disabled={false}
                            register={register}
                            errors={errors}
                        />
                        <Input
                            id="sähköposti"
                            label="sähköposti"
                            type="email"
                            disabled={false}
                            register={register}
                            errors={errors}
                        />

                    </div>

                    <div className="
                        flex 
                        flex-col
                        md:flex-row 
                        gap-3
                        w-full
                    ">
                        <Input
                            id="yritys"
                            label="Yritys"
                            disabled={false}
                            register={register}
                            errors={errors}
                        />
                        <Input
                            id="puhelinnumero"
                            label="Puhelinnumero"
                            type="tel"
                            disabled={false}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <Textarea
                        id="viesti"
                        label="Viesti"
                        disabled={false}
                        register={register}
                    />
                </div>

                <Button
                    label="Lähetä viesti"
                    secondary
                    outline
                    onClick={() => { }} />
            </div>
        </Container>
    )
}

export default ContactModal;