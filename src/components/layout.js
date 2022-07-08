import Footer from "./footer"
export default function Layout({children}) {
    <>
      <main>{children}</main>
      <Footer />
    </>
}