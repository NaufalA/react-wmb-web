import {Form, Formik} from "formik";
import FormikField from "./formik-field.component.jsx";
import {Button} from "../buttons/index.js";

export default function FormikForm(props) {
    const {
        inputs,
        initialValues,
        validationSchema,
        onSubmit,
        onCancel,
        submitText,
        cancelText,
        loading,
        extraContent
    } = props;

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {(props) => (
                <Form
                    className="flex flex-col gap-4"
                >
                    {inputs.map((input, i) => (
                        <FormikField
                            key={`form-input-${i}`}
                            value={props.values[input.name]}
                            title={input.title}
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            options={input.options}
                            dataList={input.dataList}
                        />
                    ))}
                    {extraContent}
                    <div className="grid grid-flow-col gap-2">
                        {onCancel && (
                            <Button className="bg-danger" onClick={onCancel} disabled={loading}>
                                {cancelText || "Cancel"}
                            </Button>
                        )}
                        <Button className="bg-success" type="submit" disabled={loading}>
                            {submitText || "Save"}
                        </Button>
                    </div>
                </Form>
            )
            }
        </Formik>
    )
}