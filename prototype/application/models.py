from index import db, bcrypt


class Address(db.Model):
    address_id = db.Column(db.Integer(), primary_key=True)
    street_address = db.Column(db.String(255))
    postal_code = db.Column(db.Integer())
    city = db.Column(db.String(100))
    state = db.Column(db.String(100))
    country = db.Column(db.String(100))

class Job(db.Model):
    job_id = db.Column(db.Integer(), primary_key=True)
    job_title = db.Column(db.String(255))

class Stage(db.Model):
    stage_id = db.Column(db.Integer(), primary_key=True)
    stage_title = db.Column(db.String(255))

class User(db.Model):
    user_id = db.Column(db.Integer(), primary_key=True)
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(50))
    password = db.Column(db.String(255), nullable=False)
    address_id = db.Column(db.Integer(), db.ForeignKey('address.address_id'))
    job_id = db.Column(db.Integer(), db.ForeignKey('job.job_id'))
    stage_id = db.Column(db.Integer(), db.ForeignKey('stage.stage_id'))
    
    def __init__(self, email, password):
        self.email = email
        self.active = True
        self.password = User.hashed_password(password)
    
    @staticmethod
    def hashed_password(password):
        return bcrypt.generate_password_hash(password).decode("utf-8")
    
    @staticmethod
    def get_user_with_email_and_password(email, password):
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        else:
            return None

class Category(db.Model):
    category_id = db.Column(db.Integer(), primary_key=True)
    category_name = db.Column(db.String(255))

class Office(db.Model):
    office_id = db.Column(db.Integer(), primary_key=True)
    address_id = db.Column(db.Integer(), db.ForeignKey('address.address_id'), nullable=False)
    office_name = db.Column(db.String(255))

class Product(db.Model):
    product_id = db.Column(db.Integer(), primary_key=True)
    product_name = db.Column(db.String(255))
    product_description = db.Column(db.Text())
    category_id = db.Column(db.Integer(), db.ForeignKey('category.category_id'), nullable=False)
    pre_approved = db.Column(db.Boolean())

class Request(db.Model):
    request_id = db.Column(db.Integer(), primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.user_id'), nullable=False)
    product_id = db.Column(db.Integer(), db.ForeignKey('product.product_id'), nullable=False)
    request_justfication = db.Column(db.Text())
    request_date = db.Column(db.DateTime())

class Room(db.Model):
    room_id = db.Column(db.Integer(), primary_key=True, nullable=False)
    office_id = db.Column(db.Integer(), db.ForeignKey('office.office_id'), primary_key=True, nullable=False)
    room_name = db.Column(db.String(100))
    elevator_accessible = db.Column(db.Boolean())


#CREATE TABLE inventory (
#product_id integer REFERENCES product (product_id),
#room_id integer REFERENCES room (room_id),
#quantity integer,
#PRIMARY KEY(product_id, room_id)
#)

