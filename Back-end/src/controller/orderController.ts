import { Request, Response } from "express";
import orderService from "../service/orderService";
import { Order } from "../entity/order";
import { OrderDetail } from "../entity/orderDetail";

class OrderController {
    findAll = async (req: Request, res: Response) => {
        let { userId, restId } = req.query;
        try {
            if (!userId && !restId) {
                let data = await orderService.findAll();
                res.json(data);
            } else if (userId && !restId) {
                let data = await orderService.findAllByUserId(userId);
                res.json(data);
            } else if (!userId && restId) {
                let data = await orderService.findByRestaurantId(restId);
                res.json(data);
            } else {
                res.status(400).json({ message: "Invalid query parameters." });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal server error." });
        }
    }

    add = async (req: Request, res: Response) => {
        try {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const day = currentDate.getDate();
            const hours = currentDate.getHours();
            const minutes = currentDate.getUTCMinutes();
            const formattedDate = `${hours}:${minutes} ${year}-${month}-${day}`;
            const order = new Order();
            order.date = formattedDate;
            order.address = req.body.address;
            order.status = req.body.status;
            order.orderDetail = []
            let user = req.body.user
            let orderObj = {
                ...order,
                user
            }
            await orderService.add(orderObj);
            res.json(order);
        } catch (error) {
            res.status(500).json({ error: "Internal server error." });
        }
    }

    delete = async (req: Request, res: Response) => {
        try {
            await orderService.delete(req.params.id);
            res.json({ message: "Delete complete." });
        } catch (error) {
            res.status(500).json({ error: "Internal server error." });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            await orderService.update(req.params.id, req.body);
            res.json({ message: "Edit complete." });
        } catch (error) {
            res.status(500).json({ error: "Internal server error." });
        }
    }
    findById = async (req: Request, res: Response) => {
        try {
            let data = await orderService.findById(req.params.id);
            data[0].orderDetail = data[0].orderDetail.map((index) => {
                let value = index.quantity * (index.food.serviceFee + index.food.price * (100 - index.food.sale)/100)
                let item = {
                    ...index,
                    value
                }
                return item
            })
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new OrderController();
