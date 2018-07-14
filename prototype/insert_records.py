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
        #(address_id, street_address, postal_code, city, state, country)
        cur.execute("INSERT INTO address values (%s, %s, %s, %s, %s, %s)", (1, "340 East 51st Street", "10022", "New York", "NY", "USA"))
        
        #job table
        #(job_id, job_title)
        cur.execute("INSERT INTO job values (%s, %s)", (1, "Software Engineer"))
 
        #stage table
        #(stage_id, stage_title)
        cur.execute("INSERT INTO stage values (%s, %s)", (1, "Phone Interview"))
        cur.execute("INSERT INTO stage values (%s, %s)", (2, "Coding Challenge"))
        cur.execute("INSERT INTO stage values (%s, %s)", (3, "Onsite Interview"))
         
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
