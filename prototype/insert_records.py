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
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (1, "Ergonomic Keyboard", "A computer keyboard designed to minimize discomfort and prevent potential injuries.", 1, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (2, "Ergonomic Mouse", "A computer mouse designed to minimize discomfort and prevent potential injuries.", 1, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (3, "Headphones", "Noise-cancelling headphones may be worn to minimize ambient sound.", 1, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (4, "Height-Adjustable Table", "A table that can raised or lowered to a comfortable working height.", 1, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (5, "Large Computer Monitor", "A computer monitor with a screen size larger than 15 inches.", 1, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (6, "Specialized Seating", "Request office chairs that are adjustable, reclining, etc.", 1, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (7, "Typing Aid", "A specific object or tool to assist with typing on a keyboard.", 1, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (8, "Videoconferencing Software", "Bloomberg's default videoconferencing software is Nexi.", 1, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (9, "Videophone", "An alternative to a phone call that combines live video and audio.", 1, False))

        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (10, "Dark Space", "A dark room to minimize light sensitivity.", 2, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (11, "Elevator All-Floor Access", "A badge that allows you to stop the elevator at any floor you need.", 2, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (12, "Private Restroom", "Reserve a private stall or restroom.", 2, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (13, "Quiet Space", "A quiet room for prayer, medical needs, etc.", 2, True))

        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (14, "Accessible Colors", "Alter color palette/contrast to improve readability of key materials.", 3, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (15, "Braille Copies", "Request that relevant materials be printed in Braille.", 3, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (16, "Closed Captioning", "Subtitles accompany key video and audio materials.", 3, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (17, "Dictation Software", "Software that records and edits spoken language in real-time.", 3, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (18, "Print Digital Materials", "Convert digital materials to printed copies.", 3, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (19, "Receive Copies in Advance", "Provide copies of relevant materials before the interview.", 3, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (20, "Sign-Language Interpreter", "Bring or request a sign language interpreter.", 3, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (21, "Text-to-Speech Software", "Software that converts text into spoken language output.", 3, True))

        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (22, "Extended Time", "Allow extra time to complete interview-related tasks.", 4, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (23, "Limit Floor/Room Changes", "Minimize walking or movement between spaces.", 4, True))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (24, "Personal Care Aide", "Bring or request a personal care aide.", 4, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (25, "Service Animal", "Bring or request a service animal.", 4, False))
        cur.execute("INSERT INTO product values (%s, %s, %s, %s, %s)", (26, "Use My Own Computer", "Complete interview-related tasks on a personal device.", 4, True))

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
