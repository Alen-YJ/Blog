# -*- coding: utf-8 -*
from flask import Flask,render_template,g,session
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy



def create_app():
    app = Flask(__name__,template_folder="templates",static_folder="static",static_url_path="/backend/static")
    #防止跨域攻击
    CORS(app)
    
    #数据库配置
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:yijing@118.24.71.249:3306/blog?charset=utf8'
    db = SQLAlchemy(app)
    #指定配置，用来省略提交操作
    app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

    
    #注册蓝图
    from . import main
    app.register_blueprint(main.main)
    app.config['SECRET_KEY'] = 'j<z\x92\xc7A~\x96K\xfd\xddFu\xdaC<\xacz\xf0\xd3\x1f\xa6\x03'
    app.debug = True
    db.init_app(app)
    return app