from flask import Flask, jsonify, request, redirect
import csv


app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/submit_form", methods=["POST", "GET"])
def submit_form():
    try:
        data = request.get_json()
        print(data)
        try:
            with open("../form_data.csv", "a", newline="") as file:
                writer = csv.writer(file)
                print("name: " + data["formData"]["name"])
                print("email: " + data["formData"]["email"])
                writer.writerow(
                    [
                        data["formData"]["name"],
                        data["formData"]["email"],
                        data["formData"]["phone"],
                        data["formData"]["comment"],
                    ]
                )
        except Exception as e:
            print(e)
            return ""
    except Exception as e:
        print("hernya")
        return ""
    return ""


if __name__ == "__main__":
    app.run(debug=True)
