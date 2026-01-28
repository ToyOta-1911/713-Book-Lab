import type {booklistModel as Event} from "../generated/prisma/models/booklist";
export interface PageEvent {
    count: number;
    events: Event[];
   }
