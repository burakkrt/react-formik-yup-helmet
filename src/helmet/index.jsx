import {HelmetProvider, Helmet} from "react-helmet-async";

const helmetContext = {
    title: 'React Formik',
    description: 'In React, it is a simple application that we use additional package formics that we can manage our form elements and react-icons for icons and finally react-helment packages for SEO operations.',
    keywords: 'React, Vite, Formik, react-classnames, react-helmet, react-icons',
    author: 'https://github.com/burakkrt'
};

export default function CustomHelmetProvider({children}) {

    return (
        <HelmetProvider context={helmetContext}>
            {children}
        </HelmetProvider>
    );
}

export const CustomHelmet = ({title, description}) => {
    return (
        <Helmet>
            <title>{title || helmetContext.title}</title>
            <meta charSet="UTF-8"/>
            <meta name="description" content={description || helmetContext.description}/>
            <meta name="keywords" content={helmetContext.keywords}/>
            <meta name="author" content={helmetContext.author}/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <meta name="robots" content="noindex,follow"/>
        </Helmet>
    )
}