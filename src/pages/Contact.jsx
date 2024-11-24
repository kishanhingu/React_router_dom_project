import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const Contact = () => {
  return (
    <>
      <section className="container section-contact">
        <div className="container">
          <h2 className="section-common--heading">Contact us</h2>
          <p className="section-common--subheading">
            Get in touch with us. We are always here to help you.
          </p>
        </div>

        <div className="container grid grid-two--cols">
          <div className="contact-content">
            <Form method="POST" action="/contact">
              <div className="grid grid-two-cols mb-3">
                <div>
                  <label htmlFor="username">full name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    autoComplete="off"
                    placeholder="enter full name"
                  />
                </div>

                <div>
                  <label htmlFor="email">email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="abc@gamil.com"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="subject">subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="title of your message"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="we are always here to help you."
                ></textarea>
              </div>

              <div className="mt-3">
                <button className="btn">send message</button>
              </div>
            </Form>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18800900166!2d72.65748353239132!3d21.159120355102836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1720766449297!5m2!1sen!2sin"
              width="100%"
              height="90%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
