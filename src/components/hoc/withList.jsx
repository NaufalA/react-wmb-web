import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Container} from "../containers/index.js";
import {Button, PaginationControl} from "../buttons/index.js";

export default function withList(ListComponent, options) {
    return () => {
        const {getDataAction, dataSelector, loadingSelector, paginated, label, addPath} =
            options;

        const navigate = useNavigate();
        const [searchParams, setSearchParams] = useSearchParams();

        const isLoading = useSelector(loadingSelector);

        const pageData = useSelector((state) => dataSelector(state));
        const {
            data,
            count,
            totalPages,
            totalCount,
            page: statePage,
            size: stateSize,
        } = pageData;
        const [page, setPage] = useState(
            !paginated ? 0 : searchParams.get("page") ? Number(searchParams.get("page")) : statePage
        );
        const [size, setSize] = useState(
            !paginated ? 0 : searchParams.get("size") ? Number(searchParams.get("size")) : stateSize
        );

        const changePage = (newPage) => {
            setPage(newPage);
            setShouldFetch(true);
        };

        const changeSize = (newSize) => {
            setSize(newSize);
            setShouldFetch(true);
        };

        const [shouldFetch, setShouldFetch] = useState(true);

        const dispatch = useDispatch();
        useEffect(() => {
            if (shouldFetch) {
                setShouldFetch(false);
                setSearchParams({page, size});
                dispatch(getDataAction(page, size));
            }
        }, [
            setSearchParams,
            dispatch,
            getDataAction,
            dataSelector,
            page,
            size,
            shouldFetch,
        ]);
        return (
            <Container className="flex flex-col items-stretch gap-4">
                <h1>{label} List</h1>
                <Button
                    onClick={() => navigate(addPath)}
                    disabled={isLoading}
                    className="self-start"
                >
                    Add {label}
                </Button>
                {data.length === 0 ? (
                    <h1>Data Is Empty</h1>
                ) : (
                    <>
                        <ListComponent
                            data={data}
                            navigate={navigate}
                            onDelete={() => setShouldFetch(true)}
                        />
                        {paginated && (
                            <PaginationControl
                                page={page}
                                size={size}
                                count={count}
                                totalPages={totalPages}
                                totalCount={totalCount}
                                onChangePage={changePage}
                                onChangeSize={changeSize}
                                disabled={isLoading}
                            />
                        )}
                    </>
                )}
            </Container>
        );
    };
}