import { useState } from 'react';
import { uploadFile } from "../../../utils/firebaseConfig"



const Upload = () => {


    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await uploadFile(file);
        } catch (error) {
            console.error(error)
            alert("Fallo interno intente mas tarde")
        }


    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="file"
                name=''
                id=''
                onChange={(e) => setFile(e.target.files[0])} />

            <button>
                uplaod
            </button>
        </form>

    );
};

export default Upload;