import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch with Us"
        description="We are here to assist you with all your SAP needs. Whether you have questions about our services, need support, or want to discuss a potential project, our team is ready to help."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
