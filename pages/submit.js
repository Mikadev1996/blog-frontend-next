import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Submit() {
    return (
        <div className='app' data-theme='light'>
            <Nav />
            <main className='main'>
                <div>
                    <div>
                        <img />
                        <p>Post</p>
                    </div>
                    <div>
                        <input type='text' name='title' />
                        <textarea placeholder='Text (optional)'/>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}