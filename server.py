from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def page():
    return render_template('index.html')

@app.route('/<string:page_name>')
def html_page(page_name):
    return render_template(page_name)

@app.errorhandler(500)
def internal_server_error(e):
    return 'Sorry! Something went wrong...try again!', 500
