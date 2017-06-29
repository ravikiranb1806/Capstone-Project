#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    backend.models
    ~~~~~~~~~~~~~~

    This module implements the database models of this application.

    For more information on how to create models:
        - Flask-SQLAlchemy : http://flask-sqlalchemy.pocoo.org/2.1/
        - SQLAlchemy       : http://www.sqlalchemy.org/

    For more information on how to hash passwords:
        - Flask-Bcrypt : https://flask-bcrypt.readthedocs.io/en/latest/
"""

from backend import db, bcrypt


class User(db.Model):
    """This is the first model in the database."""
    __tablename__ = 'users'

    # Fields in this model
    id       = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(50), nullable=False)
    lastname = db.Column(db.String(50), nullable=False)
    usertype = db.Column(db.String(20), nullable=False)
    email    = db.Column(db.String(50), nullable=False, unique=True)
    education = db.Column(db.String(50), nullable=False)
    major = db.Column(db.String(50), nullable=False)
    gender = db.Column(db.String(1), nullable=False)
    about = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(25), nullable=False)

    def __init__(self, firstname, lastname, usertype, email, education, major, gender, about, password):
        """
        This function initializes this model. This function is necessary
        since we are hashing the user's password before storing it into 
        the database.
        """
        self.firstname = firstname
        self.lastname = lastname
        self.usertype = usertype
        self.email    = email
        self.education = education
        self.major = major
        self.gender = gender
        self.about = about
        # Protecting the user's password using a hash function
        self.password = bcrypt.generate_password_hash(password)
    
    def check_password(self, password):
        """This is a helper function for checking the user's password."""
        return bcrypt.check_password_hash(self.password, password)



# More models can be added here...