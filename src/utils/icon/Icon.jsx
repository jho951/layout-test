const primaryColor = "002f80";

const normalizeColor = (color) => color.replace("#", "") || primaryColor;

const generateSvg = (icon, color) => {
  const colorTemp = normalizeColor(color);

  const iconsMap = {
    favicon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="40" fill="#${colorTemp}" />
      </svg>
    `,
    logo: `
         <svg
          xmlns='http://www.w3.org/2000/svg'
          width='80'
          height='80'
          version='1.0'
          viewBox='0 0 225 225'>
          <path
            fill="white"
            stroke='white'
            d='M121.3 24c-1.2.5-2.7 1.9-3.3 3.1-.7 1.2-5.7 31.2-11.1 66.8-5.4 35.5-11.1 72.5-12.6 82.1-1.5 9.9-2.3 18.7-2 20.2 1.5 5.8 11 7.3 14.3 2.3 1-1.5 5-25.2 11.5-67.2 5.4-35.6 11.1-72.7 12.6-82.3 1.5-9.9 2.3-18.7 2-20.2-.4-1.6-2-3.4-3.7-4.3-3.3-1.7-4.5-1.8-7.7-.5zM56.8 50.1C53.2 52.2 1 108.2.4 110.6c-.4 1.4-.2 3.6.4 4.9 1.5 3.3 54 58.4 56.9 59.8 5.2 2.3 12.1-3.4 10.9-9-.5-2.1-8.2-11-24.6-28.4l-24-25.3 3.3-3.6c1.8-1.9 11.4-12.1 21.2-22.5 9.9-10.5 19.2-20.4 20.7-22 1.5-1.7 3-4.5 3.4-6.2.5-2.7.1-3.7-2.4-6.3-3.1-3.1-6.3-3.7-9.4-1.9zM158.8 52c-2.5 2.6-2.9 3.6-2.4 6.3.4 1.7 1.9 4.5 3.4 6.2 1.5 1.6 10.8 11.5 20.7 22 9.8 10.4 19.4 20.6 21.2 22.5l3.3 3.6-24 25.4c-16.1 17.1-24.1 26.4-24.6 28.3-1.2 5.6 5.7 11.3 10.9 9 2.9-1.4 55.4-56.5 56.9-59.8.6-1.3.8-3.5.4-4.9-.6-2.5-53.1-58.7-56.6-60.6-3.2-1.7-6-1.1-9.2 2z'
          />
        </svg>
    `,
  };

  return iconsMap[icon] || "";
};

export default function Icon(icon, color = primaryColor) {
  const svgContent = generateSvg(icon, color);

  return svgContent
    ? `url("data:image/svg+xml,${encodeURIComponent(svgContent)}")`
    : "";
}
