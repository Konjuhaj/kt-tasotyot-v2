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
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { useState } from "react";

const ContactModal = () => {

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
            phone: "",
            company: ""
        }
    })


    const onSubmit = (formData: FieldValues) => {
        setLoading(true);
        toast.loading("Sending...");
        emailjs.send("service_nahmmx7", "template_u71om3r", formData, "MpfqO9jNPGaVqrnjX")
            .then((res) => {
                toast.dismiss();
                toast.success("Viesti on lähetetty");
                console.log(res);
            })
            .catch((err) => {
                toast.dismiss();
                toast.error("Jonkinlainen ongelma ilmeni. Yritä uudelleen.");
            })
            .finally(() => {
                setLoading(false);
            })
    }

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
                            required
                        />
                        <Input
                            id="email"
                            label="sähköposti"
                            type="email"
                            disabled={false}
                            register={register}
                            errors={errors}
                            required
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
                            id="company"
                            label="Yritys"
                            disabled={false}
                            register={register}
                            errors={errors}
                        />
                        <Input
                            id="phone"
                            label="Puhelinnumero"
                            type="tel"
                            disabled={false}
                            register={register}
                            errors={errors}
                            required
                        />
                    </div>
                    <Textarea
                        id="message"
                        label="Viesti"
                        disabled={false}
                        register={register}
                        required
                    />
                </div>

                <Button
                    label="Lähetä viesti"
                    secondary
                    outline
                    disabled={loading}
                    onClick={handleSubmit(onSubmit)} />
            </div>
        </Container>
    )
}

export default ContactModal;