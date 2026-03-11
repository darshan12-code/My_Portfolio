from flask import Blueprint, jsonify
import json
import os

portfolio_bp = Blueprint(
    "portfolio",
    __name__,
    url_prefix="/portfolio/portfolio-data"
)
@portfolio_bp.route("/data", methods=["GET"])
def get_portfolio_data():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path, "r") as f:
        data = json.load(f)

    return jsonify(data)

@portfolio_bp.route("/personalInfo", methods=["GET"])
def get_personalInfo():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["personalInfo"])

@portfolio_bp.route("/experience", methods=["GET"])
def get_experience():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["experience"])
@portfolio_bp.route("/counters", methods=["GET"])
def get_counters():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["counters"])
# @portfolio_bp.route("/aboutTraits", methods=["GET"])
# def get_aboutTraits():
#     file_path = os.path.join("data", "portfolio_data.json")

#     with open(file_path) as f:
#         data = json.load(f)

#     return jsonify(data["aboutTraits"])
@portfolio_bp.route("/skills", methods=["GET"])
def get_skills():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["skills"])