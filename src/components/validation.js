getValidationState()
{
    const Val = this.state.value;
    var ipRegex = new RegExp('\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b');
    var urlValidator = require('valid-url');
    if (Val == 0)
        return null;
    else if (urlValidator.isWebUri(Val) || ipRegex.test(Val))
        return 'success';
    else
        return 'error';

}

