"use client"

import { MantineProvider, Text } from '@mantine/core';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';

function App() {
  return (
    <main>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <div className="container">
          <Navbar />
        </div>
        <Hero />
      </MantineProvider>
    </main >
  )
}

export default App
