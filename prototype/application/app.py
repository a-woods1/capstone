from flask import request, render_template, jsonify, url_for, redirect, g
from .models import Person
from .models import Stage
from .models import Step
from index import app, db
from sqlalchemy.exc import IntegrityError
from .utils.auth import generate_token, requires_auth, verify_token


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/<path:path>', methods=['GET'])
def any_root_path(path):
    return render_template('index.html')


@app.route("/api/user", methods=["GET"])
@requires_auth
def get_user():
    return jsonify(result=g.current_user)


@app.route("/api/create_user", methods=["POST"])
def create_user():
    incoming = request.get_json()
    person = Person(
                     first_name="Victoria",
                     last_name="Kitt",
                     email=incoming["email"],
                     phone_number="4122865555",
                     password=incoming["password"],
                     address_id=1,
                     job_id=1,
                     stage_id=3
                     )

    db.session.add(person)

    try:
      db.session.commit()
    except IntegrityError:
      #return jsonify(message="User with that email already exists"), 409
      return jsonify(message="Person with that email already exists"), 409

    #new_user = User.query.filter_by(email=incoming["email"]).first()
    new_user = Person.query.filter_by(email=incoming["email"]).first()
    stage_list = Stage.query.all()
    step_list = Step.query.filter_by(stage_id=person.stage_id).all()

    stages = []
    for stage in stage_list:
      stages.append({"stage_id": stage.id, "stage_title": stage.stage_title})

    steps = []
    for step in step_list:
      steps.append({"step_id": step.id, "step_title": step.step_title})

    return jsonify(
        #id=user.id,
        id=person.id,
        token=generate_token(new_user, stages, steps)
    )


@app.route("/api/get_token", methods=["POST"])
def get_token():
    incoming = request.get_json()
    #user = User.get_user_with_email_and_password(incoming["email"], incoming["password"])
    user = Person.get_person_with_email_and_password(incoming["email"], incoming["password"])
    if user:
        return jsonify(token=generate_token(user))
    return jsonify(error=True), 403


@app.route("/api/is_token_valid", methods=["POST"])
def is_token_valid():
    incoming = request.get_json()
    is_valid = verify_token(incoming["token"])

    if is_valid:
        return jsonify(token_is_valid=True)
    else:
        return jsonify(token_is_valid=False), 403
