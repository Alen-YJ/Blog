# -*- coding: utf-8 -*
from flask import render_template, Blueprint, url_for

main = Blueprint('main', __name__, template_folder='templates', static_folder='static', static_url_path='/static')

@main.route('/',defaults={'path':''})
@main.route('/<path:path>')

def index(path):
    return render_template('index.html')

