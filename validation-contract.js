(() => {
    'use strict';

    let errors = [];

    exports.isRequired = async (value, message) => {
        if (!value || value.length <= 0)
            errors.push({ message: message });
    }

    exports.hasMinLen = async (value, min, message) => {
        if (!value || value.length < min)
            errors.push({ message: message });
    }

    exports.hasMaxLen = async (value, max, message) => {
        if (!value || value.length > max)
            errors.push({ message: message });
    }

    // HasMaxLenght

    // IsFixedLenght

    // IsEmail


    exports.errors = errors;

    exports.clear = async () => {
        errors = [];
    }

    exports.isValid = async () => {
        return errors.length == 0;
    }
})();