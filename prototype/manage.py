from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

from application.app import app, db
from insert_records import populate_tables


migrate = Migrate(app, db)
manager = Manager(app)

# migrations
manager.add_command('db', MigrateCommand)


@manager.command
def create_db():
    """Creates the db tables."""
    db.create_all()

@manager.command
def delete_db():
    """Deletes the db tables."""
    db.drop_all()

@manager.command
def insert_db():
    """Inserts seed data into db tables"""
    populate_tables()

if __name__ == '__main__':
    manager.run()
