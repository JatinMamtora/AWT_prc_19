const express = require(&quot;express&quot;);
const nodemailer = require(&quot;nodemailer&quot;);
const bodyParser = require(&quot;body-parser&quot;);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'jatinumamtoragmail.com',
    pass: 'hello',
  },
});

app.get("/", (req, res){
  res.send(`
<h1>Email Subscription</h1>
    <form method="POST" action="/subscribe">
      <label>Email:</label>
      <input type="email" name="email" required>
      <button type="submit">Subscribe</button>
    </form>
  `);
});
// Handle POST request to subscribe
app.post(&quot;/subscribe&quot;, (req, res) {
  const email = req.body.email;
  const mailOptions = {
    from: "YourEmailAddress",
    to: email,
    subject: "Welcome to Our Newsletter",
    text: "Thank you",
  };

  transporter.sendMail(mailOptions, (error, info) {
    if (error) {
      console.error(error);
      res.status(500).send("Subscription failed");
    } else {
      console.log("Email sent: + info.response);
      res
        .status(200)
        .send(;Subscription successful! Check your email for confirmation");
    }
  });
});
app.listen(PORT, ()  {
  console.log(`Server is running on port ${PORT}`);
});
