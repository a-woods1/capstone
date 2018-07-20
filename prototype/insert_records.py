#!/usr/bin/python


import psycopg2

def populate_tables():
    db_name = "prototype_db"
    db_user = "bb_admin"
    db_host = "localhost"
    db_password = "welcome123"
    
    conn = None
    try:
        # connect to the PostgreSQL server
        conn = psycopg2.connect("dbname=" + db_name + " user=" + db_user + " host=" + db_host + " password=" + db_password)
        cur = conn.cursor()
        # populate tables one by one
        
        #address table
        #(id, street_address, postal_code, city, state, country)
        cur.execute("INSERT INTO address values (%s, %s, %s, %s, %s, %s)", (1, "340 East 51st Street", "10022", "New York", "NY", "USA"))
        
        #job table
        #(id, job_title)
        cur.execute("INSERT INTO job values (%s, %s)", (1, "Software Engineer"))
 
        #stage table
        #(id, stage_title)
        cur.execute("INSERT INTO stage values (%s, %s)", (1, "Phone Interview"))
        cur.execute("INSERT INTO stage values (%s, %s)", (2, "Coding Challenge"))
        cur.execute("INSERT INTO stage values (%s, %s)", (3, "Onsite Interview"))
   
        #step table
        #(id, step_title, stage_id)
        cur.execute("INSERT INTO step values (%s, %s, %s)", (1, "Overview", 3))
        cur.execute("INSERT INTO step values (%s, %s, %s)", (2, "Arrival", 3))
        cur.execute("INSERT INTO step values (%s, %s, %s)", (3, "In-Person Interview", 3))
        cur.execute("INSERT INTO step values (%s, %s, %s)", (4, "Coding Interview", 3))
        #TODO: Make id and stage_id a composite primary key
        
        #category table
        #(id, category_name)
        cur.execute("INSERT INTO category values (%s, %s)", (1, "Equipment"))
        cur.execute("INSERT INTO category values (%s, %s)", (2, "Environment"))
        cur.execute("INSERT INTO category values (%s, %s)", (3, "Communications"))
        cur.execute("INSERT INTO category values (%s, %s)", (4, "Policy"))
            
        #product table
        #(id, product_name, product_description, category_id, pre_approved)
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (1, "Ergonomic Keyboard", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (2, "Ergonomic Mouse", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (3, "Large Computer Monitor", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (4, "Screen-Reader Compatible Computer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1, True))

        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (5, "Elevator All-Floor Access", "This badge allows you to stop the elevator at any floor you need.", 2, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (6, "Severe Allergies", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (7, "Minimize Walking", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (8, "Quiet Space", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (9, "Height-Adjustable Table/Desk", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2, True))

        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (10, "Text-to-Speech Software", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 3, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (11, "Sign-Language Interpreter", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 3, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (12, "Captions", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 3, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (13, "Braille Copies", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 3, False))

        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (14, "Use My Own Computer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 4, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (15, "Extra Time", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 4, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (16, "Transportation to Interview", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 4, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (17, "Service Animal", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 4, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (18, "Personal Aide", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 4, False))
        #person table
        #(person_id, first_name, last_name, email, phone_number, password, address_id, job_id, stage_id
        #cur.execute("INSERT INTO person values (%s, %s, %s, %s, %s, %s, %s, %s, %s)", (1, 'Victoria', 'Kitt', 'vkitt@bb.com', '4122865555', 'welcome123', 1, 1, 3))

        # close communication with the PostgreSQL database server
        cur.close()
        # commit the changes
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()


if __name__ == '__main__':
    populate_tables()
