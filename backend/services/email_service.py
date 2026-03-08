import resend
import os
from datetime import datetime

resend.api_key = os.environ.get("RESEND_API_KEY")

RECEIVER_EMAIL = os.environ.get("CONTACT_RECEIVER_EMAIL")
SENDER_EMAIL = os.environ.get("CONTACT_SENDER_EMAIL", "onboarding@resend.dev")


def send_contact_notification(name, email, subject, message):
    """Send notification to you when someone contacts you."""
    html = build_notification_email(name, email, subject, message)

    params = {
        "from": f"Portfolio Contact <{SENDER_EMAIL}>",
        "to": [RECEIVER_EMAIL],
        "subject": f"📬 New Contact: {subject}",
        "html": html,
    }

    response = resend.Emails.send(params)
    return response


def build_notification_email(name, email, subject, message):
    timestamp = datetime.now().strftime("%B %d, %Y at %I:%M %p")
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f0f;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:40px;border-radius:16px 16px 0 0;text-align:center;">
                  <p style="margin:0 0 8px 0;color:rgba(255,255,255,0.7);font-size:13px;letter-spacing:3px;text-transform:uppercase;">Portfolio Contact Form</p>
                  <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">Someone reached out! 👋</h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="background-color:#1a1a1a;padding:40px;border-radius:0 0 16px 16px;">

                  <!-- Sender Info -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:30px;">
                    <tr>
                      <td style="background-color:#252525;border-radius:12px;padding:24px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom:16px;border-bottom:1px solid #333;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">From</p>
                              <p style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">{name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:16px;padding-bottom:16px;border-bottom:1px solid #333;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
                              <a href="mailto:{email}" style="color:#6366f1;font-size:15px;text-decoration:none;">{email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:16px;padding-bottom:16px;border-bottom:1px solid #333;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Subject</p>
                              <p style="margin:0;color:#ffffff;font-size:15px;">{subject}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:16px;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Received</p>
                              <p style="margin:0;color:#ffffff;font-size:15px;">{timestamp}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Message -->
                  <p style="margin:0 0 12px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message</p>
                  <div style="background-color:#252525;border-left:4px solid #6366f1;border-radius:0 12px 12px 0;padding:24px;margin-bottom:30px;">
                    <p style="margin:0;color:#e0e0e0;font-size:15px;line-height:1.8;">{message}</p>
                  </div>

                  <!-- Reply Button -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center">
                        <a href="mailto:{email}?subject=Re: {subject}"
                           style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#ffffff;text-decoration:none;padding:14px 40px;border-radius:8px;font-size:15px;font-weight:600;letter-spacing:0.5px;">
                          Reply to {name}
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:24px;text-align:center;">
                  <p style="margin:0;color:#555;font-size:12px;">Sent via your portfolio contact form</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    """