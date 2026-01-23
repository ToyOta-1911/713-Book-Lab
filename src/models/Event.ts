export default interface Booklist {
  id: number;
  book_title: string;
  isbn: string;
  category: string;
  author_name: string;
  author_affiliation: string;
  member_code: string;
  member_name: string;
  phone: string;
  borrow_date: Date;
  due_date: Date;
  returned_date: Date;
}
