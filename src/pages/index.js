import React from "react"
import { Link } from "gatsby"

import Mapbox from "../components/Mapbox"
import LocaleSwitcher from "../components/LocaleSwitcher"
import { TranslationProvider } from "../components/Translation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import strings, { translations } from "../util/strings"

const IndexPage = () => (
  <Layout>
    <TranslationProvider translations={translations}>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>{strings.test}</p>

      <LocaleSwitcher />
      {/* <Mapbox /> */}
    </TranslationProvider>
  </Layout>
)

export default IndexPage
