from index import db, bcrypt


class Address(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    street_address = db.Column(db.String(255))
    postal_code = db.Column(db.Integer())
    city = db.Column(db.String(100))
    state = db.Column(db.String(100))
    country = db.Column(db.String(100))

class Job(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    job_title = db.Column(db.String(255))

class Stage(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    stage_title = db.Column(db.String(255))

class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    
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

class Person(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(50))
    password = db.Column(db.String(255), nullable=False)
    address_id = db.Column(db.Integer(), db.ForeignKey('address.id'))
    job_id = db.Column(db.Integer(), db.ForeignKey('job.id'))
    stage_id = db.Column(db.Integer(), db.ForeignKey('stage.id'))

    def __init__(self, first_name, last_name, email, phone_number, password, address_id, job_id, stage_id):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.phone_number = phone_number
        self.active = True
        self.password = Person.hashed_password(password)
        self.address_id = address_id
        self.job_id = job_id
        self.stage_id = stage_id

    @staticmethod
    def hashed_password(password):
        return bcrypt.generate_password_hash(password).decode("utf-8")
    
    @staticmethod
    def get_person_with_email_and_password(email, password):
        person = Person.query.filter_by(email=email).first()
        if person and bcrypt.check_password_hash(person.password, password):
            return person
        else:
            return None


class Category(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    category_name = db.Column(db.String(255))

class Office(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    address_id = db.Column(db.Integer(), db.ForeignKey('address.id'), nullable=False)
    office_name = db.Column(db.String(255))

class Product(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    product_name = db.Column(db.String(255))
    product_description = db.Column(db.Text())
    category_id = db.Column(db.Integer(), db.ForeignKey('category.id'), nullable=False)
    pre_approved = db.Column(db.Boolean())

class Request(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    person_id = db.Column(db.Integer(), db.ForeignKey('person.id'), nullable=False)
    product_id = db.Column(db.Integer(), db.ForeignKey('product.id'), nullable=False)
    request_justfication = db.Column(db.Text())
    request_date = db.Column(db.DateTime())

class Room(db.Model):
    id = db.Column(db.Integer(), primary_key=True, nullable=False)
    office_id = db.Column(db.Integer(), db.ForeignKey('office.id'), primary_key=True, nullable=False)
    room_name = db.Column(db.String(100))
    elevator_accessible = db.Column(db.Boolean())


#CREATE TABLE inventory (
#product_id integer REFERENCES product (product_id),
#room_id integer REFERENCES room (room_id),
#quantity integer,
#PRIMARY KEY(product_id, room_id)
#)

