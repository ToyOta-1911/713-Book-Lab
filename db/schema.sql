CREATE TABLE booklists (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    book_title VARCHAR(255),
    isbn VARCHAR(255),
    category VARCHAR(255),
    author_name VARCHAR(255),
    author_affiliation VARCHAR(255),
    member_code VARCHAR(255),
    member_name VARCHAR(255),
    phone VARCHAR(255),
    borrow_date DATE,
    due_date DATE,
    returned_date DATE
);
