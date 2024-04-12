import express from 'express';
import Link, {generateId} from "../models/Links";
import {LinkProp} from "../types";


const linksRouter = express.Router();

linksRouter.post('/links', async (req, res) => {
    if (!req.body.url) {
        return res.status(400).send({ error: 'URL is required' });
    }
    const LinkData: LinkProp = {
        originalUrl: req.body.url,
        _id: generateId(7)
    };

    const link = new Link(LinkData);

    try {
        await link.save();
        res.status(201).send({
            _id: link._id,
            shortUrl: link._id,
            linkUrl: link.originalUrl
        });
    } catch (err) {
        res.sendStatus(500);
    }
});

linksRouter.get('/:shortUrl', async (req, res) => {
    try {
        const link = await Link.findById(req.params.shortUrl);
        if (link) {
            res.redirect(301, link.originalUrl);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        res.sendStatus(500);
    }
});

export default linksRouter;