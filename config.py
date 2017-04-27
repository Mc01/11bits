from os import urandom


def load_config(app):
    app.secret_key = urandom(24)
