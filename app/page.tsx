'use client';
import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { weCanDo } from '@/constants/description_weCanDo';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <Grid
        container
        rowSpacing={5}
        sx={{
          padding: '20px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid size={12}>
          <Typography variant='h3' align='center'>
            Ремонт ОСББ
          </Typography>
          <Typography variant='h5' align='center'>
            Наша компания осуществляет услуги по ремонтам для ОСББ, так же мы
            работаем с физическими лицами
          </Typography>
        </Grid>

        <Grid size={12}>
          <Typography variant='h5' align='center'>
            Основные наши направления:
          </Typography>
        </Grid>

        {weCanDo.map((item) => (
          <Grid key={item.workName} size={12}>
            <Typography variant='h6' align='center'>
              {item.workName}
            </Typography>
            <List>
              <Grid
                container
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {item.works.map((work) => (
                  <Grid key={work} size={12}>
                    <ListItem
                      sx={{
                        // border: '1px solid #ccc',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        variant='body2'
                        align='center'
                        sx={
                          {
                            // border: '1px solid red'
                          }
                        }
                      >
                        {work}
                      </Typography>
                    </ListItem>
                  </Grid>
                ))}
              </Grid>
            </List>
          </Grid>
        ))}
      </Grid>
    )
  );
}
