import "./errorPage.css"
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";

function ErrorPage() {
    return (
        <div className="error_page">
            {/* Import Header */}
            <div>
                <Header />
            </div>

            <div className="error_">
                <a href="" className="fa fa-arrow-left"></a>
                <div className="error">
                    <h1>404</h1>
                    <p>We're sorry but it looks like that page doesn't exist anymore.</p>
                </div>
            </div>

            {/* Import Footer */}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default ErrorPage;