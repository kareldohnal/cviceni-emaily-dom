import { EmailSection } from "./EmailSection/EmailSection.js";

const appElm = document.getElementById("app")

appElm.append(EmailSection({
  heading: "Nepřečtené", 
  emails: [], 
  folder: "unread"
}))

appElm.append(EmailSection({
  heading: "Přečtené", 
  emails: [], 
  folder: "read"
}))
