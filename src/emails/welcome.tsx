import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  magicLink?: string;
  firstName?: string;
  name: string;
  message: string;
  email: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WelcomeEmailEmail = ({
  magicLink, name, message, email
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Log in with this magic link. { }</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo_new.png`}
          width={166}
          height={56}
          alt="SiQURO"
        />
        <Heading style={heading}>Hi, SiQURO suport</Heading>
        <Section style={body}>
          <Text style={paragraph}>

          </Text>
          <Text style={paragraph}>
            You get message from {name}, {email},
            {message}
          </Text>
          <Text style={paragraph}>

          </Text>
          <Text style={paragraph}>
            {message}
          </Text>
        </Section>
        <Text style={paragraph}>
          Best regards,
          <br />-  SiQURO team
        </Text>
        <Hr style={hr} />
        <Img
          src={`${baseUrl}/logo_new.png`}
          width={166}
          height={56}
          alt="SiQURO"
          style={{
            WebkitFilter: "grayscale(100%)",
            filter: "grayscale(100%)",
            margin: "20px 0",
          }}
        />
        <Text style={footer}>FAST ADVISORS OU</Text>
      </Container>
    </Body>
  </Html>
);

WelcomeEmailEmail.PreviewProps = {
  magicLink: "https://raycast.com",
} as WelcomeEmailProps;

export default WelcomeEmailEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const link = {
  color: "#FF6363",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};
