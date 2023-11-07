"use client"

import CountButton from "./CountButton"
import ProductTable from "./Store"

export default function Page() {
    return <div>
    <CountButton />
    <hr />
    <a href = "https://github.com/tcaron146/nextjs">Git Hub Repo</a>
    <hr />
    <ProductTable />
  </div>
  }