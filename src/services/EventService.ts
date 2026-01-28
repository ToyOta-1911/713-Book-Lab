import Booklist from "../models/Event";
import * as repo from "../repository/eventRepositoryPrisma";
import {booklistModel as Event} from "../generated/prisma/models/booklist"

export function getEventByCategory(category: string){
  return repo.getEventByCategory(category);
}

export function getAllEvents(){
  return repo.getAllEvents();
}

export function getEventById(id: number){
  return repo.getEventById(id);
}

export function addEvent(newEvent: Booklist){
  return repo.getAllEventsWithOrganizer();
}
export async  function getAllEventsWithPagination(keyword: string,pageSize: number, pageNo: number) {
  const pageEvents = await repo.getAllEventsWithOrganizerPagination(keyword,pageSize, pageNo);
  return pageEvents;
}
export function count(){
  return repo.countEvent();
}

