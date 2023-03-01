import {useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Container} from "../containers/index.js";
import {Button, PaginationControl} from "../buttons/index.js";
import {useMutation, useQuery} from "react-query";

export default function withList(ListComponent, options) {
    return () => {
        const {listApi, deleteApi, listQueryKey, paginated, label, addPath} =
            options;

        const navigate = useNavigate();
        const [searchParams, setSearchParams] = useSearchParams();

        const [page, setPage] = useState(
            !paginated ? 0 : searchParams.get("page") ? Number(searchParams.get("page")) : 0
        );
        const [size, setSize] = useState(
            !paginated ? 0 : searchParams.get("size") ? Number(searchParams.get("size")) : 10
        );

        const listQuery = useQuery([listQueryKey, page, size], () =>listApi(page, size), {
            onSettled: () => {
                setSearchParams({page: page.toString(), size: size.toString()});
            },
            refetchOnMount: true,
            keepPreviousData: true
        });

        const list = listQuery.data;

        const changePage = (newPage) => {
            setPage(newPage);
        };

        const changeSize = (newSize) => {
            setSize(newSize);
        };

        const deleteMutation = useMutation(deleteApi);
        const onDelete = (item, confirmMessage, successMessage) => {
            if (window.confirm(confirmMessage)) {
                deleteMutation.mutate(item.id, {
                    onSuccess: () => {
                        window.alert(successMessage);
                        listQuery.refetch();
                    }
                });
            }
        }

        return (
            <Container className="flex flex-col items-stretch gap-4">
                <h1>{label} List</h1>
                <Button
                    onClick={() => navigate(addPath)}
                    disabled={listQuery.isLoading}
                    className="self-start bg-success"
                >
                    Add {label}
                </Button>
                {list?.data.length === 0 ? (
                    <h1>Data Is Empty</h1>
                ) : (
                    <>
                        <ListComponent
                            data={list?.data || []}
                            navigate={navigate}
                            onDelete={onDelete}
                        />
                    </>
                )}
                {paginated && (
                    <PaginationControl
                        page={page}
                        size={size}
                        count={list?.count}
                        totalPages={list?.totalPages}
                        totalCount={list?.totalCount}
                        onChangePage={changePage}
                        onChangeSize={changeSize}
                        disabled={listQuery.isLoading}
                    />
                )}
            </Container>
        );
    };
}