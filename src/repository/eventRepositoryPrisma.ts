import {prisma} from '../lib/prisma';
//import type Event from '../models/Event';
import {booklistModel, booklistModel as Event} from "../generated/prisma/models/booklist"
import Booklist from "../models/Event";

export function getEventByCategory(category: string) {
  return prisma.booklist.findMany({
    where: { category },
  });
}

export function getAllEvents() {
  return prisma.booklist.findMany();
}

export function getEventById(id: number) {
  return prisma.booklist.findUnique({
    where: { id },
  });
}

export function addEvent(newEvent: Booklist): Promise<booklistModel>{
  return prisma.booklist.create({
      data: {
        book_title: newEvent.book_title,
        isbn: newEvent.isbn,
        category: newEvent.category,
        author_name: newEvent.author_name,
        author_affiliation: newEvent.author_affiliation,
        member_code: newEvent.member_code,
 	    member_name: newEvent.member_name,
        phone: newEvent.phone,
        borrow_date: newEvent.borrow_date,
        due_date: newEvent.due_date,
        returned_date: newEvent.returned_date,
        //organizerId: newEvent.organizerId
      }
  });
}
export function getAllEventsWithOrganizer() {
  return prisma.booklist.findMany({
    include: {
      organizer: {
        select: {
          name: true,
        },
      },
    },
    omit: {organizerId: true}
  });
}
