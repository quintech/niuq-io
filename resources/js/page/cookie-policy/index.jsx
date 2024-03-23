import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function CookiePolicy(props) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.termly.io/embed-policy.min.js";
        script.async = true;
        document.body.appendChild(script);
    });

    return(
        <Container className="mb-5">
            <div name="termly-embed" data-id="f0e47d20-cac4-488f-b55d-83080c2db871" data-type="iframe"></div>
        </Container>
    );
}