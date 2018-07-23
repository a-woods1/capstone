from flask import request, render_template, jsonify, url_for, redirect, g
from .models import Person
from .models import Stage
from .models import Step
from .models import Category
from .models import Product
from index import app, db
from sqlalchemy.exc import IntegrityError
from .utils.auth import generate_token, requires_auth, verify_token
import collections


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


def get_stages():
  stage_list = Stage.query.all()
  stages = []
  for stage in stage_list:
    stages.append({"stage_id": stage.id, "stage_title": stage.stage_title})
  return stages

def get_steps(person):
  step_list = Step.query.filter_by(stage_id=person.stage_id).all()
  steps = []
  for step in step_list:
    steps.append({"step_id": step.id, "step_title": step.step_title})
  return steps

def get_categories():
  category_list = Category.query.all()
  categories = []
  for category in category_list:
    categories.append({"category_id":category.id, "category_name":category.category_name})
  return categories

def get_products(categories):
  #product_list = Product.query.join(Category, Product.category_id==Category.id).add_columns(Product.id, Product.product_name, Product.product_description, Product.category_id, Category.category_name, Product.pre_approved).all()
  #products = []
  #for product in product_list:
  #  products.append({"product_id": product.id, "product_name": product.product_name, "product_description": product.product_description, "category_id": product.category_id, "category_name": product.category_name, "pre_approved": product.pre_approved})
  items = {}
  all = []
  product_list = Product.query.all()
  for product in product_list:
      all.append({"accommodation_name": product.product_name, "accommodation_description": product.product_description, "pre_approved": product.pre_approved})
  category_index = int(product.category_id) - 1
  items["All"] = all

  for i in range(0, len(categories)):
    products = []
    index = i+1
    product_list = Product.query.filter_by(category_id=index).all()
    temp = []
    for product in product_list:
      temp.append({"accommodation_name": product.product_name, "accommodation_description": product.product_description, "pre_approved": product.pre_approved})
    category_index = int(product.category_id) - 1
    category_name = categories[category_index]["category_name"]
    items[category_name] = temp
  ordered_items = collections.OrderedDict(sorted(items.items()))
  return ordered_items


@app.route("/api/create_user", methods=["POST"])
def create_user():
    incoming = request.get_json()
    person = Person(
                     first_name=incoming["username"],
                     last_name="Sample",
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
    stages = get_stages()
    steps = get_steps(new_user)
    categories = get_categories()
    products = get_products(categories)

    return jsonify(
        #id=user.id,
        id=person.id,
        token=generate_token(new_user, stages, steps, categories, products)
    )


@app.route("/api/get_token", methods=["POST"])
def get_token():
    incoming = request.get_json()
    #user = User.get_user_with_email_and_password(incoming["email"], incoming["password"])
    user = Person.get_person_with_email_and_password(incoming["email"], incoming["password"])
    stages = get_stages()
    steps = get_steps(user)
    categories = get_categories()
    products = get_products(categories)
    if user:
        return jsonify(token=generate_token(user, stages, steps, categories, products))
    return jsonify(error=True), 403


@app.route("/api/is_token_valid", methods=["POST"])
def is_token_valid():
    incoming = request.get_json()
    is_valid = verify_token(incoming["token"])

    if is_valid:
        return jsonify(token_is_valid=True)
    else:
        return jsonify(token_is_valid=False), 403
