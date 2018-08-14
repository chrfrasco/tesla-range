import React from 'react'
import styled from 'styled-components'
import {Intro} from './Intro'
import {Tesla} from './Tesla'
import {MilesInformation} from './MilesInformation'
import {Radio} from './RadioSet'
import {ConfigConsumer, ConfigProvider} from './Configuration'

const PageWrapper = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1rem 5rem;
`

const RowWrapper = styled.div`
  padding: 4px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Row = ({children, config}) => (
  <RowWrapper>
    <span>{config.name}</span>
    <Radio value={config.value} handleSelect={config.change}>
      {config.values.map(value => (
        <Radio.Button value={value} key={value}>
          {children(value)}
        </Radio.Button>
      ))}
    </Radio>
  </RowWrapper>
)

const Main = () => (
  <ConfigConsumer>
    {({speed, temperature, wheelSize, isACRunning}) => (
      <PageWrapper>
        <Intro />

        <Tesla speed={speed.value} wheelSize={wheelSize.value} />

        <MilesInformation />

        <Row config={speed}>
          {currentSpeed => `${currentSpeed} MPH`}
        </Row>

        <Row config={temperature}>
          {temp => `${temp}°`}
        </Row>

        <Row config={wheelSize}>
          {size => `${size} wheels`}
        </Row>

        <Row config={isACRunning}>
          {isRunning => isRunning ? 'AC on' : 'AC off'}
        </Row>
      </PageWrapper>
    )}
  </ConfigConsumer>
)

export const App = () => (
  <ConfigProvider>
    <Main />
  </ConfigProvider>
)
