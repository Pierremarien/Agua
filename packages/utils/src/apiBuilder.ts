const apiUrl = "http://localhost:8080/";

 class ApiBuilder {
  constructor(private url: string) {}

  public buildUrl(path: string) {
    return `${this.url}${path}`;
  }
}
export const apiBuilder = new ApiBuilder(apiUrl);