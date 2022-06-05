import { Stack } from '@chakra-ui/react'
import { GitMerge, Kanban, Table, Users } from 'phosphor-react'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={Kanban} href="/dashboard">
          Dashboars
        </NavLink>
        <NavLink icon={Users} href="/users">
          Usuários
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={Table} href="/forms">
          Formulários
        </NavLink>
        <NavLink icon={GitMerge} href="/automation">
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}
