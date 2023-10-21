import mail from "@sendgrid/mail";
import { NextResponse } from "next/server";

mail.setApiKey(process.env.SENDGRID_API_KEY || "");
export async function POST(request) {
  let response = {};
  const body = await request.json();
  // I know the formData I sent in my request has name, email, and message fields so I'm just manually grabbing them to format a message
  const message = `
        FullName: ${body.fullname}
         Email: ${body.email}
         Subject: ${body.subject}
         Message: ${body.message}
     `;
  const data = {
    to: "jose.david.soto92@gmail.com",
    from: "jodasos03@gmail.com",
    subject: "Contact Message",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  // Send the data and create a response object. I'm using status and message to display a success or fail notification in the UI
  await mail
    .send(data)
    .then(() => {
      response = {
        status: "success",
        message: "Your message was sent. I'll be in contact shortly.",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Message failed to send with error, ${error}`,
      };
    });
  return NextResponse.json(response);
}
