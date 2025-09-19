export default class ProductPage {
  constructor(page) {
    this.page = page;
    this.firstProductName = '//*[@id="tbodyid"]/div[1]/div/div/h4/a';
    this.firstProductPrice = '//*[@id="tbodyid"]/div[1]/div/div/h5';
  }

  async getFirstProductDetails() {
    const name = await this.page.textContent(this.firstProductName);
    const price = await this.page.textContent(this.firstProductPrice);
    return { name, price };
  }
}
