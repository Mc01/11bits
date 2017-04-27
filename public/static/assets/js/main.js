var objects = {
    'mail': {
        'code': 'xzs9fQ@ccyfkp.BGn',
        'key': 'yFQk8fsXIquc2aAo6GglM34pEOCm9jze0PYNLDHKvwW7xbRnthir5SdU1JVZTB'
    },
    'nip': {
        'code': '21eu8XXhuX',
        'key': 'VZQMIJuqmSaDWt6OBpf0lbgLhY5F9GwvNs7oeH1irKEAP3kC8xcRzjdX4n2TyU'
    },
    'rgn': {
        'code': 'QajkQQa7a',
        'key': 'd72MecUiWPjCZ30KARDXsYQlnLIErFV4qtfSovbh8gx1zwm9BuJ6kG5pyNTHaO'
    },
    'pkd': {
        'code': "Pr.RN.1",
        'key': 'DVpx1Wj6t38NGZPnlM7FgaKocT5e4w2XsLOEurS9YyJiBAvUmbIqk0dQCfhzRH'
    }
};

function decode(item) {
    var code = item['code'];
    var key = item['key'];
    var value = '';
    for (var i = 0; i < code.length; i++) {
        if (key.indexOf(code.charAt(i)) === -1) {
            value += (code.charAt(i));
        }
        else {
            value += (key.charAt((
                key.indexOf(code.charAt(i)) - code.length + key.length
            ) % key.length));
        }
    }
    return value;
}
