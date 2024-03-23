import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function PrivacyPolicy(props) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.termly.io/embed-policy.min.js";
        script.async = true;
        document.body.appendChild(script);
    });


    return(
        <Container className="mb-5">
            <div name="termly-embed" data-id="0063692d-1fb3-4847-a47d-9327247534fa" data-type="iframe"></div>
        </Container>
    );
}