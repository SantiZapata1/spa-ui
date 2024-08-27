/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundColor: {
        "spa-purple": "#9F2C71",
        "spa-light-purple": "#F075AA",
      },
      fontSize: {
        vw: '0.9vw',
        "10xl": '10rem'
      },
      height:{
        "80vh": "80vh",
        "1/10": '10%',
        "12/100": '12%',
        "2/10": '20%',
        "3/10": '30%',
        "4/10": '40%',
        "5/10": '50%',
        "6/10": '60%',
        "7/10": '70%',
        "8/10": '80%',
        "9/10": '90%',
        "95/100": '95%',
      },
      width:{
        "1/10": '10%',
        "12/100": '12%',
        "2/10": '20%',
        "3/10": '30%',
        "4/10": '40%',
        "42/100": '42%',
        "5/10": '50%',
        "6/10": '60%',
        "7/10": '70%',
        "8/10": '80%',
        "9/10": '90%',
        "95/100": '95%',
      }
    },
  },
  plugins: [],
}

