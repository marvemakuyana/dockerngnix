from flask import Flask, jsonify
import os

app = Flask(__name__)
# print(os.environ.get('BACKEND_IP'), flush=True)

@app.route('/')
def index():
    return jsonify({'message': 'Welcome to the backend API 2'})

@app.route('/api/welcome')
def index2():
    return jsonify({'message': 'Welcome to the backend API welcome 2'})

@app.route('/api/')
def index3():
    return jsonify({'message': 'Welcome to the backend API 4'})

@app.route('/api/data')
def get_data():
    data = {'key1': 'value1', 'key2': 'value2'}
    return jsonify(data)

@app.route('/api/data2')
def get_data2():
    data = {'key3': 'value3', 'key4': 'value4'}
    return jsonify(data)

@app.route('/api/data3')
def get_data3():
    data = {'key5': 'value5', 'key6': 'value6'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')