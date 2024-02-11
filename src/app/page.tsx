"use client"

import { MantineProvider, Text } from '@mantine/core';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <div className="container">
          <Navbar />

        </div>
        <div className="container-fluid first-section first-section">
          <div className="container" style={{ borderTop: "2px dashed #3023AE", borderLeft: "2px dashed #3023AE", borderRight: "2px dashed #3023AE", height: 'calc(100vh - 79px)', borderRadius: '7px 7px 0 0' }}>
            <Text ta="center" fw={550} fz={40} italic>Imagen referencial aquí</Text>
          </div>
          {/* <FeaturesAsymmetrical /> */}
        </div>
        <div className="container-fluid maxHeight first-sectionnnn">
          {/* <img style={{ position: 'absolute', bottom: 100, right: 300 }} src="/women_dress_red.png" /> */}
        </div>
        <div className="container-fluid maxHeight first-sectionn">
          {/* <img style={{ position: 'absolute', bottom: 100, right: 300 }} src="/women_dress_red.png" /> */}
        </div>
        <div className="container-fluid maxHeight first-sectionnn">
          {/* <img style={{ position: 'absolute', bottom: 100, right: 300 }} src="/women_dress_red.png" /> */}
        </div>
        <div className="container-fluid maxHeight first-sectionnnnnn">
          {/* <img style={{ position: 'absolute', bottom: 100, right: 300 }} src="/women_dress_red.png" /> */}
        </div>
      </MantineProvider>
    </main >
  )
}

export default App
