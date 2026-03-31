import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface VerifyEmailProps {
  otp?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const VerifyEmail = ({ otp }: VerifyEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white font-plaid">
        <Container className="bg-white border border-solid border-[#eee] rounded shadow-[rgba(20,50,70,.2)] shadow-md mt-5 max-w-90 mx-auto my-0 pt-17 px-0 pb-32.5">
          {/* https://drive.google.com/file/d/1X2pGYaAlGqsTdJ86e4orDvcYTC393QD_/view?usp=sharing */}
          <Img
            src="https://drive.google.com/thumbnail?id=1X2pGYaAlGqsTdJ86e4orDvcYTC393QD_&sz=s800"
            width="212"
            alt="Vaidya LMS"
            className="mx-auto my-0"
          />
          <Text className="text-[#0a85ea] text-[11px] font-bold h-4 tracking-[0] leading-4 mt-4 mb-2 mx-2 uppercase text-center">
            Verify Your Identity
          </Text>
          <Heading className="text-black font-medium inline-block text-[20px] leading-6 my-0 text-center w-full">
            Enter the following code to verify your email on Vaidya LMS.
          </Heading>
          <Section className="bg-[rgba(0,0,0,.05)] rounded mx-auto mt-4 mb-3.5 align-middle w-70">
            <Text className="text-black text-[32px] font-bold tracking-[6px] leading-10 py-2 mx-auto my-0 block text-center">
              {otp}
            </Text>
          </Section>
          <Text className="text-[#444] text-[15px] leading-5.75 tracking-[0] py-0 px-10 m-0 text-center">
            Not expecting this email?
          </Text>
          <Text className="text-[#444] text-[15px] leading-5.75 tracking-[0] py-0 px-10 m-0 text-center">
            Contact{" "}
            <Link
              href="mailto:login@plaid.com"
              className="text-[#444] underline"
            >
              help@vaidyalms.com
            </Link>{" "}
            if you did not request this code.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

VerifyEmail.PreviewProps = {
  validationCode: "144833",
} as VerifyEmailProps;

export default VerifyEmail;
