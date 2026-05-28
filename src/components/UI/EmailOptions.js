import { useState } from 'react';
import copy from 'copy-to-clipboard';

const EmailOptions = props => {
    const [successMessage, setSuccessMessage] = useState('');

    const clickHandler = e => {
        copy('work@Damiandemasi.com');
        setSuccessMessage('tooltip tooltip-open tooltip-accent');
        setTimeout(() => {
            setSuccessMessage('');
        }, 2000);
    };

    return (
        <ul className="p-2 shadow dropdown-content bg-base-100 rounded-box ">
            <li>
                <a className='btn btn-ghost btn-sm text-xs lg:btn-md' href='mailto:work@Damiandemasi.com' target='_blank' rel="noreferrer">Open in email client</a>
            </li>
            <li>
                <button className='btn btn-ghost btn-sm text-xs lg:btn-md' onClick={clickHandler}>
                    <span data-tip="Copied to clipboard!" className={successMessage}>
                        Copy email address
                    </span>
                </button>
            </li>
        </ul>
    );
};

export default EmailOptions;
