import Form from 'react-bootstrap/Form';
const SignOut = () => {
    return (
        <>
            <div className=''>
                <div className='text-center'>
                    <h1 className="fw-bold">CREATE ACCOUNT</h1>
                </div>
                <Form className=''>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control type="name" placeholder="First name" className='w-50' />
                        <Form.Control type="name" placeholder="Last name" className='w-50' />
                        <Form.Control type="email" placeholder="Email" className='w-50' />
                        <Form.Control type="email" placeholder="Confrim Email" className='w-50' />
                        <Form.Control type="password" placeholder="Password" className='w-50'/>
                        <Form.Control type="password" placeholder="Confirm Password" className='w-50'/>
                    </Form.Group>
                </Form>
                <div>
                    <button className='bg-dark text-white p-2 rounded-pill'>CREATE ACCOUNT</button>
                </div>
            </div>
        </>
    )
}

export default SignOut