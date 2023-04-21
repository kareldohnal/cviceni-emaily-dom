import { Email } from "../Email/Email.js";

export const EmailSection = (props) => {
  const { heading, emails, folder } = props;

  // Vytvoř element section
  const element = document.createElement("section");
  element.classList.add("inbox");

  // Přidej elementu section innerHTML
  element.innerHTML = `
        <h2>${heading}</h2>
        <div class="emails" id="${folder}"></div>
    `;

  // Označ element kontejneru emailů
  const emailContainerElm = element.querySelector(`#${folder}`);

  // Řekni si o data
  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
    .then((response) => response.json())
    .then((data) => {
      // Dostaň data z data.emails do pole emails
      emails.push(...data.emails); // email1, email2, email3, ...
      // emails.push(email1, email2, email3)

      // emails = [email1, email2, email3, ...]
      // Vygeneruj si pole s komponentami Email
      const emailElms = emails.map((email) => {
        return Email({
          id: email.id,
          senderName: email.sender.name,
          subject: email.subject,
          time: email.time,
          unread: email.unread,
        //   body: "Nějaký testovací text."
        });
      });
      // emailElms = [Email, Email, Email, Email]

      // Vysyp komponenty Email do kontejneru emailů
      emailContainerElm.append(...emailElms);
    });

  // Return element section
  return element;
};
