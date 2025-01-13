export const ICONS = {
  favicon: (color) =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#${color}" />
    </svg>`,
  logo: (color) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 225 225">
      <path fill="#${color}" stroke="#${color}" d="M121.3 24c-1.2.5-2.7 1.9-3.3 3.1-.7 1.2-5.7 31.2-11.1 66.8-5.4 35.5-11.1 72.5-12.6 82.1-1.5 9.9-2.3 18.7-2 20.2 1.5 5.8 11 7.3 14.3 2.3 1-1.5 5-25.2 11.5-67.2 5.4-35.6 11.1-72.7 12.6-82.3 1.5-9.9 2.3-18.7 2-20.2-.4-1.6-2-3.4-3.7-4.3-3.3-1.7-4.5-1.8-7.7-.5zM56.8 50.1C53.2 52.2 1 108.2.4 110.6c-.4 1.4-.2 3.6.4 4.9 1.5 3.3 54 58.4 56.9 59.8 5.2 2.3 12.1-3.4 10.9-9-.5-2.1-8.2-11-24.6-28.4l-24-25.3 3.3-3.6c1.8-1.9 11.4-12.1 21.2-22.5 9.9-10.5 19.2-20.4 20.7-22 1.5-1.7 3-4.5 3.4-6.2.5-2.7.1-3.7-2.4-6.3-3.1-3.1-6.3-3.7-9.4-1.9zM158.8 52c-2.5 2.6-2.9 3.6-2.4 6.3.4 1.7 1.9 4.5 3.4 6.2 1.5 1.6 10.8 11.5 20.7 22 9.8 10.4 19.4 20.6 21.2 22.5l3.3 3.6-24 25.4c-16.1 17.1-24.1 26.4-24.6 28.3-1.2 5.6 5.7 11.3 10.9 9 2.9-1.4 55.4-56.5 56.9-59.8.6-1.3.8-3.5.4-4.9-.6-2.5-53.1-58.7-56.6-60.6-3.2-1.7-6-1.1-9.2 2z'/>
    </svg>`,
  cancel: (color) =>
    `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 32 32' fill="none">
        <path id='Vector' d='M25.3337 8.54699L23.4537 6.66699L16.0003 14.1203L8.54699 6.66699L6.66699 8.54699L14.1203 16.0003L6.66699 23.4537L8.54699 25.3337L16.0003 17.8803L23.4537 25.3337L25.3337 23.4537L17.8803 16.0003L25.3337 8.54699Z' fill="#${color}"/>
    </svg>`,
  close: (color) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="866" height="650"><path d="M0 0h866v650H0V0z" fill="#FEFEFE"/>
        <path  d="m423.32 95.762 2.586-.03c18.38-.169 36.131-.095 54.094 4.268l3.101.715C513.666 107.862 542.78 120.177 568 139l1.846 1.375c50.837 38.206 82.742 93.162 91.795 155.963 7.69 56.963-7.819 118.8-42.641 164.662-2.904 3.755-5.914 7.393-9 11a5249.98 5249.98 0 0 0-2.945 3.504C598.422 485.738 589.495 494.64 579 503c-1.027.851-2.053 1.704-3.078 2.559C545.215 530.839 507.012 546.317 468 553l-2.176.39c-55.455 9.46-115.994-6.53-162.012-37.827A346.021 346.021 0 0 1 299 512l-3.188-2.383c-8.574-6.518-16.479-13.637-24.235-21.103a355.967 355.967 0 0 0-3.913-3.69C261.38 478.835 256.237 471.895 251 465l-2.094-2.715C234.617 443.282 224.238 422.213 216 400l-.754-2.028c-8.444-23.295-11.672-48.978-11.559-73.66l.004-2.374c.034-11.788.641-23.248 2.903-34.848.38-1.951.705-3.913 1.027-5.875C212.952 250.783 225.917 220.06 244 195l2.11-2.938c13.096-17.834 28.173-34.7 45.89-48.062l1.645-1.27c36.712-28.318 83.037-46.521 129.675-46.968z" fill="#${color}"/>
        <path d="M519 211c4.005 1.604 6.677 4.421 9.64 7.445l1.598 1.606c1.675 1.687 3.344 3.38 5.012 5.074l3.414 3.441c2.784 2.806 5.562 5.619 8.336 8.434-4.657 5.639-9.684 10.805-14.877 15.952a2265.474 2265.474 0 0 0-4.427 4.403 9088.681 9088.681 0 0 1-9.384 9.332c-3.64 3.617-7.278 7.235-10.913 10.858-1.449 1.442-2.9 2.881-4.352 4.32l-2.67 2.661-2.348 2.332c-2.063 2.084-2.063 2.084-3.678 4.422L493 293h-2l-1 3a140.394 140.394 0 0 1-5 5l-2.679 2.679L462 324c1.383 3.117 2.976 5.216 5.398 7.605l2.13 2.116 2.334 2.289 2.459 2.435c1.762 1.745 3.526 3.487 5.292 5.227 2.79 2.751 5.574 5.51 8.355 8.271 7.907 7.85 15.824 15.689 23.756 23.514 4.85 4.785 9.687 9.583 14.518 14.388 1.846 1.832 3.698 3.66 5.554 5.483 2.588 2.543 5.16 5.1 7.73 7.662l2.353 2.29 2.104 2.115 1.85 1.828C547 411 547 411 546.83 413.059c-1.333 3.113-3.729 5.245-6.108 7.582l-1.596 1.597a735.396 735.396 0 0 1-3.346 3.318c-1.718 1.693-3.42 3.4-5.123 5.108a3061.573 3061.573 0 0 1-3.248 3.227l-1.55 1.552C522.231 439 522.231 439 520 439a166.639 166.639 0 0 1-3.648-4.352c-2.8-3.413-5.932-6.307-9.352-9.086-2.561-2.187-4.532-4.385-6.627-7-1.462-1.663-3.01-3.016-4.709-4.435-6.282-5.436-12.056-11.396-17.914-17.28l-3.8-3.803c-3.31-3.314-6.616-6.63-9.922-9.948-3.384-3.394-6.77-6.785-10.157-10.176-6.626-6.637-13.25-13.278-19.871-19.92-5.248 4.389-10.151 9.004-14.98 13.848l-2.229 2.225a4142.584 4142.584 0 0 0-4.626 4.631c-2.353 2.359-4.71 4.711-7.07 7.064l-4.513 4.517-2.125 2.119C395.08 390.797 391.925 394.2 389 398c-3.314 3.493-6.837 6.611-10.547 9.668-1.58 1.29-1.58 1.29-2.453 3.332h-2l-.688 1.688c-1.68 2.962-3.876 4.932-6.312 7.312l-2.404 2.404L347 440c-6.181-5.104-11.798-10.683-17.438-16.375l-2.794-2.809c-2.259-2.27-4.514-4.542-6.768-6.816 1.318-2.915 2.733-4.98 4.998-7.232l1.861-1.865 2.037-2.01 2.15-2.145c2.344-2.339 4.696-4.67 7.048-7.002 1.63-1.623 3.258-3.247 4.887-4.871 4.289-4.276 8.584-8.546 12.88-12.815 6.878-6.835 13.75-13.677 20.618-20.522 2.403-2.393 4.81-4.782 7.216-7.17l4.409-4.39 2.037-2.016 1.86-1.857 1.618-1.607c1.6-1.657 1.6-1.657 3.381-4.498h2l.75-1.75c1.417-2.55 3.126-4.268 5.25-6.25-1.4-3.174-3.052-5.289-5.52-7.715l-2.1-2.08-2.192-2.142-2.159-2.131c-1.339-1.322-2.68-2.642-4.024-3.96a424.188 424.188 0 0 1-4.284-4.28c-2.69-2.661-5.454-5.205-8.263-7.74-6.454-5.874-12.632-11.998-18.786-18.182l-3.379-3.384a9801.21 9801.21 0 0 1-8.759-8.783c-2.995-3.006-5.993-6.008-8.991-9.011-5.85-5.861-11.698-11.726-17.543-17.592 3.512-4.177 7.086-8.21 10.96-12.059l2.677-2.666 2.738-2.713 2.809-2.794c2.27-2.259 4.542-4.514 6.816-6.768 5.916 4.18 11.07 8.791 16.16 13.933l2.339 2.338c2.526 2.527 5.045 5.062 7.563 7.596l5.28 5.288c4.614 4.622 9.222 9.25 13.829 13.878 4.708 4.73 9.423 9.454 14.138 14.178A34311.53 34311.53 0 0 1 432 297c3.454-1.632 5.708-3.465 8.414-6.187l2.62-2.62 2.806-2.838 2.906-2.914c2.55-2.557 5.092-5.12 7.634-7.684 2.575-2.595 5.155-5.184 7.735-7.775 4.551-4.57 9.098-9.145 13.64-13.724a737.554 737.554 0 0 1 4.877-4.856c2.466-2.424 2.466-2.424 4.805-5.402 2.183-2.555 4.37-4.522 6.982-6.609 1.767-1.555 3.23-3.227 4.749-5.024 3.89-4.5 8.04-8.688 12.27-12.867l2.216-2.203c1.78-1.768 3.562-3.534 5.346-5.297z" fill="#FFFFFF"/>
        <path d="M350 382c0 4.199-2.21 6.123-5 9a246.62 246.62 0 0 1-6.098 5.355c-2.429 2.1-4.66 4.348-6.902 6.645l-2.27 2.203-2.48 2.422-2.36 2.29c-2.096 2.03-2.096 2.03-2.89 5.085l-2-1c1.28-2.81 2.607-4.854 4.797-7.024l1.699-1.698 1.824-1.794 1.875-1.866c1.972-1.96 3.95-3.914 5.93-5.868l4.02-3.992c3.28-3.258 6.566-6.51 9.855-9.758z" fill="#D4D4D4"/><path d="m598 485 2 1-9 9c0-3 0-3 1.531-4.824l1.969-1.863 1.969-1.887L598 485zm-10 9 2 1-5 6-2-2 5-5z" fill="#EAEAEA"/>
    </svg>`,
  gitHub: (color) =>
    `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 30 30'>
        <path fill='#${color}' d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
    </svg>`,
  eyeVisibleOff: (color) =>
    `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
      <path fill='#${color}' d='M8 3.983c2.527 0 4.78 1.42 5.88 3.667a6.43 6.43 0 0 1-1.606 2.08l.94.94a7.868 7.868 0 0 0 2.12-3.02c-1.154-2.927-4-5-7.334-5a7.9 7.9 0 0 0-2.426.38l1.1 1.1A6.74 6.74 0 0 1 8 3.983Zm-.713.76 1.38 1.38c.38.167.687.473.853.853l1.38 1.38c.054-.226.094-.466.094-.713A2.989 2.989 0 0 0 8 4.65c-.246 0-.48.033-.713.093ZM1.34 2.563 3.127 4.35a7.825 7.825 0 0 0-2.46 3.3c1.153 2.926 4 5 7.333 5a7.82 7.82 0 0 0 2.88-.547l2.28 2.28.94-.94L2.28 1.616l-.94.947Zm5 5 1.74 1.74c-.026.007-.053.013-.08.013-.92 0-1.666-.746-1.666-1.666 0-.034.006-.054.006-.087ZM4.074 5.296 5.24 6.463a3.004 3.004 0 0 0 3.94 3.947l.654.653c-.587.16-1.2.253-1.834.253A6.513 6.513 0 0 1 2.12 7.65a6.601 6.601 0 0 1 1.954-2.354Z'
      />
    </svg>`,
  eyeVisible: (color) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
        <path fill="#${color}" d="M8 4.333c2.527 0 4.78 1.42 5.88 3.667A6.513 6.513 0 0 1 8 11.667 6.513 6.513 0 0 1 2.12 8 6.513 6.513 0 0 1 8 4.333ZM8 3C4.667 3 1.82 5.073.667 8c1.153 2.927 4 5 7.333 5 3.334 0 6.18-2.073 7.334-5-1.154-2.927-4-5-7.334-5Zm0 3.333a1.667 1.667 0 1 1 0 3.335 1.667 1.667 0 0 1 0-3.335ZM8 5C6.347 5 5 6.347 5 8s1.347 3 3 3c1.654 0 3-1.347 3-3S9.654 5 8 5Z"/>
    </svg>`,
  cart: (color) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 6h15l-1.68 9H7.68L6 6zM6 6L5 3H1" />
        <circle cx="10" cy="20" r="2" />
        <circle cx="18" cy="20" r="2" />
    </svg>`,
  plus: (color) =>
    `<svg xmlns='http://www.w3.org/2000/svg' width="14" height="14" viewBox='0 0 13 13' fill='none'>
        <path fill="#${color}" fill-rule='evenodd' clip-rule='evenodd' d='M8.59567 6.09631V7.09631H12.5958V6.09631H8.59567ZM7.09575 8.59612L6.09575 8.59612L6.09575 12.5962L7.09575 12.5962L7.09575 8.59612ZM7.09575 0.596203L7.09575 4.59612L6.09575 4.59612L6.09575 0.596203L7.09575 0.596203ZM4.59567 6.09631L0.595756 6.09631L0.595756 7.09631L4.59567 7.09631L4.59567 6.09631Z' />
    </svg>`,
};
