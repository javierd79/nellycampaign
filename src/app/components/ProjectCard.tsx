import React from 'react'
import { Button, ChevronIcon, Text } from '@mantine/core'

interface IProjectCard {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  linkDesc?: string;
}

function ProjectCard({
  title,
  description,
  image,
  link,
  linkDesc
}: IProjectCard) {
  return (
    <div className='project_card' style={{ width: 'calc(33.33% - 20px)', height: '90%' }}>
      <Text fw={750} fz={18} c='#fff' ta="center" mt={10} style={{ letterSpacing: '3px' }}>
        {title.toUpperCase()}
      </Text>
      <div style={{ height: 'calc(100% - 50px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text c='#fff' ta="center" style={{ width: '90%', letterSpacing: '1px' }}>
          {description}
        </Text>
      </div>
    </div >
  )
}

export default ProjectCard