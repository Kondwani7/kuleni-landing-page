CREATE DATABASE test;

create table kuleni_questions(message_id serial primary key, 
							 fullname VARCHAR(255), 
							 email VARCHAR(255),
							 question VARCHAR(255)
							);

create table kuleni_register(registered_id serial primary key, 
							 fullname VARCHAR(255), 
							 email VARCHAR(255),
							 new_user VARCHAR(255),
							 construction_worker VARCHAR(255),
							 both_options VARCHAR(255)
							);