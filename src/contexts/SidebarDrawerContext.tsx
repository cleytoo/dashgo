import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect } from 'react'

const SidebarDrawerContext = createContext({} as SidebarDrawerProviderData)

type SidebarDrawerProviderData = UseDisclosureReturn

export function SidebarDrawerProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const disclosure = useDisclosure()

  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useDrawer = () => useContext(SidebarDrawerContext)
