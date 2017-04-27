from flask import Flask, render_template, request
from flask.ext.mail import Mail
from werkzeug.contrib.fixers import ProxyFix
from config import load_config


app = Flask(__name__)
load_config(app)
mail = Mail()
mail.init_app(app)


@app.route('/')
def redirect_to_index():
    return render_template('index.html')


@app.route('/robots.txt')
def serve_robots():
    return app.send_static_file('robots.txt')


app.wsgi_app = ProxyFix(app.wsgi_app)
if __name__ == '__main__':
    app.run()
