export const ModalStyles = `

/* The Modal (background) */
.response-modal {
    position: fixed;
    /* Stay in place */
    z-index: 1035;
    /* Sit on top */
    padding-top: 10px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(7, 1, 27, 0.5);
    /* Black w/ opacity */
}

/* Modal Content */
.response-modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    margin-top: 1.5%;
    /* Modal View position */
    width: 95%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.6s;
    animation-name: animatetop;
    animation-duration: 0.6s
}

/* Add Animation */
@-webkit-keyframes animatetop {
    from {
        top: -300px;
        opacity: 0
    }

    to {
        top: 0;
        opacity: 1
    }
}

@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0
    }

    to {
        top: 0;
        opacity: 1
    }
}

/* The Close Button */
.close {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.response-modal-header {
    padding: 12px 16px 12px 16px;
    font-size: 17px;
    font-weight: 500;
}

.response-modal-body {
    padding: 2px 16px 20px 16px;
}

.response-modal-footer {
    padding: 16px 16px;
    border: 1px solid #BDBDBD;
    color: #2F80ED;
    font-weight: 600;
}


.response-modal-content.animated-border {
    animation: borderAnimation 2s linear forwards;
}

@keyframes borderAnimation {
    0% {
        border: 2px solid;
    }

    100% {
        border: none;
    }
}
`