import {useState} from "react";

const generateForm = (inputs, initialData) => {
    const form = {};
    for (const input of inputs) {
        form[input.name] = initialData ? initialData[input.name] || "" : input.value || "";
    }

    return form;
}

export default function useForm(inputs, initialData) {
    const [form, setForm] = useState(generateForm(inputs, initialData));
    const [formInputs, setFormInputs] = useState([]);

    const refreshForm = (data) => {
        setForm(generateForm(inputs, data));
        setFormInputs(inputs.map(input => ({
            ...input,
            value: form[input.name].toString(),
        })));
    }

    const handleChange = (e) => {
        const {target: {name, value}} = e;
        for (const key of Object.keys(form)) {
            if (key === name) {
                setForm(prevState => ({
                    ...prevState,
                    [name]: value
                }));
                break;
            }
        }
    }

    return [formInputs, form, handleChange, refreshForm];
}