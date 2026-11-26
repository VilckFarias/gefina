import express from "express";
import InvoiceRouter from "./invoice.routes.ts";
import {join} from 'node:path';
import {existsSync} from 'node:fs';

const app = express();

app.get("/api/health", (_request, response) => {
  response.status(200).json({
    success: {
      status: 200,
      message: "Server is running"
    }
  });
});

app.use("/api/invoices", InvoiceRouter);
app.use(express.static(join(import.meta.dirname, "..", "./web", "./dist")));

app.use((_request, response) => {
  response.status(404).json({
    error: {
      status: 404,
      message: "Resource not found."
    }
  });
});

const envPath = join(import.meta.dirname, ".env");
if (existsSync(envPath)) {
  process.loadEnvFile(envPath);
}

app.listen(process.env.PORT || 3000);
