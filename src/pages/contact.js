import { Link } from "gatsby"
import * as React from "react"
import { FooBarForm } from "../components/FooBarForm"
import Layout from "../components/layout"


const ContactUs = () => (
    <div css={`background:darkcyan; width: 100%; height: 1000px`}>
        <Layout>
            <h1>Hi Slack Team, this is Contact-Us page</h1>
            <Link to="/"> Go To Home Page </Link>
            <FooBarForm />
        </Layout>
    </div>
)

export default ContactUs