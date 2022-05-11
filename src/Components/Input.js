

import {Form,Button} from 'react-bootstrap/'

function Input(props) {
    const { label, type, placeholder, name, register } = props



    return (
        <>









            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control placeholder={placeholder} type={type || "text"} name={name} {...register} />
                
                </Form.Group>

              
            </Form>
        </>
    )


}
export default Input
