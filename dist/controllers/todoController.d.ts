import type { Request, Response } from "express";
export declare const todoController: {
    getAll(req: Request, res: Response): void;
    getById(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
    create(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
    update(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
    delete(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
    toggleCompleted(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
};
//# sourceMappingURL=todoController.d.ts.map