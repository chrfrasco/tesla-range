import React from 'react'
import {getRange} from './utils'
import styled from 'styled-components'
import {withConfigValues} from './Configuration'

const TableWrapper = styled.div`
  margin-bottom: 2rem;
  border: thin solid #333;
  border-radius: 3px;
  overflow: hidden;
`

const Table = styled.table`
  margin: -1px;
  width: calc(100% + 2px);
  border-collapse: collapse;
`

const HeaderCell = styled.th`
  border: thin solid #888;
  padding: 6px 12px;
  text-align: left;
`

const DataCell = styled.td`
  border: thin solid #888;
  padding: 6px 12px;
  width: 16.67%;
`

const teslaModels = ['60', '60D', '75', '75D', '90D', 'P100D']
export const MilesInformation = withConfigValues(configValues => (
  <TableWrapper>
  <Table>
    <thead>
      <tr>
        {teslaModels.map(model => (
          <HeaderCell key={model}>{model}</HeaderCell>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {teslaModels.map(model => (
          <DataCell key={model}>
            {getRange({model, ...configValues})} miles
          </DataCell>
        ))}
      </tr>
    </tbody>
  </Table>
  </TableWrapper>
))
