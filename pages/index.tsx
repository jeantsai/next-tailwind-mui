// Roboto is the default font of MUI and the default typography configuration
// of MUI relies only on the 300, 400, 500, and 700 font weights.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from '@mui/material/styles';


export default function Home() {
  return (
      <Layout>
        <h1 className="text-3xl font-bold underline">Hello world</h1>
        <Stack direction="row" spacing={2}>
          <Button className="bg-red-500" color="secondary">Secondary</Button>
          <Button variant="contained" color="success" className="bg-blue-500">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>
        <div>
          <Slider defaultValue={30} />
          <Slider
              defaultValue={30}
              className="text-teal-600"
              slotProps={{ thumb: { className: 'rounded-sm' } }}
          />
        </div>
      </Layout>
  )
}
