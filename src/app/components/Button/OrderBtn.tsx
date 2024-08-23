import React from 'react';
import './OrderBtn.css';

export default function OrderBtn({
    name,
    url,
}: {
    name: string;
    url: string;
}) {
    const handleRedirect = (link: string) => {
        window.location.href = link;
    };

    return (
        <a
            onClick={() => handleRedirect(url)}
            className={`btn-order animated fadeInUp ${name.includes('order') ? 'ms-4' : undefined}`}
            href={url}
        >
            {name}
        </a>
    );
}