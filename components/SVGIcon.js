import css from 'styled-jsx/css'

const { className, styles } = css.resolve`

`

export default function SVGIcon(props) {

    const { variant } = props

    const instagram = (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3125 8.01367C11.9375 8.01367 8.45117 11.5684 8.45117 15.875C8.45117 20.25 11.9375 23.7363 16.3125 23.7363C20.6191 23.7363 24.1738 20.25 24.1738 15.875C24.1738 11.5684 20.6191 8.01367 16.3125 8.01367ZM16.3125 21.002C13.5098 21.002 11.1855 18.7461 11.1855 15.875C11.1855 13.0723 13.4414 10.8164 16.3125 10.8164C19.1152 10.8164 21.3711 13.0723 21.3711 15.875C21.3711 18.7461 19.1152 21.002 16.3125 21.002ZM26.293 7.74023C26.293 6.71484 25.4727 5.89453 24.4473 5.89453C23.4219 5.89453 22.6016 6.71484 22.6016 7.74023C22.6016 8.76562 23.4219 9.58594 24.4473 9.58594C25.4727 9.58594 26.293 8.76562 26.293 7.74023ZM31.4883 9.58594C31.3516 7.125 30.8047 4.9375 29.0273 3.16016C27.25 1.38281 25.0625 0.835938 22.6016 0.699219C20.0723 0.5625 12.4844 0.5625 9.95508 0.699219C7.49414 0.835938 5.375 1.38281 3.5293 3.16016C1.75195 4.9375 1.20508 7.125 1.06836 9.58594C0.931641 12.1152 0.931641 19.7031 1.06836 22.2324C1.20508 24.6934 1.75195 26.8125 3.5293 28.6582C5.375 30.4355 7.49414 30.9824 9.95508 31.1191C12.4844 31.2559 20.0723 31.2559 22.6016 31.1191C25.0625 30.9824 27.25 30.4355 29.0273 28.6582C30.8047 26.8125 31.3516 24.6934 31.4883 22.2324C31.625 19.7031 31.625 12.1152 31.4883 9.58594ZM28.207 24.8984C27.7285 26.2656 26.6348 27.291 25.3359 27.8379C23.2852 28.6582 18.5 28.4531 16.3125 28.4531C14.0566 28.4531 9.27148 28.6582 7.28906 27.8379C5.92188 27.291 4.89648 26.2656 4.34961 24.8984C3.5293 22.916 3.73438 18.1309 3.73438 15.875C3.73438 13.6875 3.5293 8.90234 4.34961 6.85156C4.89648 5.55273 5.92188 4.52734 7.28906 3.98047C9.27148 3.16016 14.0566 3.36523 16.3125 3.36523C18.5 3.36523 23.2852 3.16016 25.3359 3.98047C26.6348 4.45898 27.6602 5.55273 28.207 6.85156C29.0273 8.90234 28.8223 13.6875 28.8223 15.875C28.8223 18.1309 29.0273 22.916 28.207 24.8984Z" />
        </svg>
    )

    const i2 = (
        <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M16.3125 8.01367C11.9375 8.01367 8.45117 11.5684 8.45117 15.875C8.45117 20.25 11.9375 23.7363 16.3125 23.7363C20.6191 23.7363 24.1738 20.25 24.1738 15.875C24.1738 11.5684 20.6191 8.01367 16.3125 8.01367ZM16.3125 21.002C13.5098 21.002 11.1855 18.7461 11.1855 15.875C11.1855 13.0723 13.4414 10.8164 16.3125 10.8164C19.1152 10.8164 21.3711 13.0723 21.3711 15.875C21.3711 18.7461 19.1152 21.002 16.3125 21.002ZM26.293 7.74023C26.293 6.71484 25.4727 5.89453 24.4473 5.89453C23.4219 5.89453 22.6016 6.71484 22.6016 7.74023C22.6016 8.76562 23.4219 9.58594 24.4473 9.58594C25.4727 9.58594 26.293 8.76562 26.293 7.74023ZM31.4883 9.58594C31.3516 7.125 30.8047 4.9375 29.0273 3.16016C27.25 1.38281 25.0625 0.835938 22.6016 0.699219C20.0723 0.5625 12.4844 0.5625 9.95508 0.699219C7.49414 0.835938 5.375 1.38281 3.5293 3.16016C1.75195 4.9375 1.20508 7.125 1.06836 9.58594C0.931641 12.1152 0.931641 19.7031 1.06836 22.2324C1.20508 24.6934 1.75195 26.8125 3.5293 28.6582C5.375 30.4355 7.49414 30.9824 9.95508 31.1191C12.4844 31.2559 20.0723 31.2559 
22.6016 31.1191C25.0625 30.9824 27.25 30.4355 29.0273 28.6582C30.8047 26.8125 31.3516 24.6934 31.4883 22.2324C31.625 19.7031 31.625 12.1152 31.4883 9.58594ZM28.207 24.8984C27.7285 26.2656 26.6348 27.291 25.3359 27.8379C23.2852 28.6582 18.5 28.4531 16.3125 28.4531C14.0566 28.4531 9.27148 28.6582 7.28906 27.8379C5.92188 27.291 4.89648 26.2656 4.34961 24.8984C3.5293 22.916 3.73438 18.1309 3.73438 15.875C3.73438 13.6875 3.5293 8.90234 4.34961 6.85156C4.89648 5.55273 5.92188 4.52734 7.28906 3.98047C9.27148 3.16016 14.0566 3.36523 16.3125 3.36523C18.5 3.36523 23.2852 3.16016 25.3359 3.98047C26.6348 4.45898 27.6602 5.55273 28.207 6.85156C29.0273 8.90234 28.8223 13.6875 28.8223 15.875C28.8223 18.1309 29.0273 22.916 28.207 24.8984Z"
      />
    </svg>
    )

    const twitter = (
        <svg className={className} width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.377 7.76562C32.7441 6.74023 33.9746 5.50977 34.9316 4.07422C33.7012 4.62109 32.2656 5.03125 30.8301 5.16797C32.334 4.2793 33.4277 2.91211 33.9746 1.20312C32.6074 2.02344 31.0352 2.63867 29.4629 2.98047C28.0957 1.54492 26.25 0.724609 24.1992 0.724609C20.2344 0.724609 17.0215 3.9375 17.0215 7.90234C17.0215 8.44922 17.0898 8.99609 17.2266 9.54297C11.2793 9.20117 5.94727 6.33008 2.39258 2.02344C1.77734 3.04883 1.43555 4.2793 1.43555 5.64648C1.43555 8.10742 2.66602 10.2949 4.64844 11.5938C3.48633 11.5254 2.32422 11.252 1.36719 10.7051V10.7734C1.36719 14.2598 3.82812 17.1309 7.10938 17.8145C6.5625 17.9512 5.87891 18.0879 5.26367 18.0879C4.78516 18.0879 4.375 18.0195 3.89648 17.9512C4.78516 20.8223 7.45117 22.873 10.5957 22.9414C8.13477 24.8555 5.05859 26.0176 1.70898 26.0176C1.09375 26.0176 0.546875 25.9492 0 25.8809C3.14453 27.9316 6.9043 29.0938 11.0059 29.0938C24.1992 29.0938 31.377 18.2246 31.377 8.72266C31.377 8.38086 31.377 8.10742 31.377 7.76562Z" />
        </svg>
    )
    
    const spotify = (
        <svg className={className} width="33" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9531 0.921875C7.58789 0.921875 0 8.57812 0 17.875C0 27.2402 7.58789 34.8281 16.9531 34.8281C26.25 34.8281 33.9062 27.2402 33.9062 17.875C33.9062 8.57812 26.25 0.921875 16.9531 0.921875ZM23.7891 25.873C23.5156 25.873 23.3105 25.8047 23.1055 25.668C18.7988 23.0703 13.877 23.002 8.95508 23.959C8.68164 24.0273 8.33984 24.1641 8.13477 24.1641C7.45117 24.1641 7.04102 23.6172 7.04102 23.0703C7.04102 22.3867 7.45117 22.0449 7.99805 21.9082C13.6035 20.6777 19.2773 20.8145 24.1992 23.6855C24.6094 23.959 24.8145 24.2324 24.8145 24.8477C24.8145 25.4629 24.3359 25.873 23.7891 25.873ZM25.6348 21.4297C25.293 21.4297 25.0195 21.2246 24.8145 21.1562C20.5078 18.627 14.1504 17.6016 8.47656 19.1055C8.13477 19.1738 7.99805 19.3105 7.65625 19.3105C6.97266 19.3105 6.35742 18.6953 6.35742 17.9434C6.35742 17.2598 6.69922 16.7812 7.38281 16.5762C9.29688 16.0293 11.2793 15.6191 14.082 15.6191C18.5254 15.6191 22.832 16.7129 26.1816 18.7637C26.7285 19.0371 27.002 19.5156 27.002 20.0625C26.9336 20.8145 26.3867 21.4297 25.6348 21.4297ZM27.7539 16.2344C27.4121 16.2344 27.207 16.0977 26.8652 15.9609C22.0117 13.0215 13.3301 12.3379 7.65625 13.9102C7.45117 13.9785 7.10938 14.1152 6.76758 14.1152C5.87891 14.1152 5.19531 13.3633 5.19531 12.4746C5.19531 11.5176 5.81055 11.0391 6.42578 10.834C8.81836 10.1504 11.4844 9.80859 14.4238 9.80859C19.4141 9.80859 24.6777 10.834 28.4375 13.0898C28.9844 13.3633 29.3262 13.7734 29.3262 14.5938C29.3262 15.5508 28.5742 16.2344 27.7539 16.2344Z"/>
        </svg>
    )
    const appleMusic = (
        <svg className={className} width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9805 18.0645C22.9805 15.3906 24.209 13.4395 26.5938 11.9219C25.2207 9.9707 23.1973 8.95898 20.5234 8.74219C17.9219 8.52539 15.1035 10.1875 14.0918 10.1875C13.0078 10.1875 10.5508 8.81445 8.59961 8.81445C4.55273 8.88672 0.289062 11.9941 0.289062 18.4258C0.289062 20.3047 0.578125 22.2559 1.30078 24.2793C2.24023 26.9531 5.56445 33.457 9.0332 33.3125C10.8398 33.3125 12.1406 32.0117 14.5254 32.0117C16.8379 32.0117 17.9941 33.3125 20.0176 33.3125C23.5586 33.3125 26.5938 27.3867 27.4609 24.7129C22.7637 22.4727 22.9805 18.209 22.9805 18.0645ZM18.9336 6.21289C20.8848 3.90039 20.668 1.73242 20.668 0.9375C18.9336 1.08203 16.9102 2.16602 15.7539 3.4668C14.4531 4.91211 13.7305 6.71875 13.875 8.66992C15.7539 8.81445 17.4883 7.875 18.9336 6.21289Z" />
        </svg>
    )
    const youtube = (
        <svg className={className} width="39" height="27" viewBox="0 0 39 27" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5293 4.91992C37.1191 3.2793 35.8203 1.98047 34.248 1.57031C31.3086 0.75 19.6875 0.75 19.6875 0.75C19.6875 0.75 7.99805 0.75 5.05859 1.57031C3.48633 1.98047 2.1875 3.2793 1.77734 4.91992C0.957031 7.79102 0.957031 13.9434 0.957031 13.9434C0.957031 13.9434 0.957031 20.0273 1.77734 22.9668C2.1875 24.6074 3.48633 25.8379 5.05859 26.248C7.99805 27 19.6875 27 19.6875 27C19.6875 27 31.3086 27 34.248 26.248C35.8203 25.8379 37.1191 24.6074 37.5293 22.9668C38.3496 20.0273 38.3496 13.9434 38.3496 13.9434C38.3496 13.9434 38.3496 7.79102 37.5293 4.91992ZM15.8594 19.4805V8.40625L25.5664 13.9434L15.8594 19.4805Z" />
        </svg>
    )
    const googlePlay = (
        <svg className={className} width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3125 14.6875L23.0625 10.9375L5.5 0.8125L19.3125 14.6875ZM1.9375 0C1.125 0.4375 0.5625 1.25 0.5625 2.25V29.8125C0.5625 30.8125 1.125 31.625 1.9375 32L17.9375 16L1.9375 0ZM28.5 14.125L24.8125 12L20.6875 16L24.8125 20.0625L28.5625 17.9375C29.6875 17.0625 29.6875 15 28.5 14.125ZM5.5 31.1875L23.0625 21.125L19.3125 17.375L5.5 31.1875Z" />
        </svg>
    )
    const rss = (
        <svg className={className} width="31" height="31" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.28 511.02">
            <path d="M401.49,511c-4.63-2.58-5.56-6.83-5.89-11.75-1.2-17.89-2-35.85-4.24-53.61-4.3-33.46-13.88-65.57-27.35-96.48a385.89,385.89,0,0,0-93.93-131.79A385.15,385.15,0,0,0,127,133.89a352.45,352.45,0,0,0-74.37-15.95c-13.88-1.36-27.83-2-41.77-2.77C2.58,114.7.13,112.42.12,104.3Q.11,57.66.12,11C.13,2.73,3-.1,11.21,0c92.1,1.11,177.84,24.91,256.73,72.56A500.47,500.47,0,0,1,406.25,196.13a498.53,498.53,0,0,1,80.06,151.18c9.55,29.27,16.75,59.11,20.14,89.75,1.85,16.82,2.77,33.75,4.14,50.63.15,1.79.46,3.58.69,5.36v13l-6,5Z"/>
            <path d="M237.81,511c-4.69-2.44-6-6.49-6.1-11.54-1-88.8-55.3-167.69-135.33-202.15a213.53,213.53,0,0,0-81.24-17.88C2.88,279.23-.17,277.88,0,264.07c.36-28.6.1-57.21.11-85.82,0-8.89,2.81-11.68,11.63-11.49,84.31,1.8,158.36,30.31,221.11,86.62,52.45,47.08,86.66,105.38,102.8,174.1a306,306,0,0,1,8.25,63.65,49,49,0,0,0,.48,8c1,5.5-.85,9.41-5.77,11.93Z"/>
            <path d="M68.14,511c-6.06-1.59-12.3-2.71-18.17-4.84A75.8,75.8,0,0,1,.31,428.5c2.84-33.38,28.27-61.62,61.25-68,42.65-8.27,84.29,21.65,89.62,64.38,5.24,42.09-22.82,79.05-64.79,85.34a12.42,12.42,0,0,0-2.28.81Z"/>
        </svg>
    )

    const globe = (
        <svg className={className} width="34" height="35" viewBox="0 0 34 35" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9531 0.921875C7.58789 0.921875 0 8.50977 0 17.875C0 27.2402 7.58789 34.8281 16.9531 34.8281C26.3184 34.8281 33.9062 27.2402 33.9062 17.875C33.9062 8.50977 26.3184 0.921875 16.9531 0.921875ZM30.1465 11.3125H24.4727C23.8574 8.30469 22.832 5.70703 21.5332 3.86133C25.293 5.16016 28.3691 7.82617 30.1465 11.3125ZM22.9688 17.875C22.9688 19.4473 22.832 20.9512 22.627 22.25H11.2109C11.0059 20.9512 10.9375 19.4473 10.9375 17.875C10.9375 16.3711 11.0059 14.8672 11.2109 13.5H22.627C22.832 14.8672 22.9688 16.3711 22.9688 17.875ZM16.9531 3.10938C18.7305 3.10938 21.123 6.18555 22.2852 11.3125H11.5527C12.7148 6.18555 15.1074 3.10938 16.9531 3.10938ZM12.3047 3.86133C11.0059 5.70703 9.98047 8.30469 9.36523 11.3125H3.69141C5.46875 7.82617 8.54492 5.16016 12.3047 3.86133ZM2.1875 17.875C2.1875 16.3711 2.39258 14.9355 2.80273 13.5H9.02344C8.81836 14.9355 8.75 16.3711 8.75 17.875C8.75 19.4473 8.81836 20.8828 9.02344 22.25H2.80273C2.39258 20.8828 2.1875 19.4473 2.1875 17.875ZM3.69141 24.4375H9.36523C9.98047 27.5137 11.0059 30.1113 12.3047 31.957C8.54492 30.6582 5.46875 27.9922 3.69141 24.4375ZM16.9531 32.6406C15.1074 32.6406 12.7148 29.6328 11.5527 24.4375H22.2852C21.123 29.6328 18.7305 32.6406 16.9531 32.6406ZM21.5332 31.957C22.832 30.1113 23.8574 27.5137 24.4727 24.4375H30.1465C28.3691 27.9922 25.293 30.6582 21.5332 31.957ZM24.8145 22.25C25.0195 20.8828 25.1562 19.4473 25.1562 17.875C25.1562 16.3711 25.0195 14.9355 24.8145 13.5H31.0352C31.4453 14.9355 31.7188 16.3711 31.7188 17.875C31.7188 19.4473 31.4453 20.8828 31.0352 22.25H24.8145Z"/>
        </svg>
    )

    let mapping = {
        "instagram": <path d="M16.3125 8.01367C11.9375 8.01367 8.45117 11.5684 8.45117 15.875C8.45117 20.25 11.9375 23.7363 16.3125 23.7363C20.6191 23.7363 24.1738 20.25 24.1738 15.875C24.1738 11.5684 20.6191 8.01367 16.3125 8.01367ZM16.3125 21.002C13.5098 21.002 11.1855 18.7461 11.1855 15.875C11.1855 13.0723 13.4414 10.8164 16.3125 10.8164C19.1152 10.8164 21.3711 13.0723 21.3711 15.875C21.3711 18.7461 19.1152 21.002 16.3125 21.002ZM26.293 7.74023C26.293 6.71484 25.4727 5.89453 24.4473 5.89453C23.4219 5.89453 22.6016 6.71484 22.6016 7.74023C22.6016 8.76562 23.4219 9.58594 24.4473 9.58594C25.4727 9.58594 26.293 8.76562 26.293 7.74023ZM31.4883 9.58594C31.3516 7.125 30.8047 4.9375 29.0273 3.16016C27.25 1.38281 25.0625 0.835938 22.6016 0.699219C20.0723 0.5625 12.4844 0.5625 9.95508 0.699219C7.49414 0.835938 5.375 1.38281 3.5293 3.16016C1.75195 4.9375 1.20508 7.125 1.06836 9.58594C0.931641 12.1152 0.931641 19.7031 1.06836 22.2324C1.20508 24.6934 1.75195 26.8125 3.5293 28.6582C5.375 30.4355 7.49414 30.9824 9.95508 31.1191C12.4844 31.2559 20.0723 31.2559 22.6016 31.1191C25.0625 30.9824 27.25 30.4355 29.0273 28.6582C30.8047 26.8125 31.3516 24.6934 31.4883 22.2324C31.625 19.7031 31.625 12.1152 31.4883 9.58594ZM28.207 24.8984C27.7285 26.2656 26.6348 27.291 25.3359 27.8379C23.2852 28.6582 18.5 28.4531 16.3125 28.4531C14.0566 28.4531 9.27148 28.6582 7.28906 27.8379C5.92188 27.291 4.89648 26.2656 4.34961 24.8984C3.5293 22.916 3.73438 18.1309 3.73438 15.875C3.73438 13.6875 3.5293 8.90234 4.34961 6.85156C4.89648 5.55273 5.92188 4.52734 7.28906 3.98047C9.27148 3.16016 14.0566 3.36523 16.3125 3.36523C18.5 3.36523 23.2852 3.16016 25.3359 3.98047C26.6348 4.45898 27.6602 5.55273 28.207 6.85156C29.0273 8.90234 28.8223 13.6875 28.8223 15.875C28.8223 18.1309 29.0273 22.916 28.207 24.8984Z"/>,
        "twitter": <path d="M31.377 7.76562C32.7441 6.74023 33.9746 5.50977 34.9316 4.07422C33.7012 4.62109 32.2656 5.03125 30.8301 5.16797C32.334 4.2793 33.4277 2.91211 33.9746 1.20312C32.6074 2.02344 31.0352 2.63867 29.4629 2.98047C28.0957 1.54492 26.25 0.724609 24.1992 0.724609C20.2344 0.724609 17.0215 3.9375 17.0215 7.90234C17.0215 8.44922 17.0898 8.99609 17.2266 9.54297C11.2793 9.20117 5.94727 6.33008 2.39258 2.02344C1.77734 3.04883 1.43555 4.2793 1.43555 5.64648C1.43555 8.10742 2.66602 10.2949 4.64844 11.5938C3.48633 11.5254 2.32422 11.252 1.36719 10.7051V10.7734C1.36719 14.2598 3.82812 17.1309 7.10938 17.8145C6.5625 17.9512 5.87891 18.0879 5.26367 18.0879C4.78516 18.0879 4.375 18.0195 3.89648 17.9512C4.78516 20.8223 7.45117 22.873 10.5957 22.9414C8.13477 24.8555 5.05859 26.0176 1.70898 26.0176C1.09375 26.0176 0.546875 25.9492 0 25.8809C3.14453 27.9316 6.9043 29.0938 11.0059 29.0938C24.1992 29.0938 31.377 18.2246 31.377 8.72266C31.377 8.38086 31.377 8.10742 31.377 7.76562Z"/>,
        "youtube": <path d="M37.5293 4.91992C37.1191 3.2793 35.8203 1.98047 34.248 1.57031C31.3086 0.75 19.6875 0.75 19.6875 0.75C19.6875 0.75 7.99805 0.75 5.05859 1.57031C3.48633 1.98047 2.1875 3.2793 1.77734 4.91992C0.957031 7.79102 0.957031 13.9434 0.957031 13.9434C0.957031 13.9434 0.957031 20.0273 1.77734 22.9668C2.1875 24.6074 3.48633 25.8379 5.05859 26.248C7.99805 27 19.6875 27 19.6875 27C19.6875 27 31.3086 27 34.248 26.248C35.8203 25.8379 37.1191 24.6074 37.5293 22.9668C38.3496 20.0273 38.3496 13.9434 38.3496 13.9434C38.3496 13.9434 38.3496 7.79102 37.5293 4.91992ZM15.8594 19.4805V8.40625L25.5664 13.9434L15.8594 19.4805Z"/>,
        "rss": (<><path d="M401.49,511c-4.63-2.58-5.56-6.83-5.89-11.75-1.2-17.89-2-35.85-4.24-53.61-4.3-33.46-13.88-65.57-27.35-96.48a385.89,385.89,0,0,0-93.93-131.79A385.15,385.15,0,0,0,127,133.89a352.45,352.45,0,0,0-74.37-15.95c-13.88-1.36-27.83-2-41.77-2.77C2.58,114.7.13,112.42.12,104.3Q.11,57.66.12,11C.13,2.73,3-.1,11.21,0c92.1,1.11,177.84,24.91,256.73,72.56A500.47,500.47,0,0,1,406.25,196.13a498.53,498.53,0,0,1,80.06,151.18c9.55,29.27,16.75,59.11,20.14,89.75,1.85,16.82,2.77,33.75,4.14,50.63.15,1.79.46,3.58.69,5.36v13l-6,5Z"/><path d="M237.81,511c-4.69-2.44-6-6.49-6.1-11.54-1-88.8-55.3-167.69-135.33-202.15a213.53,213.53,0,0,0-81.24-17.88C2.88,279.23-.17,277.88,0,264.07c.36-28.6.1-57.21.11-85.82,0-8.89,2.81-11.68,11.63-11.49,84.31,1.8,158.36,30.31,221.11,86.62,52.45,47.08,86.66,105.38,102.8,174.1a306,306,0,0,1,8.25,63.65,49,49,0,0,0,.48,8c1,5.5-.85,9.41-5.77,11.93Z"/><path d="M68.14,511c-6.06-1.59-12.3-2.71-18.17-4.84A75.8,75.8,0,0,1,.31,428.5c2.84-33.38,28.27-61.62,61.25-68,42.65-8.27,84.29,21.65,89.62,64.38,5.24,42.09-22.82,79.05-64.79,85.34a12.42,12.42,0,0,0-2.28.81Z"/></>),
        "globe": <path d="M16.9531 0.921875C7.58789 0.921875 0 8.50977 0 17.875C0 27.2402 7.58789 34.8281 16.9531 34.8281C26.3184 34.8281 33.9062 27.2402 33.9062 17.875C33.9062 8.50977 26.3184 0.921875 16.9531 0.921875ZM30.1465 11.3125H24.4727C23.8574 8.30469 22.832 5.70703 21.5332 3.86133C25.293 5.16016 28.3691 7.82617 30.1465 11.3125ZM22.9688 17.875C22.9688 19.4473 22.832 20.9512 22.627 22.25H11.2109C11.0059 20.9512 10.9375 19.4473 10.9375 17.875C10.9375 16.3711 11.0059 14.8672 11.2109 13.5H22.627C22.832 14.8672 22.9688 16.3711 22.9688 17.875ZM16.9531 3.10938C18.7305 3.10938 21.123 6.18555 22.2852 11.3125H11.5527C12.7148 6.18555 15.1074 3.10938 16.9531 3.10938ZM12.3047 3.86133C11.0059 5.70703 9.98047 8.30469 9.36523 11.3125H3.69141C5.46875 7.82617 8.54492 5.16016 12.3047 3.86133ZM2.1875 17.875C2.1875 16.3711 2.39258 14.9355 2.80273 13.5H9.02344C8.81836 14.9355 8.75 16.3711 8.75 17.875C8.75 19.4473 8.81836 20.8828 9.02344 22.25H2.80273C2.39258 20.8828 2.1875 19.4473 2.1875 17.875ZM3.69141 24.4375H9.36523C9.98047 27.5137 11.0059 30.1113 12.3047 31.957C8.54492 30.6582 5.46875 27.9922 3.69141 24.4375ZM16.9531 32.6406C15.1074 32.6406 12.7148 29.6328 11.5527 24.4375H22.2852C21.123 29.6328 18.7305 32.6406 16.9531 32.6406ZM21.5332 31.957C22.832 30.1113 23.8574 27.5137 24.4727 24.4375H30.1465C28.3691 27.9922 25.293 30.6582 21.5332 31.957ZM24.8145 22.25C25.0195 20.8828 25.1562 19.4473 25.1562 17.875C25.1562 16.3711 25.0195 14.9355 24.8145 13.5H31.0352C31.4453 14.9355 31.7188 16.3711 31.7188 17.875C31.7188 19.4473 31.4453 20.8828 31.0352 22.25H24.8145Z"/>,
        "googlePlay": <path d="M19.3125 14.6875L23.0625 10.9375L5.5 0.8125L19.3125 14.6875ZM1.9375 0C1.125 0.4375 0.5625 1.25 0.5625 2.25V29.8125C0.5625 30.8125 1.125 31.625 1.9375 32L17.9375 16L1.9375 0ZM28.5 14.125L24.8125 12L20.6875 16L24.8125 20.0625L28.5625 17.9375C29.6875 17.0625 29.6875 15 28.5 14.125ZM5.5 31.1875L23.0625 21.125L19.3125 17.375L5.5 31.1875Z"/>,
        "appleMusic": ``,
        "spotify": <path d="M16.9531 0.921875C7.58789 0.921875 0 8.57812 0 17.875C0 27.2402 7.58789 34.8281 16.9531 34.8281C26.25 34.8281 33.9062 27.2402 33.9062 17.875C33.9062 8.57812 26.25 0.921875 16.9531 0.921875ZM23.7891 25.873C23.5156 25.873 23.3105 25.8047 23.1055 25.668C18.7988 23.0703 13.877 23.002 8.95508 23.959C8.68164 24.0273 8.33984 24.1641 8.13477 24.1641C7.45117 24.1641 7.04102 23.6172 7.04102 23.0703C7.04102 22.3867 7.45117 22.0449 7.99805 21.9082C13.6035 20.6777 19.2773 20.8145 24.1992 23.6855C24.6094 23.959 24.8145 24.2324 24.8145 24.8477C24.8145 25.4629 24.3359 25.873 23.7891 25.873ZM25.6348 21.4297C25.293 21.4297 25.0195 21.2246 24.8145 21.1562C20.5078 18.627 14.1504 17.6016 8.47656 19.1055C8.13477 19.1738 7.99805 19.3105 7.65625 19.3105C6.97266 19.3105 6.35742 18.6953 6.35742 17.9434C6.35742 17.2598 6.69922 16.7812 7.38281 16.5762C9.29688 16.0293 11.2793 15.6191 14.082 15.6191C18.5254 15.6191 22.832 16.7129 26.1816 18.7637C26.7285 19.0371 27.002 19.5156 27.002 20.0625C26.9336 20.8145 26.3867 21.4297 25.6348 21.4297ZM27.7539 16.2344C27.4121 16.2344 27.207 16.0977 26.8652 15.9609C22.0117 13.0215 13.3301 12.3379 7.65625 13.9102C7.45117 13.9785 7.10938 14.1152 6.76758 14.1152C5.87891 14.1152 5.19531 13.3633 5.19531 12.4746C5.19531 11.5176 5.81055 11.0391 6.42578 10.834C8.81836 10.1504 11.4844 9.80859 14.4238 9.80859C19.4141 9.80859 24.6777 10.834 28.4375 13.0898C28.9844 13.3633 29.3262 13.7734 29.3262 14.5938C29.3262 15.5508 28.5742 16.2344 27.7539 16.2344Z"/>,
    }

    let selected = mapping[variant]

    return (
        <>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
            >
                {/* {selected.paths.map( (path, index) => {
                    return (<path d={path}/>)
                })} */}
                {selected}
            </svg>
            {styles}
        </>
    )
}