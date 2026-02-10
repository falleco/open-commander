import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";
import express from "express";
import { commandQueue } from "@/server/jobs/queues/command.queue";
import { commanderQueue } from "@/server/jobs/queues/commander.queue";
import { dummyQueue } from "@/server/jobs/queues/dummy.queue";
import { emailQueue } from "@/server/jobs/queues/email.queue";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

createBullBoard({
  queues: [
    new BullMQAdapter(commandQueue),
    new BullMQAdapter(commanderQueue),
    new BullMQAdapter(dummyQueue),
    new BullMQAdapter(emailQueue),
  ],
  serverAdapter: serverAdapter,
  options: {
    uiConfig: {
      boardTitle: "Open Commander",
      // boardLogo: {
      //   path: "https://cdn.my-domain.com/logo.png",
      //   width: "100px",
      //   height: 200,
      // },
      miscLinks: [{ text: "Logout", url: "/logout" }],
      favIcon: {
        default: "static/images/logo.svg",
        alternative: "static/favicon-32x32.png",
      },
    },
  },
});

const app = express();

app.use("/admin/queues", serverAdapter.getRouter());

// other configurations of your server

const port = process.env.BULL_BOARD_PORT ?? 4000;

app.listen(port, () => {
  console.log(
    `Bull Board UI available at http://localhost:${port}/admin/queues`,
  );
});
