import { useRef, useState } from 'react';

import styles from './Checkout.module.css'

const isEmpty = value => value.trim() === '';
const isSixChars = value => value.trim().length === 6;

const Checkout = props => {

    //isTouched case is not considered at the moment

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event)=>{
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = isSixChars(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
        });

        const formIsValid = enteredCityIsValid && enteredNameIsValid && enteredPostalCodeIsValid && enteredStreetIsValid;

        if(!formIsValid){
            return;
        }

    };

    const nameControlStyles = `${styles.control} ${formInputsValidity.name ? '' : styles.invalid}`;

    const streetControlStyles = `${styles.control} ${formInputsValidity.street ? '' : styles.invalid}`;

    const postalCodeControlStyles = `${styles.control} ${formInputsValidity.postalCode ? '' : styles.invalid}`;

    const cityControlStyles = `${styles.control} ${formInputsValidity.city ? '' : styles.invalid}`;

    return (<form className = {styles.form} onSubmit={confirmHandler}>
    <div className={nameControlStyles}>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
    </div>
    <div className={streetControlStyles}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Please enter a valid street.</p>}
    </div>
    <div className={postalCodeControlStyles}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
        {!formInputsValidity.postalCode && <p>Please enter a postal code (6 digits).</p>}
    </div>
    <div className={cityControlStyles}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Please enter a valid city.</p>}
    </div>
    <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button className={styles.submit}>Confirm</button>
    </div>
    </form>)
}

export default Checkout;