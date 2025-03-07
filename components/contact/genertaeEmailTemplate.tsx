type EmailTemplateProps = {
  name: string;
  email: string;
  selectedOption: string;
  message: string;
};

export function generateEmailTemplate({ name, email, selectedOption }: EmailTemplateProps): string {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #efefef; width: 600px; margin: 0 auto;">
      <div style="margin-bottom: 30px;">
      </div>
      <div style="background-color: #040e20; color: #fff; padding: 15px; text-align: left; margin-bottom: 30px;">
        <h1 style="display: inline; color: #fff;">Thank you for reaching out to </h1>
        <h1 style="display: inline; color: #4FC3F7;">Evelyn</h1>
        <h1 style="display: inline; color: #fff;">!</h1>
        <p style="font-size: 18px;">I have received your enquiry regarding <strong>${selectedOption}</strong> and will get back to you within 24 hours.</p>
        <p style="font-size: 14px; color: #ffcc00; margin-top: 10px;">
          Please note that this is an auto-reply. Do not reply to this email.
        </p>
      </div>
      <div style="margin-bottom: 30px; text-align: left;">
        <h3 style="color: #040e20; font-size: 20px;">Your Enquiry Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${selectedOption}</p>
      </div>
      <hr style="border: none; border-top: 1px solid #ccc; margin: 30px 0;">
      <div style="text-align: left; font-size: 14px;">
        <p>If you need immediate assistance, please contact me at 
          <strong><a href="mailto:yinyuchen2000@gmail.com" style="color: #5175b0;">yinyuchen2000@gmail.com</a></strong>.
        </p>
        <p>Evelyn | Canberra, Australia</p>
        <p>&copy; 2025 Evelyn. All Rights Reserved.</p>
        <p><a href="https://evelynhub.com" style="color: #5175b0;">Privacy Policy</a></p>
      </div>
    </div>
  `;
}


  
  
  
  