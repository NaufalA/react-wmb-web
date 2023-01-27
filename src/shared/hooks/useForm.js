import {useState} from "react";

const generateForm = (inputs, initialData) => {
    const form = {};
    for (const input of inputs) {
        form[input.name] = initialData ? initialData[input.name] || "" : input.value || "";
    }

    return form;
}

export default function useForm(inputs, initialData) {
    const [formData, setFormData] = useState(generateForm(inputs, initialData));
    let formInputs = inputs.map(input => ({
        ...input,
        value: formData[input.name].toString(),
    }));

    const refreshForm = (data) => {
        setFormData(generateForm(inputs, data));
        formInputs = (inputs.map(input => ({
            ...input,
            value: formData[input.name].toString(),
        })));
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        for (const {name: inputName} of inputs) {
            if (name === inputName) {
                setFormData((oldData) => ({
                    ...oldData,
                    [name]: value,
                }));
                break;
            }
        }
    }

    return [formInputs, formData, handleChange, refreshForm];
}