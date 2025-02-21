declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
            };
        }
    }
}

// Делаем файл модулем
export {};
