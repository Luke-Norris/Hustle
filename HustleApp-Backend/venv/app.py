import psycopg2
from flask import Flask, jsonify

app = Flask(__name__)

conn = psycopg2.connect(
    host="localhost",
    port="8080",
    database="postgres",
    user="postgres",
    password="postgres"
)

cur = conn.cursor()

@app.route('/api/Jobs/<int:id>', methods=['GET'])
def get_job_by_id(id):
    print("Fetching job with ID:", id)
    cur.execute("SELECT * FROM jobs WHERE id = %s", (id,))
    row = cur.fetchone()
    if row is None:
        return jsonify({'error': 'User not found'}), 404
    else:
        columns = [desc[0] for desc in cur.description]
        job = dict(zip(columns, row))
        return jsonify(job)

@app.route('/')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
