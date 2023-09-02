import AsideAccount from "@components/publicFolder/AsideAccount/AsideAccount";
import BtnUp from "@components/publicFolder/BTN-UP/BTN-UP";
import Footer from "@components/publicFolder/Footer/Footer";
import Header from "@components/publicFolder/Header/Header";
import ListOfCommentsAccount from "@components/publicFolder/ListOfCommentsAccount/ListOfCommentsAccount";
import NavAccountResp from "@components/publicFolder/NavAccountResp/NavAccountResp";
import SliderName from "@components/publicFolder/SliderName/SliderName";
import SocialNetwork from "@components/publicFolder/SocialNetworks/SocialNetworks";

export default function CommentsAccount() {
  return (
    <>
      <Header />
      <SocialNetwork />
      <SliderName name="Mi Cuenta" />
      <main className="center">
        <div className="containerGlobalProducts">
          <AsideAccount />
          <NavAccountResp />
          <section className="containerInformation">
            <h2 className="subtitle">Mis Comentarios</h2>
            <ListOfCommentsAccount />
          </section>
        </div>
      </main>
      <BtnUp />
      <Footer />
    </>
  );
}
