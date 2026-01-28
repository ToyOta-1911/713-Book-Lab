import express, {Request, Response} from "express";
import * as service from "../services/EventService";
import type {booklistModel as Event} from "../generated/prisma/models/booklist";

import exp from "constants";

const router = express.Router();

router.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const event = await service.getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});

router.get("/", async (req, res) => {
    //if (req.query.pageSize && req.query.pageNo) {
    const pageSize = parseInt(req.query.pageSize as string) || 3;
    const pageNo = parseInt(req.query.pageNo as string) || 1;
    //const events = await service.getAllEventsWithPagination(pageSize, pageNo);
    //const totalEvents = await service.count();
    //res.json({ totalEvents, events });
    //res.setHeader("x-total-count", totalEvents.toString());
    //res.json(events);
    //}
    const keyword = req.query.keyword as string;
    const result = await


    service.getAllEventsWithPagination(keyword,pageSize, pageNo);
    res.setHeader("x-total-count", result.count.toString());
    res.json(result.events);
     if (req.query.category) {
        const category = req.query.category as string;
        const filteredEvents = await service.getEventByCategory(category);
        res.json(filteredEvents);
    } else {
        res.json(await service.getAllEvents());
    }
     if (result.events.length === 0) {
        try{
        const result = await service.getAllEventsWithPagination(keyword,pageSize, pageNo);
        if (result.events.length === 0) {
           res.status(404).send("No event found");
            return;
        }
        res.setHeader("x-total-count", result.count.toString());
        res.json(result.events);
    } catch (error) {
        if (pageNo < 1 || pageSize < 1) {
      res.status(400).send("Invalid pageNo or pageSize");
    } else {
      res.status(500).send("Internal Server Error");
    }
         return;
     }
     finally {
    console.log(`Request is completed. with pageNo=${pageNo} and pageSize=${pageSize}`);
        }
    }
 });

router.post("/", async (req, res) => {
    const newEvent: Event = req.body;

    res.json(await service.addEvent(newEvent));
});

export default router;
