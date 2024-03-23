import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function TermsAndConditions(props) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.termly.io/embed-policy.min.js";
        script.async = true;
        document.body.appendChild(script);
    });
    
    return(
        <Container className="mb-5">
            <div name="termly-embed" data-id="4f17a231-0839-4f08-a4ac-8a86cdafdda5" data-type="iframe"></div>
        </Container>
    );
}