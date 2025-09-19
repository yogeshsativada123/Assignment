export default class ContactPage {
  constructor(page) {
    this.page = page;
    this.emailInput = '#recipient-email';
    this.nameInput = '#recipient-name';
    this.messageInput = '#message-text';
    this.sendBtn = 'button:has-text("Send message")';
  }

  async sendMessage(email, name, message) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.messageInput, message);
    await this.page.click(this.sendBtn);
  }
}