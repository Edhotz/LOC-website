import React from 'react'
import { Button, Table } from 'evergreen-ui'
import { useHistory } from "react-router-dom"
export const ClientDataTable = () => {
  const router = useHistory()

  const handleRouter = async (url) => {
    await router.push(url)
  }

  return (
    <Table height={300} width={600}>
  <Table.Head>
    <Table.SearchHeaderCell />
    <Table.TextHeaderCell>Lista de clientes</Table.TextHeaderCell>
  </Table.Head>
  <Table.Body height={240} width={600} alignItems="center" justifyContent="center">
    {profiles.map((profile) => (
      <Table.Row key={profile.id} isSelectable onSelect={() => handleRouter("/admin/customer-profile")}>
       <Button>
       <Table.TextCell>{profile.name}</Table.TextCell>
        </Button> 
        <Table.TextCell>{profile.lastActivity}</Table.TextCell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
  )
}

const profiles = [
  {
    "id": "1",
    "lastActivity": "a few seconds ago",
    "ltv": "$365",
    "name": "Cheryl Carter"
  },
  {
    "id": "2",
    "lastActivity": "a minute ago",
    "ltv": "$427",
    "name": "Heather Morales"
  },
  {
    "id": "3",
    "lastActivity": "3 minutes ago",
    "ltv": "$538",
    "name": "Sean Jackson"
  },
  {
    "id": "4",
    "lastActivity": "4 minutes ago",
    "ltv": "$171",
    "name": "Catherine Anderson"
  },
  {
    "id": "5",
    "lastActivity": "6 minutes ago",
    "ltv": "$222",
    "name": "Jack Phillips"
  },
 
]

