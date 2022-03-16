import { styled } from '@mui/material/styles';
import {Divider, Chip, Box, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Skills from '../Skills'

const Root = styled('div')(({ theme }) => ({
      width: '100%',
      color: 'dark',
      ...theme.typography.body1,
      '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
      },
    }));

    const reactNativeHardSkills = ["JavaScript up to ES6", "Hooks","Node", "NPM", "React JS", "Git", "GitHub, Pages", "CI/CD", "Mobile First", "User Centricity", "Jest", "Expo","IOS", "Android", "Firebase Auth services", "Firestore", "Data Modeling > JSON", "API Consumption", "Agile Methodology", "SDLC - Agile", "Documentation", "MarkDown", "HTML5", "CSS3", "Marvel App", "Programming Logic"]

    const requeriments = ["ReactJS Intermediate", "HTML5, CSS3","Nivel mínimo de inglés: Básico", "Intensive 3 months Plan : 5h diarias", "Total Expertisse: 450 hrs"]

const ReactNative = () => {
      
      return (
            <div>
                  <h2>React Native Software Development</h2>
                  <Root>
                  <Divider></Divider>
                        <div>
      Consideramos importante la adquisición de habilidades blandas y técnicas como parte de la formación profesional de los nuevos desarrolladores de software. </div>
     <Divider textAlign="center">
      <Chip label=" SOFT SKILLS " />
      </Divider>
      <div>
      La comunicación asertiva, la autorganización, autodeterminación, el trabajo en equipo, la empatía y la mentalidad agile son pilares importantes para el desarrollo de software, por lo que todos los cursos incluyen la práctica activa de las habilidades blandas basadas en la autobservación y el estoicismo. 
      </div>
      <Divider textAlign="center">
      <Chip label=" HARD SKILLS " />
      </Divider>
      <div>
      Las habilidades técnicas se desarrollan mediante un ritmo personal basado en la potencialización de la capacidad de autoaprendizaje, por lo que cada nuevo desarrollador de software se centra en su modo favorito de aprendizaje. 
      </div>
     
    
    <Skills skills= {reactNativeHardSkills}/>
    <Divider textAlign="center">
      <Chip label=" Projects " />
    </Divider>
      <div>
            Programa totalmente orientado a la resolución de problemas reales mediante la elaboración de 5 proyectos.
      </div>
      <Divider textAlign="center">
      <Chip label=" Requeriments " />
      </Divider>
      <div>
            
            
      <Box component="div" sx={{ width: '100%', bgcolor: 'background.paper', border: '1px dashed grey',  overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 4,}}>
            <List>
              {requeriments.map((value) =>
              (
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={value}
                    
                  />
                </ListItem>
              ))}
            </List>
          
        </Box>
      
      </div>
      </Root>
       </div>
      )
}
export default ReactNative;