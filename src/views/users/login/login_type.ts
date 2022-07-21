import { Component, Vue } from "vue-property-decorator";
import { Login_inter_Post_Payload } from "@/interface/users/login/login_inter";

@Component
export default class Login_type extends Vue {
  loginPostPayload: Login_inter_Post_Payload = {
    userId: "",
    password: "",
  };

  login(): void {
    // IDがあるかチェック
    if (this.isEmpty(this.loginPostPayload.userId)) {
      alert("IDを入力してください");
      return;
    }

    // PASSWORDがあるかチェック
    if (this.isEmpty(this.loginPostPayload.userId)) {
      alert("PASSWORDを入力してください");
      return;
    }

    console.log(this.loginPostPayload);
    console.log("login check!!");
  }

  // inputタグのvalueがあるかチェック
  isEmpty(inputValue: string | undefined): boolean {
    return inputValue === undefined || inputValue.length === 0;
  }

  mounted(): void {
    const idElement = document.getElementById("main-id") as HTMLInputElement;

    idElement.focus();
  }
}
