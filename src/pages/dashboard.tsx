import dynamic from 'next/dynamic'
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const options = {
  chart: {
    toolbar: { show: false },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-05-10T00:00:00.000Z',
      '2022-05-11T00:00:00.000Z',
      '2022-05-12T00:00:00.000Z',
      '2022-05-13T00:00:00.000Z',
      '2022-05-14T00:00:00.000Z',
      '2022-05-15T00:00:00.000Z',
      '2022-05-16T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
} as const

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109],
  },
]

export default function Dashboard() {
  return (
    <Flex h={'100vh'} direction="column">
      <Header />

      <Flex w="full" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex={1} gap="4" minChildWidth="320px">
          <Box p={['4', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="md" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={['4', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="md" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
