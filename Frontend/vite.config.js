import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
  //get rid of the cors error
  proxy: {
    "/api":{
      target : "https://jobhive-wpde.onrender.com",
      changeOrigin: true,
      secure:false,
    }
  }
  }
})
