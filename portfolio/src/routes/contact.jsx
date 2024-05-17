import Navbar from "./nav";






export default function Contact() {


    return (
        <div>
            <Navbar></Navbar>
            <h1 className="ml-4 pl-6 is-size-3">CONTACT ME</h1>
            <div className="m-4 pl-6 pr-6">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input is-link" type="text" placeholder="Text input"/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input is-link" type="email" placeholder="Email input"/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea is-link" placeholder="Textarea"></textarea>
                    </div>
                </div>
                <div class="field is-grouped pt-3">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
