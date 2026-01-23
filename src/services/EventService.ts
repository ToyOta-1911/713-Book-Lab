import Booklist from "../models/Event";
const booklists: Booklist[] = [
  {
    id: 1,
    book_title: "1984",
    isbn: "ISBN-1984",
    category: "Novel",
    author_name: "George Orwell",
    author_affiliation: "Independent",
    member_code: "M001",
    member_name: "Somchai Jaidee",
    phone: "0812345678",
    borrow_date: new Date("2024-07-01"),
    due_date: new Date("2024-07-10"),
    returned_date: new Date("2024-07-10"),
  },
  {
    id: 2,
    book_title: "Animal Farm",
    isbn: "ISBN-AF",
    category: "Political Satire",
    author_name: "George Orwell",
    author_affiliation: "Independent",
    member_code: "M001",
    member_name: "Somchai Jaidee",
    phone: "0812345678",
    borrow_date: new Date("2024-07-01"),
    due_date: new Date("2024-07-10"),
    returned_date: new Date("2024-07-09"),
  },
  {
    id: 3,
    book_title: "Norwegian Wood",
    isbn: "ISBN-NW",
    category: "Novel",
    author_name: "Haruki Murakami",
    author_affiliation: "Waseda University",
    member_code: "M002",
    member_name: "Somsri Deemark",
    phone: "0899999999",
    borrow_date: new Date("2024-07-03"),
    due_date: new Date("2024-07-15"),
    returned_date: new Date("2024-07-15"),
  },
  {
    id: 4,
    book_title: "Kafka on the Shore",
    isbn: "ISBN-KAFKA",
    category: "Fantasy",
    author_name: "Haruki Murakami",
    author_affiliation: "Waseda University",
    member_code: "M001",
    member_name: "Somchai Jaidee",
    phone: "0812345678",
    borrow_date: new Date("2024-07-10"),
    due_date: new Date("2024-07-20"),
    returned_date: new Date("2024-07-20"),
  },
  {
    id: 5,
    book_title: "Sapiens",
    isbn: "ISBN-SAPIENS",
    category: "History",
    author_name: "Yuval Harari",
    author_affiliation: "Hebrew University",
    member_code: "M001",
    member_name: "Somchai Jaidee",
    phone: "0812345678",
    borrow_date: new Date("2024-07-10"),
    due_date: new Date("2024-07-20"),
    returned_date: new Date("2024-07-18"),
  },

  // ✅ เพิ่มข้อมูล event อีก 5 objects
  {
    id: 6,
    book_title: "1Q84",
    isbn: "ISBN-1Q84",
    category: "Novel",
    author_name: "Haruki Murakami",
    author_affiliation: "Waseda University",
    member_code: "M003",
    member_name: "Anan Wattanakul",
    phone: "0822222222",
    borrow_date: new Date("2024-07-12"),
    due_date: new Date("2024-07-25"),
    returned_date: new Date("2024-07-25"),
  },
  {
    id: 7,
    book_title: "Homo Deus",
    isbn: "ISBN-HOMODEUS",
    category: "History",
    author_name: "Yuval Harari",
    author_affiliation: "Hebrew University",
    member_code: "M002",
    member_name: "Somsri Deemark",
    phone: "0899999999",
    borrow_date: new Date("2024-07-13"),
    due_date: new Date("2024-07-27"),
    returned_date: new Date("2024-07-27"),
  },
  {
    id: 8,
    book_title: "The Wind-Up Bird Chronicle",
    isbn: "ISBN-WINDUP",
    category: "Fantasy",
    author_name: "Haruki Murakami",
    author_affiliation: "Waseda University",
    member_code: "M001",
    member_name: "Somchai Jaidee",
    phone: "0812345678",
    borrow_date: new Date("2024-07-14"),
    due_date: new Date("2024-07-28"),
    returned_date: new Date("2024-07-26"),
  },
  {
    id: 9,
    book_title: "Down and Out in Paris and London",
    isbn: "ISBN-DOWNOUT",
    category: "Novel",
    author_name: "George Orwell",
    author_affiliation: "Independent",
    member_code: "M004",
    member_name: "Kanya Ploy",
    phone: "0833333333",
    borrow_date: new Date("2024-07-15"),
    due_date: new Date("2024-07-22"),
    returned_date: new Date("2024-07-22"),
  },
  {
    id: 10,
    book_title: "21 Lessons for the 21st Century",
    isbn: "ISBN-21LESSONS",
    category: "History",
    author_name: "Yuval Harari",
    author_affiliation: "Hebrew University",
    member_code: "M003",
    member_name: "Anan Wattanakul",
    phone: "0822222222",
    borrow_date: new Date("2024-07-16"),
    due_date: new Date("2024-07-30"),
    returned_date: new Date("2024-07-30"),
  },
];
export function getEventByCategory(category: string): Promise<Booklist[]> {
  const filteredEvents = booklists.filter((event) => event.category === category);
  return Promise.resolve(booklists);
}

export function getAllEvents(): Promise<Booklist[]> {
  return Promise.resolve(booklists);
}

export function getEventById(id: number): Promise<Booklist | undefined> {
  return Promise.resolve(booklists.find((event) => event.id === id))
}

export function addEvent(newEvent: Booklist): Promise<Booklist> {
  newEvent.id = booklists.length + 1;
  booklists.push(newEvent);
  return Promise.resolve(newEvent);
}
