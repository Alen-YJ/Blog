# -*- coding: utf-8 -*
from flask import Flask,render_template, Blueprint, url_for
from flask_restful import Resource, Api

api = Blueprint('api', __name__, template_folder='templates', static_folder='static', static_url_path='/static')

class Hello(Resource):
    def get(self):
        return {"data":"hello "}

Api(api).add_resource(Hello,'/test')