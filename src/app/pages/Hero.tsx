import { Text } from "@mantine/core"
import ProjectCard from "../components/ProjectCard"

function Hero() {
  return (
    <div className="container-fluid first-section">
      <div className="container" style={{ boxShadow: "0px 0px 7px 0px white", background: '#fbfff4', height: 'calc(100vh - 79px)', borderRadius: '7px 7px 0 0' }}>
        <div style={{ height: '40%', width: '100%', margin: '0 40px', justifyContent: 'center', border: "2px dashed black" }}>
          <Text ta="center" style={{ margin: '10% 0' }} w="100%" color="black" fw={550} fz={40} italic>—— Imagen ——</Text>
        </div>
        <div style={{ display: 'flex', width: '100%', height: "50%", justifyContent: 'space-around', gap: 20, padding: "0 40px", flexWrap: 'wrap' }}>
          <ProjectCard
            title="Proyecto 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in accumsan nisi. Morbi ut lacinia tellus. Duis malesuada tellus ipsum, accumsan accumsan dui."
          />
          <ProjectCard
            title="Proyecto 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in accumsan nisi. Morbi ut lacinia tellus. Duis malesuada tellus ipsum, accumsan accumsan dui."
          />
          <ProjectCard
            title="Proyecto 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in accumsan nisi. Morbi ut lacinia tellus. Duis malesuada tellus ipsum, accumsan accumsan dui."
          />
        </div>
      </div>
    </div>
  )
}

export default Hero