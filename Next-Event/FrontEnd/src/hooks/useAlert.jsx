import { useState } from "react";

export default function useAlert() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [variant, setVarient] = useState("");
    const [alertKey, setAlertKey] = useState("");

    function handleAlert(msg, type = "danger") {
        setMessage(msg);
        setVarient(type);
        setAlertKey(Date.now().toString());
        setShow(true);
    }

    const alertProps = {
        show,
        setShow,
        message,
        variant,
        alertKey,
        handleAlert
    };


    return alertProps;
}