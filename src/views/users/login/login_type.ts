import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login_type extends Vue {
  mounted(): void {
    const idElement = document.getElementById("main-id") as HTMLInputElement;

    idElement.focus();
  }
}
