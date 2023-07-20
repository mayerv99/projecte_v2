import { useState } from "react"
import { Wrapper, DownloadModal, Modal } from "./styled"
import Select from "../Forms/Select"
import * as XLSX from "xlsx"
import { getAllEnterprises } from "../../Services/enterprise"
import { getUsers } from "../../Services/user"
import { getInterferences } from "../../Services/interference"

import { saveAs } from "file-saver"

function DownloadButton() {
  const [showForm, setShowForm] = useState()
  const [type, setType] = useState()

  const typeOptions = [
    {
      label: "Empreendimentos",
      value: "enterprise",
    },
    { label: "Usuários", value: "users" },
    { label: "Interferências", value: "interferences" },
  ]

  const returnEnterprise = async () => {
    const enterprises = await getAllEnterprises()
    return enterprises.data
  }

  const returnInterferences = async () => {
    const interferences = await getInterferences("all")
    return interferences.message
  }

  const returnUsers = async () => {
    const users = await getUsers("all")
    return users.message
  }

  const handleDownload = async () => {
    if (type.value === "enterprise") {
      const data = await returnEnterprise()
      return download(data)
    }
    if (type.value === "users") {
      const data = await returnUsers()
      return download(data)
    }

    const data = await returnInterferences()
    return download(data)
  }

  const download = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")

    const excelBuffer = XLSX.write(workbook, {
      type: "array",
      bookType: "xlsx",
    })

    const excelBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })

    saveAs(excelBlob, "data.xlsx")
  }
  return (
    <>
      <Wrapper onClick={() => setShowForm(true)}>Baixar dados</Wrapper>
      {showForm && (
        <DownloadModal>
          <Modal>
            <button className="close" onClick={() => setShowForm(false)}>
              X
            </button>
            <Select
              options={typeOptions}
              value={type}
              setValue={(e) => setType(e)}
            />
            <button onClick={handleDownload} className="download">
              Baixar
            </button>
          </Modal>
        </DownloadModal>
      )}
    </>
  )
}

export default DownloadButton
