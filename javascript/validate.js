let stateAbbreviations = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];
let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
let stateRegex = /^[A-Z]{2}$/;
let zipRegex = /^[0-9]{5}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function initValidation(fieldID) {
    const form = document.getElementById(fieldID)
    const button = document.getElementById("submitBtn");

    function validateForm() {
        let isValid = true;

        isValid = checkRequired('fullname', '*First & last names are required*') && isValid;
        isValid = checkRequired('address', '*Address is required*') && isValid;
        isValid = checkRequired('city', '*City is required*') && isValid;
        isValid = checkRequired('state', '*State is required*') && isValid;
        isValid = validateState('state', '*Must be a valid state and capitalized*', stateRegex) && isValid;
        isValid = checkRequired('zip', '*Zip is required*') && isValid;
        isValid = checkFormat('zip', '*Zip must be five numbers long*', zipRegex) && isValid;
        isValid = checkRequired('phone', '*Phone number is required*') && isValid;
        isValid = checkFormat('phone', '*Phone Number must be ###-###-####*', phoneRegex) && isValid;
        isValid = checkRequired('email', '*Email is required*') && isValid;
        isValid = checkFormat('email', "*Email is wrong format*", emailRegex) && isValid;
        isValid = checkDropDown('find', '*This field is required*') && isValid;

        document.getElementById('fullname').addEventListener('change', function() {
            checkRequired(this.id);
        });
        document.getElementById('address').addEventListener('change', function() {
            checkRequired(this.id);
        });
        document.getElementById('city').addEventListener('change', function() {
            checkRequired(this.id);
        });
        document.getElementById('state').addEventListener('change', function() {
            checkRequired(this.id);
            checkFormat(this.id, "*Must be a valid state and capitalized*", stateRegex)
        });
        document.getElementById('zip').addEventListener('change', function() {
            checkRequired(this.id);
            checkFormat(this.id, "*Zip must be five numbers long*", zipRegex);
        });
        document.getElementById('phone').addEventListener('change', function() {
            checkRequired(this.id);
            checkFormat(this.id, '*Phone Number must be ###-###-####*', phoneRegex);
        });
        document.getElementById('email').addEventListener('change', function() {
            checkRequired(this.id);
            checkFormat(this.id, "*Email is wrong format*", emailRegex);
        });
        document.getElementById('find').addEventListener('change', function() {
            checkRequired(this.id);
            checkDropDown(this.id, '*This field is required*');
        });

        return isValid;
    }

    function checkRequired(fieldID, requiredMessage) {
        const inputValue = document.getElementById(fieldID)
        if (!inputValue.value.trim()) {
            setElementValidity(fieldID, false, requiredMessage);
            return false;
        }
        setElementValidity(fieldID, true, '');
        return true;
    }

    function checkDropDown(fieldID, requiredMessage) {
        const select = document.getElementById(fieldID)
        if (select.value == '') {
            setElementValidity(fieldID, false, requiredMessage);
            return false;
        }
        setElementValidity(fieldID, true, '');
        return true;
    }

    function setElementValidity(fieldID, valid, message) {
        const inputValue = document.getElementById(fieldID);
        const errorDiv = inputValue.nextElementSibling;
        inputValue.classList.remove('invalid')
        inputValue.setCustomValidity(message);
        if (valid) {
            inputValue.classList.remove('invalid');
            errorDiv.style.display = 'none';
        } else {
            inputValue.classList.add('invalid');
            errorDiv.innerText = message; // Set the error message text
            errorDiv.style.display = 'block';
        }
    }

    function checkFormat(fieldID, requiredMessage, regex) {
        const field = document.getElementById(fieldID);
        if (!regex.test(field.value.trim())) {
            setElementValidity(fieldID, false, requiredMessage);
            return false;
        }
        return true;
    }
    
    function validateState(fieldID, requiredMessage, regex) {
        const state = document.getElementById(fieldID);
        if (!stateAbbreviations.includes(state.value.trim().toUpperCase()) || !regex.test(state.value.trim())) {
            setElementValidity(fieldID, false, requiredMessage);
            return false;
        }
        return true;
    };

    button.addEventListener('click', function(event) {
        console.log("clicked")
        if (!validateForm()) {
            event.preventDefault();
            console.log("hi")
        }
        else {
            console.log("else")
        }
    })
}
