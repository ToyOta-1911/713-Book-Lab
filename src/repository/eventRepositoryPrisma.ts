import {prisma} from '../lib/prisma';
//import type Event from '../models/Event';
import {booklistModel, booklistModel as Event} from "../generated/prisma/models/booklist"
import Booklist from "../models/Event";
import {PageEvent} from "../models/EventPage";
import {Prisma} from "../generated/prisma/client";

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
          id: true,
          name: true,
        },
      },
    },
    omit: {organizerId: true}
  });
}
export async  function getAllEventsWithOrganizerPagination(
  keyword: string,
  pageSize: number,
  pageNo: number
) {
  const where = {
    //book_title: { contains: keyword }
   OR: [
        {book_title: {contains: keyword,
                    mode: Prisma.QueryMode.insensitive}},
        {author_name: {contains: keyword}},
        {member_name: {contains: keyword}},
        {category: {contains: keyword}},
        {organizer: { name: { contains: keyword } } }

    ]
  }
  const events = await prisma.booklist.findMany({
    where,
    skip: pageSize * (pageNo - 1),
    take: pageSize,
    select: {
      id: true,
      category: true,
	  book_title: true,
      organizerId: false,
      organizer: {
        select: {
          name: true
        }
      }
    }

  });
  const count = await prisma.booklist.count({ where });
  return { count, events } as unknown as PageEvent;
}

export function countEvent() {
  return prisma.booklist.count();
}

