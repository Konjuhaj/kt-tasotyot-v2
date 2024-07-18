import axios from "axios"
import { useEffect, useState } from "react";

const useFiles = () => {
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios.get("/api/files")
            .then((res) => {
                setFiles(res.data);
            })
            .catch((e) => {
                setErrors(e);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, [])

    return { files, isLoading, errors }
}

export default useFiles;