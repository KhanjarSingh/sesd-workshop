import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import studentRoutes from './routes/student.routes';
import { authMiddleware } from './middlewares/auth.middleware';

interface App_Interface {
    startServer(): void;
    connectDatabase(): void;
    initializeRoutes(): void
}

class App implements App_Interface {
    PORT: number | string;
    app: express.Application;

    constructor() {
        this.PORT = 4000;
        this.app = express();
        this.initializeRoutes()
        this.connectDatabase();
        this.startServer();
    }

    startServer(): void {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running at port ${this.PORT}`)
        })
    }

    async connectDatabase(): Promise<void> {
        try {
            await mongoose.connect("mongodb://localhost:27017/student-system")
            console.log("Database Connected");
        }
        catch (err) {
            console.log(err)
        }
    }

    initializeRoutes(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use('/api/students', authMiddleware, studentRoutes);

    }
}

export default App;