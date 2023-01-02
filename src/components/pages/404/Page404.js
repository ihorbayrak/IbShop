import ErrorMessage from '../../errorMessage/ErrorMessage';

const Page404 = () => {
    return (
        <>
            <h2 className='title title_center'>Oops, there is no existing page</h2>
            <ErrorMessage />
        </>
    );
};

export default Page404;
